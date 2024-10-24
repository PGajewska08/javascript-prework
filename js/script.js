// Funkcja wypisująca wiadomość 
function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

//Funkcja czyszcząca wiadomość
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

// stałe - pojemniki na punkty, zmienne - liczby punktów 
const pointsPlayerBox = document.getElementById('points-player');
const pointsCompBox = document.getElementById('points-comp');
let pointsComp = 0;
let pointsPlayer = 0;

// Funkcja aktualizująca punkty na ekranie
function updateResult(){
  pointsPlayerBox.innerHTML = pointsPlayer;
  pointsCompBox.innerHTML = pointsComp;
}

// Zmienne - ruch kompuera, ruch gracza, liczba wylosowana
let computerMove, playerMove, randomNumber;

// Funkcja zwracająca nazwę rucnu ('kamień' / 'papier' / 'nożyce')
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
}

// Funkcja wypisująca wynik - (wygrana / przegrana / remis)
function displayResult(argPlayerMove, argComputerMove) {
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    pointsPlayer += 1;
    updateResult();
  }
  else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
	  printMessage('Wygrywasz!');
    pointsPlayer += 1;
    updateResult();
  } 
  else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
	  printMessage('Wygrywasz!');
    pointsPlayer += 1;
    updateResult();
  } 
  else if (argPlayerMove == argComputerMove) {
	printMessage('Remis!');
  } 
  else {
    printMessage('Przegrywasz :(');
    pointsComp += 1;
    updateResult();
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  console.log('Punkty komputera: ' + pointsComp);
  console.log('Punkty playera: ' + pointsPlayer);
}

// Stałe - przyciski
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

// Funkcja - zdarzenia po wciśnięciu przycisku
function buttonClicked(argButtonName){
  clearMessages();
  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);
}

// Nasłuchiwanie przyciśnięcia przycisków
buttonRock.addEventListener('click', function(){
    buttonClicked('kamień')
});
buttonPaper.addEventListener('click', function(){
    buttonClicked('papier')
});
buttonScissors.addEventListener('click', function(){
    buttonClicked('nożyce')
});


