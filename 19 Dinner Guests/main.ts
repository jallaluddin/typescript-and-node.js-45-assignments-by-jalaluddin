// assignment no 19
// Dinner Guests
let guests: string[] = ["ikhlas","ilyas","rehmat alam"];
// informing that only two peoples can be invited
console.log("due to limited space, only two people can be invited for dinner:");
// removing guests until only two names remains
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry,${removedGuest},you are no longer invited to dinner.`)
}
// printing invitation to the rmaining two guests
guests.forEach((guest) =>{
    console.log(`dear ${guest},you are still invited to dinner.`);
    
});