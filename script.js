const map = L.map('map').setView([46.597509, 1.599967], 18);

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
    {name:"Entrée", coords:[46.597509,1.599967], question:"Quel mot clé permet de commencer ?", answer:"depart"},
    {name:"Pause", coords:[46.597662,1.599838], question:"Que fait-on ?", answer:"pause"},
    {name:"Robot", coords:[46.597828,1.599154], question:"Que fait-il ?", answer:"souder"},
    {name:"Chaîne", coords:[46.598230,1.599380], question:"Elle sert à quoi ?", answer:"produire"}
];

let answers = [];
let markers = [];
let currentStep = 0;

// UI
const quizBox = document.getElementById("quizBox");
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

    marker.on("click", () => {

        // bloque si pas le bon ordre
        if (i !== currentStep) {
            alert("🔒 Ce point est verrouillé");
            return;
        }

        // ouvre la question UNIQUEMENT ici
        openQuestion(i);
    });
});

function openQuestion(index) {

    const p = points[index];

    quizBox.classList.remove("hidden");
    quizQuestion.innerText = p.question;
    quizInput.value = "";

    quizBtn.onclick = () => {

        answers[index] = quizInput.value;

        quizBox.classList.add("hidden");

        currentStep++;

        // active le suivant
        if (markers[currentStep]) {
            markers[currentStep].setOpacity(1);
        }

        // fin du jeu
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
