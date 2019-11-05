function loadHeaderHtml() {
  var request = new XMLHttpRequest();
  request.open("GET", "../../header.html", false);
  request.send();
  var html = request.responseText;

  document.querySelector(".container").insertAdjacentHTML("afterbegin", html);

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
