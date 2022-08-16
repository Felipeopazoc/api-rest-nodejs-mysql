const mysql = require("mysql");

//OBJETO DE CONEXION A MYSQL
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'company'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Base de datos conectada');
    }
});

module.exports = mysqlConnection;