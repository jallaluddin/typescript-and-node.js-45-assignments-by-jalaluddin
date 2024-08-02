// assignment no 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//the Array of magicians names
var magicians = ["lala bangali", "nawab khan", "basha", "mohsin durai"];
//modify each magicians name and return a new array,using function
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
// Function to print each magicians name
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Create a new array with "the Great" added to each name
var great_magicians = make_great(__spreadArray([], magicians, true));
// Show the original magicians
console.log("Original magicians:");
show_magicians(magicians);
// Show the modified magicians
console.log("\nGreat magicians:");
show_magicians(great_magicians);
