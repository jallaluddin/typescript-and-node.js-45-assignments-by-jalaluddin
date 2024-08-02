// assignment no 30
// Hello Admin
let usernames: string[] = ["admin", "jalal", "adnan", "hira", "basha"];

for (let username of usernames) {
    if (username.toLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}