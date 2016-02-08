var header2 = document.createElement("H2");
var header2Text = document.createTextNode("DOM");
header2.appendChild(header2Text);
document.body.appendChild(header2);


/*
Use Javascript to determine whether the user visited other sites previous to yours.
If they did, and a Back button to your website.
*/

if (history.length >= 3)
{
	var button = document.createElement("BUTTON");
	var buttonText = document.createTextNode("Back Button");
	button.appendChild(buttonText);
	button.onclick = function () { history.back(); }
	document.body.appendChild(button);
}
else
{
	var placeHolder = document.createTextNode("No previous history.");
	document.body.appendChild(placeHolder);
}

/*
Implement a Javascript clock using Timeouts.
It should display the current hh:mm:ss and update the second count every second.
Embed the clock on an HTML website.
*/

var clock = document.createElement("P");
clock.setAttribute("id", "clock");
var clockText = document.createTextNode("");
clock.appendChild(clockText);
document.body.appendChild(clock);

function clockTick ()
{
	var date = new Date();

	document.getElementById("clock").innerHTML = "current time = " + date.getHours() + ":" + format(date.getMinutes())  + ":" + format(date.getSeconds());

	setTimeout(clockTick, 1000);
}

	setTimeout(clockTick, 1000);

/*
Create an HTML List (http://www.w3schools.com/tags/tag_ul.asp).
Ask the user for their to do items. Each time an item is given, add it to the list.
*/

//h3 header
var header3 = document.createElement("H4");
var header3Text = document.createTextNode("To Do List");
header3.appendChild(header3Text);
document.body.appendChild(header3);

//to do list input text box
var toDoInput = document.createElement("INPUT");
toDoInput.setAttribute("type", "text");
toDoInput.setAttribute("id", "toDoInput");
toDoInput.setAttribute("onkeypress", "toDoInput");
document.body.appendChild(toDoInput);

// to do list add to list button
var addToDoButton = document.createElement("BUTTON");
var addToDoButtonText = document.createTextNode("add to list");
addToDoButton.appendChild(addToDoButtonText);
addToDoButton.onclick = addToList; 
document.body.appendChild(addToDoButton);

// unordered to do list
var toDoList = document.createElement('ul');
toDoList.setAttribute("id", "toDoList");
document.body.appendChild(toDoList);

function addToList ()
{
	var listItem = document.createElement("li");

	var toDo = document.getElementById("toDoInput").value;
	var textNode = document.createTextNode(toDo);
	
	listItem.appendChild(textNode);
	toDoList.appendChild(listItem);
}
