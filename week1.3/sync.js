var a=2
async function change(a){
for (let i=0;i<100_000_00_000;i++){
	a+=1;
}
console.log(a);

}
await change(a);
console.log(a);
