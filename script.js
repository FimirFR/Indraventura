const map = L.map('map').setView([46.597509, 1.599967], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

const winScreen = document.getElementById("winScreen");
const restartBtn = document.getElementById("restartBtn");

restartBtn.onclick = () => location.reload();

const points = [
    {
        name: "Entrée",
        coords: [46.597509, 1.599967],
        question: "Quel mot clé permet de commencer ?",
        answer: "depart"
    },
    {
        name: "Salle de pause",
        coords: [46.597662, 1.599838],
        question: "Que fait-on dans une salle de pause ?",
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
let markers = [];

function normalize(str) {
    return str.toLowerCase().trim();
}

function setLocked(marker) {
    marker.setOpacity(0.4);
}

function setActive(marker) {
    marker.setOpacity(1);
}

function showWinScreen() {
    setTimeout(() => {
        winScreen.classList.add("show");
    }, 800);
}

function revealSecret() {
    const secretCoords = [46.598100, 1.600000];

    L.marker(secretCoords)
        .addTo(map)
        .bindPopup("🔓 Point final débloqué !")
        .openPopup();

    map.setView(secretCoords, 19);

    showWinScreen();
}

function createMarkers() {

    points.forEach((point, index) => {

        const marker = L.marker(point.coords)
            .addTo(map)
            .bindPopup(point.name);

        markers.push(marker);

        if (index !== 0) setLocked(marker);

        marker.on('click', function () {

            if (index !== currentStep) {
                alert("🔒 Ce point est verrouillé !");
                return;
            }

            const userAnswer = prompt(point.question);

            if (!userAnswer) return;

            if (normalize(userAnswer) === normalize(point.answer)) {

                alert("✅ Bonne réponse !");

                setLocked(marker);

                currentStep++;

                if (markers[currentStep]) {
                    setActive(markers[currentStep]);
                }

                if (currentStep === points.length) {
                    revealSecret();
                }

            } else {
                alert("❌ Mauvaise réponse !");
            }
        });
    });
}

createMarkers();
