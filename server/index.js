import express from "express"
import { PrismaClient } from '@prisma/client'

const app = express();


app.get('/register',(req,res)=>{
    res.send("hello")
})

const port = 8080;
app.listen(port , ()=>{
    console.log(port);
})

