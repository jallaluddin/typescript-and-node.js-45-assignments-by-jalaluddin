// assignment no 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// the Array of magician s names
let magicians: string[] = ["mehboob", "danish", "lala bangali", "sajjad"];

// the Function to print each magician's name
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
  console.log(magician);}}

// Call the function
show_magicians(magicians);