var sortedScores = JSON.parse(localStorage.getItem("sortedScores"));
var scoreList = document.getElementById("scoreList");
console.log(sortedScores);

for (let i = 0; i < sortedScores.length; i++) {
    var eachScore = document.createElement("li");
    scoreList.appendChild(eachScore);
    eachScore.innerHTML += sortedScores.initials + " - - - " + sortedScores.yourScore;
}