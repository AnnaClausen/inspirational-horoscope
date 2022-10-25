let scorpioMessages = ["You value authenticity, even when it's dark. You can handle it.", "You derive your strength from a psychic, emotional realm. Tap into it today.", "You know what you want, don't be afraid to work hard and play the long game to get it.", "You are at your best when you apply your intrinsic intensity to deep, soulful connections."]

let scorpioButton = document.getElementById('scorpioButton');
let scorpioInspiration = document.getElementById('scorpioInspiration');

function scorpioMessageSelector() {
    let randomScorpioMessage = Math.floor(Math.random() * scorpioMessages.length);
    return scorpioMessages[randomScorpioMessage];
}

function showScorpioMessage() {
    scorpioInspiration.innerHTML = scorpioMessageSelector();
    scorpioButton.innerHTML = "Come back tomorrow!";
    scorpioButton.style.cursor = "default";
  
    scorpioButton.removeEventListener('click', showScorpioMessage)
  };
  
  scorpioButton.addEventListener('click', showScorpioMessage);