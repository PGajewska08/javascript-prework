var ddd;
ddd = document.getElementById('messages');
ddd.innerHTML = 'Zaczynamy!';
function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
var pointsPlayer, pointsComp, pointsPlayerBox, pointsCompBox;
pointsPlayerBox = document.getElementById('points-player');
pointsCompBox = document.getElementById('points-comp');
pointsComp = 0;
pointsPlayer = 0;
function aktualizujWynik(){
  pointsPlayerBox.innerHTML = pointsPlayer;
  pointsCompBox.innerHTML = pointsComp;
}
aktualizujWynik();
var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput, pointsComp, pointsPlayer;

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } 
  else if (argMoveId == 2) {
	return 'papier';
  }
  else if (argMoveId == 3) {
	return 'nożyce';
  }
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    pointsPlayer += 1;
    aktualizujWynik();
  }
  else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
	  printMessage('Wygrywasz!');
    pointsPlayer += 1;
    aktualizujWynik();
  } 
  else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
	  printMessage('Wygrywasz!');
    pointsPlayer += 1;
    aktualizujWynik();
  } 
  else if (argPlayerMove == argComputerMove) {
	printMessage('Remis!');
  } 
  else {
    printMessage('Przegrywasz :(');
    pointsComp += 1;
    aktualizujWynik();
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  console.log('Punkty komputera: '+pointsComp);
  console.log('Punkty playera: '+ pointsPlayer);
}

var buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName){
  clearMessages();
  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){
    buttonClicked('kamień')
});
buttonPaper.addEventListener('click', function(){
    buttonClicked('papier')
});
buttonScissors.addEventListener('click', function(){
    buttonClicked('nożyce')
});


