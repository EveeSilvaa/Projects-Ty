"use strict";
function reviewUser(review) {
    if (!review) {
        console.log("Você não avaliou o produto");
        return;
    }
    console.log(`A nota que você deu foi: ${review}, obrigada!`);
}
reviewUser(false);
reviewUser(5);
reviewUser(3);
