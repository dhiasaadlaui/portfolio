const btn = document.getElementById('talk')
const content = document.querySelector('.content');
const SpeechReco = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechReco();

recognition.onstart = function () {
document.getElementById('listening').style.display='block';
};

recognition.onresult = function (event) {
  const speech = new SpeechSynthesisUtterance();
  speech.lang=localStorage.getItem('lang')
  speech.text = event .results[event.resultIndex][0].transcript;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  document.getElementById("speech").innerText = event .results[event.resultIndex][0].transcript;
  document.getElementById('listening').style.display='none';
};


function startReco(){
  recognition.lang=localStorage.getItem('lang')
  recognition.start();
}

