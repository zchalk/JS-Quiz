var sortedScores = JSON.parse(localStorage.getItem("sortedScores"));
var scoreList = document.getElementById("scoreList");
console.log(sortedScores);
// here a for loop populates all the previously sorted scores into an ordered list
for (let i = 0; i < sortedScores.length; i++) {
    var eachScore = document.createElement("li");
    scoreList.appendChild(eachScore);
    eachScore.innerHTML += sortedScores[i].initials + " - - - " + sortedScores[i].yourScore;
}