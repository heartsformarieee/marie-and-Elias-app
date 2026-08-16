// ========================================
// OUR LITTLE WORLD 1.3
// RANDOM EVENT SCENES
// ========================================


// ========================================
// GET ELEMENTS
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

const homePage =
  document.getElementById(
    "homePage"
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

const navButtons =
  document.querySelectorAll(
    ".nav-button"
  );


// ========================================
// SCENE ELEMENTS
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
      "The restaurant is warm and quiet. Elias immediately sits beside you instead of across from you.",

    choices: [

      {
        text:
          "Steal one of his sushi pieces.",

        result:
          "Elias looks at the empty spot on his plate, then at you. “You know you could've just asked.” He pushes another piece toward you anyway.",

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
          "He goes still for half a second, then quietly leans his head against yours. “Comfortable?”",

        hearts:
          5,

        memory: {
          icon:
            "🖤",

          text:
            "Sushi date — you rested against Elias while waiting for dessert."
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
      "The lights are off, the movie has barely started, and Elias has somehow already taken most of the blanket.",

    choices: [

      {
        text:
          "Steal the blanket back.",

        result:
          "You tug it toward yourself. Elias looks offended for two seconds before pulling you closer so you both fit underneath it.",

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
          "Elias lowers the volume and stops moving. A few minutes later he whispers, “I know you're awake, by the way.”",

        hearts:
          5,

        memory: {
          icon:
            "🍿",

          text:
            "Movie night — Elias knew you were pretending to sleep but let you stay there."
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
      "The streets are quiet and cool. Elias notices your hands are cold before you say anything.",

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
            "Night walk — you held hands the entire way home."
        }
      },

      {
        text:
          "Tell him you're freezing.",

        result:
          "Elias keeps you tucked against his side. “You're dramatic.” He doesn't let go, though.",

        hearts:
          4,

        memory: {
          icon:
            "✨",

          text:
            "Night walk — Elias called you dramatic while keeping you warm."
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
      "You barely sit down before Mori climbs between you and Elias like he personally planned the evening.",

    choices: [

      {
        text:
          "Give Mori all your attention.",

        result:
          "Mori starts purring immediately. Elias watches from beside you. “Wow. Okay. I see where I rank.”",

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
          "Mori stays on your lap while Elias leans against you. He sighs. “Fine. Shared custody.”",

        hearts:
          6,

        memory: {
          icon:
            "♡",

          text:
            "Stayed home — you ended up cuddling Elias and Mori at the same time."
        }
      }

    ]

  }

};


// ========================================
// RANDOM EVENT SCENES
// ========================================

const randomScenes = [

  {
    title:
      "Mori Stole My Spot",

    image:
      "morii.PNG",

    intro:
      "You sit down for maybe three seconds before Mori climbs straight into the spot beside you. Elias stops in front of the couch and stares at him.",

    choices: [

      {
        text:
          "Let Mori stay.",

        result:
          "You keep petting Mori. Elias slowly sits on the other side and mutters, “Unbelievable.” Mori looks extremely pleased with himself.",

        hearts:
          2,

        memory: {
          icon:
            "🐈‍⬛",

          text:
            "Mori stole Elias's spot and looked very proud of himself."
        }
      },

      {
        text:
          "Pull Elias down beside you too.",

        result:
          "You grab Elias's sleeve and make room. He sits down against you while Mori stays put. “Okay. Fine. This works.”",

        hearts:
          5,

        memory: {
          icon:
            "🤍",

          text:
            "You refused to choose between Elias and Mori, so both stayed."
        }
      }

    ]

  },


  {
    title:
      "Caught Staring",

    image:
      "couple.PNG",

    intro:
      "You look up and catch Elias staring at you from across the room. He looks away approximately half a second too late.",

    choices: [

      {
        text:
          "Ask, “What?”",

        result:
          "Elias shrugs like nothing happened. “Nothing.” You keep looking at him. “…You're pretty. Happy?”",

        hearts:
          4,

        memory: {
          icon:
            "👀",

          text:
            "You caught Elias staring and forced him to admit why."
        }
      },

      {
        text:
          "Just stare back.",

        result:
          "Neither of you says anything for a few seconds. Elias finally breaks first. “Okay, this is getting weird.”",

        hearts:
          3,

        memory: {
          icon:
            "😭",

          text:
            "A staring contest somehow became a relationship moment."
        }
      }

    ]

  },


  {
    title:
      "Phone Thief",

    image:
      "couple.PNG",

    intro:
      "Elias casually takes your phone out of your hand and immediately opens the camera.",

    choices: [

      {
        text:
          "Try to grab it back.",

        result:
          "He holds it just out of reach and takes a horribly timed selfie of both of you. “Perfect. Album material.”",

        hearts:
          3,

        memory: {
          icon:
            "📱",

          text:
            "Elias stole your phone and took an absolutely terrible selfie."
        }
      },

      {
        text:
          "Pose dramatically.",

        result:
          "You pose like it's a magazine cover. Elias actually starts laughing. “Why did you commit that hard?”",

        hearts:
          4,

        memory: {
          icon:
            "📸",

          text:
            "You turned Elias's phone theft into a dramatic photoshoot."
        }
      }

    ]

  },


  {
    title:
      "Too Sleepy",

    image:
      "home.PNG",

    intro:
      "You end up half asleep beside Elias. He notices your eyes closing and lowers his voice immediately.",

    choices: [

      {
        text:
          "Fall asleep on him.",

        result:
          "You wake up later in almost the exact same position. Elias clearly refused to move because he didn't want to wake you.",

        hearts:
          6,

        memory: {
          icon:
            "🌙",

          text:
            "You fell asleep on Elias and he stayed still so you could sleep."
        }
      },

      {
        text:
          "Mumble that you're not tired.",

        result:
          "Elias raises an eyebrow. “Sure.” Less than five minutes later, you're asleep anyway.",

        hearts:
          4,

        memory: {
          icon:
            "😴",

          text:
            "You insisted you weren't tired and immediately proved yourself wrong."
        }
      }

    ]

  },


  {
    title:
      "The Hoodie",

    image:
      "home.PNG",

    intro:
      "You find one of Elias's hoodies lying nearby and put it on without asking. He notices instantly.",

    choices: [

      {
        text:
          "Act completely innocent.",

        result:
          "Elias looks at the hoodie, then at you. “Interesting. Didn't know my clothes had relocated.” He makes no attempt to take it back.",

        hearts:
          5,

        memory: {
          icon:
            "🖤",

          text:
            "You stole Elias's hoodie and he quietly decided it belonged to you now."
        }
      },

      {
        text:
          "Tell him it's yours now.",

        result:
          "“Oh, is it?” Elias says. A second later he pulls the hood over your face. “Fine. Keep it.”",

        hearts:
          5,

        memory: {
          icon:
            "🧥",

          text:
            "You officially claimed one of Elias's hoodies."
        }
      }

    ]

  },


  {
    title:
      "Forehead Kiss",

    image:
      "couple.PNG",

    intro:
      "You're talking about something completely unrelated when Elias suddenly leans over and kisses your forehead.",

    choices: [

      {
        text:
          "Immediately call him out.",

        result:
          "He looks completely unbothered. “What? I felt like it.”",

        hearts:
          5,

        memory: {
          icon:
            "💗",

          text:
            "Elias kissed your forehead in the middle of a conversation and refused to elaborate."
        }
      },

      {
        text:
          "Pretend nothing happened.",

        result:
          "You continue talking. Elias waits a few seconds, then laughs. “You're seriously not going to say anything?”",

        hearts:
          4,

        memory: {
          icon:
            "♡",

          text:
            "You tried to out-casual Elias after a surprise forehead kiss."
        }
      }

    ]

  }

];


// ========================================
// SPECIAL RANDOM EVENTS
// ========================================

const specialRandomScenes = [

  {
    minimumHearts:
      25,

    scene: {

      title:
        "Stay Here",

      image:
        "couple.PNG",

      intro:
        "You're about to get up when Elias catches your hand gently. “Where are you going?”",

      choices: [

        {
          text:
            "Sit back down.",

          result:
            "You sit beside him again. Elias looks far too satisfied. “Good choice.”",

          hearts:
            6,

          memory: {
            icon:
              "🤍",

            text:
              "Elias asked you to stay, so you did."
          }
        },

        {
          text:
            "Ask if he missed you already.",

          result:
            "Elias gives you a look. “You were gone for three seconds.” A pause. “…Yes.”",

          hearts:
            7,

          memory: {
            icon:
              "😭",

            text:
              "Elias admitted he missed you after approximately three seconds."
          }
        }

      ]

    }

  },


  {
    minimumHearts:
      50,

    scene: {

      title:
        "My Favorite Person",

      image:
        "couple.PNG",

      intro:
        "Elias is unusually quiet for a moment before saying, “You know you're my favorite person, right?”",

      choices: [

        {
          text:
            "Tell him he's yours too.",

          result:
            "His expression softens immediately. “Yeah? Good.”",

          hearts:
            8,

          memory: {
            icon:
              "💞",

            text:
              "You and Elias admitted you're each other's favorite person."
          }
        },

        {
          text:
            "Tease him about being sentimental.",

          result:
            "Elias groans. “Forget I said anything.” He is very obviously smiling.",

          hearts:
            6,

          memory: {
            icon:
              "🫶",

            text:
              "You teased Elias for being sentimental and he failed to hide his smile."
          }
        }

      ]

    }

  },


  {
    minimumHearts:
      100,

    scene: {

      title:
        "Us",

      image:
        "couple.PNG",

      intro:
        "It's one of those quiet moments where neither of you is doing anything important. Elias looks at you and smiles slightly. “I really like this. Us, I mean.”",

      choices: [

        {
          text:
            "Lean into him.",

          result:
            "You lean against him without saying anything. Elias rests his cheek against your hair. “Yeah. Exactly this.”",

          hearts:
            10,

          memory: {
            icon:
              "💗",

            text:
              "At 100 hearts, Elias told you how much he loves your little world together."
          }
        },

        {
          text:
            "Tell him you do too.",

          result:
            "Elias looks at you for a second, then quietly says, “Good. Because I'm keeping you.”",

          hearts:
            10,

          memory: {
            icon:
              "♡",

            text:
              "You reached 100 hearts and chose each other all over again."
          }
        }

      ]

    }

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
// DIALOGUE
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
      function(item) {

        return (
          item.text ===
          memory.text
        );

      }
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
// GENERIC SCENE OPENER
// ========================================

function openScene(
  scene
) {

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

      const choiceButton =
        document.createElement(
          "button"
        );


      choiceButton.type =
        "button";


      choiceButton.className =
        "scene-choice";


      choiceButton.textContent =
        choice.text;


      choiceButton.addEventListener(
        "click",
        function() {

          chooseSceneOption(
            choice
          );

        }
      );


      sceneChoices.appendChild(
        choiceButton
      );

    }
  );


  sceneOverlay.classList.remove(
    "hidden"
  );

}


// ========================================
// DATE SCENES
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


  openScene(
    scene
  );

}


// ========================================
// RANDOM SCENES
// ========================================

function getRandomScene() {

  const unlockedSpecials =
    specialRandomScenes
      .filter(
        function(item) {

          return (
            hearts >=
            item.minimumHearts
          );

        }
      );


  const specialChance =
    Math.random();


  if (
    unlockedSpecials.length > 0 &&
    specialChance < 0.25
  ) {

    const selectedSpecial =
      unlockedSpecials[
        Math.floor(
          Math.random() *
          unlockedSpecials.length
        )
      ];


    return (
      selectedSpecial.scene
    );

  }


  return (
    randomScenes[
      Math.floor(
        Math.random() *
        randomScenes.length
      )
    ]
  );

}


// ========================================
// CHOOSE SCENE OPTION
// ========================================

function chooseSceneOption(
  choice
) {

  sceneChoices.innerHTML =
    "";


  addHearts(
    choice.hearts
  );


  unlockMemory(
    choice.memory
  );


  setDialogue(
    choice.result
  );


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


  const continueButton =
    document.createElement(
      "button"
    );


  continueButton.type =
    "button";


  continueButton.className =
    "scene-choice";


  continueButton.textContent =
    `♡ Continue  +${choice.hearts}`;


  continueButton.addEventListener(
    "click",
    function() {

      sceneOverlay.classList.add(
        "hidden"
      );

    }
  );


  sceneChoices.appendChild(
    continueButton
  );

}


// ========================================
// DATE BUTTONS
// ========================================

document
  .querySelectorAll(
    ".date-card"
  )
  .forEach(
    function(card) {

      card.addEventListener(
        "click",
        function() {

          openDateScene(
            card.dataset.date
          );

        }
      );

    }
  );


// ========================================
// RANDOM EVENT BUTTON
// ========================================

randomEventButton.addEventListener(
  "click",
  function() {

    const scene =
      getRandomScene();


    openScene(
      scene
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
// MORI
// ========================================

petMoriButton.addEventListener(
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
// NAVIGATION
// ========================================

function hideAllPages() {

  homePage.classList.add(
    "hidden"
  );

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


function setActiveNav(
  pageName
) {

  navButtons.forEach(
    function(button) {

      button.classList.toggle(
        "active",
        button.dataset.page ===
          pageName
      );

    }
  );

}


navButtons.forEach(
  function(button) {

    button.addEventListener(
      "click",
      function() {

        const page =
          button.dataset.page;


        if (
          page ===
          "memories"
        ) {

          hideAllPages();


          homePage.classList.remove(
            "hidden"
          );


          setActiveNav(
            "memories"
          );


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


          return;

        }


        hideAllPages();


        if (
          page ===
          "home"
        ) {

          homePage.classList.remove(
            "hidden"
          );

        }


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


        setActiveNav(
          page
        );


        window.scrollTo({
          top: 0,
          behavior:
            "smooth"
        });

      }
    );

  }
);


// ========================================
// RESET
// ========================================

resetButton.addEventListener(
  "click",
  function() {

    const confirmed =
      confirm(
        "Reset all hearts and memories?"
      );


    if (!confirmed) {
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


    hideAllPages();


    homePage.classList.remove(
      "hidden"
    );


    setActiveNav(
      "home"
    );

  }
);


// ========================================
// STARTUP GREETING
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
