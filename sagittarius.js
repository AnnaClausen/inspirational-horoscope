let sagittariusMessages = ["You are an incredible conversationalist, people admire your hilarious, honest and intellectual mind.", "You tend to be flexible and use your passion and intellect to create connections between people and ideas that normally would not interact. You are the cosmic networker.", "What are you inspired by today? Chase after it with your strengths of energy, action and motivation.", "Be sure to pair your insights with tact to be truly effective in all of your relationships."]

let sagittariusButton = document.getElementById('sagittariusButton');
let sagittariusInspiration = document.getElementById('sagittariusInspiration');

function sagittariusMessageSelector() {
    let randomSagittariusMessage = Math.floor(Math.random() * sagittariusMessages.length);
    return sagittariusMessages[randomSagittariusMessage];
}

function showSagittariusMessage() {
    sagittariusInspiration.innerHTML = sagittariusMessageSelector();
    sagittariusButton.innerHTML = "Come back tomorrow!";
    sagittariusButton.style.cursor = "default";
  
    sagittariusButton.removeEventListener('click', showSagittariusMessage)
  };
  
  sagittariusButton.addEventListener('click', showSagittariusMessage);