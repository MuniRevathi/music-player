let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlICON = document.getElementById("ctrlICON");
let interval;

song.onloadedmetadata = function () {
    progress.max = song.duration;
};

function playPause() {
    if (ctrlICON.classList.contains("fa-pause")) {
        song.pause();
        ctrlICON.classList.remove("fa-pause");
        ctrlICON.classList.add("fa-play");
        clearInterval(interval); 
    } else {
        song.play();
        ctrlICON.classList.add("fa-pause");
        ctrlICON.classList.remove("fa-play");

        
        interval = setInterval(() => {
            progress.value = song.currentTime;
        }, 500);
    }
}


progress.addEventListener("input", function () {
    song.currentTime = progress.value;
});
