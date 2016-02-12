/*
Your top choices
Create an array to hold your top choices (colors, presidents, whatever).
For each choice, log to the screen a string like: "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
*/

var cities = ["Miami", "Pembroke Pines", "Phoenix", "Sedona", "Pensacola", "Orlando"];

var citiesInArray = cities.length;

function afterNum (number)
{
	var letters = " ";

	if (number === 1)
	{
		letters = "st";
	}
	else if (number === 2)
	{
		letters = "nd";
	}
	else if (number === 3)
	{
		letters = "rd";
	}
	else if (number >= 4)
	{
		letters = "th";
	}

	return letters;
}

for (var i = 1; i < citiesInArray; i += 1)
{
	console.log("My " + i + afterNum(i) + " favorite city is " + cities[i - 1] + ".");
}

/*
The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to 
guess the word (like Hangman without the hangman, or like Wheel of Fortune 
without the wheel and fortune).
Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), 
and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__')
and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed,
and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to 
check that your program works.
Bonus: Make it more like Wheel of Fortune:
Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if they found a 
letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
When they guess the word, log their final reward amount.
Bonus: Make it like Hangman:
Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. 
If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that 
number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user 
that they lost and show a hangman on the log.
*/

var wordArray = ["M", "I", "S", "S", "I", "S", "S", "I", "P", "P", "I"];
var wordLength = wordArray.length;
var stringGuessWord = "";
var stringGuessedLetters = "";
var wordGuess = [];
var guessedLetters = [];
var oneUpperCaseLetter = new RegExp("^[A-Z]{1}$");
var guessedLetter = "";
var reward = 0;
var rewardText = "";
var randomNumber = 0;
var hangManNumber = 0;

var hangManP1 = "         __________________                       ";
var hangManP2 = "   i             |               ";
var hangManP4 = "                 |               ";
var hangManP10 = "=========================";

var hangMan0 = [hangManP1, hangManP2, 
	hangManP2, hangManP4, hangManP4, 
	hangManP4, hangManP4, hangManP4, 
	hangManP4, hangManP10];

var hangMan1 = ["        _i_      |       ", 
	"       {=_=}     |       ", 
	hangManP4, hangManP4, hangManP4, hangManP4];

var hangMan2 = [hangMan1[0], hangMan1[0], 
	"         |       |       ", 
	"         |       |       ", 
	hangManP4, hangManP4];

var hangMan3 = [hangMan1[0], hangMan1[0], 
	"        /|       |       ", 
	"       * |       |       ", 
	hangManP4, hangManP4];

var hangMan4 = [hangMan1[0], hangMan1[0], 
	"        /|\\      |       ", 
	"       * | *     |       ", 
	hangManP4, hangManP4];

var hangMan5 = [hangMan1[0], hangMan1[0], hangMan4[1], 
	hangMan4[2], 
	"        /        |       ", 
	"       d         |       "];

var hangMan6 = [hangMan1[0], hangMan1[0], hangMan4[1], 
	hangMan4[2], 
	"        / \\      |       ", 
	"       d   b     |       "];

var hangManArr = [hangMan1, hangMan2, hangMan3, 
	hangMan4, hangMan5, hangMan6];

function generateBlanks (wordLength, array, returnString)
{
	for (var i = 0; i < wordLength; i += 1)
	{
		array.push("_");
		returnString = returnString.concat("_ ");
	}

	return returnString;
}

function newGuessedLetter (newLetter)
{	
	var index = newLetter.charCodeAt(0) - 65;

	if (guessedLetters[index] === "_")
	{
		guessedLetters[index] = newLetter;

		console.log(guessedLetters);

		stringGuessedLetters = "";

		stringGuessedLetters = guessedLetters.join("  ");

		document.getElementById("guessedLettersP").innerHTML = stringGuessedLetters;

		return true;
	}
	else
	{
		alert("You have already guessed the letter \"" + newLetter + "\". Guess again.");

		return false;
	}
}

function calculateGuessResult (guessedLetter)
{
	var goodGuess = false;

	var multiplier = 0;

	for (var i = 0; i < wordLength; i += 1)
	{
		if (guessedLetter === wordArray[i])
		{
			wordGuess[i] = guessedLetter;

			multiplier += 1;

			if (goodGuess == false)
			{
				goodGuess = true;
			}
		}
	}

	stringGuessWord = wordGuess.join("  ");

    updateReward(multiplier, goodGuess);

	return goodGuess;
}

