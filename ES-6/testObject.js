const myObj = {
    name : "suraj",
    surname : "sable",
    village : "Dharmasagar"
}
function demo(checkProps){
    if(myObj.hasOwnProperty(checkProps)){
        return myObj[checkProps];
    }else{
        return "Not found"
    }
    // return "Change Me"; 
}
console.log(demo("name"));