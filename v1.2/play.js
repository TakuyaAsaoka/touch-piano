"use strict";

/**
 * キーボード押下orクリック時に、音を演奏します。
 * @param {Event} e - イベント
 */
function playSound(e) {
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
 */
function startMusic() {
  const musicTitle = document.getElementById("music-select").value;

  let time = 0;
  for (const elm of music[musicTitle]) {
    let key = Object.keys(elm)[0];
    setTimeout(setTimeoutCallbackArg, (time + elm[key]) * 1000, key);
    time += elm[key];
  }
}

/**
 * パラメータの音を再生
 * @param {string} key - ノーツに対応するdata-key
 */
function setTimeoutCallbackArg(keyStr) {
  const audio = document.querySelector(`audio[data-key="${keyStr}"]`);
  const key = document.querySelector(`.key[data-key="${keyStr}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("load", () => {
  const start = document.getElementById("start");
  start.addEventListener("click", startMusic);
});

const music = {
  doreminouta: [
    { a: 1 }, //ド
    { s: 0.8 },
    { d: 0.3 },
    { a: 0.9 },
    { d: 0.3 },
    { a: 0.5 },
    { d: 0.6 },
    { s: 1 }, //レ
    { d: 0.8 },
    { f: 0.3 },
    { f: 0.3 },
    { d: 0.3 },
    { s: 0.3 },
    { f: 0.3 },
    { d: 2.1 },
    { f: 0.8 }, //ミ
    { j: 0.3 },
    { d: 0.9 },
    { j: 0.3 },
    { d: 0.5 },
    { j: 0.6 },
    { f: 1 }, //ファ
    { j: 0.8 },
    { k: 0.3 },
    { k: 0.3 },
    { j: 0.3 },
    { f: 0.3 },
    { k: 0.3 },
    { j: 2.1 }, //ソ
    { a: 0.8 },
    { s: 0.3 },
    { d: 0.3 },
    { f: 0.3 },
    { j: 0.3 },
    { k: 0.3 },
    { k: 2.1 }, //ラ
    { s: 0.8 },
    { d: 0.3 },
    { r: 0.3 },
    { j: 0.3 },
    { k: 0.3 },
    { l: 0.3 },
    { l: 2.1 }, //シ
    { d: 0.8 },
    { r: 0.3 },
    { u: 0.3 },
    { k: 0.3 },
    { l: 0.3 },
    { 1: 0.3 },
    { l: 2.1 }, //最後
    { i: 0.4 },
    { k: 0.3 },
    { f: 0.5 },
    { l: 0.5 },
    { j: 0.5 },
    { 1: 0.5 },
  ],
  bz_mouitidokisusitakatta: [
    { 2: 1 }, //遅れる
    { 3: 0.3 },
    { 2: 0.3 },
    { k: 0.3 },
    { 1: 0.3 },
    { 2: 0.6 },
    { 1: 0.3 },
    { l: 0.3 }, //遅れる
    { 2: 0.3 },
    { 7: 0.3 },
    { 4: 0.3 },
    { 3: 0.3 },
    { 2: 0.3 },
    { 3: 0.3 },
    { 2: 0.6 },
    { 3: 0.3 },
    { 2: 0.3 },
    { k: 0.3 },
    { 1: 0.3 },
    { 2: 0.6 },
    { 1: 0.3 },
    { l: 0.3 },
    { 1: 0.3 },
    { 2: 0.3 },
    { 7: 0.3 },
    { 3: 0.3 },
    { 2: 1.2 },
    { 3: 0.3 },
    { 2: 0.3 },
    { k: 0.3 },
    { 1: 0.3 },
    { 2: 0.6 },
    { 1: 0.3 },
    { l: 0.3 },
    { 2: 0.3 },
    { 7: 0.3 },
    { 4: 0.3 },
    { 3: 0.3 },
    { 2: 0.3 },
    { 3: 0.3 },
    { 2: 0.6 },
    { 3: 0.3 },
    { 2: 0.3 },
    { k: 0.3 },
    { 1: 0.3 },
    { 2: 0.6 },
    { 1: 0.3 },
    { l: 0.3 },
    { 1: 0.3 },
    { 2: 0.3 },
    { 3: 0.3 },
    { 3: 0.3 },
  ],
  tenfeet_daizerokan: [
    { k: 1 }, //遅れる
    { 2: 0.2 },
    { 2: 0.4 },
    { 3: 0.2 },
    { 4: 0.2 },
    { 3: 0.2 },
    { 2: 0.2 },
    { 1: 0.2 }, //遅れる
    { 2: 0.2 },
    { 4: 0.4 },
    { 4: 0.4 },
    //約束の夜に
    { 2: 0.8 },
    { 2: 0.4 },
    { 3: 0.2 },
    { 4: 0.2 },
    { 3: 0.2 },
    { 2: 0.2 },
    { k: 0.35 },
    { j: 0.2 },
    { f: 0.25 },
    { j: 0.25 },
    { k: 0.5 },
  ],
};
