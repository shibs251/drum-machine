// variables
const drumPad = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');
const q = document.getElementById('q');

document.onkeydown = function (e)
// document.addEventListener("keydown" ,  function (e)
{
  if (e.keyCode === 81) {
        const kick1Sound = document.getElementById('Q');
        kick1Sound.play();
        display.innerHTML = audioClips[0].text;
  } else if (e.keyCode === 87) {
        const kick2Sound = document.getElementById('W');
        kick2Sound.play();
        display.innerHTML = audioClips[1].text;
  } else if (e.keyCode === 69) {
        const kick3Sound = document.getElementById('E');
        kick3Sound.play();
        display.innerHTML = audioClips[2].text;
  } else if (e.keyCode === 65) {
        const snare1Sound = document.getElementById('A');
        snare1Sound.play();
        display.innerHTML = audioClips[3].text;
  } else if (e.keyCode === 83) {
        const snare2Sound = document.getElementById('S');
        snare2Sound.play();
        display.innerHTML = audioClips[4].text;
  } else if (e.keyCode === 68) {
        const snare3Sound = document.getElementById('D');
        snare3Sound.play();
        display.innerHTML = audioClips[5].text;
  } else if (e.keyCode === 90) {
        const chord1Sound = document.getElementById('Z');
        chord1Sound.play();
        display.innerHTML = audioClips[6].text;
  } else if (e.keyCode === 88) {
        const chord2Sound = document.getElementById('X');
        chord2Sound.play();
        display.innerHTML = audioClips[7].text;
  } else if (e.keyCode === 67) {
        const chord3Sound = document.getElementById('C');
        chord3Sound.play();
        display.innerHTML = audioClips[8].text;
  }
}

function playSound () {
  for (let i = 0; i < drumPad.length; i++) {
    drumPad[i].addEventListener('click', () => {
      drumPad[i].style.backgroundColor = "orange";
      if (i === 0) {
        const kick1Sound = document.getElementById('Q');
        kick1Sound.play();
        display.innerHTML = audioClips[0].text;

      } else if (i === 1) {
        const kick2Sound = document.getElementById('W');
        kick2Sound.play();
        display.innerHTML = audioClips[1].text;

      } else if (i === 2){
        const kick3Sound = document.getElementById('E');
        kick3Sound.play();
        display.innerHTML = audioClips[2].text;

      } else if (i === 3){
        const snare1Sound = document.getElementById('A');
        snare1Sound.play();
        display.innerHTML = audioClips[3].text;

      } else if (i === 4){
        const snare2Sound = document.getElementById('S');
        snare2Sound.play();
        display.innerHTML = audioClips[4].text;

      } else if (i === 5){
        const snare3Sound = document.getElementById('D');
        snare3Sound.play();
        display.innerHTML = audioClips[5].text;

      } else if (i === 6){
        const chord1Sound = document.getElementById('Z');
        chord1Sound.play();
        display.innerHTML = audioClips[6].text;

      } else if (i === 7){
        const chord2Sound = document.getElementById('X');
        chord2Sound.play();
        display.innerHTML = audioClips[7].text;

      } else if (i === 8){
        const chord3Sound = document.getElementById('C');
        chord3Sound.play();
        display.innerHTML = audioClips[8].text;
      }
      setTimeout(() => {
        drumPad[i].style.backgroundColor = "gray";
      }, 100)
    })
  }

}
playSound();

const audioClips = [
  {
    key: "q",
    text: "kick 1",
    path: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "w",
    text: "kick 2",
    path: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    key: "e",
    text: "kick 3",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "a",
    text: "snare 1",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    key: "s",
    text: "snare 2",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
  {
    key: "d",
    text: "snare 3",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    key: "z",
    text: "chord 1",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    key: "x",
    text: "chord 2",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    key: "c",
    text: "chord 3",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
];
