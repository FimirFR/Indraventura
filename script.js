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
        text: "Bienvenue sur le <b>parking des anges</b><br/>. <p>Lhistoir : c'est sur ce magnifique parking goudronné et superbement entretenu que commence notre aventure</p><p>Lobs : mais.... il n'est pas goudronné, ni entretenu. Tu es sur qu'on est au bon endroit ?</p><p>Lereveur : Si regarde, il y a des anges posés, ils ont tous déployés leurs ailes pour dorer au soleil</p>",
        question: "d'ailleurs, combien y'a-t-il d'anges aux ailes déployées sur le parking ? (réponse en chiffre)",
        answer: "0"
    },    
    {
        name: "Entrée",
        coords: [46.597509, 1.599967],
        text: "Bienvenue dans le bâtiment. C’est ici que tout commence. Observe ton environnement et prépare-toi à entrer dans le parcours.",
        question: "Quel mot clé permet de commencer ?",
        answer: "depart"
    },
    {
        name: "Salle de pause",
        coords: [46.597662, 1.599838],
        text: "Cette salle est utilisée quotidiennement par les employés. C’est un lieu de repos et de détente.",
        question: "Que fait-on dans une salle de pause ?",
        answer: "pause"
    },
    {
        name: "Robot de soudure",
        coords: [46.597828, 1.599154],
        text: "Ce robot est essentiel dans la chaîne industrielle. Il effectue des tâches précises avec rapidité.",
        question: "Que fait un robot de soudure ?",
        answer: "souder"
    },
    {
        name: "Chaîne TS",
        coords: [46.598230, 1.599380],
        text: "Ici, les produits prennent forme. Chaque étape est cruciale pour le résultat final.",
        question: "Une chaîne de production sert à quoi ?",
        answer: "produire"
    },
    {
        name: "La verole Thales",
        coords: [46.598581, 1.600096],
        text: "c'est assemblé ici, et une jolie vitrine du savoir non faire.",
        question: "Une chaîne de production sert à quoi ?",
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

    // on affiche UNIQUEMENT ici
    quizBox.classList.remove("hidden");
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
