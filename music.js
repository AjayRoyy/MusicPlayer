function datetime() {
    setInterval(function () {
        const hrs = new Date().getHours();
        const mins = new Date().getMinutes();
        const sec = new Date().getSeconds();
        document.getElementById("p1").innerHTML = hrs + ":" + mins + ":" + sec;
    },100);
}

let SongArtt = document.getElementById("disc1");
let songName = document.getElementById("songName");
let artistName = document.getElementById("artistName");


let playBack = document.getElementById("playBack");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let playForward = document.getElementById("playForward");


let startTime = document.getElementById("startTime");
let songTime = document.getElementById("songTime");
let range1 = document.getElementById("range1");

const currentSong = document.createElement("audio");

let tracks = [
    {
        title: "Dandilions",
        artist: "B.Ruth",
        AlbumArt: "https://cdns-images.dzcdn.net/images/cover/1a4b3f5a1edd5e7c43ed8e11fb2f021c/500x500.jpg",
        MP3: "../MusicPlayer/media/songs/Ruth-B-Dandelions.mp3"

    },
    {
        title: "Middle Of The Night",
        artist: "Elley Duhé",
        AlbumArt: "https://i.scdn.co/image/ab67616d0000b27353a2e11c1bde700722fecd2e",
        MP3: "../MusicPlayer/media/songs/Middle-Of-The-Night-SabPagal.mp3"
    },
    {
        title: "Vibez",
        artist: "Zayn Malik",
        AlbumArt: "https://preview.redd.it/ezg5ex8prm171.jpg?width=640&crop=smart&auto=webp&s=aea2a192185d5cd25ceae3a99602d095e5bbf1ec",
        MP3: "../MusicPlayer/media/songs/Vibez Nobody Is Listening 320 Kbps.mp3"
    }
];
    songIndex=0;

currentSong.src=tracks[songIndex].MP3;


let isPlaying = true;
function playSongs() { 

    if (isPlaying) {
        play.style.display = "none";
        pause.style.display = "block";
        currentSong.play();
        isPlaying = false;
        SongArtt.style.animation="rotatee 10s linear infinite";
    }
    else {
        pause.style.display = "none";
        play.style.display = "block";
        currentSong.pause();
        isPlaying = true;
        SongArtt.style.animation="none";
    }
}

play.addEventListener("click", playSongs);
pause.addEventListener("click", playSongs);
currentSong.addEventListener("ended",nextTrack);
playForward.addEventListener("click",nextTrack);
playBack.addEventListener("click",prev)

function nextTrack(){
    songIndex++;
    if(songIndex>tracks.length-1)
    {
        songIndex=0;
    }
    currentSong.src=tracks[songIndex].MP3;
    SongArtt.src=tracks[songIndex].AlbumArt;
    artistName.textContent =tracks[songIndex].artist;
    songName.textContent = tracks[songIndex].title;
    isPlaying=true;
    playSongs();
}

function prev()
{
    songIndex--;
    if(songIndex<0)
    {
        songIndex = tracks.length -1;
    }
    currentSong.src=tracks[songIndex].MP3;
    SongArtt.src=tracks[songIndex].AlbumArt;
    artistName.textContent =tracks[songIndex].artist;
    songName.textContent = tracks[songIndex].title;
    isPlaying=true;
    playSongs();
}

function sliderfun()
{
    range1.max = currentSong.duration;
    range1.value = currentSong.currentTime;
    startTime.textContent = formatTime(currentSong.currentTime);
    songTime.textContent = formatTime(currentSong.duration);    
}

setInterval(sliderfun,1000);

function formatTime(sec)
{
    let minute = Math.floor(sec/60);
    let seconds = Math.floor(sec - minute *60);
    if(seconds < 10)
    {
        seconds = `${seconds}`;
    }
    return `0${minute}:${seconds}`;
}

function changeslider()
{
    currentSong.currentTime = range1.value;
}

range1.addEventListener("click",changeslider);
