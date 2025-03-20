const paper = document.getElementById("paper")
const rock = document.getElementById("rock")
const scissors = document.getElementById("scissors")
const microwave = document.getElementById("microwave")
const tinfoil = document.getElementById("tinfoil")
const buttons = document.querySelectorAll("button")
let player = document.getElementById("player")
const choices = ('rock','paper','scissors','microwave','tinfoil')
let playerpick = ''

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", () => {
        buttons.forEach(Element => {
            Element.style.display = "none"
        })
    })
}





function pickpaper() {
    player.innerHTML = '<img src="assets/paper.png" alt="" class="display">';
     playerpick = "paper"

     /*roberto is roberto*/
    
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