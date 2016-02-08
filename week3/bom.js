function format (number)
{
	if(String(number).length < 2)
	{
		return "0" + number;
	}
	else
	{
		return number;
	}
}

var header = document.createElement("H2");
var headerText = document.createTextNode("BOM");
header.appendChild(headerText);
document.body.appendChild(header);

/*
Create a popup window displaying your favorite website, initializing it at 10px from the top left of the user's screen.
Size it 100px x 100px.
Move it to the center of the current screen.
Resize the window to the largest size available on the screen.
Give the popup window focus.
*/
var win;

var popupButton = document.createElement("BUTTON");
var popupButtonText = document.createTextNode("popup");
popupButton.appendChild(popupButtonText);
popupButton.onclick = popup; 
document.body.appendChild(popupButton);

function popup ()
{
	win = window.open("https://www.youtube.com/", "", "left=10, top=10 width=500, height=500");

	win.resizeBy(100,100);

	win.moveTo(screen.width / 2, screen.height / 2);

	win.resizeBy(screen.width, screen.height);

	win.focus();
}

/*
Write a function that determines whether your popup window was closed by the user. 
The function shall log the status of the popup ("open" vs "closed") to the console.
Test the function by invoking when the popup is closed/open.
*/

var popupStatusButton = document.createElement("BUTTON");
var popupStatusButtonText = document.createTextNode("popup status");
popupStatusButton.appendChild(popupStatusButtonText);
popupStatusButton.onclick = statusPopup; 
document.body.appendChild(popupStatusButton);

function statusPopup ()
{
	if(!win)
	{
		alert("popup hasn't been opened");
		return false;
	}
	else if(win.closed)
	{
		alert("popup closed");
		return false;
	}
	else
	{
		alert("popup open");
		return true;
	}
}

/*
Create an Interval that console.logs the current time every 5 seconds.
*/

function currentTime ()
{
	var date = new Date();

	console.log("current time = " + date.getHours() + ":" + format(date.getMinutes())  + ":" + format(date.getSeconds()));
}

setInterval(currentTime, 5000);

/*
Query the user for their age. 
If they are 21 or over, redirect them to your favorite brewery. 
If they are under 21, redirect them to the Disney website.
*/

var twenty1Button = document.createElement("BUTTON");
var twenty1ButtonText = document.createTextNode("Are you 21 years old or older?");
twenty1Button.appendChild(twenty1ButtonText);
twenty1Button.onclick = twenty1; 
document.body.appendChild(twenty1Button);

function twenty1 ()
{
	var isAdult = confirm("Are you 21 or older?");

	if(isAdult)
	{
		window.location.assign("http://www.schweppesus.com/");
	}
	else
	{
		window.location.assign("https://www.disney.com");
	}
}

/*
Write a mobile redirection script.
If the available screen size is less than 320px (based on http://screensiz.es/phone), ask them if they would like
to view the mobile version of the site. 
If they confirm, redirect them to index-mobile.html.
Otherwise, land them on the standard index.html
*/

var mobileSiteButton = document.createElement("BUTTON");
var mobileSiteButtonText = document.createTextNode("mobile site?");
mobileSiteButton.appendChild(mobileSiteButtonText);
mobileSiteButton.onclick = mobileSite; 
document.body.appendChild(mobileSiteButton);

function mobileSite ()
{
	if (((screen.width + screen.height) <= (854 + 480)) || ((screen.width + screen.height) <= (1136 + 640)))
	{
		var mobileRedirect = confirm("Would you like to see the mobile version of this site?");

		if(mobileRedirect)
		{
			window.location.assign("index-mobile.html");
		}
		else
		{
			window.location.assign("index.html");
		}
	}
	else
	{
		alert("No need for mobile optimized site. Your screen isn't that small.");
	}
}
