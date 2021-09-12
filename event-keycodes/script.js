const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  const htmlCode = `${divKey(
    event.key === " " ? "Space" : event.key,
    "event.key"
  )}${divKey(event.keyCode, "event.keyCode")}${divKey(
    event.code,
    "event.code"
  )}`;
  insert.innerHTML = htmlCode;

})

function divKey(event, nameEvent) {
  return `<div class="key">
  ${event}
  <small>${nameEvent}</small>
</div>`;}