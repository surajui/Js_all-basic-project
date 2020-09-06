var player1;
var player2;
var player3;
var player4;

dice1 = () =>{
     player1 = Math.floor(Math.random()*6 + 1);
    const player1Dice = `img/dice${player1}.png`;
    document.getElementById('check1').setAttribute('src',player1Dice);
    // const player2 = Math.floor(Math.random()*6 + 1);
    // const play2Dice = `img/dice${player2}.png`;
    // document.getElementById('check2').setAttribute('src',play2Dice);
    if(player1 > player2){
        document.querySelector('h1').innerHTML = `player1 won`;
    }
    else if(player1 > player3){
        document.querySelector('h1').innerHTML = `player1 won`;
        
    }
    else if(player1 > player4){
        document.querySelector('h1').innerHTML = `player1 won`; 
    }
    else{
        document.querySelector('h1').innerHTML = 'Draw';
    }
   }
dice2 = () =>{
    player2 = Math.floor(Math.random()*6 + 1);
    const player2Dice = `img/dice${player2}.png`;
    document.getElementById('check2').setAttribute('src',player2Dice);
}
dice3 = () =>{
    player3 = Math.floor(Math.random()*6 + 1);
    const player3Dice = `img/dice${player3}.png`;
    document.getElementById('check3').setAttribute('src',player3Dice);
}
dice4 = () =>{
     player4 = Math.floor(Math.random()*6 + 1);
    const player4Dice = `img/dice${player4}.png`;
    document.getElementById('check4').setAttribute('src',player4Dice);
}