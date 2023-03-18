"use strict";

/**
 * キーボード押下時に、音を演奏します。
 * @param {Event} e - イベント
 */
function playSound(e) {
  console.log(e.type);
  let audio;
  let key;
  if (e.type === "click") {
    audio = document.querySelector(
      `audio[data-key="${e.currentTarget.getAttribute("data-key")}"]`
    );
    key = document.querySelector(
      `.key[data-key="${e.currentTarget.getAttribute("data-key")}"]`
    );
  } else if (e.type === "keydown") {
    audio = document.querySelector(`audio[data-key="${e.key}"]`);
    key = document.querySelector(`.key[data-key="${e.key}"]`);
  }
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

/**
 * Transition終了時に、クラスから'playing'を削除します。
 * @param {Event} e - イベント
 */
function removeTransition(e) {
  this.classList.remove("playing");
}

window.addEventListener("load", () => {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    key.addEventListener("click", playSound);
    key.addEventListener("transitionend", removeTransition);
  });
  window.addEventListener("keydown", playSound);
});

/**
 * startボタンがクリックされたら、ゲーム開始します。
 * @param {Array<number>} timing - ノーツのタイミング[s]
 * @param {Array<string>} key - ノーツに対応するdata-key
 */
function startMusic(timing, key) {}

window.addEventListener("load", () => {
  const start = document.getElementById("start");
  start.addEventListener("click", startMusic);
});

const doreminouta_timing = [0, 1, 1.5, 2.5, 3, 3.5, 4];
const doreminouta_key = [
  "a",
  "s",
  "d",
  "a",
  "d",
  "a",
  "d",
  "s",
  "d",
  "f",
  "f",
  "d",
  "s",
  "f",
  "d",
  "f",
  "j",
  "d",
  "j",
  "d",
  "j",
  "f",
  "j",
  "k",
  "k",
  "j",
  "f",
  "k",
  "j",
  "a",
  "s",
  "d",
  "f",
  "j",
  "k",
  "k",
  "s",
  "d",
  "r",
  "j",
  "k",
  "l",
  "l",
  "d",
  "r",
  "u",
  "k",
  "l",
  ";",
  ";",
  "l",
  "k",
  "f",
  "l",
  "j",
];
