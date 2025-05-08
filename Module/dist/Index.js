"use strict";
// Problem 1
function formatString(input, toUpper) {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}
// Problem 2
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
// Problem 3
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, current) => acc.concat(current), []);
}
// Problem 4
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
// Problem 5
function processValue(value) {
    return typeof value === 'string' ? value.length : value * 2;
}
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    return products.reduce((max, product) => product.price > max.price ? product : max);
}
// Problem 7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
// Problem 8
// async function testSquareAsync() {
//     try {
//       const result = await squareAsync(4);
//       console.log(result); // 16
//       await squareAsync(-3); // This will throw
//     } catch (error) {
//       console.error(error.message); // "Negative number not allowed"
//     }
//   }
//   testSquareAsync();
// Testing Problem 1: formatString
console.log(formatString("Hello")); // Output: "HELLO"
console.log(formatString("Hello", true)); // Output: "HELLO"
console.log(formatString("Hello", false)); // Output: "hello"
// Testing Problem 2: filterByRating
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
// Testing Problem 3: concatenateArrays
console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
// Testing Problem 4: Vehicle and Car classes
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel()); // Output: "Model: Corolla"
// Testing Problem 5: processValue
console.log(processValue("hello")); // Output: 5
console.log(processValue(10)); // Output: 20
// Testing Problem 6: getMostExpensiveProduct
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }
console.log(getMostExpensiveProduct([])); // Output: null
// Testing Problem 7: getDayType
console.log(getDayType(Day.Monday)); // Output: "Weekday"
console.log(getDayType(Day.Sunday)); // Output: "Weekend"
// // Testing Problem 8: squareAsync
// squareAsync(4).then(console.log);        // Output after 1s: 16
// squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
