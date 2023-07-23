
const buttonRight=document.getElementById('slide-right');
const buttonLeft=document.getElementById('slide-left');


buttonLeft.onclick=function(){
    document.getElementById('focus-list').scrollLeft -= 200;
};
buttonRight.onclick=function(){
    document.getElementById('focus-list').scrollLeft += 200;
};

const singerRight=document.getElementById('artist-right');
const singerLeft=document.getElementById('artist-left');


singerLeft.onclick=function(){
    document.getElementById('artist-list').scrollLeft -= 200;
};
singerRight.onclick=function(){
    document.getElementById('artist-list').scrollLeft += 200;
};

let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let songInfoText=document.getElementById('songInfoText');
let songs=[
    {songName: "Aaj Phir Tum Pe", filePath:"songs/1.mp3", coverPath:"images/arijit1.jpg"},
    {songName: "Jeene Laga Hu", filePath:"songs/2.mp3", coverPath:"images/atif2.jpg"},
    {songName: "Kesariya", filePath:"songs/3.mp3", coverPath:"images/arijit3.jpg"},
    {songName: "Khamosiya", filePath:"songs/4.mp3", coverPath:"images/arijit4.jpg"},
    {songName: "Main tenu samjhawa", filePath:"songs/5.mp3", coverPath:"images/arijit5.jpg"},
    {songName: "Baatein ye kabhi na", filePath:"songs/6.mp3", coverPath:"images/arijit6.jpg"},
    {songName: "Dekhte dekhte", filePath:"songs/7.mp3", coverPath:"images/atif6.jpg"},
    {songName: "Paniyo sa", filePath:"songs/8.mp3", coverPath:"images/atif5.jpg"},
]

songItem.forEach((element, i)=>{
    element.getElementsByClassName("songImage")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})


// audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.innerHTML="pause_circle";
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.innerHTML="play_circle";
        gif.style.opacity=0;
    }

})



audioElement.addEventListener('timeupdate',() =>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress; 

});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        songIndex=parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        songInfoText.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        // masterPlay.innerHTML="play_circle";
        masterPlay.innerHTML="pause_circle";
        gif.style.opacity=1;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
        
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songInfoText.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    // masterPlay.innerHTML="play_circle";
    masterPlay.innerHTML="pause_circle";
    gif.style.opacity=1;

} )

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
        
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.innerHTML="play_circle";
    // masterPlay.innerHTML="pause_circle";
    gif.style.opacity=1;
    songInfoText.innerText=songs[songIndex].songName;
} )

