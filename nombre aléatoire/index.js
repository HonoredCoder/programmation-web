const Btn1 = document.getElementById("Btn1");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const label5 = document.getElementById("label5");
let max = 100;
let min = 1;
let randomNumber1;
let randomNumber2;
let randomNumber3;
let randomNumber4;
let randomNumber5;


Btn1.onclick = function () {
    randomNumber1 = Math.floor(Math.random() * max) + 1;
    randomNumber2 = Math.floor(Math.random() * max) + 1;
    randomNumber3 = Math.floor(Math.random() * max) + 1;
    randomNumber4 = Math.floor(Math.random() * max) + 1;
    randomNumber5 = Math.floor(Math.random() * max) + 1;

    label1.textContent = randomNumber1;
    label2.textContent = randomNumber2;
    label3.textContent = randomNumber3;
    label4.textContent = randomNumber4;
    label5.textContent = randomNumber5;

}



