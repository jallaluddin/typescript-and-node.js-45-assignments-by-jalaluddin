// assignment no 18
//   Seeing the World
let placeToVisit: string[] = ["skardu","chitral","naran","kaghan","garamchashma"];
// print the array in its original order
console.log("original order:",placeToVisit);
// print the array in alphabetical order without modifing the actual list
console.log("alphabetical order:",[...placeToVisit].sort());
// show that the array is still in its original order
console.log("original order after sorting:", placeToVisit);
// print the array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", [...placeToVisit].sort().reverse());
// show that the array is still in its original position
console.log("original order after reverse sorting:", placeToVisit);




