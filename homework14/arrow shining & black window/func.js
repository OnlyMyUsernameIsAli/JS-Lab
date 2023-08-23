window.addEventListener("keydown", blackwindow);
let filter = document.querySelector(".filter");
function blackwindow(event) {
    if (event.keyCode === 66) {
        filter.classList.toggle("dark");
    }
}