function sleep(m){
    setTimeout(()=>{},m);
}
async function ssleep(){
    await sleep(5000)
}
ssleep();
console.log(2);
