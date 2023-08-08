func();
function func() {
    let rand = Math.floor(Math.random() * 4)
    let src = "";
    if (rand === 0) {
        src = "url(\"./images/wallpaper1.jpg\")";
    }
    if (rand === 1) {
        src = "url(\"./images/wallpaper2.jpg\")";
    }
    if (rand === 2) {
        src = "url(\"./images/wallpaper3.jpg\")";
    }
    if (rand === 3) {
        src = "url(\"./images/wallpaper4.jpg\")";
    }
    document.body.style.backgroundImage=src;
}