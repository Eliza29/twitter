/*
Versión 0.0.2

No ingresar texto vacío (deshabilitar el botón de "twittear").
Contar la cantidad de caracteres de forma regresiva.
*/

window.addEventListener('load',function(){
   

var twitterArea = document.getElementById('twitter-area');
var tweetButton = document.getElementById('tweet-button');
tweetButton.disabled = true;

tweetButton.addEventListener('click',addText)
   
  function addText(){    
    if(twitterArea){
        var parentDiv = document.getElementsByTagName('section')[0];
        var newDiv = document.createElement('div');
        var saveText = document.createElement('p');
        
        parentDiv.appendChild(newDiv);
        newDiv.appendChild(saveText); 
        saveText.textContent = twitterArea.value;  
        
        newDiv.classList.add('styleDiv')
    }
}

twitterArea.addEventListener('keyup',counter)

function counter(){
    
    var counterBox = document.getElementsByTagName('span')[0];
    var count = 140;
    count = 140-twitterArea.value.length; 
    counterBox.textContent= count;   
   //crear condicion para desabilitar 
}

});    

 




