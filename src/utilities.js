"use strict";

function counting(n) {
    if (n === 0) return "0 = 0";

    let sum = 0;
    let text = "";

    for (let i = 1; i <= n; i++) {
        sum += i;
        if (i > 1) text += " + ";
        text += i;
    }

    return `${text} = ${sum}`;
}

export {counting};