function updateReward (multiplier, goodGuess)
{
	randomNumber += Math.floor((Math.random() * 10) + 1);

	if (goodGuess)
	{
		reward = reward + randomNumber * multiplier;
	}
	else
	{
		reward = reward - randomNumber;
	}

	document.getElementById("rewardP").innerHTML = rewardFormat(reward);
}

function rewardFormat ()
{
	if (reward >= 0)
	{
		rewardText = "$" + reward;
	}
	else
	{
		rewardText = "-$" + Math.abs(reward);
	}

	return rewardText;
}

function guessResultAlert (result)
{
	if (result)
	{
		alert("Nice guess!");
	}
	else
	{
		alert("No cigar. Try again.");
	}
}

function isGameOver (index)
{	
	return (index === "_");
}

function createDiv (id, h2, content)
{
	var div = document.createElement("DIV");
	div.setAttribute("id", id);

	var header2 = document.createElement("H2");
	header2.innerHTML = h2;

	var para = document.createElement("P");
	para.setAttribute("id", id.concat("P"));
	para.innerHTML = content;

	div.appendChild(header2);
	div.appendChild(para);

	var mainDiv = document.getElementById("mainDiv");
	mainDiv.appendChild(div);
}

function setStage()
{
	var mainDiv = document.createElement("DIV");
	mainDiv.setAttribute("id", "mainDiv");
	document.body.appendChild(mainDiv);

	createDiv("guessProgress", "Word", generateBlanks(wordLength, wordGuess, stringGuessWord));
	createDiv("guessedLetters", "Guessed Letters", generateBlanks(26, guessedLetters, stringGuessedLetters));
	createDiv("reward", "Reward", "$0");
	createDiv("hangman", "HangMan", "");

	var hangManDiv = document.createElement("DIV");
	hangManDiv.setAttribute("id", "hangManDiv");

	var i = 1;

	for (p in hangMan0)
	{
		var para = document.createElement("P");
		para.setAttribute("id", "hangmanP" + i);
		para.innerHTML = hangMan0[i - 1].replace(/\s/g, '&nbsp;');
		hangManDiv.appendChild(para);

		document.getElementById("hangman").appendChild(para);

		i += 1;
	}
}

function updateHangMan (number)
{
	document.getElementById("hangmanP" + 3).innerHTML = hangManArr[number][0].replace(/\s/g, '&nbsp;');
	document.getElementById("hangmanP" + 4).innerHTML = hangManArr[number][1].replace(/\s/g, '&nbsp;');
	document.getElementById("hangmanP" + 5).innerHTML = hangManArr[number][2].replace(/\s/g, '&nbsp;');
	document.getElementById("hangmanP" + 6).innerHTML = hangManArr[number][3].replace(/\s/g, '&nbsp;');
	document.getElementById("hangmanP" + 7).innerHTML = hangManArr[number][4].replace(/\s/g, '&nbsp;');
	document.getElementById("hangmanP" + 8).innerHTML = hangManArr[number][5].replace(/\s/g, '&nbsp;');
}

function guessLetter ()
{
	setStage();

	do
	{
		while (true)
		{
			guessedLetter = prompt("Enter a letter.").toUpperCase();

			if (!oneUpperCaseLetter.test(guessedLetter))
			{
				continue;
			}
			else if (!newGuessedLetter(guessedLetter))
			{
				continue
			}
			else
			{
				break;
			}
		}

		if (calculateGuessResult(guessedLetter))
		{
			document.getElementById("guessProgressP").innerHTML = stringGuessWord;

			guessResultAlert(true);

			if(hangManNumber >= 1)
			{
				hangManNumber -= 1;
			}
		}
		else
		{
			guessResultAlert(false);

			hangManNumber += 1;

			if(hangManNumber >= 6)
			{
				break;
			}

			updateHangMan(hangManNumber);
		}

		if(hangManNumber >= 6)
		{
			break;
		}

	} 
	while (wordGuess.some(isGameOver));

	console.log("Reward = ", rewardFormat(reward));

	alert("Congrats! You have won the game\nReward = " + rewardFormat(reward));
}

guessLetter();
