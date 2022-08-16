const express = require("express");
const app = express();
const cors = require("cors");
//app.use(express.json);
app.use(cors());//Quita la seguridad para hacer peticiones http
app.use(require("./routes/employees"));

app.listen(4000,(req,res)=>{
    console.log("Servidor montado");
});
