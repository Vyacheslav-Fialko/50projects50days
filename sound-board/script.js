const sounds = document.querySelectorAll("audio");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  
  btn.classList.add("btn");
  btn.innerText = sound.id;

  btn.addEventListener("click", () => {
    stopSongs();
    sound.play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    if (sound.played) {
      sound.pause();
      sound.currentTime = 0;
    }
  });
}
