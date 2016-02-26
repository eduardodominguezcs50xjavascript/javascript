/*
Use Ajax and JSONP to display your Github data using http://githubbadge.appspot.com/
Display your languages, last_project, last_project_url, repo and follower count.
Sample URL: http://githubbadge.appspot.com/rimager
*/

function dr (text) {
    var p = document.createElement("P");
    p.innerHTML = text;
    document.body.appendChild(p);
}

function jp (json) {
    
    dr("GitHub UserName: " + json.user["login"])
    
    var p = document.createElement("P");
    p.innerHTML = "languages: ";
    document.body.appendChild(p);
    
    var langCount = json["languages"].length;
    
    for (var i = 0; i < langCount; i += 1)
    {
        if (i < langCount - 1)
        {
            p.innerHTML += json["languages"][i] + ", ";
        }
        else
        {
            p.innerHTML += json["languages"][i];
        }
    }
    
    if (json["last_project"] === "")
    {
        dr("<p>last project: none</p>");
        dr("<p>last project url: none</p>");
    }
    else
    {
        dr("<p>last project: " + json["last_project"] + "</p>");
        dr("<p>last project url: " + json["last_project_url"] + "</p>");
    }
    
    dr("<p># of repos: " + json.user["public_repos"] + "</p>");
    dr("<p># of followers: " + json.user["followers"] + "</p>");
    
    /*
    XSS
    */

    var link = document.createElement("a");
    var linkText = document.createTextNode("GitHub");
    link.setAttribute("href", "https://www.github.com/");
    link.setAttribute("id", "bait");
    link.appendChild(linkText);

    document.body.appendChild(link);
    
    function gotcha (link) {
        alert("gotcha");
        link.preventDefault();
    }
    
    link.addEventListener("click", gotcha(link));
    
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = alertState;

function alertState() {
  if (xhr.readyState === 4)
  {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "http://githubbadge.appspot.com/eduardodominguezcs50xjavascript?callback=jp";
      document.body.appendChild(script);
  }
}

xhr.open("GET", "http://githubbadge.appspot.com/eduardodominguezcs50xjavascript", true);
xhr.send(null);
