let aquariusMessages = ["The world is your oyster, do whatever you can to improve it and help others within it.", "You are an original.", "Take the time you need to be alone, think and reacharge. You deserve it.", "Your compassion and strong sense of justice will help change the world.", "Embrace your eccentricities."]

let aquariusButton = document.getElementById('aquariusButton');
let aquariusInspiration = document.getElementById('aquariusInspiration');

function aquariusMessageSelector() {
    let randomAquariusMessage = Math.floor(Math.random() * aquariusMessages.length);
    return aquariusMessages[randomAquariusMessage];
}

function showMessage() {
    aquariusInspiration.innerHTML = aquariusMessageSelector();
    aquariusButton.innerHTML = "Come back tomorrow!";
    aquariusButton.style.cursor = "default";
  
    aquariusButton.removeEventListener('click', showMessage)
  };
  
  aquariusButton.addEventListener('click', showMessage);