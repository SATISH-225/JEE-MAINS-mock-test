const correct = Number(localStorage.getItem("correct") || 0);
const wrong = Number(localStorage.getItem("wrong") || 0);
const unattempted = Number(localStorage.getItem("unattempted") || 0);
const marks = Number(localStorage.getItem("marks") || 0);
const totalMarks = Number(localStorage.getItem("totalMarks") || 0);
const percentage = Number(localStorage.getItem("percentage") || 0);

const attempts = correct + wrong; // number of attempted questions
const accuracy = attempts > 0 ? ((correct / attempts) * 100).toFixed(2) : '0.00';

document.getElementById("scoreText").innerHTML = `
Correct Answers : ${correct}<br><br>
Wrong Answers : ${wrong}<br><br>
Unattempted : ${unattempted}<br><br>
Attempts : ${attempts}<br><br>
Accuracy : ${accuracy}%
`;

document.getElementById("percentageText").innerHTML = `
Marks : ${marks} / ${totalMarks}<br><br>
Percentage : ${percentage}%
`;

if (percentage >= 90) {

    document.getElementById("percentageText").innerHTML +=
    "<br><br>🏆 Outstanding!";

}
else if (percentage >= 75) {

    document.getElementById("percentageText").innerHTML +=
    "<br><br>🌟 Excellent!";

}
else if (percentage >= 60) {

    document.getElementById("percentageText").innerHTML +=
    "<br><br>👍 Good Performance!";

}
else {

    document.getElementById("percentageText").innerHTML +=
    "<br><br>📚 Keep Practicing!";

}