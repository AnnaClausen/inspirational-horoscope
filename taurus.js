let taurusMessages = ["You are a loyal and considerate friend. Continue to use your actions to express your love, and you will see the benefits of your efforts.", "Use your determination to initiate a new project.", "Don't be afraid to say what you mean. You're a connector and truth builds the strongest relationships.", "Experience pleasure freely, you deserve it."]

let taurusButton = document.getElementById('taurusButton');
let taurusInspiration = document.getElementById('taurusInspiration');

function taurusMessageSelector() {
    let randomTaurusMessage = Math.floor(Math.random() * taurusMessages.length);
    return taurusMessages[randomTaurusMessage];
}

function showTaurusMessage() {
    taurusInspiration.innerHTML = taurusMessageSelector();
    taurusButton.innerHTML = "Come back tomorrow!";
    taurusButton.style.cursor = "default";
  
    taurusButton.removeEventListener('click', showTaurusMessage)
  };
  
  taurusButton.addEventListener('click', showTaurusMessage);