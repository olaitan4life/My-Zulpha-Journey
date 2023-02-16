// 1. The Fortune Teller

function getFortune(numChildren, partner, city, jobTitle) {
  const message = `You will be a ${jobTitle} in ${city}, and married to ${partner} with ${numChildren} kids.`;
  return message;
}
console.log(getFortune("5", "ade", "lagos", "developer"));
console.log(getFortune("4", "adeola", "lagos", "developer"));


//2. The Puppy Age Calculator
function calculateDogAge(puppyAge){
let birthYear = "your doggies is "+ (7*year) + "years old in human years!"
  return (birthYear);

}
console.log (calculateDogAge(5));

//3. The Lifetime Supply Calculator

function calcLifetimeSupply(age, amountPerDay) {
  const amountPerYear = amountPerDay * 365;
  const maxAge = 105;
  const yearsLeft = maxAge - age;
  const supplyAmount = amountPerYear * yearsLeft;
  const message = `You will need ${Math.round(supplyAmount)} to last you until the ripe old age of ${maxAge}!`;
  return message;
}
console.log(calcLifetimeSupply(45,30))

//4. The Geometrizer

function calcCircumfrence(radius) {
  var y = (Math.PI * radius) * 2;
console.log("The circumfrence is " + y + ".");
}
function calcArea(radius) {
  var x = (Math.PI * radius) * radius;
console.log("The area is " + x + ".");
}

calcCircumfrence(30);
calcArea(10);

//5. The Temperature Converter


function celsiusToFahrenheit() {
  const cTemp = prompt(
    "What's the celsius temperature you wish to transform to fahrenheit?"
  );
  const fTemp = cTemp * 1.8 + 32;
  const message = `${cTemp}°C is ${fTemp}°F.`;
  alert(message);
}

function fahrenheitToCelsius() {
  const fTemp = prompt(
    "What's the celsius temperature you wish to transform to fahrenheit?"
  );
  const cTemp = (fTemp - 32) * 0.5555555555555556;
  const message = `${fTemp}°F is ${Math.round(cTemp)}°C.`;
  alert(message);
}
console.logg(celsiusToFahrenheit(6))
