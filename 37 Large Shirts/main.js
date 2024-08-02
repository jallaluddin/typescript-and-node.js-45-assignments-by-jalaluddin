// assignment no 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("you ordered a shirt ".concat(size, " and it has the message: \"").concat(message, "\" printed on it."));
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt("Medium");
// Make a shirt of any size with a different message
make_shirt("Small", "enhancing typescript");
