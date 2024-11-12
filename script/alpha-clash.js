
function continueGame(){

    const alphabet=getRandomAlphabet() ;
    // console.log(alphabet);
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet ;

    //Set background color
    setBackgroundColorById(alphabet) ;

}


function play(){
    //hide the home screen

    const homeSection=document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

    continueGame();

    
}