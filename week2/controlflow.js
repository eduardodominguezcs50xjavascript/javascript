/*
What number's bigger?
Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

function greaterNum(num1 = 0, num2 = 1)
{
	if(num1 === num2)
	{
		console.log(num1 + " and " + num2 + " are the same number.");
		return num1;
	}
	else if(num1 > num2)
	{
		console.log("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
		return num1;
	}
	else
	{
		console.log("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
	}
}

/*
The World Translator
Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.
Call that function for each of the supported languages
and log the result to make sure it works.
*/

function helloWorld(languageCode = "en")
{
	if(languageCode === "en")
	{
		console.log("language code = " + languageCode + " _ Hello, World");
		return "Hello, World";
	}
	else if(languageCode === "es")
	{
		console.log("language code = " + languageCode + " _ Hola, Mundo");
		return "Hola, Mundo";
	}
	else if(languageCode === "de")
	{
		console.log("language code = " + languageCode + " _ Hallo Welt");
		return "Hallo Welt";
	}
	else
	{
		console.log("Language code was not recognized");
		return NULL;
	}
}

/*
The Grade Assigner
Write a function named assignGrade that:
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

function assignGrade(score = 96)
{
	if(score >= 95)
	{	
		console.log("score = " + score + " _ A");
		return "A";
	}
	else if(score >= 85)
	{
		console.log("score = " + score + " _ B");
		return "B";
	}
	else if(score >= 75)
	{
		console.log("score = " + score + " _ C");
		return "C";
	}
	else if(score >= 65)
	{
		console.log("score = " + score + " _ D");
		return "D";
	}
	else
	{
		console.log("score = " + score + " _ F");
		return "F";
	}
}

/*
The Pluralizer
Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

function pluralize(noun = "bird", number = 2)
{
	var plural = noun;

	if(number > 1)
	{
		if (noun.slice(-1) === "y")
		{
			plural = noun.slice(0, -1);
			plural = plural.concat("ies");
		}
		else if(noun.slice(-2) == "an")
		{
			plural = noun.slice(0, -2);
			plural = plural.concat("en");
		}
		else if(noun.slice(-2) == "us")
		{
			plural = noun.slice(0, -2);
			plural = plural.concat("i");
		}
		else if(noun.slice(-1) === "s" || noun.slice(-1) === "x" || noun.slice(-1) === "z" || noun.slice(-2) === "ch" || noun.slice(-2) === "sh" || noun.slice(-2) === "is" || noun.slice(-2) === "to")
		{
			plural = noun.concat("es");
		}
		else if(noun.slice(-1) === "f" || noun.slice(-2) === "fe")
		{
			plural = noun.slice(0, -1);
			plural = plural.concat("ves");
		}
		else if(noun === "sheep" || noun === "fish" || noun === "deer" || noun === "aircraft")
		{
			plural = noun;
		}
		else
		{
			plural = noun + "s";
		}

		console.log("1 " + noun + ", " + number + " " + plural + ".");
		return number + " " + plural + ".";

	}
	else
	{
		console.log(number + " " + noun + ".");
		return number + " " + noun + ".";
	}
}

// function calls
// What number's bigger?

console.log();
console.log("What number's bigger?");
greaterNum();
greaterNum(1);
greaterNum(36, 25);

// The World Translator
console.log();
console.log("The World Translator");
helloWorld();
helloWorld("es");
helloWorld("de");

// The Grade Assigner

console.log();
console.log("The Grade Assigner");
assignGrade();
assignGrade(86);
assignGrade(76);
assignGrade(66);
assignGrade(56);

// The Pluralizer

console.log();
console.log("The Pluralizer");
pluralize();
pluralize("fox", 3);
pluralize("phony", 4);
pluralize("deer", 20);
pluralize("bear", 5);
pluralize("cat", 1);
pluralize("cactus", 5);
pluralize("leaf", 9);
pluralize("roach", 12);
pluralize("man", 7);

/*
The even/odd reporter
- Write a for loop that will iterate from 0 to 20.
- For each iteration, it will check if the current number is even or odd,
  and report that to the screen (e.g. "2 is even").
*/

console.log();
console.log("The even/odd reporter");
var type = "";

for(var i = 0; i < 21; i++)
{	
	if(i % 2 == 0)
	{
		type = "even";
	}
	else
	{
		type = "odd";
	}

	console.log(i + " is " + type + ".");
	alert(i + " is " + type + ".");
}
