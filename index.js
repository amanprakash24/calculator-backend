require("dotenv").config()

const express = require("express")
const cors = require("cors")


const PORT = process.env.PORT||3030;

//Create port for Backend

const app = express();
app.use(express.json());
app.use(cors())


app.listen(PORT , async () => {
    //await connect();
    console.log(`Working at http://localhost:${PORT}`)
})
