const inputCheck = document.querySelector(".input");
const body = document.querySelector("body");

inputCheck.addEventListener("click", updateBody);
inputCheck.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();
function updateBody(){
    if(inputCheck.checked){
        body.setAttribute("style","background-color: black;")
    }else{
        body.setAttribute("style","background-color: white;")
    }
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputCheck.checked));
}