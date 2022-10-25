let geminiMessages = ["You have the ability to see every angle of what you are looking at, use that power for good today.", "The people around you will appreciate your ability to go to the far corners of the Earth when needed. Keep going.", "Reignite your passions by initiating conversations, asking questions, and pursuing new activities.", "Keep an eye out for your next shiny, glittery thing today. It could be just around the corner."]

let geminiButton = document.getElementById('geminiButton');
let geminiInspiration = document.getElementById('geminiInspiration');

function geminiMessageSelector() {
    let randomGeminiMessage = Math.floor(Math.random() * geminiMessages.length);
    return geminiMessages[randomGeminiMessage];
}

function showGeminiMessage() {
    geminiInspiration.innerHTML = geminiMessageSelector();
    geminiButton.innerHTML = "Come back tomorrow!";
    geminiButton.style.cursor = "default";
  
    geminiButton.removeEventListener('click', showGeminiMessage)
  };
  
  geminiButton.addEventListener('click', showGeminiMessage);