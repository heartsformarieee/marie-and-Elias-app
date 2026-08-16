// ========================================
// OUR LITTLE WORLD 1.4
// DATE SCENES + RANDOM EVENTS + ALBUM
// ========================================


// ========================================
// ELEMENTS
// ========================================

const heartCount =
  document.getElementById("heartCount");

const heroDialogue =
  document.getElementById("heroDialogue");

const memoriesList =
  document.getElementById("memoriesList");

const memoryCount =
  document.getElementById("memoryCount");

const randomEventButton =
  document.getElementById("randomEventButton");

const homePage =
  document.getElementById("homePage");

const moriPage =
  document.getElementById("moriPage");

const albumPage =
  document.getElementById("albumPage");

const settingsPage =
  document.getElementById("settingsPage");

const petMoriButton =
  document.getElementById("petMoriButton");

const moriText =
  document.getElementById("moriText");

const resetButton =
  document.getElementById("resetButton");

const navButtons =
  document.querySelectorAll(".nav-button");


// SCENE

const sceneOverlay =
  document.getElementById("sceneOverlay");

const sceneImage =
  document.getElementById("sceneImage");

const sceneTitle =
  document.getElementById("sceneTitle");

const sceneText =
  document.getElementById("sceneText");

const sceneChoices =
  document.getElementById("sceneChoices");

const closeScene =
  document.getElementById("closeScene");


// ALBUM

const albumGrid =
  document.getElementById("albumGrid");

const albumProgress =
  document.getElementById("albumProgress");

const albumProgressFill =
  document.getElementById("albumProgressFill");


// PHOTO VIEWER

const photoOverlay =
  document.getElementById("photoOverlay");

const photoViewerImage =
  document.getElementById("photoViewerImage");

const photoViewerTitle =
  document.getElementById("photoViewerTitle");

const photoViewerCaption =
  document.getElementById("photoViewerCaption");

const closePhoto =
  document.getElementById("closePhoto");


// ========================================
// SAVED DATA
// ========================================

let hearts =
  Number(
    localStorage.getItem(
      "littleWorldHearts"
    )
  ) || 0;


let memories;

try {

  memories =
    JSON.parse(
      localStorage.getItem(
        "littleWorldMemories"
      ) || "[]"
    );

} catch {

  memories = [];

}


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
// RANDOM SCENES
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
          "Elias shrugs. “Nothing.” You keep staring. “…You're pretty. Happy?”",

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
          "Neither of you says anything. Elias eventually breaks first. “Okay, this is getting weird.”",

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
          "He holds it out of reach and takes a horribly timed selfie. “Perfect. Album material.”",

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
          "You pose like it's a magazine cover. Elias starts laughing. “Why did you commit that hard?”",

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
      "You find one of Elias's hoodies nearby and put it on without asking. He notices instantly.",

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
          "“Oh, is it?” Elias says. He pulls the hood over your face. “Fine. Keep it.”",

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

  }

];


