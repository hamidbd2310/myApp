
var fs=require('fs');

var http=require('http');

var express=require('express');

var multer=require('multer');


app=express();


app.get("/", function(req,res){
    res.end("This is Home Page");
})

app.get("/about",(req,res)=>{  
    res.end("This is About Page");
})

app.get("/contact",(req,res)=>{
    res.end("This is Contact Page")
})


//File Write

app.post("/file-Write",(req,res) =>{
fs.writeFile("demo.txt","hello world", (error)=>{
    if(error){
        res.end("File Write Error")
    }
    else{
        res.end("File Write Successfully")
    }
    
})
})


//Multer File Upload
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

var upload=multer({storage:storage}).single("file")

app.post("/file-Upload", (req, res) => {
  upload(req, res, (err) => {
      if(err){
          res.end("File Upload Error")
      }
      else{
          res.end("File Upload Successfully")
      }
  })
});

//

app.listen(5500, function(){
    console.log("server is running on port 5500");
});