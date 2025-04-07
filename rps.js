const paper = document.getElementById("paper")
const rock = document.getElementById("rock")
const scissors = document.getElementById("scissors")
const microwave = document.getElementById("microwave")
const tinfoil = document.getElementById("tinfoil")
const buttons = document.querySelectorAll("button")
let player_choice = document.getElementById("player")
let playerpick = 0
let player_score = document.getElementById("player_score")/*this is where it gets all the stuff from the html*/
let playerwins = 0
let computer_choice = document.getElementById("computer")
let result = document.getElementById("result")
let cpu_score = document.getElementById("computer_score")
let cpuwins = 0
const reset = document.getElementById("reset")
buttons.forEach(button => {
   button.addEventListener('click', () => {
       console.log("Choice button clicked.")
       // choose the index of the target button id, then have the cpu choose a random value
       checkwinner((choices_list.indexOf(button.id)), cpu_choose_item());
   })
})
const choices_list = ['paper', 'rock', 'scissors', 'tinfoil','microwave'];
const choice_icons = ['assets/paper.png',
                      'assets/rock.png',
                      'assets/scissors.png',
                      'assets/tin_foil.png',
                      'assets/microwave.png']
// returns a random integer value from 1-3 (1 = rock, 2 = scissors, etc.)
function cpu_choose_item() { 
   return Math.floor((Math.random() * 4.99))
}

function displayagain(){
        buttons.forEach(Element => {/*makes the buttons appear again*/
            Element.style.display = "flex"
        })
}

