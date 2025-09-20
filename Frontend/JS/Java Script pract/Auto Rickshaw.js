function Auto_Rickshaw_Fare(distance) {
    let fare = 0;

    if (distance <= 4) {
        fare = 30;
    } else if (distance <= 9) {
        fare = 30 + (distance - 4) * 10;
    } else if (distance <= 18) {
        fare = 30 + (5 * 10) + (distance - 9) * 15;
    } else {
        fare = 30 + (5 * 10) + (10 * 15) + (distance - 19) * 20;
    }

    return fare;
}

let price = Auto_Rickshaw_Fare(19.5);
console.log("Auto Rickshaw Fare:", price);

