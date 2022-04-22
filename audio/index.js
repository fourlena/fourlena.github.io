const audio = document.querySelector('audio');
const btnPlay = document.querySelector('.play-btn');
const btnNext = document.querySelector('.next-btn');
const btnPrev = document.querySelector('.prev-btn');
const img = document.querySelector('.img');
const introArtist = document.querySelector('.info-artist');
const introSong = document.querySelector('.info-song');
const progressBar = document.querySelector('.progress-bar');
const progressStart = document.querySelector('.progress-start');
const progressEnd = document.querySelector('.progress-end');

let isPlay = false;
let playNum = 0;

let music = ['justice','queens','marina','america'];
let artists = ['Justice','Queens Of The Stone Age','Marina and the Diamonds','America'];
let songs = ['Pleasure X Newjack X Civilization','First It Giveth','Froot','A Horse with No Name'];

function playAudio() {
    if(!isPlay){
        isPlay = true;
        btnPlay.classList.add('pause');
        audio.play();
    }else{
        isPlay = false;
        audio.pause();
        btnPlay.classList.remove('pause');
    }   
}

function playArrow(){
    if(playNum < 0){
        playNum = music.length-1;
    } else if (playNum > music.length-1){
         playNum = 0;
    }
    audio.src = `assets/audio/${music[playNum]}.mp3`;
    img.src = `assets/img/${music[playNum]}.jpg`;
    introArtist.textContent = artists[playNum];
    introSong.textContent = songs[playNum];
    isPlay = false;
    playAudio();
}

function playNext(){
    playNum ++;
    playArrow();
}

function playPrev(){
    playNum --;
    playArrow();
}

audio.addEventListener("ended", playNext);
btnPlay.addEventListener('click', playAudio);
btnNext.addEventListener('click', playNext);
btnPrev.addEventListener('click', playPrev);

function progressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
    progressStart.textContent = formatTime(audio.currentTime);
    progressEnd.textContent = formatTime(audio.duration);
}
setInterval(progressValue, 500);
  
function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}
  
function changeProgressBar() {
    audio.currentTime = progressBar.value;
}

console.log(" 1.Вёрстка (10/10) \n 2.Кнопка Play/Pause (10/10) \n 3.При кликах по кнопкам 'Вперёд' и 'Назад' переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый (10/10) \n 4. При смене аудиотрека меняется изображение - обложка аудиотрека  (10/10) \n 5. Прогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека (10/10) \n 6. Отображается продолжительность аудиотрека и его текущее время проигрывания (10/10) \n 7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения (0/0) \n Итого:60/70  ");


