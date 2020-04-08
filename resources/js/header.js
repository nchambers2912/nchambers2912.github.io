var nav = document.querySelector("#nav");

function loadHeaderHtml() {
  fetch("../../header.html").then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.text().then(function (data) {
      document
        .querySelector(".container")
        .insertAdjacentHTML("afterbegin", data);
    });
  });

  addCssLinkForHeader();
}

function addCssLinkForHeader() {
  // Get HTML head element
  var head = document.getElementsByTagName("HEAD")[0];
  // Create new link Element
  var link = document.createElement("link");
  // set the attributes for link element
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "resources/css/header.css";
  // Append link element to HTML head
  head.appendChild(link);
}

function buttonPressed(buttonName) {
  console.log(buttonName);
  switch (buttonName) {
    case "index":
      window.location.href = "index.html";
      break;
    case "ethics":
      window.location.href = "ethics.html";
      break;
    case "price":
      window.location.href = "price.html";
      break;
    case "contact":
      window.location.href = "contact.html";
      break;
    default:
      break;
  }
}

function openMenu() {
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

function checkMediaQuery(x) {
  if (x.matches) {
    // If media query matches
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

var x = window.matchMedia("(max-width: 964px)");
checkMediaQuery(x); // Call listener function at run time
x.addListener(checkMediaQuery); // Attach listener function on state changes
