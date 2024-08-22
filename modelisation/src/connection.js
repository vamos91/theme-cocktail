const mysql = require('mysql2')

const cnx = mysql.createConnection({
    user: 'root',
    password: 'acard',
    port: 3306,
    database: 'bar',
    host: 'localhost'
})
console.log('Vous êtes connecté à la DB')

module.exports = cnx