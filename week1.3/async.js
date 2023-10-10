const fs=require('fs')

fs.readFile('./file.txt','utf-8',(err,data)=>{
    if (err){
        return;
    }
    console.log(data);
})

console.log("1")