// ========================================
// OUR LITTLE WORLD 1.1
// FULL SCRIPT
// ========================================


// ========================================
// ELEMENTS
// ========================================

const heartCount =
  document.getElementById(
    "heartCount"
  );

const heroDialogue =
  document.getElementById(
    "heroDialogue"
  );

const memoriesList =
  document.getElementById(
    "memoriesList"
  );

const memoryCount =
  document.getElementById(
    "memoryCount"
  );

const randomEventButton =
  document.getElementById(
    "randomEventButton"
  );

const petMoriButton =
  document.getElementById(
    "petMoriButton"
  );

const moriText =
  document.getElementById(
    "moriText"
  );

const resetButton =
  document.getElementById(
    "resetButton"
  );


// ========================================
// DATE SCENE ELEMENTS
// ========================================

const sceneOverlay =
  document.getElementById(
    "sceneOverlay"
  );

const sceneImage =
  document.getElementById(
    "sceneImage"
  );

const sceneTitle =
  document.getElementById(
    "sceneTitle"
  );

const sceneText =
  document.getElementById(
    "sceneText"
  );

const sceneChoices =
  document.getElementById(
    "sceneChoices"
  );

const closeScene =
  document.getElementById(
    "closeScene"
  );


// ========================================
// SAVED DATA
// ========================================

let hearts =
  Number(
    localStorage.getItem(
      "littleWorldHearts"
    )
  ) || 0;


let memories =
  JSON.parse(
    localStorage.getItem(
      "littleWorldMemories"
    ) || "[]"
  );


heartCount.textContent =
  hearts;


// ========================================
// DATE SCENES
// ========================================

const dateScenes = {

  sushi: {

    title:
      "Sushi Date",

    image:
      "sushi.PNG",

    intro:
      "The restaurant is warm and quiet. Elias immediately slides into the seat beside you instead of sitting across from you.",

    choices: [

      {
        text:
          "Steal one of his sushi pieces.",

        result:
          "Elias stares at the empty spot on his plate, then at you. “You know you could've just asked.” He pushes another piece toward you anyway.",

        hearts:
          3,

        memory: {
          icon:
            "🍣",

          text:
            "Sushi date — you stole Elias's sushi and he gave you another piece anyway."
        }
      },

      {
        text:
          "Rest your head on his shoulder.",

        result:
          "He goes completely still for half a second, then quietly leans his head against yours. “Comfortable?”",

        hearts:
          5,

        memory: {
          icon:
            "🖤",

          text:
            "Sushi date — you rested against Elias while you waited for dessert."
        }
      }

    ]
  },


  movie: {

    title:
      "Movie Night",

    image:
      "movie.PNG",

    intro:
      "The lights are off, the movie has barely started, and Elias has already taken more than half the blanket.",

    choices: [

      {
        text:
          "Steal the blanket back.",

        result:
          "You yank it toward yourself. Elias looks offended for approximately two seconds before pulling you closer so you both fit underneath it.",

        hearts:
          4,

        memory: {
          icon:
            "🎬",

          text:
            "Movie night — the blanket fight ended with both of you squeezed underneath it."
        }
      },

      {
        text:
          "Pretend to fall asleep on him.",

        result:
          "Elias lowers the volume and stops moving entirely. A few minutes later he whispers, “I know you're awake, by the way.”",

        hearts:
          5,

        memory: {
          icon:
            "🍿",

          text:
            "Movie night — Elias knew you were pretending to sleep but let you stay there anyway."
        }
      }

    ]
  },


  walk: {

    title:
      "Night Walk",

    image:
      "walk.PNG",

    intro:
      "The streets are quiet and cool. Elias notices your hands are cold before you even say anything.",

    choices: [

      {
        text:
          "Reach for his hand.",

        result:
          "He threads his fingers through yours immediately. “Yeah. That's better.”",

        hearts:
          5,

        memory: {
          icon:
            "🌙",

          text:
            "Night walk — you held hands the whole way home."
        }
      },

      {
        text:
          "Tell him you're freezing.",

        result:
          "Without answering, Elias pulls one sleeve over your hand and keeps you tucked against his side. “You're dramatic.”",

        hearts:
          4,

        memory: {
          icon:
            "✨",

          text:
            "Night walk — Elias complained you were dramatic while keeping you warm."
        }
      }

    ]
  },


  home: {

    title:
      "Stay Home with Mori",

    image:
      "home.PNG",

    intro:
      "You barely sit down before Mori climbs between you and Elias like he personally arranged the evening.",

    choices: [

      {
        text:
          "Give Mori all your attention.",

        result:
          "Mori immediately starts purring. Elias watches from beside you. “Wow. Okay. I see where I rank.”",

        hearts:
          3,

        memory: {
          icon:
            "🐈‍⬛",

          text:
            "Stayed home — Mori stole all your attention and Elias pretended not to care."
        }
      },

      {
        text:
          "Pull Elias closer too.",

        result:
          "Now Mori is on your lap and Elias is leaning against you. Elias sighs. “Fine. Shared custody.”",

        hearts:
          6,

        memory: {
          icon:
            "♡",

          text:
            "Stayed home — somehow you ended up cuddling Elias and Mori at the same time."
        }
      }

    ]
  }

};


