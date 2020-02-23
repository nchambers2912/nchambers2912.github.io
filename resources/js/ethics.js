var content = document.querySelector(".content")

var converter = new showdown.Converter(),
    text      = getData(),
    html      = converter.makeHtml(text);
    content.innerHTML = html


function getData() {
    var request = new XMLHttpRequest();
    request.open("GET", "../../resources/markdown/ethics.md", false);
    request.send();
    var data = request.responseText;
    return data;
    }