function checkwinner(player, cpu){
   console.log(`Player: ${player} | Computer: ${cpu}`);
   let winner;
   // if the values are equal, tie
   if(player == cpu){
      winner ="tie"
   }
   else if(player==0){
      if(cpu == 1){
         winner = "Paper covers Rock, You Win!"
         playerwins++
      }
      else if(cpu==2){
      winner="Scissors cuts Paper, You Lose!"
      cpuwins++
   } else if (cpu==3) {
      winner="Paper Is more Durable than tin foil, You Win!"
      playerwins++
   } else {
      winner="Microwave Burns Paper, You Lose!"
      cpuwins++
   }
   }
   else if (player == 1) {
      if (cpu == 0) {
         winner = "Paper Covers Rock, You Lose!"
         cpuwins++
      } else if(cpu==2){
         winner="Rock Crushes Scissors, You win!"
         playerwins++
      } else if (cpu==3) {
         winner="Tin Foil covers Rock, You Lose!"
         cpuwins++
      } else{
         winner="Rock Crushes Microwave, You win!"
         playerwins++
      }
      
   } else if(player == 2) {
      if (cpu==0) {
         winner="Rock Crushes Microwave, You win!"
         playerwins++
      } else if(cpu==1) {
         winner="Rock Crushes Scissors, You Lose!"
         cpuwins++
      }else if (cpu==3) {
         winner="Scissors cuts Tin Foil, You win!"
         playerwins++
      } else{
         winner="Microwave melts scissors, You Lose!"
         cpuwins++
      }
   }else if(player == 3){
      if (cpu==0) {
         winner="Paper Is more Durable than tin foil, You lose!"
         cpuwins++
      } else if(cpu==1){
         winner="Tin Foil covers Rock, You Win!"
         playerwins++
      } else if(cpu==2){
         winner="Scissors cuts Tin Foil, You Lose!"
         cpuwins++
      }else{
         winner="Tin Foil explodes Microwave, You Win!"
         playerwins++
      }
   } else {
      if (cpu==0) {
         winner="Microwave Burns Paper, You Win!"
         playerwins++
      } else if(cpu==1){
         winner="Rock Crushes Microwave, You Lose!"
         cpuwins++
      } else if(cpu==2){
         winner="Microwave melts scissors, You Win!"
         playerwins++
      } else{
         winner="Tin Foil explodes Microwave, You Lose!"
         cpuwins++
      }
   }
   updateUI(player, cpu, winner);
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
function updateUI(player, cpu, winner) {
   result.innerHTML = "computer's thinking"
   // empty out any images stored previously
   player_choice.innerHTML = '';
   computer_choice.innerHTML = '';
   reset.style.display = "none"
   buttons.forEach(Element => {/*makes the buttons disappear */
      Element.style.display = "none"
      setTimeout(()=>{buttons.forEach(Element => {/*makes the buttons appear again*/
         Element.style.display = "flex"
         reset.style.display = "flex"
     })},3000)
  });
   setTimeout(() => {update2(player, cpu, winner)}, 1000)
   }

   function update2(player, cpu, winner){
      result.innerHTML = "Rock, Paper, Scissors, Shoot!"       
   // create a new image, set the source to the player's
   // choice, format the size, then append to player_choice
   let p_img = new Image();
   p_img.src = choice_icons[player];
   if (player==4) {
      p_img.classList.add('display_micro'); 
   } else {
      p_img.classList.add('display'); 
   }
   player_choice.appendChild(p_img); 

   // create a new image, set the source to the cpu's
   // choice, format the size, then append to computer_choice
   let c_img = new Image();
   c_img.src = choice_icons[cpu];
   if (cpu==4){
      c_img.classList.add("cpu_display_micro")
   } else {
      c_img.classList.add('cpu_display');
   }
   computer_choice.appendChild(c_img);
setTimeout(() => {update3(player,cpu,winner)}, 2000)
}
function update3(player,cpu,winner){
result.innerHTML = winner
player_score.innerHTML = "Player score: " + playerwins
cpu_score.innerHTML = "Computer score: " + cpuwins
}
reset.addEventListener("click", Clear)
/*function pickpaper() {// thins is the function for when the player selects paper
  player.innerHTML = ""
   playerpick = 1
   cpuchoice = computerchoice()
   result.innerHTML = "Computer's thinking...";
    computer.innerHTML = ""//resets the computer's display
   setTimeout(papercheck1, 1500)// makes papercheck1 function run after 1.5sec
}
function papercheck1(){
   player.innerHTML = '<img src="assets/paper.png" alt="" class="display">';// changes the image on the player display
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
   cpuchoice = computerchoice()
   player.innerHTML = ""
    result.innerHTML = "Computer's thinking...";
    computer.innerHTML = ""//resets the computer's display
   setTimeout(rockcheck1, 1500)// makes rockcheck1 function run after 1.5sec
}
function rockcheck1(){
   player.innerHTML = '<img src="assets/rock.png" alt="" class="display">'// changes the image on the player display
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
    cpuchoice = computerchoice()
    player.innerHTML = ""
    result.innerHTML = "Computer's thinking...";
    computer.innerHTML = ""//resets the computer's display
   setTimeout(scissorscheck1, 1500)
}
function scissorscheck1(){
   player.innerHTML = '<img src="assets/scissors.png" alt="" class="display">'// changes the image on the player display
    setTimeout(scissorscheck2, 2000)
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
   cpuchoice = computerchoice()
   player.innerHTML = ""
   result.innerHTML = "Computer's thinking...";
   computer.innerHTML = ""//resets the computer's display
  setTimeout(microwavecheck1, 1500)
  
   }

function microwavecheck1(){
   player.innerHTML = '<img src="assets/microwave.png" alt="" class="display_micro">'// changes the image on the player display
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
   cpuchoice = computerchoice()
   result.innerHTML = "Computer's thinking...";
   player.innerHTML = ""
    computer.innerHTML = ""//resets the computer's display
   setTimeout(tinfoilcheck1, 1500)
   
}
function tinfoilcheck1(){
   player.innerHTML = '<img src="assets/tin_foil.png" alt="" class="display">'// changes the image on the player display
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
}*/
/*function Clear() {
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
*/