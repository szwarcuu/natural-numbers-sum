"use strict";

import { counting } from "./utilities.js";

const form = document.querySelector("form");
const elInputValue = document.getElementById("inputValue");
const elResult = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = Number(elInputValue.value);

    if (isNaN(value) || value < 0 || !Number.isInteger(value)) {
        elResult.textContent = "Proszę podać liczbę naturalną!";
        return;
    }

    elResult.textContent = counting(value);
});