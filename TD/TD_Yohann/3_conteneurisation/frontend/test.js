let cookies = 0;
let bonus1Count = 0;
let bonus2Count = 0;
let bonus3Count = 0;
let bonus1Price = 10;
let bonus2Price = 20;
let bonus3Price = 30;
let passiveIncome = 0;

document.getElementById('click').addEventListener('click', () => {
    cookies++;
    updateCookieCount();
});

document.getElementById('bonus1').addEventListener('click', () => {
    if (cookies >= bonus1Price) {
        cookies -= bonus1Price;
        bonus1Count++;
        bonus1Price += 10; // Increase price
        updateCookieCount();
        passiveIncome++;
        document.getElementById('bonus1-count').innerText = bonus1Count;
        document.getElementById('bonus1').innerText = `Acheter un bonus 1 (${bonus1Price} cookies)`;
    }
});

document.getElementById('bonus2').addEventListener('click', () => {
    if (cookies >= bonus2Price) {
        cookies -= bonus2Price;
        bonus2Count++;
        bonus2Price += 20; // Increase price
        updateCookieCount();
        passiveIncome += 2;
        document.getElementById('bonus2-count').innerText = bonus2Count;
        document.getElementById('bonus2').innerText = `Acheter un bonus 2 (${bonus2Price} cookies)`;
    }
});

document.getElementById('bonus3').addEventListener('click', () => {
    if (cookies >= bonus3Price) {
        cookies -= bonus3Price;
        bonus3Count++;
        bonus3Price += 30; // Increase price
        updateCookieCount();
        passiveIncome += 3;
        document.getElementById('bonus3-count').innerText = bonus3Count;
        document.getElementById('bonus3').innerText = `Acheter un bonus 3 (${bonus3Price} cookies)`;
    }
});

function updateCookieCount() {
    document.getElementById('cookie').innerText = cookies;
}

function generatePassiveIncome() {
    cookies += passiveIncome;
    updateCookieCount();
}
setInterval(generatePassiveIncome, 1000);