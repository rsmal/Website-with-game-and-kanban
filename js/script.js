window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




var gameMessage = document.getElementById('game__message');
var playerScoreOutput = document.getElementById('playerScore');
var computerScoreOutput = document.getElementById('ComputerScore');
var roundCounterOutput = document.getElementById('roundCounter');

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var modalOutput = document.getElementById('modal-text');
var modalOutput2 = document.getElementById('modal-text2');

document.getElementById("reset").addEventListener("click", reset);
document.getElementById("new_game").addEventListener("click", newGame);

var params = {
    playerScore: 0,
    computerScore: 0,
    roundCounter: 0,
    setRounds: 100,
    progress: [],
}

var chosenOption;
function playerMove(el) {
chosenOption = el.target.id;

gameLogic();
}


var buttons = document.querySelectorAll('.player-move');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playerMove);
  }



 
var playerChoice = 0;
function gameLogic() {

  if (this.chosenOption == 'rock') {
     playerChoice = 1;
 
  var computerChoice = Math.floor(Math.random() * 3 + 1);
  if (playerChoice == computerChoice){
    
   gameMessage.insertAdjacentHTML('afterbegin' ,'DRAW!! '+'<br>'+' you played ROCk'+'<br>'+ 'computer played ROCK'+'<br>'+'<br>' );
  } else if (playerChoice == 1 && computerChoice == 2)
      {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU LOSE!! '+'<br>'+ 'you played ROCK'+'<br>'+ 'computer played PAPER '+'<br>'+'<br>'); 
        params.computerScore++;
      }else {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU WON!! '+'<br>'+ 'you played ROCK'+'<br>'+ 'computer played SCISSORS '+'<br>'+'<br>');   
        params.playerScore++;
      }
  params.roundCounter++;
  resultCheck();
  update();
                    // PAPER //
  }  else if (this.chosenOption == 'paper') {
   playerChoice = 2;
   computerChoice = Math.floor(Math.random() * 3 + 1);
  if (playerChoice == computerChoice){    
    gameMessage.insertAdjacentHTML('afterbegin', 'DRAW!! '+'<br>'+' you played PAPER'+'<br>'+ 'computer played PAPER'+'<br>'+'<br>');
  } else if (playerChoice == 2 && computerChoice == 3)
      {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU LOSE!! '+'<br>'+ 'you played PAPER'+'<br>'+ 'computer played SCISSORS '+'<br>'+'<br>');
        params.computerScore++;
      }else {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU WON!! '+'<br>'+ 'you played PAPER'+'<br>'+ 'computer played ROCK '+'<br>'+'<br>');
        params.playerScore++;
      } 
  params.roundCounter++;
  update();
  resultCheck();
              // SCISSORS //
  }else if (this.chosenOption == 'scissors') {
     playerChoice = 3;
   computerChoice = Math.floor(Math.random() * 3 + 1);
  if (playerChoice == computerChoice){  
    gameMessage.insertAdjacentHTML('afterbegin', 'DRAW!! '+'<br>'+' you played SCISSORS'+'<br>'+'computer played    SCISSORS'+'<br>'+'<br>');
  } else if (playerChoice == 3 && computerChoice == 1)
      {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU LOSE!! '+'<br>'+ 'you played SCISSORS'+'<br>'+ 'computer played ROCK '+'<br>'+'<br>'); 
        params.computerScore++;
      }else {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU WON!! '+'<br>'+ 'you played SCISSORS'+'<br>'+ 'computer played PAPER '+'<br>'+'<br>');
        params.playerScore++;
      } 
  params.roundCounter++;
  update();

  resultCheck();
  }

}

update();

function reset (){
  params.playerScore = 0;
  playerScoreOutput.innerHTML = params.playerScore;
  params.computerScore =0;
  computerScoreOutput.innerHTML= params.computerScore;
  gameMessage.innerHTML =' ';
  params.roundCounter=0;
  roundCounterOutput.innerHTML = params.roundCounter;
}

function newGame() {
  reset();
  params.setRounds =  prompt("How many rounds do you wanna play?");
}

  function resultCheck(){
  if(params.setRounds == params.playerScore ){
		alert('You won !');

 
   }
    else if(params.setRounds == params.computerScore){
    	alert('You lost !');
  } 
  
}

function update(){
playerScoreOutput.innerHTML = params.playerScore;
computerScoreOutput.innerHTML= params.computerScore;
roundCounterOutput.innerHTML = params.roundCounter;
}




span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





// Get the modal
var modal2 = document.getElementById('myModal2');
var kanban = document.getElementById("kanban");
var span2 = document.getElementsByClassName("close2")[0];


kanban.onclick = function() {
    modal2.style.display = "block";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}




document.addEventListener('DOMContentLoaded', function () {
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        for (var i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }

    function generateTemplate(name, data, basicElement) {
        var template = document.getElementById(name).innerHTML;
        var element = document.createElement(basicElement || 'div');
        Mustache.parse(template);
        element.innerHTML = Mustache.render(template, data);
        return element;
    }

    function Column(name) {
        var self = this;
        this.id = randomString();
        this.name = name;
        this.element = generateTemplate('column-template', {
            name: this.name,
            id: this.id
        })
        this.element.querySelector('.column').addEventListener('click', function (event) {
            if (event.target.classList.contains('btn-delete')) {
                self.removeColumn();
            }
            if (event.target.classList.contains('add-card')) {
                self.addCard(new Card(prompt("Enter the name of the card")));
            }
        })
    }
    Column.prototype = {
        addCard: function (card) {
            this.element.querySelector('ul').appendChild(card.element);
        },
        removeColumn: function () {
            this.element.parentNode.removeChild(this.element);
        }
    }

    function Card(description) {
        var self = this;
        this.id = randomString();
        this.description = description;
        this.element = generateTemplate('card-template', {
            description: this.description
        }, 'li');
        this.element.querySelector('.card').addEventListener('click', function (event) {
            event.stopPropagation();
            if (event.target.classList.contains('btn-delete')) {
                self.removeCard();
            }
        })
    }
    Card.prototype = {
        removeCard: function () {
            this.element.parentNode.removeChild(this.element);
        }
    }
    var board = {
        name: 'Kanban Board',
        addColumn: function (column) {
            this.element.appendChild(column.element);
            initSortable(column.id);
        },
        element: document.querySelector('#board .column-container')
    }

    function initSortable(id) {
        var el = document.getElementById(id);
        var sortable = Sortable.create(el, {
            group: 'kanban',
            sort: true
        })
    }
    document.querySelector('#board .create-column').addEventListener('click', function () {
        var name = prompt('Enter a column name');
        var column = new Column(name);
        board.addColumn(column);
    })
    var todoColumn = new Column('To do');
    var doingColumn = new Column('In progress');
    var doneColumn = new Column('Done');

    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);

    var card1 = new Card('New task');
    var card2 = new Card('In progress');
    var card3 = new Card('Done');
    
    todoColumn.addCard(card1);
    doingColumn.addCard(card2);
    doneColumn.addCard(card3);
})




var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  wrapAround: true
});