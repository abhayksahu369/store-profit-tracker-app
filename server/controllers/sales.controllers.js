const Sale=require("../models/sales.model")
const { asyncHandler } = require("../utils/asyncHandler")

const addSale=asyncHandler(async(req,res)=>{
    const {item,salePrice,costPrice,shopId}=req.body;
    if(!(item&&salePrice&&costPrice&&shopId)){
        return res.status(400).json({success:false,message:"all fields are necessary"}) ;
    }
    const sale=new Sale({item,salePrice,costPrice,shopId});
    const savedSale=await sale.save();
    return res.status(200).json({success:true,message:"sale added successfully",sale:savedSale});
})

const editSale=asyncHandler(async(req,res)=>{
    const {item,salePrice,costPrice}=req.body;
    const {id}=req.params;
    const editSale=await Sale.findByIdAndUpdate(id,{item,salePrice,costPrice})
    return res.status(200).json({success:true,message:"sale edited successfully",sale:editSale});
})

const deleteSale=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const editSale=await Sale.findByIdAndDelete(id)
    return res.status(200).json({success:true,message:"sale deleted successfully"});
})

const getSalesbyDate=asyncHandler(async(req,res)=>{
    const {date}=req.params;
    const getSales=await Sale.find({date});
    return res.status(200).json({success:true,sales:getSales});
})
module.exports={addSale,editSale,deleteSale,getSalesbyDate};