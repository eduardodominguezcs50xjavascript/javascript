/*
Validate all fields on the following form with Javascript.
 <form id="contactForm" action="" >
      <fieldset>
        <legend>Contact Details</legend>
        <p>
          <label for="custname">Name</label> 
          <input id="custname" name="custname" />
          Required
        </p>
        <p>
          <label for="company">Company</label> 
          <input id="company" name="company" type="text" />
          Optional
        </p>
        <p>
          <label for="email">Email</label> 
          <input id="email" name="email" type="text" />
          Required
        </p>
        <p>
          <label for="telephone">Telephone</label> 
          <input id="telephone" name="telephone" type="text" />
          Optional
        </p>
        <p>
          <label for="website">Website</label> 
          <input id="website" name="website" type="text" />
          Required
        </p>
        <p>
          <input class="submit" type="submit" name="submit" value="Submit Contact Details" />
          <input type="reset" value="clear" />
        </p>
      </fieldset>
    </form>
*/

var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var validWebSite = /http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/;
var atLeastOneAlpha = /[A-z]/;

var form = document.querySelector("form");

function deny (element)
{
  element.preventDefault();
}

form.addEventListener("submit", function (){

    var displayText = "Form submitted.";
    var denySubmit = false;

    function editDisplayText (newText)
    {
      if (displayText === "Form submitted.")
      {
        displayText = "Fix these issues, then re-submit the form:\n\n" + "* - " + newText;
      }
      else
      {
        displayText += "* - " + newText;
      }
    }

    if (!atLeastOneAlpha.test(form.elements["custname"].value))
    {
      editDisplayText("Your name was not entered.\n");
      denySubmit = true;
    }

    if (form.elements["company"].value !== "" && !atLeastOneAlpha.test(form.elements["company"].value))
    {
      editDisplayText("Invalid company name.\n");
      denySubmit = true;
    }
    
    if (!validEmail.test(form.elements["email"].value))
    {
      editDisplayText("Invalid email address.\n");
      denySubmit = true;
    }

    if (form.elements["telephone"].value !== "" && !Number(form.elements["telephone"].value))
    {
      editDisplayText("Invalid phone number. Exclude any non-numeric characters.\n");
      denySubmit = true;
    }

    if (!validWebSite.test(form.elements["website"].value))
    {
      editDisplayText("Invalid website URL.\n");
      denySubmit = true;
    }

    if (denySubmit)
    {
      displayText += "\n\nSubmittion denied.\n";
    }

    alert(displayText);

    if (denySubmit)
    {
      deny(event);
    }

  }
  , false);

/*
Program a text field (an <input type="text"> tag) that letters 
cannot be typed into. Only numbers are allowed.
*/

var noNumTextFieldPara = document.createElement("P");
var noNumTextFieldParaText = document.createTextNode("The entering of letters is prohibited  --->  ");
var noNumTextField = document.createElement("INPUT");

noNumTextFieldPara.appendChild(noNumTextField);
noNumTextField.setAttribute("type", "text");

noNumTextFieldPara.appendChild(noNumTextFieldParaText);
noNumTextFieldPara.appendChild(noNumTextField);
form.appendChild(noNumTextFieldPara);

noNumTextField.addEventListener("keypress", function (event){

  if(atLeastOneAlpha.test(String.fromCharCode(event.charCode)))
  {
    deny(event);
  }

}, false);

/*
Extend a text field so that when the user types, a list of suggested 
values is shown below the field. You have an array of possible values 
available and should show those that start with the text that was typed. 
When a suggestion is clicked, replace the text field’s current value with it.

<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>
<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);
  // Your code here.
</script>
*/

var terms = [];

for (var name in window)
{
  terms.push(name);
}

var numOfTerms = terms.length;

var br = document.createElement("BR");
var autoCompTextArea = document.createElement("TEXTAREA");
var para = document.createElement("P")
var suggestDiv = document.createElement("DIV");
suggestDiv.setAttribute("id", "suggestDiv");

para.appendChild(document.createTextNode("AutoCompletion"));
document.body.appendChild(br);
document.body.appendChild(br);
document.body.appendChild(para);
document.body.appendChild(autoCompTextArea);
document.body.appendChild(suggestDiv);

function clearSuggestionBox ()
{
  while (suggestDiv.firstChild)
  {
    suggestDiv.removeChild(suggestDiv.firstChild);
  }
}

autoCompTextArea.addEventListener("input", function (){

  var subString = autoCompTextArea.value;
  var subStringlength = subString.length;

  clearSuggestionBox();

  if (subStringlength > 0)
  {
    for (var i = 0; i < numOfTerms; i += 1)
    {
      var termSlice = terms[i].slice(0, subStringlength);

      if (termSlice === subString)
      {
        var wordDiv = document.createElement("DIV");
        wordDiv.innerHTML = terms[i];
        suggestDiv.setAttribute("style", 
          "-moz-box-sizing: border-box; box-sizing: border-box; " + 
          "border: 1px solid black; position: absolute;");
        wordDiv.setAttribute("value", terms[i]);
        suggestDiv.appendChild(wordDiv);
      }
    }
  }
}, false);

suggestDiv.addEventListener("click", function (event){

  autoCompTextArea.value = event.target.innerHTML;

  clearSuggestionBox();

}, false);
