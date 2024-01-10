
const colourGuess = document.getElementById("colourGuess");
const newColrBtn = document.getElementById("newColrBtn");
const correctMessage = document.getElementById("correctMessage");
const score = document.getElementById("score");
const allBoxes = document.querySelectorAll(".box");


let newColour = null;
let displayScore = 0;
let guess = false;


allBoxes.forEach((colourBox) => {
    colourBox.addEventListener("click", () => {

        if(guess){
            if (colourBox.style.backgroundColor === newColour) {
                correct();
            } else {
                colourBox.style.opacity = "0";
            }
        }
    });
});

const correct = () => {
    guess = false;
    displayScore++
    score.textContent = displayScore;
    correctMessage.style.opacity = "1";
    // changed to forEach to make more robust and tidy
    allBoxes.forEach((box) => {
        box.style.backgroundColor = newColour;
    });

}

const resetGame = () => {
    guess = true;
    correctMessage.style.opacity = "0";
    // same changes. seems to work the same, unsure if there is any disadvantage?
    allBoxes.forEach((box) => {
        box.style.opacity = "1";
        box.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    });
    let elementGuess = allBoxes[Math.floor(Math.random() * allBoxes.length)]

    newColour = elementGuess.style.backgroundColor;

    colourGuess.textContent = newColour;
}
resetGame()

newColrBtn.addEventListener("click", resetGame)