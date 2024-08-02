// assignment no 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Function to print a summary of the sandwich being ordered
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
 console.log(`- ${item}`);
    }
    console.log("Your sandwich is ready jalal!\n");
}

// Call the function three times with different numbers of arguments
make_sandwich("chicken", "Cheese", "Lettuce", "Tomato");
make_sandwich("mutton", "Bacon", "cheese");
make_sandwich("garlic chicken", "mayo sauce");