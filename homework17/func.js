let container = document.querySelector(".Product__root");
let category = document.querySelector(".Category");
let clearFillter = document.querySelector(".clear");
let counter = document.querySelector(".counter");

fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))



function request(text) {
    fetch(`https://fakestoreapi.com/products${text ? `${text}` : ""}`)
        .then(res => res.json())
        .then(data => render(data));
}      

    function render(data) {
        let temp = data.map((item) => {
        return `
        <div class="cont col-12 col-md-6 col-lg-4 col-xl-3" id="${item.id}" onclick="openproduct(event)">
         <div class="pic">
             <img src="${item.image}">
         </div>
         <div class="txt">
             <button onclick="renderCategory(\`${item.category}\`)">${item.category}</button>
             <div class="titleCont">
             <p>${item.title}</p>
             </div>
             <div class="footer">
             <p>price: ${item.price}$</p>
             <span>${item.rating.rate} <i class="fa fa-star" style="color: #e5e525;"></i></span>
             </div>
         </div>
         <button class="AddtoCard" onclick="AddtoCard(event)">Add to Card</button>
     </div>`
    })
    container.innerHTML = temp.join("");
}

fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>renderCate(json))


function renderCate(json) {
    category.innerHTML = `<option value="" selected>Category</option>`;
    json.map(item => {
        category.innerHTML += `
        <option value="${item}">${item}</option>
        `
    });
}

function cateselector(event) {
    let text = "";
    if (category.value) {
        text = `/category/${category.value}`
        request(text);
    }else {
        text = "";
        request(text);
    }  
}

function deleteFillters() {
    category.value = "";
    cateselector();
}

function openproduct(event) {
    
}

window.addEventListener("load", () => {
    let text = ""
    request(text);
})
category.addEventListener("change", cateselector);
clearFillter.addEventListener("click", deleteFillters)