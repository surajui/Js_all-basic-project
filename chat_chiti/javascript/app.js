let voice = document.getElementById('mic');
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

// youtube link ::: https://www.youtube.com/watch?v=AxjELOePuJg&t=200s;

//vioce recognition using: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
const recognition = new SpeechRecognition();

//user vioce function
function showUsermsg(user){
let output = '';
output += `<div class="chatarea-inner user">${user}</div>`
chatareaouter.innerHTML += output;
return chatareaouter;
}

//robo vioce function
function showchatbotmsg(chatbot){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbot}</div>`
    chatareaouter.innerHTML += output;
    return chatareaouter;
    }
    
function chatbotVoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'hii iam robo';
    if(message.includes('Who are you')){
        speech.text ='i am robo';
    }
    chatareamain.appendChild(showchatbotmsg(speech.text));
    window.speechSynthesis.speak(speech);
}
//create one recognition in that have one method onresult.
recognition.onresult = function(e){
    // console.log(e); //we see all the event in recognition;
    let result = e.resultIndex;
    let transcript = e.results[result][0].transcript;
    chatareamain.appendChild(showUsermsg(transcript));
    chatbotVoice(transcript);
    console.log(transcript);
}
voice.addEventListener('click',function(){
    recognition.start(); //we start the recognition method
    // console.log("---hiii click listern")
})
