let overallInput = Number(prompt("enter overall number :"));
if (overallInput < 60) {
    document.body.style.backgroundColor = "red";
    document.body.innerText = "FAILED"
}
if (overallInput >= 60 && overallInput < 90) {
    document.body.style.backgroundColor = "yellow";
    document.body.innerText = "Not Bad"
}
if (overallInput >= 90) {
    document.body.style.backgroundColor = "green";
    document.body.innerText = "Nice Done"
}
