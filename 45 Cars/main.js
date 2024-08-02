// assignment no 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Function to store information about a car
function create_car(manufacturer, model, options) {
    if (options === void 0) { options = {}; }
    var car = __assign({ manufacturer: manufacturer, model: model }, options);
    return car;
}
// Call the function with required information and additional name-value pairs
var car1 = create_car("nissan", "petrol", { color: "Red", year: 2022 });
var car2 = create_car("lamborghini", "urus", { color: "yellow", autopilot: true });
var car3 = create_car("Ford", "Mustang", { color: "orange", convertible: true });
// Print the returned objects
console.log(car1);
console.log(car2);
console.log(car3);
