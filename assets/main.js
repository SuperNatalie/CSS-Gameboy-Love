const Case = document.getElementById("case");
const CaseBack = document.getElementById("case_back");
const Button1 = document.getElementById("flip");
const Button2 = document.getElementById("flip-back");
const player1 = document.getElementById("song1");
const player2 = document.getElementById("song2");
const player3 = document.getElementById("song3");
const screenTitle = document.getElementById("title");

function flip() {
    Case.style.display = "none";
    CaseBack.style.display = "inherit";
    Button1.style.display = "none"
    Button2.style.display = "inherit"
}
function flipBack() {
    Case.style.display = "inherit";
    CaseBack.style.display = "none";
    Button1.style.display = "inherit"
    Button2.style.display = "none";
    location = location;
}


function playSound1() {
    player1.play();
}

function playSound2() {
    player2.play();
}

function playSound3() {
    player3.play();
    screenTitle.style.opacity = "1";
    screenTitle.style.marginTop = "80px";
}