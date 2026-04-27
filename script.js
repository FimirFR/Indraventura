document.getElementById("quizBox").classList.add("hidden");

const map = L.map('map').setView([46.597509, 1.599967], 18);

// AJOUT ICI
map.closePopup();

// fond OSM
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// === GEOJSON (plan bâtiment) ===
fetch('data.geojson')
.then(res => res.json())
.then(data => {
    L.geoJSON(data, {
        style: {color: "#3388ff"}
    }).addTo(map);
});

// === QUESTIONS ===
const points = [
    {
        name: "Le parking des Anges",
        coords: [46.597291, 1.600230],
        text: "Bienvenue sur le <b>parking des anges</b><br/>. <p>Doc : Mesdames et messieurs, bienvenue sur ce somptueux parking goudronné, fleuron de l’urbanisme moderne, où débute notre incroyable aventure.</p><p>Lobs : …Tu te moques de moi ? Y a plus de trous que de sol, on dirait un champ de mines abandonné. Et le goudron, il est en option ?</p><p>Rêveur : Mais non, regarde mieux… ces formes allongées au sol… ces silhouettes… ce sont des anges.</p><p>Lobs : Des anges ?!</p><p>Rêveur : Oui… ils ont tous déployé leurs ailes pour… bronzer paisiblement au soleil.</p<<p>Doc : Exactement. Parking premium : nids-de-poule, poussière, et anges en libre-service. On a vraiment choisi un lieu d’exception.</p><p>Lobs : Ou alors… on est juste perdus sur un terrain vague.</p><p>Rêveur : Quelle vision terre-à-terre… moi je dis qu’on est bénis.</p><p>Doc : Bénis, peut-être. Mais pas assurés, ça c’est sûr.</p>",
        question: "D'ailleurs, combien y'a-t-il d'anges aux ailes déployées sur le parking ? (réponse en chiffre)",
        answer: "0"
    },    
    {
        name: "Les portes du pénitentier",
        coords: [46.597509, 1.599967],
        text: "Voila le <b>portail d'entrée</b>. Flute tu as oublié ton badge. <p>Heureusement, tu tu peux appeler quelqu'un...non c'est illisible.</p><p>Mais tu connais le code n'est ce pas ?</p>",
        question: "Quel est le code ?",
        answer: "0"
    },
    {
        name: "Le repos du guérrier",
        coords: [46.597662, 1.599838],
        text: "Cette salle est utilisée quotidiennement par les employés. C’est un lieu de repos et de détente.",
        question: "Que fait-on dans une salle de <b>pause</b> ?",
        answer: "pause"
    },
    {
        name: "Nous sommes le Robot",
        coords: [46.597828, 1.599154],
        text: "<p>Doc : Et voici… le Robot. Une relique de puissance brute et d’ingénierie oubliée. Tellement ancien que même ses créateurs ont probablement oublié où est le bouton “ON”. Il peut amalgamer n’importe quelle matière.</p><p>Lobs : Impressionnant. Donc en résumé, il fusionne tout… sauf les preuves qu’il a déjà servi. Parce que là, à part la poussière, il a l’air sorti d’un magasin… jamais ouvert.</p><p>Rêveur : Oh… imaginez… des métaux en fusion, des étincelles, une symphonie industrielle… ça devait être magnifique…</p><p>Lobs : Ouais, surtout le jour imaginaire où quelqu’un a réussi à le brancher.</p><p>Doc : Vous manquez de vision. Ce robot est une légende vivante !</p><p>Lobs : Vivante ? Il bouge moins qu’un meuble IKEA monté de travers.</p><p>Rêveur : Peut-être qu’il attend… le bon moment… ou la bonne âme…</p><p>Lobs : Ou une prise électrique, pour commencer.</p><p>Doc : Je vous assure qu’il fonctionne parfaitement !</p><p>Lobs : Ah oui ? Et il amalgame quoi, là, tout de suite ?</p><p>Doc : …Du potentiel.</p><p>Lobs : Ah. Donc il transforme du vide en promesses. C’est pas un robot, c’est un politicien.</p>",
        question: "Que fait un robot de <b>soudure</b> ?",
        answer: "souder"
    },
    {
        name: "Chaîne TS",
        coords: [46.598230, 1.599380],
        text: "Ici, les produits prennent forme. Chaque étape est cruciale pour le résultat final.",
        question: "Une chaîne de <b>production</b> sert à quoi ?",
        answer: "produire"
    },
    {
        name: "La verole",
        coords: [46.598581, 1.600096],
        text: "c'est assemblé ici, et une jolie vitrine du savoir non faire.",
        question: "Une chaîne de <b>production</b> sert à quoi ?",
        answer: "produire"
    }
];

let answers = [];
let markers = [];
let currentStep = 0;

// UI
const quizBox = document.getElementById("quizBox");
const quizText = document.getElementById("quizText");
const quizQuestion = document.getElementById("quizQuestion");
const quizInput = document.getElementById("quizInput");
const quizBtn = document.getElementById("quizBtn");
const quizTitle = document.getElementById("quizTitle");
const closeQuiz = document.getElementById("closeQuiz");

closeQuiz.onclick = () => {
    quizBox.classList.add("hidden");
};

function normalize(s){return s.toLowerCase().trim();}

// === MARKERS ===
points.forEach((p, i) => {

    let marker = L.marker(p.coords)
        .addTo(map)
        .bindPopup(p.name);

    markers.push(marker);

    // état visuel
    if (i !== 0) {
        marker.setOpacity(0.3);
    }

    // IMPORTANT : aucune ouverture automatique
    marker.closePopup();

marker.on("click", function () {

    if (i !== currentStep) {
        alert("🔒 verrouillé");
        return;
    }

    openQuestion(i); // SEUL endroit où ça s’ouvre
});
});

function openQuestion(index) {

    const p = points[index];

    quizBox.classList.remove("hidden");

    quizTitle.innerText = p.name; // 👈 titre ajouté
    quizText.innerHTML = p.text;
    quizQuestion.innerText = p.question;
    quizInput.value = "";

    quizBtn.onclick = function () {

        answers[index] = quizInput.value;

        quizBox.classList.add("hidden");

        currentStep++;

        if (markers[currentStep]) {
            markers[currentStep].setOpacity(1);
        }

        if (currentStep === points.length) {
            checkFinal();
        }
    };
}

// === VALIDATION FINALE ===
function checkFinal(){

    let success = true;

    points.forEach((p,i)=>{
        if(normalize(answers[i]) !== normalize(p.answer)){
            success = false;
        }
    });

    if(success){
        revealSecret();
    } else {
        alert("❌ Certaines réponses sont fausses !");
    }
}

// === SECRET ===
function revealSecret(){
    L.marker([46.598100,1.600000])
    .addTo(map)
    .bindPopup("🔓 Secret")
    .openPopup();

    showWin();
}

// === WIN ===
const winScreen = document.getElementById("winScreen");
const winSound = document.getElementById("winSound");

function showWin(){
    winScreen.classList.add("show");
    winSound.play().catch(()=>{});

    startConfetti();
}

// === CONFETTI ===
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti=[];

function startConfetti(){
    for(let i=0;i<100;i++){
        confetti.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            r:Math.random()*6,
            d:Math.random()*5
        });
    }
    draw();
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(c=>{
        ctx.fillRect(c.x,c.y,c.r,c.r);
        c.y+=c.d;
        if(c.y>canvas.height) c.y=0;
    });

    requestAnimationFrame(draw);
}
