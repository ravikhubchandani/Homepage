function loadBackground() {
  //getSetFileBackground(setFileBackground);
  getSetGradientBackground(setGradientBackground);
}

function getRandomElement(hash) {
  var MAX = Object.keys(hash).length;
  var index = Math.floor(Math.random() * MAX);
  return hash[index];
}

// File background management

function setFileBackground(filename) {
  document.body.style.backgroundImage = "url(" + filename + ")";
}

function getFileBackground() {
  var backgroundHash =
  {
	0: './images/bg/city.jpeg'
	,1: './images/bg/see.jpg'
  }
  return getRandomElement(backgroundHash);
}

function getSetFileBackground(callback) {
  var file = getFileBackground();
  if(callback) callback(file);
}

// CSS Gradient bacground management

function setGradientBackground(gradient) {
  document.body.style.backgroundImage = 'linear-gradient(to bottom,' + gradient['top'] + ' 0%,' + gradient['middle'] + ' 50%,' + gradient['bottom'] + ' 100%)';
}

function getGradientBackground() {
  var backgroundHash =
  {
	0 : { 'top': '#c9de96', 'middle': '#8ab66b', 'bottom': '#398235' } // Green
	,1: { 'top': '#6db3f2', 'middle': '#3690f0', 'bottom': '#1e69de' } // Blue
	,2: { 'top': '#f0b7a1', 'middle': '#8c3310', 'bottom': '#bf6e4e' } // Brown
	,3: { 'top': '#ebe9f9', 'middle': '#c1bfea', 'bottom': '#8989ba' } // Purple
	,4: { 'top': '#f85032', 'middle': '#f02f17', 'bottom': '#e73827' } // Red
	,5: { 'top': '#fcfff4', 'middle': '#dfe5d7', 'bottom': '#b3bead' } // White
	,6: { 'top': '#ffd65e', 'middle': '#f8b500', 'bottom': '#febf04' } // Yellow
	,7: { 'top': '#fceabb', 'middle': '#f8b500', 'bottom': '#fbdf93' } // Orange
  }
  var MAX = Object.keys(backgroundHash).length;
  var index = Math.floor(Math.random() * MAX);
  return getRandomElement(backgroundHash);
}

function getSetGradientBackground(callback) {
  var gradient = getGradientBackground();
  if(callback) callback(gradient);
}