// ========================================
// RANDOM EVENTS
// ========================================

const randomEvents = [

  {
    text:
      "Mori climbs onto your lap. Elias looks personally betrayed.",

    hearts:
      1
  },


  {
    text:
      "Elias quietly rests his head against yours.",

    hearts:
      3
  },


  {
    text:
      "You catch Elias staring. He immediately goes, “What?”",

    hearts:
      2
  },


  {
    text:
      "Elias steals your phone and takes the worst selfie imaginable.",

    hearts:
      2
  },


  {
    text:
      "You fall asleep beside Elias. He stays completely still so he doesn't wake you.",

    hearts:
      5
  },


  {
    text:
      "Mori knocks something over. Neither of you gets up.",

    hearts:
      1
  },


  {
    text:
      "Elias looks at you for a second and quietly says, “Come here.”",

    hearts:
      4
  },


  {
    text:
      "You steal Elias's hoodie. He notices immediately and decides not to ask for it back.",

    hearts:
      3
  },


  {
    text:
      "Elias kisses your forehead and then acts like absolutely nothing happened.",

    hearts:
      4
  }

];


// ========================================
// MORI EVENTS
// ========================================

const moriEvents = [

  "Mori purrs immediately. Elias looks offended that it was apparently that easy.",

  "Mori headbutts your hand for more attention.",

  "Mori flops dramatically onto his side.",

  "Mori stares at Elias while you pet him. Elias: “Don't start.”",

  "Mori has decided your lap belongs to him now."

];


// ========================================
// SAVE DATA
// ========================================

function saveData() {

  localStorage.setItem(
    "littleWorldHearts",
    hearts
  );


  localStorage.setItem(
    "littleWorldMemories",
    JSON.stringify(
      memories
    )
  );

}


// ========================================
// HEARTS
// ========================================

function addHearts(
  amount
) {

  hearts +=
    amount;


  heartCount.textContent =
    hearts;


  saveData();

}


// ========================================
// HERO DIALOGUE
// ========================================

function setDialogue(
  text
) {

  heroDialogue.style.opacity =
    "0";


  setTimeout(
    function() {

      heroDialogue.innerHTML =
        text;

      heroDialogue.style.opacity =
        "1";

    },
    120
  );

}


// ========================================
// MEMORIES
// ========================================

function unlockMemory(
  memory
) {

  const exists =
    memories.some(
      item =>
        item.text ===
        memory.text
    );


  if (!exists) {

    memories.push(
      memory
    );


    saveData();

    renderMemories();

  }

}


function renderMemories() {

  memoriesList.innerHTML =
    "";


  memoryCount.textContent =
    `${memories.length} unlocked`;


  if (
    memories.length === 0
  ) {

    memoriesList.innerHTML =
      `
      <div class="empty">
        Your memories will appear here ♡
      </div>
      `;

    return;

  }


  memories
    .slice()
    .reverse()
    .forEach(
      function(memory) {

        const item =
          document.createElement(
            "div"
          );


        item.className =
          "memory";


        item.innerHTML =
          `
          <div class="memory-icon">
            ${memory.icon}
          </div>

          <div class="memory-text">
            ${memory.text}
          </div>

          <div class="memory-heart">
            ♡
          </div>
          `;


        memoriesList.appendChild(
          item
        );

      }
    );

}


// ========================================
// OPEN DATE SCENE
// ========================================

function openDateScene(
  dateName
) {

  const scene =
    dateScenes[
      dateName
    ];


  if (!scene) {
    return;
  }


  sceneImage.src =
    scene.image;


  sceneImage.alt =
    scene.title;


  sceneTitle.textContent =
    scene.title;


  sceneText.textContent =
    scene.intro;


  sceneChoices.innerHTML =
    "";


  scene.choices.forEach(
    function(choice) {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "scene-choice";


      button.textContent =
        choice.text;


      button.addEventListener(
        "click",
        function() {

          chooseSceneOption(
            choice
          );

        }
      );


      sceneChoices.appendChild(
        button
      );

    }
  );


  sceneOverlay.classList.remove(
    "hidden"
  );

}


// ========================================
// CHOOSE DATE OPTION
// ========================================

function chooseSceneOption(
  choice
) {

  sceneChoices.innerHTML =
    "";


  const result =
    document.createElement(
      "div"
    );


  result.className =
    "scene-result";


  result.textContent =
    choice.result;


  sceneChoices.appendChild(
    result
  );


  addHearts(
    choice.hearts
  );


  unlockMemory(
    choice.memory
  );


  setDialogue(
    choice.result
  );


  const closeButton =
    document.createElement(
      "button"
    );


  closeButton.className =
    "scene-choice";


  closeButton.textContent =
    `♡ Continue  +${choice.hearts}`;


  closeButton.addEventListener(
    "click",
    function() {

      sceneOverlay.classList.add(
        "hidden"
      );

    }
  );


  sceneChoices.appendChild(
    closeButton
  );

}


