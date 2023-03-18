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
