//   assignment no 14
//    Guest List
// define array pf guests
var guestList = ["sheraz ali", "fahad ali", "shehzad"];
// invite each guest for dinner
// using for each method
guestList.forEach(function (guest) {
    console.log("dear ".concat(guest, ",you are cordially invited to dinner"));
});
// map()
// invite guest
var invitation = guestList.map(function (guest) { return ("dear ".concat(guest, ",you are cordially invited to dinner")); });
console.log(invitation);
// for each loop
invitation.forEach(function (invitation) {
    console.log(invitation);
});
