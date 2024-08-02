// assignment no 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs and print the values
console.log(city_country("kashmir", "Pakistan"));
console.log(city_country("hongkong", "china"));
console.log(city_country("london", "england"));
