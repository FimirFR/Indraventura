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
      img: "https://indraventura.wordpress.com/wp-content/uploads/2025/09/parking-1.png",
      text: "Succès trouvé : Le parking des anges",
      link: "https://indraventura.wordpress.com/parking/"
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
    success: {
      img: "https://indraventura.wordpress.com/wp-content/uploads/2026/03/nabilla1.png",
      text: "Succès trouvé : Nabilla",
      link: "https://indraventura.wordpress.com/nabilla1/"
    },	
    hint: "autant que d'ange",	
    answer: "0"
  },
  {
    name: "Le repos du guerrier",
    coords: [46.597662, 1.599838],
	
   dialogues: [
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Ici, mes chers collègues, la salle de détente. Un havre de paix où chacun vient relâcher la pression et retrouver son humanité."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ah oui, avec quatre sièges et demi pour huit cents personnes. C’est pas une salle de détente, c’est une épreuve de Koh-Lanta version bureau."
      },
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Regardez… ces espaces… ces volumes… c’est un lieu d’échange, de partage, presque sacré…"
      },	
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Sacré, oui. Faut être béni pour trouver une place assise."
      },	  
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Et vous noterez ces distributeurs, parfaitement intégrés, offrant boissons et douceurs à toute heure."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Intégrés, oui… surtout dans le décor. Vu la couche de poussière, même les snacks ont posé leur démission."
      },		  
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Peut-être que les gens viennent ici pour autre chose… discuter, se rencontrer…"
      },	  
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ou juste vérifier si quelqu’un a enfin réussi à faire marcher la machine à café."
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Vous êtes d’un cynisme… cet endroit respire la convivialité !"
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Il respire surtout le vide. On dirait une salle d’attente… sans personne qui attend."
      },	  
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: " Moi je vois… des âmes qui se croisent, des regards qui se cherchent…"
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Moi je vois surtout des gens qui repartent parce qu’il n’y a ni place, ni café, ni raison de rester."
      }
    ],
    question: "Combien y a-ti de gobelet(s) vide à dispostion ?",
    success: {
      img: "https://indraventura.wordpress.com/wp-content/uploads/2025/07/compas-1.png",
      text: "Succès trouvé : Le compas dans l'oeil",
      link: "https://indraventura.wordpress.com/compas/"
    },	
    answer: "0"
  },
  
  
   {
    name: "La salle sécurisée",
    coords: [46.597754, 1.599916],
    text: "c'est assemblé ici, et une jolie vitrine du savoir non faire.",
	
	
     dialogues: [
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "C’est quoi cette porte fermée ? On dirait un boss final."
      },	 
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Derrière, se trouve le cœur de l’entreprise. Le centre vital. La salle des serveurs et des baies de brassage."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ah oui… le cerveau numérique… qui sent le barbecue."
      },
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: " Oui… c’est vrai… une odeur étrange… comme si quelqu’un préparait quelque chose… presque chaleureux…"
      },	
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Chaleureux ? Ça sent le cramé, surtout. Y a pas un petit incendie en cours, là ?"
      }, 
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Absolument pas. Ils sont simplement en train de changer les switchs."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Donc à chaque fois qu’on change un câble, ça sent la merguez électronique ?"
      }, 
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Ce sont des opérations techniques délicates."
      }, 
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Délicates, oui. À deux doigts d’appeler les pompiers, surtout."
      }, 
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Peut-être que la machine… souffre… qu’elle se transforme… qu’elle renait…"
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ou peut-être qu’elle fond, tout simplement."
      }, 
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Tout est sous contrôle."
      }, 
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "C’est rassurant. C’est exactement ce qu’on dit juste avant une panne générale."
      }
    ],	
    question: "Si on fait exception de la porte principale, de combien d'autres issues dipose cette pièce ?",
    success: {
      img: "https://indraventura.wordpress.com/wp-content/uploads/2025/07/switch3-1.png",
      text: "Succès trouvé : Ca sent le brulé non ?",
      link: "https://indraventura.wordpress.com/switch3/"
    },	
    answer: "0"
  }, 
  
  
  
  
  
  
  {
    name: "La Machine de Mesure",
    coords: [46.597769, 1.599482],
	dialogues: [
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Rooohhhhhh… quelle magnifique machine… on dirait un autel sacré dédié à la précision…"
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "De quoi ? Le cube avec un cylindre dessus ? On dirait un micro-ondes qui a raté sa vocation."
      },	  
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Un peu de respect. C’est une Machine de Mesure Tridimensionnelle"
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Traduction : ça mesure des trucs en 3D. Waouh, révolution. Et ça sert à faire quoi, concrètement ?"
      },
     {
        speaker: "Doc",
        avatar: "doc.png",
        text: "À mesurer les longueurs, largeurs, hauteurs, ainsi que les angles droits des pièces."
      },		
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "C’est… prodigieux… la géométrie incarnée…"
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Donc en gros, si t’as un cube parfait, elle est heureuse. Si t’as autre chose… elle fait une dépression ?"
      },
     {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Disons que pour des formes plus complexes, il faut des modules complémentaires."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ah. Donc pour mesurer autre chose que des Lego, faut passer à la caisse."
      },
     {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Ce sont des équipements de précision, forcément—"
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Forcément hors de prix, oui. Donc de base, elle fait le strict minimum, et pour le reste… DLC ?"
      },
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Peut-être qu’elle évolue… comme une entité… qu’on nourrit de modules…"
      },	  
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Super, une machine à abonnement. Bientôt elle va demander une mise à jour pour mesurer un rond."
      },	  
     {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Vous simplifiez beaucoup trop…"
      },	  
     {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Non, je résume : sans options, elle mesure des cubes. Avec options, elle mesure ton budget."
      }
    ],		
    question: "Si on retire 90 à l'angle qu'elle peut mesurer, quel chiffre obitent-on ?",
    success: {
      img: "https://indraventura.wordpress.com/wp-content/uploads/2025/07/mmt2-1.png",
      text: "Succès trouvé : MMT",
      link: "https://indraventura.wordpress.com/mmt2/"
    },	
    answer: "0"
  },  
  
  {
    name: "Nous sommes le Robot",
    coords: [46.597828, 1.599154],
	dialogues: [
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Et voici… le Robot. Une relique de puissance brute et d’ingénierie oubliée. Tellement ancien que même ses créateurs ont probablement oublié où est le bouton “ON”. Il peut amalgamer n’importe quelle matière."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Impressionnant. Donc en résumé, il fusionne tout… sauf les preuves qu’il a déjà servi. Parce que là, à part la poussière, il a l’air sorti d’un magasin… jamais ouvert."
      },
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Oh… imaginez… des métaux en fusion, des étincelles, une symphonie industrielle… ça devait être magnifique…"
      },		
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ouais, surtout le jour imaginaire où quelqu’un a réussi à le brancher."
      },	  
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Vous manquez de vision. Ce robot est une légende vivante !"
      },	  
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Vivante ? Il bouge moins qu’un meuble IKEA monté de travers."
      },	  
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Peut-être qu’il attend… le bon moment… ou la bonne âme…"
      },		  
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ou une prise électrique, pour commencer."
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Je vous assure qu’il fonctionne parfaitement !"
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ah oui ? Et il amalgame quoi, là, tout de suite ?"
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: " …Du potentiel."
      },	  
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ah. Donc il transforme du vide en promesses. C’est pas un robot, c’est un politicien."
      }
    ],	
    question: "Pendant combien de mois consécutif le robot a tourné en continu ?",
    hint: "Rappelez vous des anges",	
    answer: "0"
  },
  {
    name: "CEVESO",
    coords: [46.59823, 1.59938],

dialogues: [
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Il y a une odeur… différente ici… à la fois agréable, déplaisante… et presque… envoûtante…"
      },	
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Oui, ça s’appelle des produits chimiques. Moins poétique, mais plus réaliste."
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Exact. C’est ici que sont stockés et utilisés tous les produits dangereux, avec leurs protocoles de sécurité stricts—"
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "“Stricts”… et si ça fuit, si ça explose, ou si quelqu’un oublie un bouchon ?"
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Il y a des procédures très claires en cas d’incident."
      },	
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ah oui ? Genre “courir très vite dans la direction opposée” ?"
      },
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Peut-être que cette odeur… c’est le mélange des expériences passées… des traces invisibles de science…"
      },	
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Ou des vapeurs toxiques en train de nous grignoter le cerveau, au choix."
      },
      {
        speaker: "Doc",
        avatar: "doc.png",
        text: "Vous dramatisez. Tout est parfaitement contrôlé."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Bien sûr. Comme l’interphone, le robot et la salle de détente ?"
      },
      {
        speaker: "Dingo",
        avatar: "dingo.png",
        text: "Moi je ressens… une alchimie… une transformation…"
      },	
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: " Moi je ressens surtout que si je reste trop longtemps, je vais commencer à voir deux robots inutiles."
      },
     {
        speaker: "Doc",
        avatar: "doc.png",
        text: "C’est une zone à haut potentiel scientifique."
      },
      {
        speaker: "Dex",
        avatar: "dex.png",
        text: "Oui, potentiel d’intoxication compris."
      }
    ],	

    success: {
      img: "https://indraventura.wordpress.com/wp-content/uploads/2025/07/tts2-1.png",
      text: "Succès trouvé : Traitement de surface",
      link: "https://indraventura.wordpress.com/tts2/"
    },		  
    question: "Combien y'a t il de variétés de produits non toxique dans les différentes cuves ? L'eau ne compte pas.",
    answer: "0"	
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
