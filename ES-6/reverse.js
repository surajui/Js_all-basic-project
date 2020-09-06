function demo(){
    ////////////////////////// using forloop1 reverse string
    // let inputData = document.getElementById('first').value;
    // let newString = "";
    // for(let i=inputData.length-1;i >= 0;i--){
    //     newString += inputData[i];
    // }
    // document.getElementById('second').value = newString;

    ////////////////////////// using forloop2 reverse string

    // let inputData = document.getElementById('first').value;
    // let newString = "";
    // for(let i=0;i <= inputData.length -1; i++){
    //     newString = inputData[i]+newString;
    // }
    // document.getElementById('second').value = newString;

    let inputData = document.getElementById('first').value;
    let newString = "";
    for(let demo of inputData){
        newString = demo + newString;
    }
    document.getElementById('second').value = newString;
    //build in method 
    // let inputValue = document.getElementById('first').value;
    // let result = inputValue.split('').reverse().join('');
    // document.getElementById('second').value = result;
    // console.log(result);
}