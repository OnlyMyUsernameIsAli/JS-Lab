let title = document.querySelector(".title");
let body = document.querySelector(".body");
let root = document.getElementById("root");
let username = document.querySelector(".username");
let userPic = document.querySelector(".img");
let id = null;
let users = null;
let data = null;

fetch('https://jsonplaceholder.ir/users', {
    method: 'GET',
})
    .then(response => response.json())
    .then(json => users = json)

fetch('https://jsonplaceholder.ir/posts', {
    method: 'GET',
})
    .then(response => response.json())
    .then(json => data = json)

setTimeout(() => {
    render(data)
}, 500)


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