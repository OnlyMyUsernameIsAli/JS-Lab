let title = document.querySelector(".title");
let body = document.querySelector(".body");
let root = document.getElementById("root");
let username = document.querySelector(".username");
let userPic = document.querySelector(".img");
let id = null;
let users = null;

const requestData = new XMLHttpRequest();
requestData.open("GET", "https://jsonplaceholder.ir/posts");

const requestUser = new XMLHttpRequest();
requestUser.open("GET", "https://jsonplaceholder.ir/users");

function getData() {
    let data = JSON.parse(requestData.responseText);
    setTimeout(() => {
        render(data)
    }, 1000)
}

function getUsers() {
    users = JSON.parse(requestUser.responseText);
}

function render(data) {
    root.innerHTML = "";
    data.map(item => {
        id = users.find(element => { return element.id === item.userId })
        root.innerHTML += `
        <div class="container">
        <div class="user">
        <p class="username">${id.name}</p>
        </div>
        <div class="post">
        <h2 class="title">${item.title}</h2>
        <p class="body">${item.body}</p>
        </div>
        </div>
        `
    })
}

requestData.addEventListener("load", getData);
requestData.send();

requestUser.addEventListener("load", getUsers);
requestUser.send();