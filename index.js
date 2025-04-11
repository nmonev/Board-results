let home = 0
let guest = 0
let countHome = 0
let countGuest = 0
let sumHome = 0
let sumGuest = 0
function add1BtnHome() {
     countHome += 1
     sumHome = countHome + home
     document.getElementById("firstText").innerText = sumHome
}
function add2BtnHome() {
     countHome += 2
     sumHome = countHome + home
     document.getElementById("firstText").innerText = sumHome
}
function add3BtnHome() {
     countHome += 3
     sumHome = countHome + home
     document.getElementById("firstText").innerText = sumHome
}

function add1BtnGuest() {
     countGuest += 1
     sumGuest = countGuest + home
     document.getElementById("secondText").innerText = sumGuest
}
function add2BtnGuest() {
     countGuest += 2
     sumGuest = countGuest + home
     document.getElementById("secondText").innerText = sumGuest
}
function add3BtnGuest() {
     countGuest += 3
     sumGuest = countGuest + home
     document.getElementById("secondText").innerText = sumGuest
}