const mongoose=require("mongoose");
const { getIndianTime } = require("../utils/getIndianTime");

const salesSchema=new mongoose.Schema({
    item:{
        required:true,
        type:String,
    },
    shopId:{
        type:Number,
        required:true,
    },
    salePrice:{
        required:true,
        type:Number,
    },
    costPrice:{
        required:true,
        type:Number,
    },
    time:{
        required:true,
        type:String,
        default:()=>getIndianTime(Date.now()).toISOString().split("T")[1]
    },
    date:{
        required:true,
        type:String,
        default:()=>getIndianTime(Date.now()).toISOString().split("T")[0]
    }
})

module.exports=mongoose.model("sales",salesSchema)