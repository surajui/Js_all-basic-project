const app = ()=>{
const song = document.querySelector('.song');
const video = document.querySelector('.vid-container video');
const play = document.querySelector('.play');
const outline = document.querySelector('.moving-outline circle');
const timeSelect = document.querySelectorAll('.time-select button')
//sounds
const sounds = document.querySelectorAll('.sound-picker button');
//time display
const timeDisplay = document.querySelector('.time-display');
//total length
const outlineLength = outline.getTotalLength();
//Duration
const fakeDuration = 600;

//playSound
play.addEventListener('click',()=>{
    checkPlaying(song);
    // console.log('---palySong---')
});
// timeSelect.forEach(option =>{
// option.addEventListener('click',function(){
//     fakeDuration
// })
// })
const checkPlaying = song =>{
if(song.paused){
    song.play();
    video.play();
    play.src="./svg/pause.svg";
}
else{
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
}
}
 song.ontimeupdate =()=>{
     let currentTime =song.currentTime;
     let elapsed = fakeDuration-currentTime;
     let minute = Math.floor(elapsed/60);
     let second = Math.floor(elapsed%60);
     timeDisplay.textContent = `${minute}:${second}`
 }    
}
app();