const express = require("express");

const router = express.Router();
const mysqlConnection = require('../database');


//Ruta para mostrar todos los empleados registrados
router.get('/',(req,res)=>{
    
    mysqlConnection.query("select * from employees",(err,rows,field)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
    
});

router.get("/:id",(req,res)=>{
    const {id} = req.params;
    mysqlConnection.query("SELECT * FROM employees WHERE id = ?",[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

module.exports = router;