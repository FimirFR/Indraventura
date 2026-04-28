document.getElementById("quizBox").classList.add("hidden");

const map = L.map("map").setView([46.597509, 1.599967], 18);

// AJOUT ICI
map.closePopup();

// fond OSM
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// === GEOJSON (plan bâtiment) ===
fetch("data.geojson")
  .then((res) => res.json())
  .then((data) => {
    L.geoJSON(data, {
      style: { color: "#3388ff" }
    }).addTo(map);
  });

// === QUESTIONS ===
const points = [
  {
    name: "Le parking des Anges",
    coords: [46.597291, 1.60023],
    dialogues: [
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Mesdames et messieurs, bienvenue sur ce somptueux <b>parking des anges</b> goudronné, fleuron de l’urbanisme moderne, où débute notre incroyable aventure."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "…Tu te moques de moi ? Y a plus de trous que de sol, on dirait un champ de mines abandonné. Et le goudron, il est en option ?"
      },
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Mais non, regarde mieux… ces formes allongées au sol… ces silhouettes… ce sont des anges."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Des anges ?"
      },
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Oui… ils ont tous déployé leurs ailes pour… bronzer paisiblement au soleil."
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Exactement. Parking premium : nids-de-poule, poussière, et anges en libre-service. On a vraiment choisi un lieu d’exception."
      },	
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ou alors… on est juste perdus sur un terrain vague."
      },	
     {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Quelle vision terre-à-terre… moi je dis qu’on est bénis."
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Bénis, peut-être. Mais pas assurés, ça c’est sûr."
      }	  
    ],

    question:
      "D'ailleurs, combien y'a-t-il d'anges aux ailes déployées sur le parking ? (réponse en chiffre)",
    hint: "Si tu compte celui qui passe en plus, tu en as déjà un en trop...",
    success: {
      img: "https://indraventura.wordpress.com/wp-content/uploads/2025/07/tesla-1.png?w=300",
      text: "Succès trouvé : Green Attitude",
      link: "https://indraventura.wordpress.com/tesla/"
    },
    answer: "0"
  },
  {
    name: "Les portes du pénitentier",
    coords: [46.597509, 1.599967],
	
   dialogues: [
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Voici le portail d’entrée. Élégant, sécurisé, impénétrable. Il faut un badge pour y accéder."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Super. On n’en a pas. Mais y a un interphone… donc on peut supplier quelqu’un, c’est ça ?"
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Exactement ! Il suffit de faire défiler pour choisir un interlocuteur."
      },	 
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "“Faire défiler”… tu veux dire regarder un écran où les noms passent à la vitesse d’un générique de film… sans pause… et sans bouton “stop” ?"
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "C’est une interface… dynamique."
      },	  
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "C’est surtout une roulette russe administrative. Allez, on tente le code par défaut, comme tout système oublié."
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Je vous déconseille fortement—"
      },	
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "bip bip bip … Voilà. Si ça s’ouvre, on confirme que la sécurité repose sur l’espoir."
      },	  
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Écoutez ce silence… ce portail… c’est une frontière… on quitte la liberté extérieure pour entrer dans une autre dimension…"
      },	  
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Oui, une dimension où même entrer demande un doctorat en interphone."
      },	  
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Vous dramatisez. C’est un simple contrôle d’accès."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Non, c’est une épreuve initiatique. Si t’arrives à rentrer, t’as déjà mérité ton poste."
      },
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text:  "Peut-être que le portail nous teste… pour savoir si on est dignes…"
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ou alors il bug, comme tout le reste ici."
      }
    ],	
    question: "Quel est le code ?",
    hint: "autant que d'ange",	
    answer: "0"
  },
  {
    name: "Le repos du guerrier",
    coords: [46.597662, 1.599838],
    text:
      "<p>Doc : Ici, mes chers collègues, la salle de détente. Un havre de paix où chacun vient relâcher la pression et retrouver son humanité.</p><p>Lobs : Ah oui, avec quatre sièges et demi pour trois cents personnes. C’est pas une salle de détente, c’est une épreuve de Koh-Lanta version bureau.</p><p>Rêveur : Regardez… ces espaces… ces volumes… c’est un lieu d’échange, de partage, presque sacré…</p><p>Lobs : Sacré, oui. Faut être béni pour trouver une place assise.</p><p>Doc : Et vous noterez ces distributeurs, parfaitement intégrés, offrant boissons et douceurs à toute heure.</p><p>Lobs : Intégrés, oui… surtout dans le décor. Vu la couche de poussière, même les snacks ont posé leur démission.</p><p>Rêveur : Peut-être que les gens viennent ici pour autre chose… discuter, se rencontrer…</p><p>Lobs : Ou juste vérifier si quelqu’un a enfin réussi à faire marcher la machine à café.</p><p>Doc : Vous êtes d’un cynisme… cet endroit respire la convivialité !</p><p>Lobs : Il respire surtout le vide. On dirait une salle d’attente… sans personne qui attend.</p><p>Rêveur : Moi je vois… des âmes qui se croisent, des regards qui se cherchent…</p><p>Lobs : Moi je vois surtout des gens qui repartent parce qu’il n’y a ni place, ni café, ni raison de rester.</p>",
    question: "Que fait-on dans une salle de -pause- ?",
    answer: "pause"
  },
  {
    name: "Nous sommes le Robot",
    coords: [46.597828, 1.599154],
    text:
      "<p>Doc : Et voici… le Robot. Une relique de puissance brute et d’ingénierie oubliée. Tellement ancien que même ses créateurs ont probablement oublié où est le bouton “ON”. Il peut amalgamer n’importe quelle matière.</p><p>Lobs : Impressionnant. Donc en résumé, il fusionne tout… sauf les preuves qu’il a déjà servi. Parce que là, à part la poussière, il a l’air sorti d’un magasin… jamais ouvert.</p><p>Rêveur : Oh… imaginez… des métaux en fusion, des étincelles, une symphonie industrielle… ça devait être magnifique…</p><p>Lobs : Ouais, surtout le jour imaginaire où quelqu’un a réussi à le brancher.</p><p>Doc : Vous manquez de vision. Ce robot est une légende vivante !</p><p>Lobs : Vivante ? Il bouge moins qu’un meuble IKEA monté de travers.</p><p>Rêveur : Peut-être qu’il attend… le bon moment… ou la bonne âme…</p><p>Lobs : Ou une prise électrique, pour commencer.</p><p>Doc : Je vous assure qu’il fonctionne parfaitement !</p><p>Lobs : Ah oui ? Et il amalgame quoi, là, tout de suite ?</p><p>Doc : …Du potentiel.</p><p>Lobs : Ah. Donc il transforme du vide en promesses. C’est pas un robot, c’est un politicien.</p>",
    question: "Que fait un robot de -soudure- ?",
    answer: "souder"
  },
  {
    name: "Chaîne TS",
    coords: [46.59823, 1.59938],
    text:
      "Ici, les produits prennent forme. Chaque étape est cruciale pour le résultat final.",
    question: "Une chaîne de -production- sert à quoi ?",
    answer: "produire"
  },
  {
    name: "La verole",
    coords: [46.598581, 1.600096],
    text: "c'est assemblé ici, et une jolie vitrine du savoir non faire.",
    question: "Une chaîne de -production- sert à quoi ?",
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

function normalize(s) {
  return s.toLowerCase().trim();
}

// === MARKERS ===
points.forEach((p, i) => {
  let marker = L.marker(p.coords).addTo(map).bindPopup(p.name);

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
  quizDialogues.innerHTML = "";

  quizDialogues.innerHTML = "";

  if (p.dialogues) {
    p.dialogues.forEach((d) => {
      const div = document.createElement("div");
      div.className = "dialogue";

      div.innerHTML = `
            <img src="${d.avatar}">
            <div class="dialogueContent">
                <div class="speakerName">${d.speaker}</div>
                <div class="dialogueText">${d.text}</div>
            </div>
        `;

      quizDialogues.appendChild(div);
    });
  } else if (p.text) {
    // fallback ancien système
    const temp = document.createElement("div");
    temp.innerHTML = p.text;

    temp.querySelectorAll("p").forEach((pTag, i) => {
      const div = document.createElement("div");
      div.className = "dialogue";

      div.innerHTML = `
            <img src="avatar${(i % 2) + 1}.png">
            <div class="dialogueContent">
                <div class="speakerName">???</div>
                <div class="dialogueText">${pTag.innerHTML}</div>
            </div>
        `;

      quizDialogues.appendChild(div);
    });
  }

  quizQuestion.innerText = p.question;
  quizInput.value = "";

  if (p.hint) {
    quizHint.classList.remove("hidden");
    quizHint.innerText = "💡 " + p.hint;
  } else {
    quizHint.classList.add("hidden");
  }
  if (p.success) {
    quizSuccess.classList.remove("hidden");
    successImg.src = p.success.img;
    successText.innerText = p.success.text;
    successLink.href = p.success.link;
  } else {
    quizSuccess.classList.add("hidden");
  }

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
function checkFinal() {
  let success = true;

  points.forEach((p, i) => {
    if (normalize(answers[i]) !== normalize(p.answer)) {
      success = false;
    }
  });

  if (success) {
    revealSecret();
  } else {
    alert("❌ Certaines réponses sont fausses !");
  }
}

// === SECRET ===
function revealSecret() {
  L.marker([46.5981, 1.6]).addTo(map).bindPopup("🔓 Secret").openPopup();

  showWin();
}

// === WIN ===
const winScreen = document.getElementById("winScreen");
const winSound = document.getElementById("winSound");

function showWin() {
  winScreen.classList.add("show");
  winSound.play().catch(() => {});

  startConfetti();
}

// === CONFETTI ===
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6,
      d: Math.random() * 5
    });
  }
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((c) => {
    ctx.fillRect(c.x, c.y, c.r, c.r);
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });

  requestAnimationFrame(draw);
}

const quizDialogues = document.getElementById("quizDialogues");
const quizSuccess = document.getElementById("quizSuccess");
const quizHint = document.getElementById("quizHint");

function parseDialogues(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;

  const paragraphs = temp.querySelectorAll("p");

  return Array.from(paragraphs).map((p, i) => ({
    text: p.innerHTML,
    speaker: i % 2 === 0 ? "left" : "right",
    avatar: i % 2 === 0 ? "avatar1.png" : "avatar2.png"
  }));
}
