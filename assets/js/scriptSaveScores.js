var initials = document.getElementById("initials");
var yourScore = document.getElementById("yourScore");
var saveButton = document.getElementById("save");
var sortedScores = JSON.parse(localStorage.getItem("sortedScores")) || [];

yourScore.textContent = JSON.parse(localStorage.getItem("lastGameScore"));


saveButton.addEventListener("click", function(event) { 
event.preventDefault();
var userScores = {
    initials: initials.value,
    yourScore: yourScore.textContent,
}
sortedScores.push(userScores);
sortedScores.sort(function (a,b) {
    return b.yourScore - a.yourScore
});
// highScores.splice(5, 1);

localStorage.setItem("sortedScores", JSON.stringify(sortedScores));
localStorage.setItem("userScores", JSON.stringify(userScores));
});