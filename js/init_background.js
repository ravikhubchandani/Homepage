function loadBackground() {
  var bingBackground = getFileBackground();
  setBackground(bingBackground);
}

function setBackground(filename) {
  document.body.style.backgroundImage="url(" + filename + ")";
}

function getFileBackground() {
  var backgroundHash =
  {
	0: './images/bg/city.jpeg'
	,1: './images/bg/see.jpg'
  }
  var MAX = Object.keys(backgroundHash).length;
  var index = Math.floor(Math.random() * MAX);
  return backgroundHash[index];
}
