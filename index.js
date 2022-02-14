var numOfBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInneHtml = this.innerHTML;
    makeSound(buttonInneHtml);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(pointer) {
  switch (pointer) {
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "w":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(pointer);
  }
}
