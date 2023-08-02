const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let pass = "";
Gen();
function Gen() {
    for (let i = 0; i < 8; i++) {
        let rand1 = Math.floor(Math.random() * 2);
        if (rand1 === 0) {
            let rand2 = Math.floor(Math.random() * 2);
            if (rand2 === 0) {
                let lowerRand = Math.floor(Math.random() * 26);
                for (let i = 0; i < 26; i++) {
                    if (i == lowerRand) {
                        pass += lower[i];
                        break;
                    }
                }
            }
            if (rand2 === 1) {
                let upperRand = Math.floor(Math.random() * 26);
                for (let i = 0; i < 26; i++) {
                    if (i == upperRand) {
                        pass += upper[i];
                        break;
                    }
                }
            }
        }
        if (rand1 === 1) {
            let numRand = Math.floor(Math.random() * 10);
            pass += numRand;
        }
    }
    console.log(pass);
}