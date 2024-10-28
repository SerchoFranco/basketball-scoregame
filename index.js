const scoreHomeEl = document.querySelector("#score-home");
const scoreGuestEl = document.querySelector("#score-guest");

let scoreHome = 0;
let scoreGuest = 0;


function addPoints(points = 0, isHome = false) {
    if (isHome) {
        scoreHome += points;
        scoreHomeEl.textContent = scoreHome;
        return;
    }
    scoreGuest += points;
    scoreGuestEl.textContent = scoreGuest;
}//end function addPoints
