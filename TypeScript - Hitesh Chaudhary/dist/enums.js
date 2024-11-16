"use strict";
var seatChoice;
(function (seatChoice) {
    seatChoice["AISLE"] = "aisle";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
    seatChoice[seatChoice["FOURTH"] = 3] = "FOURTH";
})(seatChoice || (seatChoice = {}));
;
let razaSeat = seatChoice.WINDOW;
console.log(razaSeat);
razaSeat = seatChoice.AISLE;
console.log(razaSeat);
