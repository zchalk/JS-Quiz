var initials = document.getElementById("initials");
var yourScore = document.getElementById("yourScore");
var saveButton = document.getElementById("save");
var sortedScores = JSON.parse(localStorage.getItem("sortedScores")) || []; //the or [] allows for more than one object to be added

yourScore.textContent = JSON.parse(localStorage.getItem("lastGameScore"));

// here the event listener is storing the sorted user scores
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


localStorage.setItem("sortedScores", JSON.stringify(sortedScores));
localStorage.setItem("userScores", JSON.stringify(userScores));
window.location.replace("index.html");
});