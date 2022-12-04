const homePlusOne = document.getElementById("homePlusOne");
const homePlusTwo = document.getElementById("homePlusTwo");
const homePlusThree = document.getElementById("homePlusThree");

const guestPlusOne = document.getElementById("guestPlusOne");
const guestPlusTwo = document.getElementById("guestPlusTwo");
const guestPlusThree = document.getElementById("guestPlusThree");

let homeScore = 0;
let guestScore = 0;

homePlusOne.addEventListener("click", () => {
    homeScore++;
    document.getElementById("home-score").textContent = homeScore;    
})

homePlusTwo.addEventListener("click", () => {
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore;    
})

homePlusThree.addEventListener("click", () => {
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore;    
})

guestPlusOne.addEventListener("click", () => {
    guestScore++;
    document.getElementById("guest-score").textContent = guestScore;
})

guestPlusTwo.addEventListener("click", () => {
    guestScore += 2;
    document.getElementById("guest-score").textContent = guestScore;
})

guestPlusThree.addEventListener("click", () => {
    guestScore += 3;
    document.getElementById("guest-score").textContent = guestScore;
})