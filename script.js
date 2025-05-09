const sentences = [
    "The sun is shining.",
    "I love chocolate.",
    "Books are amazing.",
    "Let's go hiking.",
    "Music soothes me.",
    "Dream big always.",
    "Cats are adorable.",
    "Sky is blue.",
    "Time flies fast.",
    "Believe in yourself.",
    "She loves painting.",
    "Life is beautiful.",
    "He plays guitar.",
    "They are friends.",
    "It is raining.",
    "Stay positive today.",
    "Hope never dies.",
    "Birds are singing.",
    "Smile every day.",
    "Coffee wakes me.",
    "Walk in nature.",
    "Laugh without fear.",
    "Dance like crazy.",
    "Waves hit rocks.",
    "Clouds look fluffy.",
    "Travel broadens mind.",
    "Kindness is powerful.",
    "Stay curious forever.",
    "Enjoy small moments.",
    "Write your story.",
    "Dreams fuel life.",
    "Chase your goals.",
    "Ice cream melts.",
    "Winter is cold.",
    "Summer feels warm.",
    "Autumn leaves fall.",
    "Spring brings flowers.",
    "Breathe and relax.",
    "Wisdom comes slowly.",
    "Rainbows are magical.",
    "Stars light night.",
    "Sunflowers face sun.",
    "Keep learning everyday.",
    "Adventure awaits you.",
    "Stay humble always.",
    "Gratitude is key.",
    "Build strong habits.",
    "Speak with honesty.",
    "Sleep heals body.",
    "Peace begins inside."
  ];
const searchBox = document.getElementById('searchBox');
const suggestionsBox = document.getElementById('suggestionsBox');

searchBox.addEventListener('input', searchInput);


function searchInput() {
  const input = searchBox.value.toLowerCase();
  suggestionsBox.innerHTML="";

  if (input !== "") {
    const matchingSentences = getMatchingSentences(input);
    showSuggestions(matchingSentences);
  }
}


function getMatchingSentences(input) {
  const matches = [];

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(input)) {
      matches.push(sentences[i]);
    }
  }

  return matches;
}


function showSuggestions(matches) {
  for (let i = 0; i < matches.length; i++) {
    const suggestionItem = createSuggestionItem(matches[i]);
    suggestionsBox.appendChild(suggestionItem);
  }
}


function createSuggestionItem(text) {
  const div = document.createElement('div');
  div.textContent = text;

  div.addEventListener('click', () => {
    selectSuggestion(text);
  });

  return div;
}


function selectSuggestion(text) {
  searchBox.value = text;
  suggestionsBox.innerHTML="";
}

