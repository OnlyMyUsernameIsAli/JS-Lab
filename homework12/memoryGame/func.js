// dom nodes


let startbtn = document.querySelector("button");
let intervalTimerSecond = document.querySelector(".second");
let intervalTimerMinute = document.querySelector(".minute");
let counter = document.querySelector(".counter");
let section = document.querySelector("section");
let boxes = [...document.querySelectorAll(".grid-item")];
let shuffledBox = shuffle(boxes);
let matchs = [];
let matchedCard = 0;
section.innerHTML = "";
for (const box of shuffledBox) {
    section.innerHTML += box.outerHTML;
}
boxes = document.querySelectorAll(".grid-item");


// functions

function shuffle (boxes) {
    for (let i = 0; i < boxes.length; i++) {
        let randomIndex = Math.floor(Math.random() * boxes.length)
        const temp = boxes[i];
        boxes[i] = boxes[randomIndex];
        boxes[randomIndex] = temp
    }
    return boxes;
}

function start() {
    setInterval(function () {
        ++intervalTimerSecond.textContent;
        if (intervalTimerSecond.textContent === "60") {
            ++intervalTimerMinute.textContent;
            intervalTimerSecond.textContent = 0;
        }
    }, 1000)
    startbtn.setAttribute("disabled", "");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.add("animated");
        boxes[i].classList.remove("freeze");
    }
}

function showAll() {
    for (const box of boxes) {
        box.classList.add("show");
    }
    setTimeout(hideAll, 3000);
}

function hideAll() {
    for (const box of boxes) {
        box.classList.remove("show");
    }
}

function show() {
    this.classList.add("show")
    matchs.push(this);
    if (matchs.length === 2) {
        check();
        ++counter.textContent;
    }
}

function check() {
    if (matchs[0].innerHTML === matchs[1].innerHTML) {
        matchCards();
    } else {
        matchs[0].classList.add("unmatched");
        matchs[1].classList.add("unmatched");
        freezeAll();
        setTimeout(function () {
            unmatchedCard();
        }, 1000)
    }
}

function matchCards() {
    matchs[0].classList.add("matched");
    matchs[1].classList.add("matched");
    matchs = [];
    matchedCard += 2;
    setTimeout(function() {
        if (matchedCard == 16) {
            alert("you win!!!");
        }
    }, 1000)
}

function unmatchedCard() {
    matchs[0].classList.remove("unmatched", "show");
    matchs[1].classList.remove("unmatched", "show");
    matchs = [];
    unfreezeAll();
}

function freezeAll() {
    for (const box of boxes) {
        box.classList.add("freeze");
    }
}

function unfreezeAll() {
    for (const box of boxes) {
        box.classList.remove("freeze");
    }
}


// events


startbtn.addEventListener("click", start);
for (const box of boxes) {
    box.addEventListener("click", show);
}

window.addEventListener("load", showAll);
