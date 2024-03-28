
const http = require("http");
const fs = require("fs");
const a=http.createServer((req,res)=>{
    if(req.url=="/"){
        console.log("done /")
        
        res.end(`<h1>HEY I AM HOME PAGE</h1>`)
    }
    if(req.url=="/about"){
        res.end(fs.readFileSync("index.html","utf8"))
       
        
        console.log("done /about")
    }
    if(req.url=="/contact"){
        console.log("done /contact")
        
        res.end(`<h1>HEY I AM CONTACT PAGE</h1>`)
    }
    if(req.url=="/readme"){
        res.statusCode=404
        console.log("done /readme")
        
        res.end(`<h1>HEY Iwe AM RaaEADME PAGE</h1>`)
    }
   
})
a.listen(800);