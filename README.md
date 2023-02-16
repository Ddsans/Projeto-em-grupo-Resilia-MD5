# Projeto-em-grupo-Resilia-MD5
Projeto em Grupo proposto no módulo 5 do curso WebDev Full Stack Resilia.


## Como usar

Clone este repositório para sua máquina local.

- Instale as dependências necessárias através do seguinte comando no terminal:
```
- npm install
```
- Crie uma copia do nosso banco de dados em sua máquina, utilizer o script farmacia.sql para alimentação do banco:
```
- CREATE DATABASE farmacia
```
- Utilize um software de teste de API Clients para fazer as requisição HTTP:
``
  Software recomendados: insomnia ou postman
``
## Métodos de requisição HTTP Possíveis


| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **`GET`** | **/remedios** | Retorna todos os remedios. |
|  **`GET`** | **/remedios/id** | Retorna um remedios pelo ID. |
|  **`POST`** | **/remedios** | Cria um novo remedios.  |
|  **`PUT`** | **/remedios/id** | Altera os dados do remedios.
|  **`DELETE`** | **/remedios/id** | deteta o remedios.

## Exemplos de consultas. 

### Método GetALL

-- Retorna conjuntos de dados disponíveis

![GET ALL](https://user-images.githubusercontent.com/112680379/219302766-33e92577-07a5-4bf2-8870-d1cf5bc64ced.png)

### Método GetByID

-- Retorna dado pelo id referenciado

![GET BY ID](https://user-images.githubusercontent.com/112680379/219302773-d12f3c4b-5dfc-4d07-abb1-591bef5f2d5e.png)

### Método CREATE

--Cria um novo dado

![CREATE](https://user-images.githubusercontent.com/112680379/219302755-705bf944-ebb7-450b-8e5f-7b4d96e03c89.png)


### Método UPDATE

-- Atualiza um dado existente pelo id referenciado

![UPDATE](https://user-images.githubusercontent.com/112680379/219302778-c62e4b5c-4f43-4e3c-a784-94c380f4b688.png)

### Método DELETE

-- Excliur um dado pelo id referenciado

![DELETE](https://user-images.githubusercontent.com/112680379/219302764-58b6773f-3655-423f-8094-e06d60afbe28.png)