// ========================================
// SPECIAL EVENTS
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
        "Elias is unusually quiet before saying, “You know you're my favorite person, right?”",

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
        "Elias looks at you and smiles slightly. “I really like this. Us, I mean.”",

      choices: [

        {

          text:
            "Lean into him.",

          result:
            "You lean against him. Elias rests his cheek against your hair. “Yeah. Exactly this.”",

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
// ALBUM
// ========================================

const albumPhotos = [

  {

    id:
      "couple",

    title:
      "Us ♡",

    image:
      "couple.PNG",

    caption:
      "Our little world started here.",

    requirement:
      function() {

        return (
          hearts >= 10
        );

      },

    lockedText:
      "Reach 10 hearts"

  },


  {

    id:
      "sushi",

    title:
      "Sushi Date",

    image:
      "sushi.PNG",

    caption:
      "Sushi tastes better when we're sitting way too close.",

    requirement:
      function() {

        return memoryContains(
          "Sushi date"
        );

      },

    lockedText:
      "Go on a sushi date"

  },


  {

    id:
      "movie",

    title:
      "Movie Night",

    image:
      "movie.PNG",

    caption:
      "We definitely watched the entire movie. Definitely.",

    requirement:
      function() {

        return memoryContains(
          "Movie night"
        );

      },

    lockedText:
      "Have a movie night"

  },


  {

    id:
      "walk",

    title:
      "Night Walk",

    image:
      "walk.PNG",

    caption:
      "Cold hands, quiet streets, and you beside me.",

    requirement:
      function() {

        return memoryContains(
          "Night walk"
        );

      },

    lockedText:
      "Take a night walk"

  },


  {

    id:
      "home",

    title:
      "Home ♡",

    image:
      "home.PNG",

    caption:
      "Sometimes staying home together is the best date.",

    requirement:
      function() {

        return memoryContains(
          "Stayed home"
        );

      },

    lockedText:
      "Stay home together"

  },


  {

    id:
      "mori",

    title:
      "Mori",

    image:
      "morii.PNG",

    caption:
      "Third wheel? No. Mori owns the relationship and we merely live in it.",

    requirement:
      function() {

        return (
          memoryContains("Mori") ||
          hearts >= 25
        );

      },

    lockedText:
      "Make a memory with Mori"

  }

];


// ========================================
// SAVE
// ========================================

function saveData() {

  localStorage.setItem(
    "littleWorldHearts",
    hearts
  );


  localStorage.setItem(
    "littleWorldMemories",
    JSON.stringify(memories)
  );

}


// ========================================
// HEARTS
// ========================================

function addHearts(amount) {

  hearts += amount;

  heartCount.textContent =
    hearts;

  saveData();

  renderAlbum();

}


// ========================================
// DIALOGUE
// ========================================

function setDialogue(text) {

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

function memoryContains(text) {

  return memories.some(
    function(memory) {

      return memory.text
        .toLowerCase()
        .includes(
          text.toLowerCase()
        );

    }
  );

}


function unlockMemory(memory) {

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

    memories.push(memory);

    saveData();

    renderMemories();

    renderAlbum();

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
// ALBUM RENDERING
// ========================================

function renderAlbum() {

  albumGrid.innerHTML =
    "";


  let unlockedCount =
    0;


  albumPhotos.forEach(
    function(photo) {

      const unlocked =
        photo.requirement();


      if (unlocked) {

        unlockedCount++;

      }


      const card =
        document.createElement(
          "button"
        );


      card.type =
        "button";


      card.className =
        unlocked
          ? "album-photo"
          : "album-photo locked";


      const image =
        document.createElement(
          "img"
        );


      image.src =
        photo.image;


      image.alt =
        photo.title;


      image.className =
        "album-photo-image";


      card.appendChild(
        image
      );


      if (!unlocked) {

        const lock =
          document.createElement(
            "div"
          );


        lock.className =
          "album-lock";


        lock.innerHTML =
          `
          <span>🔒</span>
          <small>
            ${photo.lockedText}
          </small>
          `;


        card.appendChild(
          lock
        );

      }


      const info =
        document.createElement(
          "div"
        );


      info.className =
        "album-photo-info";


      info.innerHTML =
        `
        <strong>
          ${
            unlocked
              ? photo.title
              : "Locked Memory"
          }
        </strong>

        <small>
          ${
            unlocked
              ? "Tap to open ♡"
              : "Keep making memories..."
          }
        </small>
        `;


      card.appendChild(
        info
      );


      if (unlocked) {

        card.addEventListener(
          "click",
          function() {

            openPhoto(
              photo
            );

          }
        );

      }


      albumGrid.appendChild(
        card
      );

    }
  );


  albumProgress.textContent =
    `${unlockedCount} / ${albumPhotos.length} unlocked`;


  const percent =
    (
      unlockedCount /
      albumPhotos.length
    ) * 100;


  albumProgressFill.style.width =
    `${percent}%`;

}


// ========================================
// PHOTO VIEWER
// ========================================

function openPhoto(photo) {

  photoViewerImage.src =
    photo.image;


  photoViewerImage.alt =
    photo.title;


  photoViewerTitle.textContent =
    photo.title;


  photoViewerCaption.textContent =
    photo.caption;


  photoOverlay.classList.remove(
    "hidden"
  );

}


function closePhotoViewer() {

  photoOverlay.classList.add(
    "hidden"
  );

}


closePhoto.addEventListener(
  "click",
  closePhotoViewer
);


photoOverlay.addEventListener(
  "click",
  function(event) {

    if (
      event.target ===
      photoOverlay
    ) {

      closePhotoViewer();

    }

  }
);


// ========================================
// GENERIC SCENE
// ========================================

function openScene(scene) {

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


      button.type =
        "button";


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
// CHOOSE SCENE OPTION
// ========================================

function chooseSceneOption(choice) {

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

          const scene =
            dateScenes[
              card.dataset.date
            ];


          if (scene) {

            openScene(
              scene
            );

          }

        }
      );

    }
  );


// ========================================
// RANDOM EVENTS
// ========================================

function getRandomScene() {

  const availableSpecials =
    specialRandomScenes.filter(
      function(item) {

        return (
          hearts >=
          item.minimumHearts
        );

      }
    );


  if (
    availableSpecials.length > 0 &&
    Math.random() < 0.25
  ) {

    const special =
      availableSpecials[
        Math.floor(
          Math.random() *
          availableSpecials.length
        )
      ];


    return special.scene;

  }


  return randomScenes[
    Math.floor(
      Math.random() *
      randomScenes.length
    )
  ];

}


randomEventButton.addEventListener(
  "click",
  function() {

    openScene(
      getRandomScene()
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
// PAGE NAVIGATION
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

          renderAlbum();


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

          top:
            0,

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

    renderAlbum();


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

renderAlbum();

startupGreeting();
