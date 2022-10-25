let cancerMessages = ["You have an undeniable ability to be sensitive to others and make people feel loved.", "The world needs your nurturing and comforting presence now more than ever.", "Before you seek intimacy with someone, remember to ask yourself whether or not the relationship is deserving of it.", "You are a loyal and supportive friend. Those you let in will feel like family."]

let cancerButton = document.getElementById('cancerButton');
let cancerInspiration = document.getElementById('cancerInspiration');

function geminiMessageSelector() {
    let randomCancerMessage = Math.floor(Math.random() * cancerMessages.length);
    return cancerMessages[randomCancerMessage];
}

function showCancerMessage() {
    cancerInspiration.innerHTML = cancerMessageSelector();
    cancerButton.innerHTML = "Come back tomorrow!";
    cancerButton.style.cursor = "default";
  
    cancerButton.removeEventListener('click', showCancerMessage)
  };
  
  cancerButton.addEventListener('click', showCancerMessage);