import express from "express";
import { UsuarioRouter } from "./routes/usuario/usuario.route";
import { ValidarIdMiddleware } from "./shared/middlewares";
import { AvaliacaoRouter } from "./routes/avaliacao/avaliacao.route";

const app = express();

app.use(express.json());
app.use(ValidarIdMiddleware);
app.use('/usuarios', UsuarioRouter);
app.use('/avaliacao', AvaliacaoRouter)

export default app;

import {createPool} from 'mariadb'

const pool = createPool({
    host: 'Localhost', 
    user:'root', 
    password: 'Teste123@',
    database: 'alrn_progweb_bd_gabarito',
    connectionLimit: 5
});

pool.getConnection()
   .then(conn => {
     conn.query("SELECT * FROM usuario")
       .then((rows) => {
         console.log(rows); //[ {val: 1}, meta: ... ]
         //Table must have been created before 
         // " CREATE TABLE myTable (id int, val varchar(255)) "
         return conn.query("INSERT INTO usuario (nome, login, senha, situacao) values ('Hamurábi Araújo', 'hamurabi@gmail.com', 'senha123', 'Ativo')");
       })
       .then((res) => {
         console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
         conn.end();
       })
       .catch(err => {
         //handle error
         console.log(err); 
         conn.end();
       })
       
   }).catch(err => {
     //not connected
   });