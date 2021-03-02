var initials = document.getElementById("initials");
var yourScore = document.getElementById("yourScore");
var saveButton = document.getElementById("save");

yourScore.textContent = JSON.parse(localStorage.getItem("lastGameScore"));


saveButton.addEventListener("click", function(event) {
var userScores = {
    initials: initials.value,
    yourScore: yourScore.textContent,
}
localStorage.setItem("userScores", JSON.stringify(userScores));
});