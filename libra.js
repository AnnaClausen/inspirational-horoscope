let libraMessages = ["With your vast stores of charm, frankness, and persuasion, you are well-equipped to bring balance and justice in the world.", "Make sure and practice self-care before going out of your way to help others today.", "Take a look at your surroundings today. You thrive when you make things orderly and aesthetically pleasing.", "Choose your words carefully and you will be able to find common ground with just about anyone."]

let libraButton = document.getElementById('libraButton');
let leoInspiration = document.getElementById('libraInspiration');

function libraMessageSelector() {
    let randomLibraMessage = Math.floor(Math.random() * libraMessages.length);
    return libraMessages[randomLibraMessage];
}

function showLibraMessage() {
    libraInspiration.innerHTML = libraMessageSelector();
    libraButton.innerHTML = "Come back tomorrow!";
    libraButton.style.cursor = "default";
  
    libraButton.removeEventListener('click', showLibraMessage)
  };
  
  libraButton.addEventListener('click', showLibraMessage);