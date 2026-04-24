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

function normalize(str) {
    return str.toLowerCase().trim();
}

function showPoint(index) {
    const point = points[index];

    map.setView(point.coords, 19);

    currentMarker = L.marker(point.coords)
        .addTo(map)
        .bindPopup("<b>" + point.name + "</b><br>Clique pour répondre")
        .openPopup();

    currentMarker.on('click', function () {
        const userAnswer = prompt(point.question);

        if (!userAnswer) return;

        if (normalize(userAnswer) === normalize(point.answer)) {
            alert("✅ Bonne réponse !");
            map.removeLayer(currentMarker);

            currentStep++;

            if (currentStep < points.length) {
                showPoint(currentStep);
            } else {
                revealSecret();
            }

        } else {
            alert("❌ Mauvaise réponse !");
        }
    });
}

function revealSecret() {
    const secretCoords = [46.598100, 1.600000];

    const secretMarker = L.marker(secretCoords)
        .addTo(map)
        .bindPopup("🔒 Point secret débloqué !")
        .openPopup();

    secretMarker.on('click', function () {
        alert("🎉 Bravo ! Tu as terminé le parcours !");
    });

    map.setView(secretCoords, 19);
}

showPoint(0);