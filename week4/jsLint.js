
/*
Rewrite a previous assignment to pass jslint.
*/


// set placeholder for unicode symbol for degrees as constant
var degrees = "\u00b0";

/*
0. The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?
- Store the following into variables:
  number of children, partner's name, geographic location, job title.
- Output your fortune to the screen like so:
  "You will be a X in Y, and married to Z with N kids."
*/

function theFortuneTeller() {

    "use strict";

    // get number of children
    var numberOfKids = prompt("number of children?", "0");

    // get partner's name
    var partnerName = prompt("partner's name?", "Bill");

    // get location
    var place = prompt("geographic location?", "Miami");

    // get job title
    var jobTitle = prompt("job title?", "tulip picker");

    // relay message, based on user input, or the lack there of
    alert("You will be a " + jobTitle + " in " + place + 
        ", and married to " + partnerName + " with " + 
        numberOfKids + " kids.");

}




/*
1. The Age Calculator
Forgot how old someone is? Calculate it!
- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

function theAgeCalculator() {

    "use strict";

    // get current year
    var currentYear = new Date().getFullYear();

    // get user's birth year
    var birthYear = prompt("In what year the person born?", "1991");

    // calculate first possible age
    var age1 = currentYear - birthYear;

    // calculate second possible age, based on first possible age calculation
    var age0 = age1 - 1;

    // relay possible ages of the user based on user input, or the lack there of
    alert("They are either " + age0 + " or " + age1 + ".");

}

/*
2. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

function theLifetimeSupplyCalculator() {

    "use strict";

    // get current age of user
    var currentAge = prompt("How old are you?", "18");

    // get max age expectancy of user
    var maxAge = prompt("Maximum age expectancy?", "100");

    // get estimated daily number of snacks user will consume
    var snacksPerDay = prompt("Estimated number of snacks to eat per day?", "3");

    // calculate number of snacks user will eat in a lifetime
    var totalSnacks = (maxAge - currentAge) * (snacksPerDay * 365);

    // relay message to user
    alert("You will need " + totalSnacks + 
		" to last you until the ripe old age of " + 
        maxAge + ".");
	
}

/*
3. The Geometrizer
Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm
- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

function theGeometrizer() {

    "use strict";

    // get the radius of a circle
    var radius = prompt("radius of the circle?", "3");

    // calculate circumference of a cirlce, based on radius
    var circumference = Math.PI * radius * 2;
	
    //relay circumference to user 
    alert("The circumference is " + circumference.toFixed(2) + ".");

}

/*
4. The Temperature Converter
It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

function theTemperatureConverter() {

    "use strict";

    // get temperature in celcius
    var tempCelcius = prompt("temperature in celcius?", "0");

    // convert celcius temperature to fahrenheit
    var fahrenheitConversion = tempCelcius * 9 / 5 + 32;

    // relay conversion to user
    alert(tempCelcius.toString() + degrees + "C is " + 
		fahrenheitConversion.toString() + degrees + "F.");

    // get temperature in fahrenheit
    var tempFahrenheit = prompt("temperature in fahrenheit?", "32");

    // convert fahrenheit temperature to celcius
    var celciusConversion = (tempFahrenheit - 32) * 5 / 9;

    // relay conversion to user
    alert(tempFahrenheit.toString() + degrees + "F is " + 
        celciusConversion.toString() + degrees + "C.");

}