// ========================================
// DATE BUTTON EVENTS
// ========================================

document
  .querySelectorAll(
    "[data-date]"
  )
  .forEach(
    function(button) {

      button.addEventListener(
        "click",
        function() {

          openDateScene(
            button.dataset.date
          );

        }
      );

    }
  );


// ========================================
// CLOSE SCENE
// ========================================

closeScene.addEventListener(
  "click",
  function() {

    sceneOverlay.classList.add(
      "hidden"
    );

  }
);


sceneOverlay.addEventListener(
  "click",
  function(event) {

    if (
      event.target ===
      sceneOverlay
    ) {

      sceneOverlay.classList.add(
        "hidden"
      );

    }

  }
);


// ========================================
// RANDOM EVENT
// ========================================

randomEventButton
  .addEventListener(
    "click",
    function() {

      const event =
        randomEvents[
          Math.floor(
            Math.random() *
            randomEvents.length
          )
        ];


      setDialogue(
        event.text
      );


      addHearts(
        event.hearts
      );

    }
  );


// ========================================
// MORI
// ========================================

petMoriButton
  .addEventListener(
    "click",
    function() {

      const event =
        moriEvents[
          Math.floor(
            Math.random() *
            moriEvents.length
          )
        ];


      moriText.textContent =
        event;


      addHearts(
        1
      );

    }
  );


// ========================================
// PAGE NAVIGATION
// ========================================

const navButtons =
  document.querySelectorAll(
    ".nav-button"
  );


const homeSections = [

  document.querySelector(
    ".hero"
  ),

  document.querySelector(
    ".section"
  ),

  document.querySelector(
    ".memory-area"
  )

];


const moriPage =
  document.getElementById(
    "moriPage"
  );

const albumPage =
  document.getElementById(
    "albumPage"
  );

const settingsPage =
  document.getElementById(
    "settingsPage"
  );


function hidePages() {

  moriPage.classList.add(
    "hidden"
  );

  albumPage.classList.add(
    "hidden"
  );

  settingsPage.classList.add(
    "hidden"
  );

}


function showHome() {

  homeSections.forEach(
    function(section) {

      section.classList.remove(
        "hidden"
      );

    }
  );


  hidePages();

}


function hideHome() {

  homeSections.forEach(
    function(section) {

      section.classList.add(
        "hidden"
      );

    }
  );

}


// ========================================
// NAV BUTTON EVENTS
// ========================================

navButtons.forEach(
  function(button) {

    button.addEventListener(
      "click",
      function() {

        navButtons.forEach(
          item =>
            item.classList.remove(
              "active"
            )
        );


        button.classList.add(
          "active"
        );


        const page =
          button.dataset.page;


        if (
          page === "home"
        ) {

          showHome();

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

        }


        else if (
          page ===
          "memories"
        ) {

          showHome();


          setTimeout(
            function() {

              document
                .querySelector(
                  ".memory-area"
                )
                .scrollIntoView({
                  behavior:
                    "smooth"
                });

            },
            100
          );

        }


        else {

          hideHome();

          hidePages();


          if (
            page ===
            "mori"
          ) {

            moriPage.classList.remove(
              "hidden"
            );

          }


          if (
            page ===
            "album"
          ) {

            albumPage.classList.remove(
              "hidden"
            );

          }


          if (
            page ===
            "settings"
          ) {

            settingsPage.classList.remove(
              "hidden"
            );

          }


          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

        }

      }
    );

  }
);


// ========================================
// RESET PROGRESS
// ========================================

resetButton
  .addEventListener(
    "click",
    function() {

      const confirmed =
        confirm(
          "Reset all hearts and memories?"
        );


      if (
        !confirmed
      ) {
        return;
      }


      hearts =
        0;


      memories =
        [];


      saveData();


      heartCount.textContent =
        hearts;


      renderMemories();


      setDialogue(
        "A fresh start? Okay. Come here."
      );

    }
  );


// ========================================
// TIME GREETING
// ========================================

function startupGreeting() {

  const hour =
    new Date()
      .getHours();


  if (
    hour >= 0 &&
    hour < 5
  ) {

    setDialogue(
      "There you are.<br>Why are we awake this late?"
    );

  }


  else if (
    hour < 10
  ) {

    setDialogue(
      "Morning.<br>Come stay with me for five more minutes."
    );

  }


  else if (
    hour < 18
  ) {

    setDialogue(
      "There you are.<br>What are we doing today?"
    );

  }


  else {

    setDialogue(
      "There you are.<br>What are we doing tonight?"
    );

  }

}


// ========================================
// START
// ========================================

renderMemories();

startupGreeting();
