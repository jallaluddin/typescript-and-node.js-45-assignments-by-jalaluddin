// assignment no 19
// Dinner Guests
var guests = ["ikhlas", "ilyas", "rehmat alam"];
// informing that only two peoples can be invited
console.log("due to limited space, only two people can be invited for dinner:");
// removing guests until only two names remains
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry,".concat(removedGuest, ",you are no longer invited to dinner."));
}
// printing invitation to the rmaining two guests
guests.forEach(function (guest) {
    console.log("dear ".concat(guest, ",you are still invited to dinner."));
});
