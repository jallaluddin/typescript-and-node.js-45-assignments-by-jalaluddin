// assignment no 16
// More Guests
var guestList = ["jalal", "shehzad", "ikhlas", "ilyas", "rehmat alam"];
console.log("great news we found a bigger table");
// using unshift method
guestList.unshift("hammad");
// using splice method
guestList.splice(Math.floor(guestList.length / 2), 0, "ahmed");
// PUSH
guestList.push("dada ji");
// for each loop
guestList.forEach(function (guest) {
    console.log("Dear".concat(guest, ", you all are cordially invited to dinner"));
});
