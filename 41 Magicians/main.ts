// assignment no 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Array of magician's names
let magicians: string[] = ["nawab khan", "saeed rafey", "aleem aju", "shokat maker"];

// Function to print each magician's name
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Call the function
show_magicians(magicians);