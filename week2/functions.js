// Constants
const maxAge = 99;
const degrees = "\u00b0";

// helper functions
// courtesy of https://blog.tompawlak.org/number-currency-formatting-javascript
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

// cortesy of http://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer
function isFloat(n){
    return n === Number(n) && n % 1 !== 0;
}

/*
The Fortune Teller part 2
Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

function theFortuneTeller(numberOfKids = "1", partnerName = "Jane", place = "San Diego, California", jobTitle = "Investor")
{
	var kids = "kids";

	if(numberOfKids == parseInt(1))
	{
		kids = "kid";
	}

	// relay message, based on user input, or the lack there of
	alert("You will be a " + jobTitle + " in " + place + 
		", and married to " + partnerName + " with " + 
		numberOfKids + " " + kids + ".");
}

/*
The Age Calculator part 2
Forgot how old you are? Calculate it!
Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

function theAgeCalculator(birthYear = 1973, currentYear = new Date().getFullYear())
{
	// calculate first possible age
	var age1 = currentYear - birthYear;

	// calculate second possible age, based on first possible age calculation
	var age0 = age1 - 1;

	// relay possible ages of the user based on user input, or the lack there of
	alert("You are either " + age0 + " or " + age1 + ".");
}

/*
The Lifetime Supply Calculator part 2
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function theLifetimeSupplyCalculator(currentAge = 18, snacksPerDay = 2)
{
	// calculate number of snacks user will eat in a lifetime
	var totalSnacks = formatNumber(Math.round((maxAge - currentAge) * (snacksPerDay * 365)));

	// relay message to user
	alert("You will need " + totalSnacks + 
		" to last you until the ripe old age of " + 
		maxAge + ".");
}

/*
The Geometrizer part 2
Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm
Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

function calcCircumfrence(radius = 6)
{
	//PI x diameter = 2 PI x radius
	var circumference = 2 * Math.PI * radius;

	alert("The circumference is " + formatNumber(circumference.toFixed(2)) + ".");
}

function calcArea(radius = 20)
{	
	// PI r2
	var area = Math.PI * Math.pow(radius, 2); 

	alert("The area is " + formatNumber(area.toFixed(2)) + ".");
}

/*
The Temperature Converter part 2
It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html
Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

function celsiusToFahrenheit(tempCelcius = 0)
{
	// convert celcius temperature to fahrenheit
	var fahrenheitConversion = tempCelcius * 9 / 5 + 32;

	if (isFloat(fahrenheitConversion))
	{
		fahrenheitConversion = fahrenheitConversion.toFixed(2);
	}

	// relay conversion to user
	alert(formatNumber(tempCelcius.toString()) + degrees + "C is " + 
		formatNumber(fahrenheitConversion.toString()) + degrees + "F.");
}

function fahrenheitToCelsius(tempFahrenheit = 32)
{
	// convert fahrenheit temperature to celcius
	var celciusConversion = (tempFahrenheit - 32) * 5 / 9;

	if (isFloat(celciusConversion))
	{
		celciusConversion = celciusConversion.toFixed(2);
	}
}

	// relay conversion to user
theFortuneTeller(3, "Grace", "Augusta, Georgia");

theAgeCalculator();
theAgeCalculator(1986);
theAgeCalculator(1991, 2016);

theLifetimeSupplyCalculator();
theLifetimeSupplyCalculator(21);
theLifetimeSupplyCalculator(35, 5);

calcCircumfrence();
calcCircumfrence(10);
calcCircumfrence(13);

calcArea();
calcArea(32);
calcArea(47);

celsiusToFahrenheit();
celsiusToFahrenheit(15);
celsiusToFahrenheit(97);

fahrenheitToCelsius();
fahrenheitToCelsius(110);
fahrenheitToCelsius(500);
