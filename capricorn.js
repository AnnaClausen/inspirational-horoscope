let capricornMessages = ["You keep going, even when others have given up ten miles back.", "Don't let yourself be bogged-down by annoying details or let superfluous information get in the way of your big picture, long-term goals.", "Start a new project today. What will it be?", "You are a dynamic individual, with a unique balance of confidence and humility."]

let capricornButton = document.getElementById('capricornButton');
let capricornInspiration = document.getElementById('capricornInspiration');

function capricornMessageSelector() {
    let randomCapricornMessage = Math.floor(Math.random() * capricornMessages.length);
    return capricornMessages[randomCapricornMessage];
}

function showCapricornMessage() {
    capricornInspiration.innerHTML = capricornMessageSelector();
    capricornButton.innerHTML = "Come back tomorrow!";
    capricornButton.style.cursor = "default";
  
    capricornButton.removeEventListener('click', showCapricornMessage)
  };
  
  capricornButton.addEventListener('click', showCapricornMessage);