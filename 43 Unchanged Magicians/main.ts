// assignment no 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//the Array of magicians names
let magicians: string[] = ["lala bangali", "nawab khan", "basha", "mohsin durai"];

//modify each magicians name and return a new array,using function
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician); 
    }
    return great_magicians;
}

// Function to print each magicians name
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create a new array with "the Great" added to each name
let great_magicians = make_great([...magicians]);

// Show the original magicians
console.log("Original magicians:");
show_magicians(magicians);

//this will Show the modified magicians
console.log("\nGreat magicians:");
show_magicians(great_magicians);
