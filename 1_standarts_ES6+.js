'use strict'

const priceArr = [200, 550, 4000, 23, 58, 5000, 485, 711];
const bonusCount = (bonus) => {
    let sum = 0;
    for (item of priceArr) {
        sum += item;
    }
    if (sum >= 10000) {
        return Math.trunc(sum*bonus);
    }
}
bonusCount(0.05);