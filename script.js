let speech = new SpeechSynthesisUtterance();

let button = document.querySelector("button");
let textArea = document.querySelector("textarea");
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[1];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", function(){
    speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", function () {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});
