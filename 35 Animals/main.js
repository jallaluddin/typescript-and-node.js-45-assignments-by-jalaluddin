// assignment no 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// List of animals
var animals = ["horse", "dog", "Rabbit"];
// Loop through the list and print statements
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("A ".concat(animal.toLowerCase(), " would run fast."));
}
// Print a final statement outside the loop
console.log("\nAny of these animals would make a great pet!");
