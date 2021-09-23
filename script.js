var boxes1 = [
  {
    altura: 40,
    largura: 10,
    comprimento: 25,
  },
  {
    altura: 40,
    largura: 30,
    comprimento: 30,
  },
  {
    altura: 15,
    largura: 20,
    comprimento: 10,
  },
  {
    altura: 10,
    largura: 30,
    comprimento: 10,
  },
  {
    altura: 30,
    largura: 15,
    comprimento: 10,
  },
];

var boxes2 = [
  {
    altura: 10,
    largura: 15,
    comprimento: 30,
  },
  {
    altura: 20,
    largura: 10,
    comprimento: 20,
  },
];

var boxes3 = [
  {
    altura: 10,
    largura: 10,
    comprimento: 10,
  },
  {
    altura: 20,
    largura: 20,
    comprimento: 20,
  },
  {
    altura: 30,
    largura: 10,
    comprimento: 10,
  },
];

var boxes = boxes1;

function boxSelect() {
  var elementSelect = document.querySelector("select#boxSelect").value;
  var elementSelectedGroup = document.querySelector("h2#selectedGroup");
  elementSelectedGroup.innerHTML = "";

  switch (elementSelect) {
    case "boxes1":
      boxes = boxes1;
      break;
    case "boxes2":
      boxes = boxes2;
      break;
    case "boxes3":
      boxes = boxes3;
      break;
    default:
      break;
  }

  for (let i = 0; i < boxes.length; i++) {
    elementSelectedGroup.innerHTML += `${boxes[i].altura} `;
    elementSelectedGroup.innerHTML += `${boxes[i].largura} `;
    elementSelectedGroup.innerHTML += `${boxes[i].comprimento} <br />`;
  }
}

var max = 0;
var min = 1000;
var totalVolume = 0;
var bestBox = "";
var newHeight = 0;
var newWidth = 0;
var newLength = 0;
var newArea = 0;

function showResult() {
  for (let i = 0; i < boxes.length; i++) {
    if (max < boxes[i].altura) {
      max = boxes[i].altura;
    }
    if (min > boxes[i].altura) {
      min = boxes[i].altura;
    }
    newHeight = max + min;
  }

  max = 0;
  min = 1000;
  for (let i = 0; i < boxes.length; i++) {
    if (max < boxes[i].largura) {
      max = boxes[i].largura;
    }
    if (min > boxes[i].largura) {
      min = boxes[i].largura;
    }
    if (boxes.length > 3) {
      newWidth = max + min;
    } else {
      newWidth = max;
    }
  }

  for (let i = 0; i < boxes.length; i++) {
    if (max < boxes[i].comprimento) {
      max = boxes[i].comprimento;
    }
    newLength = max;
  }

  var volume = 0;
  for (let i = 0; i < boxes.length; i++) {
    volume = boxes[i].altura * boxes[i].largura * boxes[i].comprimento;
    totalVolume += volume;
  }

  newArea = newHeight * newWidth * newLength;

  var elementResult = document.querySelector("h2#result");
  elementResult.innerHTML = `A menor caixa possível tem: <br /> Altura = ${newHeight}cm <br /> Largura = ${newWidth}cm <br /> Comprimento ${newLength}cm <br /> Que equivalem à: ${newArea}cm³ ou ${
    newArea / 1000000
  }m³ <br /><br />`;
  elementResult.innerHTML += `${bestBox}`;
}

var box1 = 30 * 40 * 80;
var box2 = 80 * 50 * 40;
var box3 = 50 * 80 * 60;
var x = 0;
var y = 0;
var z = 0;

function calculateBox() {
  var elementCalculateBoxResult = document.querySelector(
    "h2#calculateBoxResult"
  );

  x = box1 - totalVolume;
  y = box2 - totalVolume;
  z = box3 - totalVolume;

  if (x < y || x < z) {
    bestBox = `A primeira caixa é a melhor, com ${box1}cm²`;
  } else if (y < z) {
    bestBox = `A segunda caixa é a melhor, com ${box2}cm²`;
  } else {
    bestBox = `A terceira caixa é a melhor, com ${box3}cm²`;
  }

  elementCalculateBoxResult.innerHTML = bestBox;
}
