"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    id: 123,
    userId: "razaBoy",
    email: "r@za.com",
    startTrial() {
        return "Your trial starts now.";
    },
    getCoupon: () => {
        return 1234;
    },
    getDetails: (id) => {
        return { userId: "razaBoy", email: "r@za.com" };
    },
};
let fortuner = {
    wheels: 4,
    seatingCapacity: 7,
    fuelType: "petrol",
    brandName: "toyota",
    originCountry: "germany"
};
