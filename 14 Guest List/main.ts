//   assignment no 14
//    Guest List
// define array pf guests
let guestList: string[] = ["sheraz ali","fahad ali","shehzad"];

// invite each guest for dinner
// using for each method
guestList.forEach(guest => {
    console.log(`dear ${guest},you are cordially invited to dinner`);
    
});

// map()
// invite guest
let invitation: string[] = guestList .map(guest => (`dear ${guest},you are cordially invited to dinner`)
);
console.log(invitation);

// for each loop
invitation.forEach(invitation => {
    console.log(invitation);
});







