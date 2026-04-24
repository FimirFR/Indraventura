const map = L.map('map').setView([46.597509, 1.599967], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

const points = [
    {
        name: "Entrée",
        coords: [46.597509, 1.599967],
        question: "Tu entres dans le bâtiment. Quel mot clé te permet de commencer ?",
        answer: "depart"
    },
    {
        name: "Salle de pause",
        coords: [46.597662, 1.599838],
        question: "Dans une salle de pause, on fait quoi principalement ?",
        answer: "pause"
    },
    {
        name: "Robot de soudure",
        coords: [46.597828, 1.599154],
        question: "Que fait un robot de soudure ?",
        answer: "souder"
    },
    {
        name: "Chaîne TS",
        coords: [46.598230, 1.599380],
        question: "Une chaîne de production sert à quoi ?",
        answer: "produire"
    }
];

let currentStep = 0;
let currentMarker = null;

// UI
const quizBox = document.getElementById("quizBox");
const quizQuestion = document.getElementById("quizQuestion");
const quizInput = document.getElementById("quizInput");
const quizBtn = document.getElementById("quizBtn");
const quizFeedback = document.getElementById("quizFeedback");

function normalize(str) {
    return str.toLowerCase().trim();
}

function showQuiz(point, callback) {
    quizBox.classList.remove("hidden");

    quizQuestion.textContent = point.question;
    quizInput.value = "";
    quizFeedback.textContent = "";

    quizBtn.onclick = function () {
        const userAnswer = quizInput.value;

        if (!userAnswer) return;

        if (normalize(userAnswer) === normalize(point.answer)) {
            quizFeedback.textContent = "✅ Bonne réponse !";
            setTimeout(() => {
                quizBox.classList.add("hidden");
                callback(true);
            }, 800);
        } else {
            quizFeedback.textContent = "❌ Mauvaise réponse";
        }
    };
}

function showPoint(index) {
    const point = points[index];

    map.setView(point.coords, 19);

    currentMarker = L.marker(point.coords)
        .addTo(map)
        .bindPopup(point.name)
        .openPopup();

    currentMarker.on('click', function () {
        showQuiz(point, function (success) {
            if (success) {
                map.removeLayer(currentMarker);

                currentStep++;

                if (currentStep < points.length) {
                    showPoint(currentStep);
                } else {
                    revealSecret();
                }
            }
        });
    });
}

function revealSecret() {
    const secretCoords = [46.598100, 1.600000];

    L.marker(secretCoords)
        .addTo(map)
        .bindPopup("🎉 Point final débloqué !")
        .openPopup();

    map.setView(secretCoords, 19);
}

showPoint(0);
