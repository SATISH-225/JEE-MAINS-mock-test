// ===============================
// Get Subject
// ===============================

const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");

document.getElementById("subjectName").innerText =
subject.charAt(0).toUpperCase() +
subject.slice(1) +
" Mock Test";
// ===============================
// Select Subject Questions
// ===============================

let questions = [];

if (subject === "physics") {
    questions = physicsQuestions;
}
else if (subject === "chemistry") {
    questions = chemistryQuestions;
}
else if (subject === "mathematics") {
    questions = mathematicsQuestions;
}


// ===============================
// Variables
// ===============================

let currentQuestion=0;

let userAnswers=new Array(questions.length).fill(null);
// ===============================
// Timer
// ===============================

let timeLeft = 20 * 60;

const timer = setInterval(function () {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("time").innerText =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    if (timeLeft <= 0) {

        clearInterval(timer);

        alert("Time is over! Test will be submitted.");

        document.getElementById("submitBtn").click();
    }

    timeLeft--;

}, 1000);

// ===============================
// Create Question Palette
// ===============================

createPalette();

function createPalette(){

    const palette=document.getElementById("questionPalette");

    palette.innerHTML="";

    for(let i=0;i<questions.length;i++){

        const btn=document.createElement("button");

        btn.innerText=i+1;

        btn.onclick=function(){

            saveAnswer();

            currentQuestion=i;

            loadQuestion();

        };

        palette.appendChild(btn);

    }

}

// ===============================
// Load Question
// ===============================

loadQuestion();

function loadQuestion(){

    document.getElementById("questionNumber").innerText=currentQuestion+1;

    document.getElementById("question").innerText=
    questions[currentQuestion].question;

    document.getElementById("option0").innerText=
    questions[currentQuestion].options[0];

    document.getElementById("option1").innerText=
    questions[currentQuestion].options[1];

    document.getElementById("option2").innerText=
    questions[currentQuestion].options[2];

    document.getElementById("option3").innerText=
    questions[currentQuestion].options[3];

    document.querySelectorAll("input[name='option']").forEach(option=>{

        option.checked=false;

    });

    if(userAnswers[currentQuestion]!=null){

        document.querySelector(
            `input[value="${userAnswers[currentQuestion]}"]`
        ).checked=true;

    }

    const buttons=document.querySelectorAll("#questionPalette button");

    buttons.forEach(btn=>btn.classList.remove("active"));

    buttons[currentQuestion].classList.add("active");

}

// ===============================
// Save Answer
// ===============================

function saveAnswer(){

    const selected=document.querySelector(
        "input[name='option']:checked"
    );

    if(selected){

        userAnswers[currentQuestion]=Number(selected.value);

        document
        .querySelectorAll("#questionPalette button")
        [currentQuestion]
        .classList.add("answered");

    }

}

// ===============================
// Next Button
// ===============================

document.getElementById("nextBtn").addEventListener("click",function(){

    saveAnswer();

    if(currentQuestion<questions.length-1){

        currentQuestion++;

        loadQuestion();

    }

});

// ===============================
// Previous Button
// ===============================

document.getElementById("prevBtn").addEventListener("click",function(){

    saveAnswer();

    if(currentQuestion>0){

        currentQuestion--;

        loadQuestion();

    }

});

// ===============================
// Submit Test
// ===============================

document.getElementById("submitBtn").addEventListener("click",function(){

    saveAnswer();

    let correct=0;

    let wrong=0;

    let unattempted=0;

    let marks=0;

    for(let i=0;i<questions.length;i++){

        if(userAnswers[i]==null){

            unattempted++;

        }

        else if(userAnswers[i]===questions[i].answer){

            correct++;

            marks+=4;

        }

        else{

            wrong++;

            marks-=1;

        }

    }

    const totalMarks=questions.length*4;

    const percentage=((marks/totalMarks)*100).toFixed(2);

    localStorage.setItem("correct",correct);

    localStorage.setItem("wrong",wrong);

    localStorage.setItem("unattempted",unattempted);

    localStorage.setItem("marks",marks);

    localStorage.setItem("totalMarks",totalMarks);

    localStorage.setItem("percentage",percentage);

    window.location.href="result.html";

});