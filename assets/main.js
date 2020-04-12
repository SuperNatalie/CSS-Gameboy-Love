const Case = document.getElementById("case");
const CaseBack = document.getElementById("case_back");
const Button1 = document.getElementById("flip");
const Button2 = document.getElementById("flip-back");

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
    Button2.style.display = "none"
}