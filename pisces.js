let piscesMessages = ["You are gracious and will go to great lengths to ensure the happiness of those around you.", "Use your creative and imaginative strengths today.", "You see the best in others, make sure you see the best in yourself, too.", "Dream big."]

let piscesButton = document.getElementById('piscesButton');
let piscesInspiration = document.getElementById('piscesInspiration');

function piscesMessageSelector() {
    let randomPiscesMessage = Math.floor(Math.random() * piscesMessages.length);
    return piscesMessages[randomPiscesMessage];
}

function showPiscesMessage() {
    piscesInspiration.innerHTML = piscesMessageSelector();
    piscesButton.innerHTML = "Come back tomorrow!";
    piscesButton.style.cursor = "default";
  
    piscesButton.removeEventListener('click', showPiscesMessage)
  };
  
  piscesButton.addEventListener('click', showPiscesMessage);