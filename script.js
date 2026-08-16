// ========================================
// OUR LITTLE WORLD 1.0
// ========================================


// ELEMENTS

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


// SAVE DATA

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


// DATE DATA

const dates = {

  sushi: {
    dialogue:
      "Sushi? Sit next to me. I'm not negotiating.",

    hearts:
      3,

    memory: {
      icon:
        "🍣",

      text:
        "Sushi date — Elias insisted you sit beside him instead of across from him."
    }
  },


  movie: {
    dialogue:
      "You pick the movie. I'm stealing half the blanket.",

    hearts:
      2,

    memory: {
      icon:
        "🎬",

      text:
        "Movie night — neither of you paid attention to the last twenty minutes."
    }
  },


  walk: {
    dialogue:
      "Night walk? Come here. Your hand's freezing.",

    hearts:
      4,

    memory: {
      icon:
        "🌙",

      text:
        "Late-night walk — Elias held your hand the entire way home."
    }
  },


  home: {
    dialogue:
      "Staying home sounds perfect. Unless Mori steals you again.",

    hearts:
      2,

    memory: {
      icon:
        "🐈‍⬛",

      text:
        "Stayed home — Mori somehow ended up between the two of you."
    }
  }

};


// RANDOM EVENTS

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


// MORI EVENTS

const moriEvents = [

  "Mori purrs immediately. Elias looks offended that it was apparently that easy.",

  "Mori headbutts your hand for more attention.",

  "Mori flops dramatically onto his side.",

  "Mori stares at Elias while you pet him. Elias: “Don't start.”",

  "Mori has decided your lap belongs to him now."

];


// SAVE

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


// HEARTS

function addHearts(
  amount
) {

  hearts +=
    amount;


  heartCount.textContent =
    hearts;


  saveData();

}


// DIALOGUE

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


// MEMORIES

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


// DATE BUTTONS

document
  .querySelectorAll(
    "[data-date]"
  )
  .forEach(
    function(button) {

      button.addEventListener(
        "click",
        function() {

          const dateName =
            button.dataset.date;


          const date =
            dates[
              dateName
            ];


          setDialogue(
            date.dialogue
          );


          addHearts(
            date.hearts
          );


          unlockMemory(
            date.memory
          );

        }
      );

    }
  );


// RANDOM EVENT

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


// MORI

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


// PAGE NAVIGATION

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

        }

      }
    );

  }
);


// RESET

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


// TIME GREETING

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


// START

renderMemories();

startupGreeting();