let p=new Promise((f)=>{setTimeout(f,1000)});


p.then(()=>{console.log("1 second")});