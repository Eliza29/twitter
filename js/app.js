/*
Versión 0.0.3
Si pasa los 140 caracteres, deshabilitar el botón.
Si pasa los 120 caracteres, mostrar el contador con OTRO color.
Si pasa los 130 caracteres, mostrar el contador con OTRO color.
Si pasa los 140 caracteres, mostrar el contador en negativo.
*/

window.addEventListener('load', function() {
   
  var twitterArea = document.getElementById('twitter-area');
  var tweetButton = document.getElementById('tweet-button');
  tweetButton.disabled = true;

  tweetButton.addEventListener('click', addText)
   
  function addText() {    
    if (twitterArea) {
      var parentDiv = document.getElementsByTagName('section')[0];
      var newDiv = document.createElement('div');
      var saveText = document.createElement('p');
        
      parentDiv.appendChild(newDiv);
      newDiv.appendChild(saveText); 
      saveText.textContent = twitterArea.value;  
        
      newDiv.classList.add('styleDiv');
      saveText.classList.add('save');
    }
  }

  twitterArea.addEventListener('keyup', counter);

  function counter() {
    
    var counterBox = document.getElementsByTagName('span')[0];
    var count = 140;
    count = 140 - twitterArea.value.length; 
    counterBox.textContent = count;   
    // crear condicion para habilitar
    if (twitterArea.value.length >= 1) {
      tweetButton.disabled = false;
    } 
    if (twitterArea.value.length > 120 && twitterArea.value.length <= 130) {
      counterBox.className = 'styleCount';   
    }
    else if (twitterArea.value.length > 130 && twitterArea.value.length < 140) {
      counterBox.className = 'styleCount2';
    }
    else {
      counterBox.className = 'styleCount3';
    }
  }
});    
