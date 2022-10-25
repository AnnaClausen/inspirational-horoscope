let ariesMessages = ["You are spontaneous and courageous", "Use your determination to initiate a new project.", "Throw yourself at the world eagerly and without fear.", "Be bold."]

let ariesButton = document.getElementById('ariesButton');
let ariesInspiration = document.getElementById('ariesInspiration');

function ariesMessageSelector() {
    let randomAriesMessage = Math.floor(Math.random() * ariesMessages.length);
    return ariesMessages[randomAriesMessage];
}

function showAriesMessage() {
    ariesInspiration.innerHTML = ariesMessageSelector();
    ariesButton.innerHTML = "Come back tomorrow!";
    ariesButton.style.cursor = "default";
  
    ariesButton.removeEventListener('click', showAriesMessage)
  };
  
  ariesButton.addEventListener('click', showAriesMessage);