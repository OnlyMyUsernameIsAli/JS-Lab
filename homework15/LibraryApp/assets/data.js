const books = [
    {
        id: 1,
        title: "خواجه تاجدار",
        author: "ژان گور",
        published_date: 2007,
        language: "persian",
        genre: "تاریخ",
        imgSrc: "1.jpg",
        price: 249000
    },
    {
        id: 2,
        title: "ضیافت",
        author: "افلاطون",
        published_date: 385,
        language: "greek",
        genre: "فلسفه",
        imgSrc: "2.jpg",
        price: 356000
    },
    {
        id: 3,
        title: "منطق الطیر",
        author: "عطار",
        published_date: 1177,
        language: "persian",
        genre: "شعر",
        imgSrc: "3.jpg",
        price: 142000
    },
    {
        id: 4,
        title: "مثنوی معنوی",
        author: "مولوی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "4.jpg",
        price: 97000
    },
    {
        id: 5,
        title: "دیوان حافظ",
        author: "حافظ",
        published_date: 1200,
        language: "persian",
        genre: "شعر",
        imgSrc: "5.jpg",
        price: 163000
    },
    {
        id: 6,
        title: "رومیو و جولیت",
        author: "ویلیام شکسپیر",
        published_date: 1595,
        language: "english",
        genre: "عاشقانه",
        imgSrc: "6.jpg",
        price: 458000
    },
    {
        id: 8,
        title: "ویس و رامین",
        author: "فخرالدین اسعد گرگانی",
        published_date: 1054,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "7.jpg",
        price: 256800
    },
    {
        id: 9,
        title: "گلستان",
        author: "سعدی",
        published_date: 1258,
        language: "persian",
        genre: "شعر",
        imgSrc: "8.jpg",
        price: 244900
    },
    {
        id: 9,
        title: "بوستان",
        author: "سعدی",
        published_date: 1257,
        language: "persian",
        genre: "شعر",
        imgSrc: "9.jpg",
        price: 626000
    },
    {
        id: 10,
        title: "گلشن راز",
        author: "شیخ محمود شبستری",
        published_date: 1311,
        language: "persian",
        genre: "شعر",
        imgSrc: "10.jpg",
        price: 115000
    },
    {
        id: 11,
        title: "لیلی و مجنون",
        author: "نظامی",
        published_date: 1188,
        language: "persian",
        genre: "عاشقانه",
        imgSrc: "11.jpg",
        price: 824000
    },
    {
        id: 12,
        title: "شاهنامه",
        author: "فردوسی",
        published_date: 1010,
        language: "persian",
        genre: "شعر",
        imgSrc: "12.jpg",
        price: 552000
    },
    {
        id: 13,
        title: "ایلیاد",
        author: "هومر",
        published_date: 762,
        language: "greek",
        genre: "شعر",
        imgSrc: "13.jpg",
        price: 222600
    },
    {
        id: 14,
        title: "اودیسه",
        author: "هومر",
        published_date: 725,
        language: "greek",
        genre: "شعر",
        imgSrc: "14.jpg",
        price: 664000
    },
    {
        id: 15,
        title: "هملت",
        author: "ویلیام شکسپیر",
        published_date: 1609,
        language: "greek",
        genre: "درام",
        imgSrc: "15.jpg",
        price: 423000
    },
    {
        id: 16,
        title: "دن کیشوت",
        author: "میگل دسروانتس",
        published_date: 1605,
        language: "spanish",
        genre: "درام",
        imgSrc: "16.jpg",
        price: 264000
    },
    {
        id: 17,
        title: "استادان بسیار زندگی بسیار",
        author: "برایان ال وایس",
        published_date: 1401,
        language: "persian",
        genre: "خاطرات و سفرنامه",
        imgSrc: "17.webp",
        price: 393500
    },
    {
        id: 18,
        title: "آزادی و فرهنگ",
        author: "مصطفی رحیمی",
        published_date: 1401,
        language: "persian",
        genre: "علمی",
        imgSrc: "18.webp",
        price: 109000
    },
    {
        id: 19,
        title: "سوترای الماسی که خواب و خیال را می برد",
        author: "تیک نات هان",
        published_date: 1401,
        language: "persian",
        genre: "داستان جهان",
        imgSrc: "19.webp",
        price: 80500
    },
    {
        id: 20,
        title: "استادان بسیار زندگی بسیار",
        author: "استفان شوارتزمن",
        published_date: 1401,
        language: "persian",
        genre: "خاطرات و سفرنامه",
        imgSrc: "20.jpg",
        price: 74500
    },
    {
        id: 21,
        title: "جامعه از پا در آمده",
        author: "بی یونگ چول هان",
        published_date: 1401,
        language: "persian",
        genre: "فلسفی",
        imgSrc: "21.webp",
        price: 215000
    },
    {
        id: 22,
        title: "بی بی پیک (چشمه)",
        author: "لودمیلا اولیتسکایا",
        published_date: 1401,
        language: "persian",
        genre: "داستان جهان",
        imgSrc: "22.jpg",
        price: 93500
    },
    {
        id: 23,
        title: "جام جهانی در جوادیه",
        author: "داوود امیریان",
        published_date: 1401,
        language: "persian",
        genre: "داستان ایران کودک و نوجوان",
        imgSrc: "23.jpg",
        price: 356040
    },
    {
        id: 24,
        title: "کتاب مستطاب صد و یک شب (تصویرگر شادی میاندهی)",
        author: "شهرام دلشاد امیرحسین الهیاری",
        published_date: 1401,
        language: "persian",
        genre: "داستان جهان",
        imgSrc: "24.jpg",
        price: 345200
    }
]

