const mongoose  = require("mongoose");


const connect = async () => {
    return mongoose.connect(process.env.DB_URL).then(()=>{console.log("connected with db")});

}



module.exports = connect;
