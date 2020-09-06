//const vowelString = "surajsable";
//vowelString.match('^/aeiou/$');
function demo(){
    const vowelString =  document.getElementById('auto').value;
    // const resultString = '';
    const result = vowelString.match(/[aeiou]/ig);
    console.log(result);
    return result;
}
