var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// assignment no 18
//   Seeing the World
var placeToVisit = ["skardu", "chitral", "naran", "kaghan", "garamchashma"];
// print the array in its original order
console.log("original order:", placeToVisit);
// print the array in alphabetical order without modifing the actual list
console.log("alphabetical order:", __spreadArray([], placeToVisit, true).sort());
// show that the array is still in its original order
console.log("original order after sorting:", placeToVisit);
// print the array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", __spreadArray([], placeToVisit, true).sort().reverse());
// show that the array is still in its original position
console.log("original order after reverse sorting:", placeToVisit);
