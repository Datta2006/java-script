const url1="https://catfact.ninja/fact";
const get=async ()=> {
    console.log("h");
    let response1 = await fetch(url1);
    console.log(response1);
};
