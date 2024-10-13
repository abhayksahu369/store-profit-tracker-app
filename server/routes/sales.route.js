const router=require("express").Router()
const{addSale,editSale,deleteSale,getSalesbyDate}=require("../controllers/sales.controllers")


router.post("/addSale",addSale);
router.put("/editSale",editSale);
router.delete("/deleteSale",deleteSale);
router.get("/getSales/:date",getSalesbyDate);


module.exports=router;