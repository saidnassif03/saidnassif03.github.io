const lines = [
    "Daily I sit with the language they've made"
  , "each photo is an absence, a thing gone, namely a moment, sometimes cities a tour boat balanced on a two-story home miles from shore"
  , "We say the war is over, but still the woman leans across the passenger seat my son, my son. I wasn't there so I can't know, can I?"
  , "he arrives, eyes taped shut, torso held together by black thread, fridge-cold— grief is a closed area cluttered with his fork against the plate and other forgotten musics."
  , "the mouth of someone laced with bergamot or cardamom, who dances in the kitchen and lets whatever's on the stove burn. Who burns for him"
  , "you hand plucked wild poppies to soldier friends imagine the wetness at the broken stem"
  , "Maybe around you, today, they fell until you didn't understand how you hadn't been hit."
  , 'In a tarot card reading A asks "Are you open to love? Are you keeping love in mind?"'
  , "And I place in his hands his head And I place in his hands my hands And I place in his eyes a look we share in the rearview"
]

document.addEventListener("DOMContentLoaded", () => {
   const shuffleBtn = document.getElementById("shuffleBtn");
   const mainBox = document.getElementById("main");
   const removeBorders = document.getElementById("removeBordersBtn");

   const fillFlexbox = (mainDiv) => {
    const colors = ["red", "green", "blue", "orange", "purple", "brown", "teal", "magenta"];
    for (let i = 0; i < lines.length; i++) {
        let newItem = document.createElement("div");
        let itemText = document.createTextNode(lines[i]);
        newItem.appendChild(itemText);
        newItem.style.color = colors[i % colors.length];
        mainDiv.appendChild(newItem);
    }
    };


   shuffleBtn.addEventListener("click", () => {
       shuffle(lines);
       mainBox.innerHTML = "";
       fillFlexbox(mainBox);
   });

   removeBorders.addEventListener("click", () => {
       mainBox.style.outline = "none";
       const childDivs = mainBox.querySelectorAll("div");
       childDivs.forEach((div) => {
           div.style.outline = "none";
       });
   });                

   fillFlexbox(mainBox);
});

const fillFlexbox = (mainDiv) => {
   for (let i = 0; i < lines.length; i++) {
       let newItem = document.createElement("div");
       let itemText = document.createTextNode(lines[i]);
       newItem.appendChild(itemText);
       mainDiv.appendChild(newItem);
   }
}

// Thanks https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
   let currentIndex = array.length,  randomIndex;
 
   // While there remain elements to shuffle.
   while (currentIndex != 0) {
 
     // Pick a remaining element.
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;
 
     // And swap it with the current element.
     [array[currentIndex], array[randomIndex]] = [
       array[randomIndex], array[currentIndex]];
   }
 
   return array;
}