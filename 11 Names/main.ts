//   assignment no 11
//  Names
// define an array of names
let names: string[] = ["jalal","shehzad","ikhlas","ilyas","rehmat alam"];
// using loop method

for (let i = 0; i < names.length; i++){

    console.log(names[i]);
}
// using for each method
names.forEach(name => {
console.log(name);
});
// using for off loop
for (const friendName of names){
    console.log(friendName);
}