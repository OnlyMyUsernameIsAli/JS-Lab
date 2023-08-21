
//dom node
let img = document.querySelector("img");
let title = document.querySelector(".title");
let p = document.querySelector(".price");
let rate = document.querySelector(".rate");



// img.getAttribute("src");



const PRODUCT = {
    title: 'دوربین دیجیتال کانن مدل EOS 5D Mark IV به همراه لنز 24-105 میلی متر F4 L IS II',
    price: 4800000,
    imageUrl: 'https://dkstatics-public.digikala.com/digikala-products/638044.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
    rate: 4,
    hasBadge: false
}

img.setAttribute("src", PRODUCT.imageUrl);
title.textContent = PRODUCT.title;
p.textContent = PRODUCT.price;
rate.textContent = PRODUCT.rate;