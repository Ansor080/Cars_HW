let cars = [
    {
        mode: "malibu 2",
        mark: "Chevrolet",
        color: "white",
        price: 30000,
        engine: 2.4,
        year: 2023
    },
    {
        mode: "Tahoe",
        mark: "GM",
        color: "black",
        price: 90000,
        engine: 3.5,
        year: 2024
    },
    {
        mode: "Bugatti",
        mark: "BG",
        color: "blue",
        price: 2000000,
        engine: 5.5,
        year: 2020
    },
    {
        mode: "Matiz",
        mark: "Daewoo",
        color: "green",
        price: 3000,
        engine: 5.5,
        year: 2015
    },
    {
        mode: "Nexia 2",
        mark: "Chevrolet",
        color: "gray",
        price: 7000,
        engine: 1.6,
        year: 2010
    },
    {
        mode: "Camry",
        mark: "Toyota",
        color: "white",
        price: 70000,
        engine: 3.5,
        year: 2022
    },
]

let from = parseInt(prompt("От"));
let up = parseInt(prompt("До"));

let filtered = cars.filter((car) => car.price >= from && car.price <= up);

console.log(filtered);