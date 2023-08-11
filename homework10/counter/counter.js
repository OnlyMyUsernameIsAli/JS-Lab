// dom nodes
let addBtn = document.querySelector(".add");
let minusBtn = document.querySelector(".minus");
let odd = document.querySelector(".odd");
let h2 = document.querySelector("h2");

// function
function addCounter() {
    let count = +h2.textContent;
    h2.textContent = ++count;
}

function minusCounter() {
    let count = +h2.textContent;
    h2.textContent = --count;
}

function oddCounter() {
    if (+h2.textContent % 2 === 1) {
        let count = +h2.textContent;
        h2.textContent = ++count;
    }
}

// events
addBtn.addEventListener("click", addCounter)
minusBtn.addEventListener("click", minusCounter)
odd.addEventListener("click", oddCounter)
