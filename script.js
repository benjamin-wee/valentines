"use strict";
import confetti from "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/+esm";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const playButton = document.getElementById("play-music");

  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playButton.textContent = "🎶 Playing :3";
    }
  });
});

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "yayyy!! 🫶🏻 <br> <br> stella seaside lounge on the 14th for dinner?";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { x: 0.68, y: 0.5 },
    shapes: ["circle"],
    colors: ["#A0522D", "#D2B48C", "#F5DEB3"],
  });
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "no",
    "are you sure?",
    "pookie please 😭",
    "don't do this to me :(",
    "you're breaking my heart",
    "i'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
