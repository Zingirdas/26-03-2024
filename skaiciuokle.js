const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const x = xInput.valueAsNumber;
    const y = yInput.valueAsNumber;
    const sum = (y / ((x / 100) ** 2));
    rez.innerHTML = `Jūsų KMI yra: ${sum.toFixed(2)}`;
}

btn.onclick = skaiciuoti;