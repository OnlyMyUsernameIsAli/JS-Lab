// model
let all = [];
let active = [];
let completed = [];

// dom node
let Strong = document.querySelector("strong");
let All = document.querySelector(".all");
let Active = document.querySelector(".active");
let Completed = document.querySelector(".completed");
let Clear_Completed = document.querySelector(".clear-completed");
let Input = document.querySelector(".todo-input");
let Submit = document.querySelector(".todo-input-submit");
let List = document.querySelector(".todo-list");
let SelectedList = document.querySelector(".selected");
let Toggles = document.querySelectorAll(".toggle");
let Delete_btns = document.querySelectorAll(".delete");
let attr = "";


//functions
function Todo_SenderFn(event) {
    if (event.keyCode === 13 || event.button === 0) {
        if (Input.value !== "") {
            let rand = Math.floor(Math.random() * 999999999);
            active.push({ "value": Input.value, "id": rand, "status": "active" });
        }
        Input.value = "";
        collectorAll();
        selectedFn();
        setEventFn();
    }
}

function collectorAll() {
    debugger
    let flag = false;
    if (all.length === 0) {
        all.push(active[0]);
    }
    for (let i = 0; i < active.length; i++) {
        flag = false;
        for (let k = 0; k < all.length; k++) {
            if (active[i].id === all[k].id) {
                flag = true;
            }
        }
        if (flag === false) {
            all.push(active[i]);
        }
    }
    for (let i = 0; i < completed.length; i++) {
        flag = false;
        for (let k = 0; k < all.length; k++) {
            if (completed[i].id === all[k].id) {
                flag = true;
            }
        }
        if (flag === false) {
            all.push(completed[i]);
        }
    }
}

function selectedFn() {
    switch (this) {
        case All:
            RenderAllFn();
            break;

        case Active:
            RenderActiveFn();
            break;

        case Completed:
            RenderCompletedFn();
            break;

        default:
            RenderAllFn();
            break;
    }
}

function RenderAllFn() {
    List.innerHTML = "";
    Strong.textContent = all.length
    for (const object of all) {
        List.innerHTML +=
            `<li id="${object.id}" class="${object.status}">
                <input class="toggle" type="checkbox">
                <label>${object.value}</label>
                <button class="delete"></button>
            </li>`
    }
    Toggles = document.querySelectorAll(".toggle");
    Delete_btns = document.querySelectorAll(".delete");
    setEventFn();
}

function RenderActiveFn() {
    List.innerHTML = "";
    Strong.textContent = active.length
    for (const object of active) {
        List.innerHTML +=
            `<li id="${object.id}" class="${object.status}">
                <input class="toggle" type="checkbox">
                <label>${object.value}</label>
                <button class="delete"></button>
            </li>`
    }
    Toggles = document.querySelectorAll(".toggle");
    Delete_btns = document.querySelectorAll(".delete");
    setEventFn();
}

function RenderCompletedFn() {
    Strong.textContent = completed.length
    for (const element of completed) {
        Completed.push(element);
    }
    List.innerHTML = "";
    for (const object of completed) {
        List.innerHTML +=
            `<li id="${object.id}" class="${object.status}">
                <input class="toggle" type="checkbox">
                <label>${object.value}</label>
                <button class="delete"></button>
            </li>`
    }
    Toggles = document.querySelectorAll(".toggle");
    Delete_btns = document.querySelectorAll(".delete");
    setEventFn();
}

function setEventFn() {
    for (const Toggle of Toggles) {
        Toggle.addEventListener("click", completeFn)
    }

    for (const Delete_btn of Delete_btns) {
        Delete_btn.addEventListener("click", deleteFn)
    }
}

function completeFn() {
    this.parentNode.classList.toggle("active");
    this.parentNode.classList.toggle("complete");
    attr = this.parentNode.getAttribute("id");
    for (const object of active) {
        if (object.id === attr) {
            completed.push(object);
            // active.slice(index, 1);
        }
    }
}

function deleteFn() {
    this.parentNode.remove();
    let index = this.parentNode.getAttribute("id");
    for (let i = 0; i < active.length; i++) {
        if (active[i].id === index) {
            active.slice(i, 1);
        }
    }
}

function ClearCompletedFn() {
    completed = [];

}



// events
Clear_Completed.addEventListener("click", ClearCompletedFn);
Submit.addEventListener("click", Todo_SenderFn);
Completed.addEventListener("click", selectedFn);
Active.addEventListener("click", selectedFn);
All.addEventListener("click", selectedFn);
window.onkeydown = Todo_SenderFn;