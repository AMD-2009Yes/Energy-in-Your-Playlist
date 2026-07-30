let upto = 0;
let counts = setInterval(updated, 50);

function updated() {
    let count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto === 100) {
    clearInterval(counts);
    }
}

