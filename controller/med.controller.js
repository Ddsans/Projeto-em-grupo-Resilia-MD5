const pool = require('../database/index.js')
const medController = {

    getAll: async (req, res) => {
        try {

            const [rows, fields] = await pool.query("select * from remedios")

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)

        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from remedios where id = ?", [id])

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)

        }
    },
    create: async (req, res) => {
        try {
            const { nome, fabricante, quantidade, peso } = req.body
            const sql = "insert into remedios (nome,fabricante,quantidade,peso) values (?,?,?,?)"
            const [rows, fields] = await pool.query(sql, [nome, fabricante, quantidade, peso])

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })

        }
    },
    update: async (req, res) => {
        try {
            const { nome, fabricante, quantidade, peso } = req.body
            const { id } = req.params

            const sql = "update remedios set nome = ?, fabricante = ?, quantidade = ?, peso = ? where id = ? "
            const [rows, fields] = await pool.query(sql, [nome, fabricante, quantidade, peso,id])

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })

        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params

            const sql = "delete from remedios where id = ?"
            const [rows, fields] = await pool.query(sql, [id])

            res.json({
                data: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })

        }
    }

}

module.exports = medController;
