const paper = document.getElementById("paper")
const rock = document.getElementById("rock")
const scissors = document.getElementById("scissors")
const microwave = document.getElementById("microwave")
const tinfoil = document.getElementById("tinfoil")
const buttons = document.querySelectorAll("button")
let player = document.getElementById("player")
let playerpick = 0
let player_score = document.getElementById("player_score")
let playerwins = 0
let computer = document.getElementById("computer")
let result = document.getElementById("result")

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", () => {
        buttons.forEach(Element => {
            Element.style.display = "none"
        })
    })
}


function computerchoice() {
    return Math.floor(Math.random() * (5-1)) + 1
}


function pickpaper() {
    player.innerHTML = '<img src="assets/paper.png" alt="" class="display">';
     playerpick = 1
    cpuchoice = computerchoice()
     /*roberto is roberto*/
    
     if (cpuchoice == 1 ) {
        computer.innerHTML = '<img src="assets/paper.png" alt="" class="cpu_display">';
        result.innerHTML = "It's A Draw!";
        playerwins++;
        player_score.innerHTML = 
     } else if(cpuchoice == 2) {
        computer.innerHTML = '<img src="assets/rock.png" alt="" class="cpu_display">'
        result.innerHTML = "Paper Covers Rock, You Win!"
        
     } else if(cpuchoice == 3) {
        computer.innerHTML = '<img src="assets/scissors.png" alt="" class="cpu_display">'
     } else if(cpuchoice == 4) {
        computer.innerHTML = '<img src="assets/microwave.png" alt="" class="cpu_display_micro">'
     } else {
        computer.innerHTML = '<img src="assets/tin_foil.png" alt="" class="cpu_display">'
     }
}
function pickrock() {
    player.innerHTML = '<img src="assets/rock.png" alt="" class="display">'
    
}
function pickscissors() {
    player.innerHTML = '<img src="assets/scissors.png" alt="" class="display">'
}
function pickmicrowave() {
    player.innerHTML = '<img src="assets/microwave.png" alt="" class="display_micro">'
}
function picktinfoil() {
    player.innerHTML = '<img src="assets/tin_foil.png" alt="" class="display">'
}

paper.addEventListener("click",pickpaper)
rock.addEventListener("click",pickrock)
scissors.addEventListener("click",pickscissors)
microwave.addEventListener("click",pickmicrowave)
tinfoil.addEventListener("click",picktinfoil)