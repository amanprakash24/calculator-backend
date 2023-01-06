require("dotenv").config()
const connect = require("./config/db")
const express = require("express")
const cors = require("cors")
const operationroute=require("./apiroutes/operation.route")

const PORT = process.env.PORT||3030;

//Create port for Backend

const app = express();
app.use(express.json());
app.use(cors())
app.use("/" , operationroute);
app.listen(PORT , async () => {
    await connect();
    console.log(`Working at http://localhost:${PORT}`)
})
