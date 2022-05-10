var now = new Date();
var hour = now.getHours();
if (hour > 13) {
  document.getElementById("greeting").innerText = "Good evening";
} else if (hour < 12) {
  document.getElementById("greeting").innerText = "Good morning";
} else {
  document.getElementById("greeting").innerText = "Good afternoon";
}