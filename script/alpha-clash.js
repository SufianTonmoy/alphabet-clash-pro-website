function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  // console.log('player pressed',playerPressed)
    //stop the game if pressed 'Esc'
    if(playerPressed==='Escape'){
        gameOver();
    }
  //get the expected to press

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  // console.log(expectedAlphabet);

  //check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("you get a point");

    // //1.get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // //console.log(currentScore);
    // //2.increase the score by 1
    // const newScore = currentScore + 1;
    // //3.show the update score
    // currentScoreElement.innerText = newScore;
    // //console.log(newScore);
    // ------------------------------------------------------------------------
    //1.get the current score
    const currentScore = getElementValueById("current-score");
    //2.increase the score by 1
    const updatedScore = currentScore + 1;
    //3.show the update score
    setElementValueById("current-score", updatedScore);
    removeBackgroundElementById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you missed.you lost a life");
    // const currentLifeElement=document.getElementById('current-life');
    // const currentLifeText=currentLifeElement.innerText ;
    // const currentLife=parseInt(currentLifeText);
    // const newLife=currentLife - 1 ;
    // currentLifeElement.innerText=newLife ;
    // ------------------------------------------------------------
    const currentLife = getElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getRandomAlphabet();
  // console.log(alphabet);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //Set background color
  setBackgroundColorById(alphabet);
}

function play() {
  //hide the home screen

  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");
  const finalScore = document.getElementById("final-score");
  finalScore.classList.add("hidden");

  const playGroundSection = document.getElementById("play-ground");
  playGroundSection.classList.remove("hidden");
    //reset scorer and life
    setElementValueById('current-life',5);
    setElementValueById('current-score',0);
  continueGame();
}

function gameOver() {
  const homeSection = document.getElementById("play-ground");
  homeSection.classList.add("hidden");

  const playGroundSection = document.getElementById("final-score");
  playGroundSection.classList.remove("hidden");
  //update final score

  const lastScore =getElementValueById('current-score');
  //console.log(lastScore);
  setElementValueById('last-score',lastScore);

  //clear the last selected alphabet highlight

  const currentAlphabet=getElementTextById('current-alphabet');
  removeBackgroundElementById(currentAlphabet);
}
