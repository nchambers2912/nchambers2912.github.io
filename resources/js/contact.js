window.addEventListener("load", function () {
  loadHeaderHtml();
});

var content = document.querySelector(".content");

var converter = new showdown.Converter(),
  text = getData(),
  html = converter.makeHtml(text);
content.innerHTML += html;

function getData() {
  var request = new XMLHttpRequest();
  request.open("GET", "../../resources/markdown/contact.md", false);
  request.send();
  var data = request.responseText;
  return data;
  //   fetch("../../resources/markdown/ethics.md").then(function (response) {
  //     if (response.status !== 200) {
  //       console.log(
  //         "Looks like there was a problem. Status Code: " + response.status
  //       );
  //       return;
  //     }

  //     // Examine the text in the response
  //     console.log(response);
  //     response.text().then(function (data) {
  //       return data;
  //     });
  //   });
}
