let leoMessages = ["You have many admirerers, use your powers wisely.", "Your assertive nature makes you a natural born leader amongst your friends.", "Build a broad fantasy landscape with multiple sources for creativity.", "You are loyal and fiercely protective of your nearest and dearest."]

let leoButton = document.getElementById('leoButton');
let leoInspiration = document.getElementById('leoInspiration');

function leoMessageSelector() {
    let randomLeoMessage = Math.floor(Math.random() * leoMessages.length);
    return leoMessages[randomLeoMessage];
}

function showLeoMessage() {
    leoInspiration.innerHTML = leoMessageSelector();
    leoButton.innerHTML = "Come back tomorrow!";
    leoButton.style.cursor = "default";
  
    leoButton.removeEventListener('click', showLeoMessage)
  };
  
  leoButton.addEventListener('click', showLeoMessage);