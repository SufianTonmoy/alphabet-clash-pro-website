function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText=element.innerText ;
    const value=parseInt(elementValueText) ;
    return value ;
}

function setElementValueById(elementId,value){
    const element=document.getElementById(elementId) ;
    element.innerText=value ;
}

function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const text = element.innerText ;
    return text ;
}

function getRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz' ;
    const alphabets =alphabetString.split('');
    //get a random index between 0 - 25

    const randomNumber = Math.random() * 25 ;
    const index=Math.round(randomNumber) ;
    const alphabet=alphabets[index] ;
    return alphabet ;
}