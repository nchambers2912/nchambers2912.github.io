function loadHeaderHtml() {
  // var request = new XMLHttpRequest();
  // request.open("GET", "../../header.html", false);
  // request.send();
  // var html = request.responseText;

  // document.querySelector(".container").insertAdjacentHTML("afterbegin", html);
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
