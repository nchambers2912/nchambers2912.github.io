var converter = new showdown.Converter(),
  text = "# hello, markdown!",
  html = converter.makeHtml(text);

var content = document.querySelector(".content");

window.addEventListener("load", function() {
  var html = loadFromMarkdownFile("../../resources/markdown/clientbase.md");
  content.innerHTML = html;
});

function loadFromMarkdownFile(file) {
  var request = new XMLHttpRequest();
  request.open("GET", file, false);
  request.send();
  var html = converter.makeHtml(request.responseText);
  console.log(html);
  return html;
}