let arrFavCard = [];
let main_root = document.querySelector(".main-root");
let cart_icon = document.querySelector(".cart_icon");
let home = document.querySelector(".home");
let myprom = new Promise(() => firstRender());
myprom.then(mySwiper())


function firstRender() {
    main_root.classList.remove("showAll")
    main_root.innerHTML = `
    <div class="header__div__img-container">
        <img src="./assets/image/bg-1.jpg">
    </div>
    <div class="swiper-header">
        <div class="swiper__header--text">
            <div class="alaki"></div>
            <div class="text">
                <p>کتاب های خفن وبسایت ما</p>
            </div>
        </div>
        <div class="swiper__header--actB">
            <button class="showAll" onclick="showAll()">مشاهده همه</button>
        </div>
    </div>
    <div class="swiper slider">
        <div class="swiper-wrapper root"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
    `;
    let root = document.querySelector(".root");
    root.innerHTML = "";
    for (const element of books) {
        root.innerHTML += `
        <div class="swiper-slide" onclick="openCard(event)">
            <div id="${element.id}">
                <div class="cart-imgContainer">
                    <img src="./assets/image/${element.imgSrc}" alt="${element.title}">
                </div>
                <div class="cart-txtContainer">
                    <p class="cart-title">${element.title}</p>
                    <p><span class="cart-price">${element.price}</span> تومان</p>
                </div>
            </div>
        </div>`;
    }
    mySwiper()
}

function mySwiper() {
    var swiper = new Swiper(".slider", {
        spaceBetween: 0,
        centeredSlides: false,
        loop: true,
        fade: true,
        slidesPerGroupSkip: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            },
            1600: {
                slidesPerView: 5
            }
        }
    })
}

function showAll() {
    main_root.classList.toggle("showAll");
    main_root.innerHTML = `
    <div class="header__div__img-container">
        <img src="./assets/image/bg-1.jpg">
    </div>
    <div class="swiper-header">
        <div class="swiper__header--text">
            <div class="alaki"></div>
            <div class="text">
                <p>کتاب های خفن وبسایت ما</p>
            </div>
        </div>
        <div class="swiper__header--actB">
            <button class="goback" onclick="firstRender()">بازگشت</button>
        </div>
    </div>
    <div class="container">
        <div class="row"></div>
    </div>
    `;
    let row = document.querySelector(".row");
    books.map(item => {
        row.innerHTML += `
        <div class="Card-Container col-12 col-md-6 col-lg-4 col-xl-3" onclick="openCard(event)">
            <div id="${item.id}">
                <div class="cart-imgContainer">
                    <img src="./assets/image/${item.imgSrc}" alt="${item.title}">
                </div>
                <div class="cart-txtContainer">
                    <p class="cart-title">${item.title}</p>
                    <p><span class="cart-price">${item.price}</span> تومان</p>
                </div>
            </div>
        </div>
        `;
    })
}

function openCard(event) {
    let index = event.target.parentNode.parentNode.getAttribute("id");
    let product = books.find(item => item.id === +index);
    console.log(product);
    main_root.innerHTML = "";
    main_root.innerHTML = `
    <div class="header__div__img-container">
        <img src="./assets/image/bg-1.jpg">
    </div>
    <div class="box-container">
        <div class="product_image">
            <img src="./assets/image/${product.imgSrc}" alt="${product.title}">
        </div>
        <div class="product_details" dir="rtl">
            <div class="attributes">
                <p><span class="name">${product.title}</span></p>
                <p class="label">نویسنده : <span class="author">${product.author}</span></p>
                <p class="label">ژانر : <span class="genre">${product.genre}</span></p>
                <p class="label">زبان : <span class="lang">${product.language}</span></p>
                <p class="label">سال انتشار : <span class="PDate">${product.published_date}</span></p>
            </div>
            <div class="priceBox">
                <p class="label-price">قیمت محصول :</p>
                <p><span class="price">${product.price}</span> تومان</p>
                <div class="productButtons">
                    <button class="product_btn product_addToCard"><i class="fa fa-shopping-cart"></i> افزودن به سبد خرید</button>
                    <button class="product_btn product_addToFav"><i class="fa fa-heart"></i></button>
                </div>
            </div>
            <div class="back"><i class="fa fa-long-arrow-left"></i></div>
        </div>
    </div>`;
    let back = document.querySelector(".back").addEventListener("click", firstRender);
}

function favoritePage(event) {
    arrFavCard.push(event.target.parentElement.parentElement.parentElement);
}

function renderFav() {
    row.innerHTML = ""
    arrFavCard.map(item => {
        row.innerHTML += item.outerHTML;
    })
}

// cart_icon.addEventListener("click", renderFav);
home.addEventListener("click", (event) => {
    event.preventDefault();
    myprom = new Promise(() => firstRender());
    myprom.then(mySwiper());
});