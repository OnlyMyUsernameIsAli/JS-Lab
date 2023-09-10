// model
let arrActive = [];
let arrComplete = [];

// dom nodex
let Strong = document.querySelector("strong");
let All = document.querySelector(".all");
let Active = document.querySelector(".active");
let Completed = document.querySelector(".completed");
let Clear_Completed = document.querySelector(".clear-completed");
let Input = document.querySelector(".todo-input");
let Submit = document.querySelector(".todo-input-submit");
let List = document.querySelector(".todo-list");
let attrId = "";
let Status = "";
let switchFlag = 0;

//functions
function SubmitFn(event, switchFlag) {
    if (event.keyCode === 13 || event.button === 0) {
        if (Input.value !== "") {
            let rand = Math.floor(Math.random() * 999999999);
            arrActive.push({ "value": Input.value, "id": rand, "status": "active" });
        }
        Input.value = "";
    }

    if (event.target.textContent === "All") {
        switchFlag = 0;
    } else if (event.target.textContent === "Active") {
        switchFlag = 1;
    } else if (event.target.textContent === "Completed") {
        switchFlag = 2;
    }
    switchFn(switchFlag);
}

function switchFn(switchFlag) {
    switch (switchFlag) {
        case 1:
            renderActiveFn();
            switchFlag = 1;
            break;

        case 2:
            renderCompeletedFn();
            switchFlag = 2;
            break;

        default:
            renderAllFn();
            break;
    }
}

function renderAllFn() {
    List.innerHTML = "";
    arrActive.map(item => {
        List.innerHTML +=
            `<li id="${item.id}" class="${item.status}">
                <input class="toggle" onclick="convertFn(event)" type="checkbox">
                <label>${item.value}</label>
                <button class="delete" onclick="deleteFn(event)"></button>
            </li>`;
    })
    arrComplete.map(item => {
        List.innerHTML +=
            `<li id="${item.id}" class="${item.status}">
                <input class="toggle" onclick="convertFn(event)" type="checkbox">
                <label>${item.value}</label>
                <button class="delete" onclick="deleteFn(event)"></button>
            </li>`;
    })
    Strong.textContent = arrActive.length + arrComplete.length;
}

function renderActiveFn() {
    List.innerHTML = "";
    arrActive.map(item => {
        List.innerHTML +=
            `<li id="${item.id}" class="${item.status}">
                <input class="toggle" onclick="convertFn(event)" type="checkbox">
                <label>${item.value}</label>
                <button class="delete" onclick="deleteFn(event)"></button>
            </li>`;
    })
    Strong.textContent = arrActive.length;
}

function renderCompeletedFn() {
    List.innerHTML = "";
    arrComplete.map(item => {
        List.innerHTML +=
            `<li id="${item.id}" class="${item.status}">
                <input class="toggle" onclick="convertFn(event)" type="checkbox">
                <label>${item.value}</label>
                <button class="delete" onclick="deleteFn(event)"></button>
            </li>`;
    })
    Strong.textContent = arrComplete.length;
}

function convertFn(event) {
    attrId = event.target.parentNode.getAttribute("id");
    Status = event.target.parentNode.getAttribute("class");
    if (Status === "active") {
        let element = arrComplete.find(item => item.id == attrId);
        element = arrActive.find(item => item.id == attrId);
        element.status = "completed";
        arrComplete.push(element);
        arrActive.splice(element, 1);
        switchFn(switchFlag);
    } else if (Status === "completed") {
        let element = arrComplete.find(item => item.id == attrId);
        element = arrActive.find(item => item.id == attrId);
        element.status = "active";
        arrActive.push(element);
        arrComplete.splice(element, 1);
        switchFn(switchFlag);
    }
}

function deleteFn(event) {
    if (arrActive.find(item => item.id == event.target.parentNode.getAttribute("id"))) {
        arrActive.splice(event.target.parentNode, 1);
        switchFn(switchFlag);
    } else {
        arrComplete.splice(event.target.parentNode, 1);
        switchFn(switchFlag);
    }
}

function Clear_CompletedFn() {
    arrComplete = [];
    switchFn(switchFlag);
}

// events
All.addEventListener("click", SubmitFn);
Active.addEventListener("click", SubmitFn);
Completed.addEventListener("click", SubmitFn);
Submit.addEventListener("click", SubmitFn);
Clear_Completed.addEventListener("click", Clear_CompletedFn);
window.onkeydown = SubmitFn;