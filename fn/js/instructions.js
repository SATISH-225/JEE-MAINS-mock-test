const params = new URLSearchParams(window.location.search);

const subject = params.get("subject");

document.getElementById("subjectTitle").innerText =
subject.charAt(0).toUpperCase() +
subject.slice(1) +
" Mock Test";

document.getElementById("startTestBtn").onclick = function(){

    window.location.href =
    "test.html?subject=" + subject;

}