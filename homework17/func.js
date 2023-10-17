let container = document.querySelector(".Product__root");
let category = document.querySelector(".Category");
let clearFillter = document.querySelector(".clear");
let counter = document.querySelector(".counter");
let cartBox = document.querySelector(".cart__container");
let headerCartRoot = document.querySelector(".headerCartRoot");
let rootSection = document.querySelector(".rootSection");
let root = document.querySelector(".root");
let getId = 0;
let text = "";
let priceCount = 0;

fetch('https://fakestoreapi.com/carts/user/1')
    .then(res => res.json())
    .then(json => getCart(json))

function firstFetch(text) {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => renderCate(json))

    fetch(`https://fakestoreapi.com/products${text ? `${text}` : ""}`)
        .then(res => res.json())
        .then(data => render(data))
}
function render(data) {
    let temp = data.map((item) => {
        return `
        <div class="cont col-12 col-md-6 col-lg-4 col-xl-3" id="${item.id}" onclick="openproduct(event)">
         <div class="pic">
             <img src="${item.image}">
         </div>
         <div class="txt">
             <button>${item.category}</button>
             <div class="titleCont">
             <p>${item.title}</p>
             </div>
             <div class="footer">
             <p>price: ${item.price}$</p>
             <span>${item.rating.rate} <i class="fa fa-star" style="color: #e5e525;"></i></span>
             </div>
         </div>
         <button class="AddtoCard">Add to Card</button>
     </div>`
    })
    container.innerHTML = temp.join("");
}

function renderCate(json) {
    category.innerHTML = `<option value="" selected>Category</option>`;
    json.map(item => {
        category.innerHTML += `
        <option value="${item}">${item}</option>
        `
    });
}

function cateselector() {
    let text = "";
    if (category.value) {
        text = `/category/${category.value}`
        firstFetch(text);
    } else {
        text = "";
        firstFetch(text);
    }
}

function deleteFillters() {
    category.value = "";
    cateselector();
}

function openproduct(event) {
    getId = +event.target.parentElement.parentElement.getAttribute("id");
    fetch(`https://fakestoreapi.com/products/${getId}`)
    .then(res => res.json())
    .then(json => rootRender(json))
}

function getCart(json) {
    let arr = [...json[0].products];
    for (let i = 0; i < arr.length; i++)
        fetch(`https://fakestoreapi.com/products/${arr[i].productId}`).then(res=>res.json()).then(json => openCart(json))

}

headerCartRoot.innerHTML = `
    <div class="CartHeader">
        <p><span class="CartCount">1</span>item</p>
        </div>`;
        function openCart(json) {
    headerCartRoot.innerHTML += `
    <div class="CartMiddle">
        <div class="leftCont">
            <div class="Cart__img--container CartImgCont">
                <img src="${json.image}">
            </div>
            <div class="manipulation">
                <ul>
                    <li class="minus">
                        <i class="fa fa-minus"></i>
                    </li>
                    <li class="Manipule__Counter">
                        <span class="Manipule__Counter__span">1</span>
                    </li>
                    <li class="plus">
                        <i class="fa fa-plus"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="rightCont">
            <div class="Cart_title">
                <p>${json.title}</p>
                <p>price : <span class="price">${json.price}</span>$</p>
                <span>${json.rating.rate} <i class="fa fa-star" style="color: #e5e525;"></i></span>
            </div>
        </div>
    </div>`;
    priceCount += json.price;
    headerCartRoot.innerHTML += `
    <div class="CartFooter">
    <div>
    <p>Total price : <span class="TPrice">${priceCount}</span>$</p>
    <button class="ProceedtoCheckout">Proceed to checkout</button>
    </div>
    </div>`;
    }
function rootRender(json) {
    root.innerHTML = "";
    rootSection.innerHTML = "";
    rootSection.innerHTML += `
    <div class="product">
        <div class="image">
            <img src="${json.image}">
        </div>
        <div class="details">
            <p class="title">${json.title}</p>
            <p class="description">${json.description}</p>
            <p>category : <span class="category">${json.category}</span></p>
            <p>rate : <span class="rate">${json.rating.rate}</span> <i class="fa fa-star" style="color: rgb(219, 219, 24);"></i></p>
            <p>price : <span class="price">${json.price}</span> $</p>
            <button class="Back" onclick="firstFetch()"><i class="fa fa-long-arrow-left"></i></button>
        </div>
        <button class="AddToCart">Add To Cart</button>
    </div>`;
}


window.addEventListener("load", () => {
    firstFetch(text);
})
category.addEventListener("change", cateselector);
clearFillter.addEventListener("click", deleteFillters)