const closeSVG = document.querySelector('.close-recipe-svg');
const backDrop = document.querySelector('.backdrop');
const popUp = document.querySelector('.pop-up-recipe');
console.log(closeSVG);
function closePopUPRecipe() {
    closeSVG.addEventListener('click', onClickSVG); 
  }
  function onClickSVG() {
    backDrop.style.display = 'none';
    popUp.style.display = 'none'

  }
  closePopUPRecipe();