const correct = localStorage.getItem("correct");
const wrong = localStorage.getItem("wrong");
const unattempted = localStorage.getItem("unattempted");
const marks = localStorage.getItem("marks");
const totalMarks = localStorage.getItem("totalMarks");
const percentage = localStorage.getItem("percentage");

document.getElementById("scoreText").innerHTML = `
Correct Answers : ${correct}<br><br>
Wrong Answers : ${wrong}<br><br>
Unattempted : ${unattempted}
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