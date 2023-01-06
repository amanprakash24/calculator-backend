const mongoose = require("mongoose")

const historySchema = new mongoose.Schema({
    operationhistory:{
        type : String,
        reqired:true,
       
    }
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

const History = mongoose.model( "history" , historySchema)


module.exports = History