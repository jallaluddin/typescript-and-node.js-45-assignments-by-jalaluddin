//   assignment no 11
//  Names
// define an array of names
var names = ["jalal", "shehzad", "ikhlas", "ilyas", "rehmat alam"];
// using loop method
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// using for each method
names.forEach(function (name) {
    console.log(name);
});
// using for off loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
