// assignment no 45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly

// Function to store information about a car
function create_car(manufacturer: string, model: string, options: { [key: string]: any } = {}): { manufacturer: string, model: string, [key: string]: any } {
    let car = {
        manufacturer: manufacturer,
        model: model,
        ...options
    };
    return car;
}

// Call the function with required information and additional name-value pairs
let car1 = create_car("nissan", "petrol", { color: "Red", year: 2022 });
let car2 = create_car("lamborghini", "urus", { color: "yellow", autopilot: true });
let car3 = create_car("Ford", "Mustang", { color: "orange", convertible: true });

// Print the returned objects
console.log(car1);
console.log(car2);
console.log(car3);