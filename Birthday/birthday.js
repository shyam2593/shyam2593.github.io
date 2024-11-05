const search = window.location.search;
const name = new URLSearchParams(search).get("n");
if(typeof name === "string"){
  try{
    if(name!==""){
        document.getElementById("bname").innerText = atob(name);
    }
  }catch(e){
    document.getElementById("bname").innerText = name;
  }
}
function myTransform() {
  document.getElementsByClassName("card")[0].style.transform =
    "rotateY(180deg)";
}
