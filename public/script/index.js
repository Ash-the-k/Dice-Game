var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

document.querySelector(".img1").setAttribute("src",`/images/dice${randomNumber1}.png`)
document.querySelector(".img2").setAttribute("src",`/images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container > h1").textContent = 'Player 1 Won !';
    document.querySelectorAll("p")[0].textContent = '🚩 Player 1'
}   else if(randomNumber1 < randomNumber2){
    document.querySelector(".container > h1").textContent = 'Player 2 Won !';
    document.querySelectorAll("p")[1].textContent = 'Player 2 🚩'
}   else   document.querySelector(".container > h1").textContent = 'Draw'; 
