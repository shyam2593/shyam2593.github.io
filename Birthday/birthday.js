const search = window.location.search;
const names = new URLSearchParams(search).get("n");
document.getElementById("bname").innerText = names;
function myTransform() {
  document.getElementsByClassName("card")[0].style.transform =
    "rotateY(180deg)";
}
