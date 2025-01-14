// assignment no 31
// new users Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!

// Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames: string[] = ["admin", "Eric", "Alice", "Bob", "Charlie"];

// to test the empty list condition Remove all usernames
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
  if (username.toLowerCase() === "admin") {
    console.log("Hello admin, would you like to see a status report?");
    } else {
  console.log(`Hello ${username}, thank you for logging in again.`);
 }}}