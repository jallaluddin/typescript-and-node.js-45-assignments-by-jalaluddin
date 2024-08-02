// aasignment no 15
//Changing Guest List
let guestList: string[] = ["jalal","shehzad","ikhlas","ilyas","rehmat alam"];
// print the name who can`t make the dinner
let unableAttend: string = guestList.splice(1,1)[0];
console.log(`${unableAttend}cant make dinner`);
// push
guestList.push("daniyal");
// console.log(guestList);
// print the message
guestList.forEach(guest => {
    console.log(`dear${guest}, you are cordially invited`);
    
});