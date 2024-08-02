//   assignment no 12
let names: string[] = ["jalal","shehzad","ikhlas","ilyas","rehmat alam"];
// using for loop method
for (let i = 0; i < names.length; i++){

    console.log(`hello,${names[i]}! how are you today?`);
}

// using for each method
names.forEach(friend => {
    console.log(`hi,${friend}! how are you today?`);
});

// using for off loop
for (let friendName of names){
    console.log(`Dear, ${friendName}! how are you?`)
}  
