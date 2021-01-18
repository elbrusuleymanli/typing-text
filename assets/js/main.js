let typing = document.querySelector(".typing");
let addTexts = [
  "SALAMUALEYKUM",
  "ISLAM IS THE BEST RELIGION OF THE WORD",
  "MAY ALLAH GIVES HIDAYA TO EVERYONE",
  "IT IS ONLY TRUE PATH",
  "BELIEVE TO ALLAH",
  "AND ALL WILL BE IS GOOD",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  currentText = addTexts[count];
  if (letter.length < currentText.length) {
    letter = currentText.slice(0, ++index);
    typing.innerHTML = letter;
    setTimeout(type, 120);
  } else {
    setTimeout(erase, 80);
  }
}
function erase() {
  if (letter.length > 0) {
    letter = currentText.slice(0, --index);
    typing.textContent = letter;
    setTimeout(erase, 50);
  } else {
    if (count < addTexts.length -1) {
      count++;
      setTimeout(type, 50);
    } else {
      setTimeout(final, 100);
    }
  }
}
function final() {
  currentText = "MAY ALLAH BLESS US";
  letter = currentText.slice(0, ++index);
  index++;
  typing.innerHTML = letter;
  setTimeout(final, 100);
}
window.addEventListener("load", function () {
  setTimeout(type, 2000);
});
