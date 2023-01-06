const express = require("express")
const History = require("./history.model")
const app = express.Router();

app.get("/",(req,res)=>{
    res.send(200,"<h1>Welcome to the backend</h1>")
})
app.post("/add",async(req,res)=>{
    const {num1,num2,operator}=req.body
    const result=eval(`${num1}${operator}${num2}`).toString()
    let operationhistory=`${num1}${operator}${num2}=${result}`
     let history = await History.create({
            operationhistory
          })
    res.status(200).send(result)
})
app.post("/subtract",async(req,res)=>{
    const {num1,num2,operator}=req.body
    const result=eval(`${num1}${operator}${num2}`).toString()
    let operationhistory=`${num1}${operator}${num2}=${result}`
     let history = await History.create({
            operationhistory
          })
    res.status(200).send(result)
})
app.post("/multiply",async(req,res)=>{
    const {num1,num2,operator}=req.body
    const result=eval(`${num1}${operator}${num2}`).toString()
    let operationhistory=`${num1}${operator}${num2}=${result}`
     let history = await History.create({
            operationhistory
          })
    res.status(200).send(result)
})
app.post("/divide",async(req,res)=>{
    const {num1,num2,operator}=req.body
    const result=eval(`${num1}${operator}${num2}`).toString()
    let operationhistory=`${num1}${operator}${num2}=${result}`
     let history = await History.create({
            operationhistory
          })
    res.status(200).send(result)
})
app.get("/history",async(req,res)=>{
    let history = await History.find({}).sort({createdAt:"desc"}).limit(5)
    
    res.status(200).send(history)
    
})

module.exports = app;