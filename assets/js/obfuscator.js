// Obfuscates text
function obfuscate() {
  const elements = document.getElementsByClassName('obfuscated');
  Array.from(elements).forEach(element => {
    // Perform actions on each element
    var randomIndex = Math.floor(Math.random() * 100000); //creates random number
    element.innerHTML = randomIndex.toString();
  });
}