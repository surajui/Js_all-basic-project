
function demo(){
    let tyre = document.getElementById('auto').value
    //  console.log(tyre);
    if(isNaN(tyre)){
        console.log(`Please enter number`)
        return false;
    } 
    else if(tyre == 2){
        console.log(`this is bike`);
    }
    else if(tyre == 4){
        console.log(`This is Jeep`);
    }
    else if(tyre == 3){
        console.log(`this is auto`);
    }
} 

