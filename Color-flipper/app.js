const colors = ["green","red","yellow","orange","#f15025"];
const button = document.querySelector("#btn");
const color = document.querySelector('.color');
button.addEventListener('click',()=>{
    //get random number from 0-3
    const random = Math.floor(Math.random() * colors.length);
    color.textContent = colors[random]
    document.body.style.backgroundColor =colors[random];
})
