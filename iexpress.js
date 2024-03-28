const express=require("express")
const app=express();
const port=2000;
app.get("/",(req,res)=>{
    console.log("done")
    res.send("helloo world ")
})
app.listen(port,()=>{
    console.log("the port is:"+port)
})