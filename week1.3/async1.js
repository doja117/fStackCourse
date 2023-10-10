function printSomething(){
    console.log("SOmething")
}
setTimeout(printSomething,1*1000);
function doSomething(){
let counter=1;
for(let i=0;i<1000_000000000;i+=1){
    counter+=1;
}
console.log(counter);
}
setTimeout(doSomething,1*1000);