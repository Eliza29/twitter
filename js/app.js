/*
Versión 0.0.1

Diseñar un formulario que permita ingresar un texto y un botón para "twittear".
Agregar un evento de click al botón o de submit al formulario.
En el evento, obtener el texto.
Agregar el texto al HTML.
*/
window.addEventListener('load',function(){


var twitterArea = document.getElementById('twitter-area');
var tweetButton = document.getElementById('tweet-button');

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

});    

 




