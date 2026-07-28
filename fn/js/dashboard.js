// Populate dashboard performance cards from localStorage

const testsAttempted = localStorage.getItem('testsAttempted') || '0';
const highestScore = localStorage.getItem('highestScore') || '0';
const lastAccuracy = localStorage.getItem('lastAccuracy') || '0.00';

const testsEl = document.getElementById('testsAttempted');
const highestEl = document.getElementById('highestScore');
const accuracyEl = document.getElementById('accuracyValue');

if (testsEl) testsEl.innerText = testsAttempted;
if (highestEl) highestEl.innerText = highestScore + "%";
if (accuracyEl) accuracyEl.innerText = lastAccuracy + "%";
