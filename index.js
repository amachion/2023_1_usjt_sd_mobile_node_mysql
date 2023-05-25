const express = require('express')
const app = express()
const mysql = require('mysql2')
app.use(express.json())

app.get('/medicos', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'bd_hospital',
        password: '1234'
    })

    connection.query('select * from tb_medico', (err, results, fields) => {
        res.send (results)
        //req.send (fields)
        res.send('ok')
    })
})

const porta = 3000
app.listen(porta, () => console.log(`servidor escutando a porta ${porta}`))

