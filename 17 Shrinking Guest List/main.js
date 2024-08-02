// assignment no 17
// Shrinking Guest List
// print message
var guestList = ["ikhlas", "ilyas", "rehmat alam"];
console.log("unfortunately!the new dinner table wont arrive so we can invite only 2 guests");
guestList.unshift("abid", "hamza");
// print message updated list
console.log("updated list of guest:", guestList);
// remove guest from guestlist
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log("sorry,".concat(removedGuest, ",we cant invite you")); //
    }
}
//  Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you both are invited for dinner"));
});
// making the guest list empty
guestList.splice(0, guestList.length);
// print updated empty list
console.log("updated list of guest:", guestList);
