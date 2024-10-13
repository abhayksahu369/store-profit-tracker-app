const express=require("express");
const salesRouter=require("./routes/sales.route");
const { getIndianTime } = require("./utils/getIndianTime");
const { default: mongoose } = require("mongoose");
const app=express();

const connectDb=()=>{
    mongoose.connect("mongodb://localhost:27017/profitiq")
    console.log("database connected")
}

app.use(express.json());

app.use("/api/sales",salesRouter);

app.listen(5000,()=>{
    console.log("server started")
    connectDb()
})