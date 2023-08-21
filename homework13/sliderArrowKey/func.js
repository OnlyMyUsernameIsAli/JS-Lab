function slider(event) {
    if (event.deltaY === 100 || event.keyCode == 40) {
        if (event.target.getAttribute("id") !== "last") {
            // console.log(event.target);
            event.target.classList.add("slideUp");
        }
    } else {
        if (event.target.getAttribute("id") !== "first") {
            event.target.previousElementSibling.classList.remove("slideUp");
        }
    }
}

function sliderArrowKey(event) {
    let section = document.querySelector(".wait")
    if (event.keyCode == 40) {
        if (section.getAttribute("id") !== "last") {
            section.classList.add("slideUp");
            if (section.nextElementSibling.getAttribute("id") !== "last") {
                section.nextElementSibling.classList.add("wait");
                section.classList.remove("wait");
            }
        }
    }

    if (event.keyCode == 38) {
        section.classList.remove("slideUp");
        section.previousElementSibling.classList.add("wait");
        section.classList.remove("wait");
    }
}

window.addEventListener("wheel", slider);
window.onkeydown = sliderArrowKey;