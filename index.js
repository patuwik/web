const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "wake up";
} else if (time < 20) {
  greeting = "oof";
} else {
  greeting = "lol";
}
document.getElementById("date").innerHTML = greeting;