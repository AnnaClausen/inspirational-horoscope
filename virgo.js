let virgoMessages = ["Your industriuous and practical nature will take you far in life.", "The people around you are elevated by your meticulous pursuit of improvement.", "Your hard work will pay off. Don't be afraid to throw yourself into a project, no matter what it takes.", "The world would be hard-pressed to find someone more responsible and reliable than you."]

let virgoButton = document.getElementById('virgoButton');
let virgoInspiration = document.getElementById('virgoInspiration');

function virgoMessageSelector() {
    let randomVirgoMessage = Math.floor(Math.random() * cancerMessages.length);
    return virgoMessages[randomVirgoMessage];
}

function showVirgoMessage() {
    virgoInspiration.innerHTML = virgoMessageSelector();
    virgoButton.innerHTML = "Come back tomorrow!";
    virgoButton.style.cursor = "default";
  
    virgoButton.removeEventListener('click', showVirgoMessage)
  };
  
  virgoButton.addEventListener('click', showVirgoMessage);