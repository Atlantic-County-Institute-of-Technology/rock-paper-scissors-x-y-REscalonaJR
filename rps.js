const paper = document.getElementById("paper")
const rock = document.getElementById("rock")
const scissors = document.getElementById("scissors")
const microwave = document.getElementById("microwave")
const tinfoil = document.getElementById("tinfoil")
const buttons = document.querySelectorAll("button")
let player = document.getElementById("player")
let playerpick = 0
let player_score = document.getElementById("player_score")/*this is where it gets all the stuff from the html*/
let playerwins = 0
let computer = document.getElementById("computer")
let result = document.getElementById("result")
let cpu_score = document.getElementById("computer_score")
let cpuwins = 0
const reset = document.getElementById("reset")
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", () => {
        buttons.forEach(Element => {
            Element.style.display = "none"/*makes the buttons dissapear for 4.5seconds*/
            setTimeout(displayagain, 4500)           
        })
    })
}
function displayagain(){
        buttons.forEach(Element => {/*makes the buttons appear again*/
            Element.style.display = "flex"
        })
}
function computerchoice() {
    return Math.floor(Math.random() * (4.99)) + 1     /*makes it pick a number 1-5.99 because if it 
    was 1-5 tin foil but would almost never appear since you would need to get exactly 5.00*/
}
function pickpaper() {// thins is the function for when the player selects paper
   player.innerHTML = '<img src="assets/paper.png" alt="" class="display">';// changes the image on the player display
    playerpick = 1
   cpuchoice = computerchoice()
   result.innerHTML = "Computer's thinking...";
    /*roberto is roberto*/
    computer.innerHTML = ""//resets the computer's display
   setTimeout(papercheck1, 1500)// makes papercheck1 function run after 1.5sec
}
function papercheck1(){
  setTimeout(papercheck2, 2000)// makes papercheck2 function run after 2sec
   if (cpuchoice == 1 ) {
       computer.innerHTML = '<img src="assets/paper.png" alt="" class="cpu_display">';
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 2) {
       computer.innerHTML = '<img src="assets/rock.png" alt="" class="cpu_display">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 3) {
       computer.innerHTML = '<img src="assets/scissors.png" alt="" class="cpu_display">'// makes the computer display the item based on the number
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"// displays rock paper scissors shoot message
    } else if(cpuchoice == 4) {
       computer.innerHTML = '<img src="assets/microwave.png" alt="" class="cpu_display_micro">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if (cpuchoice == 5) {
       computer.innerHTML = '<img src="assets/tin_foil.png" alt="" class="tin_display">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    }
  }
function papercheck2(){
  if (cpuchoice == 1 ) {
     result.innerHTML = "It's A Draw!";
  } else if(cpuchoice == 2) {
     result.innerHTML = "Paper Covers Rock, You Win!"
     playerwins++;
     player_score.innerHTML = "Player score: " + playerwins
  } else if(cpuchoice == 3) {
     result.innerHTML = "Scissors cuts Paper, You Lose!"//displays a message detailing who won, how and updates the score based off that
     cpuwins++
     cpu_score.innerHTML = "Computer score: " + cpuwins
  } else if(cpuchoice == 4) {
     result.innerHTML = "Microwave Burns Paper, You Lose!"
     cpuwins++
     cpu_score.innerHTML = "Computer score: " + cpuwins
  } else if (cpuchoice == 5) {
     result.innerHTML = "Paper Is more Durable than tin foil, You Win!"
     playerwins++;
     player_score.innerHTML = "Player score: " + playerwins
  }
}
function pickrock() {// thins is the function for when the player selects paper
   player.innerHTML = '<img src="assets/rock.png" alt="" class="display">'// changes the image on the player display
   cpuchoice = computerchoice()
    /*roberto is roberto*/
    result.innerHTML = "Computer's thinking...";
    /*roberto is roberto*/
    computer.innerHTML = ""//resets the computer's display
   setTimeout(rockcheck1, 1500)// makes rockcheck1 function run after 1.5sec
}
function rockcheck1(){
  setTimeout(rockcheck2, 2000)
   if (cpuchoice == 1 ) {
       computer.innerHTML = '<img src="assets/paper.png" alt="" class="cpu_display">';
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 2) {
       computer.innerHTML = '<img src="assets/rock.png" alt="" class="cpu_display">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 3) {
       computer.innerHTML = '<img src="assets/scissors.png" alt="" class="cpu_display">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 4) {
       computer.innerHTML = '<img src="assets/microwave.png" alt="" class="cpu_display_micro">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if (cpuchoice == 5) {
       computer.innerHTML = '<img src="assets/tin_foil.png" alt="" class="tin_display">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    }
}
function rockcheck2(){
  if (cpuchoice == 1 ) {
     result.innerHTML = "Paper Covers Rock, You Lose!";
     cpuwins++
     cpu_score.innerHTML = "Computer score: " + cpuwins
  } else if(cpuchoice == 2) {
     result.innerHTML = "It's a draw!"
  } else if(cpuchoice == 3) {
     result.innerHTML = "Rock Crushes Scissors, You win!"
     playerwins++;
     player_score.innerHTML = "Player score: " + playerwins
  } else if(cpuchoice == 4) {
     result.innerHTML = "Rock Crushes Microwave, You win!"
     playerwins++;
     player_score.innerHTML = "Player score: " + playerwins
  } else if (cpuchoice == 5) {
     result.innerHTML = "Tin Foil covers Rock, You Lose!"
     cpuwins++
     cpu_score.innerHTML = "Computer score: " + cpuwins
  }
}
function pickscissors() {// thins is the function for when the player selects paper
    player.innerHTML = '<img src="assets/scissors.png" alt="" class="display">'// changes the image on the player display
    cpuchoice = computerchoice()
    /*roberto is roberto*/
    result.innerHTML = "Computer's thinking...";
    /*roberto is roberto*/
    computer.innerHTML = ""//resets the computer's display
   setTimeout(scissorscheck1, 1500)
}
function scissorscheck1(){
    setTimeout(scissorscheck2, 3000)
     if (cpuchoice == 1 ) {
       computer.innerHTML = '<img src="assets/paper.png" alt="" class="cpu_display">';
       result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 2) {
       computer.innerHTML = '<img src="assets/rock.png" alt="" class="cpu_display">'
       result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 3) {
       computer.innerHTML = '<img src="assets/scissors.png" alt="" class="cpu_display">'
       result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 4) {
       computer.innerHTML = '<img src="assets/microwave.png" alt="" class="cpu_display_micro">' 
       result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if (cpuchoice == 5) {
       computer.innerHTML = '<img src="assets/tin_foil.png" alt="" class="tin_display">'
       result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    }
}
function scissorscheck2(){
    if (cpuchoice == 1 ) {
        result.innerHTML = "scissors cuts paper, You Win!";
        playerwins++;
        player_score.innerHTML = "Player score: " + playerwins
     } else if(cpuchoice == 2) {
        result.innerHTML = "Rock Crushes Scissors, You Lose!"
        cpuwins++
        cpu_score.innerHTML = "Computer score: " + cpuwins
     } else if(cpuchoice == 3) {
        result.innerHTML = "It's a draw!"
     } else if(cpuchoice == 4) {
        result.innerHTML = "Microwave melts scissors, You Lose!"
        cpuwins++
        cpu_score.innerHTML = "Computer score: " + cpuwins
     } else if (cpuchoice == 5) {
        result.innerHTML = "Scissors cuts Tin Foil, You win!"
        playerwins++;
        player_score.innerHTML = "Player score: " + playerwins
     }
}
function pickmicrowave() {// thins is the function for when the player selects paper
   player.innerHTML = '<img src="assets/microwave.png" alt="" class="display_micro">'// changes the image on the player display
   cpuchoice = computerchoice()
   /*roberto is roberto*/
   result.innerHTML = "Computer's thinking...";
   /*roberto is roberto*/
   computer.innerHTML = ""//resets the computer's display
  setTimeout(microwavecheck1, 1500)
  
   }

function microwavecheck1(){
  setTimeout(microwavecheck2, 2000)
    if (cpuchoice == 1 ) {
      computer.innerHTML = '<img src="assets/paper.png" alt="" class="cpu_display">';
       result.innerHTML = "Rock, Paper, Scissors, Shoot!"
   } else if(cpuchoice == 2) {
      computer.innerHTML = '<img src="assets/rock.png" alt="" class="cpu_display">'
       result.innerHTML = "Rock, Paper, Scissors, Shoot!"
   } else if(cpuchoice == 3) {
      computer.innerHTML = '<img src="assets/scissors.png" alt="" class="cpu_display">'
       result.innerHTML = "Rock, Paper, Scissors, Shoot!"
   } else if(cpuchoice == 4) {
      computer.innerHTML = '<img src="assets/microwave.png" alt="" class="cpu_display_micro">'
       result.innerHTML = "Rock, Paper, Scissors, Shoot!"
   } else if (cpuchoice == 5) {
      computer.innerHTML = '<img src="assets/tin_foil.png" alt="" class="tin_display">'
       result.innerHTML = "Rock, Paper, Scissors, Shoot!"
   }
}
function microwavecheck2(){
  if (cpuchoice == 1 ) {
     result.innerHTML = "Microwave Burns Paper, You win!";
     playerwins++;
     player_score.innerHTML = "Player score: " + playerwins
  } else if(cpuchoice == 2) {
     result.innerHTML = "Rock Crushes Microwave, You lose!"
     cpuwins++
     cpu_score.innerHTML = "Computer score: " + cpuwins
  } else if(cpuchoice == 3) {
     result.innerHTML = "Microwave melts scissors, You Win!"
     playerwins++;
     player_score.innerHTML = "Player score: " + playerwins
  } else if(cpuchoice == 4) {
     result.innerHTML = "It's a draw!"
  } else if (cpuchoice == 5) {
     result.innerHTML = "Tin Foil explodes Microwave, You Lose!"
     cpuwins++
     cpu_score.innerHTML = "Computer score: " + cpuwins
  }
}
function picktinfoil() {// thins is the function for when the player selects paper
   player.innerHTML = '<img src="assets/tin_foil.png" alt="" class="display">'// changes the image on the player display
   cpuchoice = computerchoice()
   result.innerHTML = "Computer's thinking...";

    computer.innerHTML = ""//resets the computer's display
   setTimeout(tinfoilcheck1, 1500)
   
}
function tinfoilcheck1(){
  setTimeout(tinfoilcheck2, 2000)
   if (cpuchoice == 1 ) {
       computer.innerHTML = '<img src="assets/paper.png" alt="" class="cpu_display">';
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 2) {
       computer.innerHTML = '<img src="assets/rock.png" alt="" class="cpu_display">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 3) {
       computer.innerHTML = '<img src="assets/scissors.png" alt="" class="cpu_display">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if(cpuchoice == 4) {
       computer.innerHTML = '<img src="assets/microwave.png" alt="" class="cpu_display_micro">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    } else if (cpuchoice == 5) {
       computer.innerHTML = '<img src="assets/tin_foil.png" alt="" class="tin_display">'
        result.innerHTML = "Rock, Paper, Scissors, Shoot!"
    }
}
function tinfoilcheck2(){
  if (cpuchoice == 1 ) {
     result.innerHTML = "Paper Is more Durable than tin foil, You Lose!";
     cpuwins++
     cpu_score.innerHTML = "Computer score: " + cpuwins
  } else if(cpuchoice == 2) {    
     result.innerHTML = "Tin Foil covers Rock, You Win!"
     playerwins++;
     player_score.innerHTML = "Player score: " + playerwins
  } else if(cpuchoice == 3) {
     result.innerHTML = "Scissors cuts Tin Foil, You Lose!"
     cpuwins++
     cpu_score.innerHTML = "Computer score: " + cpuwins
  } else if(cpuchoice == 4) {
     result.innerHTML = "Tin Foil explodes Microwave, You Win!"
     playerwins++;
     player_score.innerHTML = "Player score: " + playerwins
  } else if (cpuchoice == 5) {
     result.innerHTML = "It's a draw!"
  }
}
function Clear() {
    computer.innerHTML = ""
    player.innerHTML = ""
    result.innerHTML = ""//clears th score and display
    playerwins = 0
    cpuwins = 0
    player_score.innerHTML = "Player score: " + playerwins
    cpu_score.innerHTML = "Computer score: " + cpuwins
}
paper.addEventListener("click",pickpaper)
rock.addEventListener("click",pickrock)
scissors.addEventListener("click",pickscissors)// these listen for if you click the item
microwave.addEventListener("click",pickmicrowave)
tinfoil.addEventListener("click",picktinfoil)
reset.addEventListener("click", Clear)