//   assignment no 12
var names = ["jalal", "shehzad", "ikhlas", "ilyas", "rehmat alam"];
// using for loop method
for (var i = 0; i < names.length; i++) {
    console.log("hello,".concat(names[i], "! how are you today?"));
}
// using for each method
names.forEach(function (friend) {
    console.log("hi,".concat(friend, "! how are you today?"));
});
// using for off loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log("Dear, ".concat(friendName, "! how are you?"));
}
