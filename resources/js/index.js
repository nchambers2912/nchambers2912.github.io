var cards = document.querySelector(".cards");
console.log(cards);

window.addEventListener("load", function() {
  var data = getData();
  this.console.log(data);

  data.forEach(element => {
    var card = buildCard(element.title, element.description, element.image);
    this.console.log(card);
    cards.appendChild(card);
  });
});

function getData() {
  var request = new XMLHttpRequest();
  request.open("GET", "../../resources/json/types.json", false);
  request.send();
  var data = JSON.parse(request.responseText);
  return data;
}

function buildCard(title, tagline, image) {
  /*
    Card HTML for reference

    <li class="card">
        <div class="discipline">
            <div class="image"></div>
            <h1 class="disciplineheader">Empathy</h1>
            <h4 class="disciplinetagline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            sint!
            </h4>
        </div>
    </li>
    */

  var card = document.createElement("li");
  card.classList.add("card");

  var discipline = document.createElement("div");
  discipline.classList.add("discipline");
  card.appendChild(discipline);

  var div = document.createElement("div");
  div.classList.add("image");
  discipline.appendChild(div);

  var theTitle = document.createElement("h1");
  theTitle.classList.add("disciplineheader");
  theTitle.innerHTML = title;
  discipline.appendChild(theTitle);

  var theTagline = document.createElement("h4");
  theTagline.classList.add("diciplinetagline");
  theTagline.innerHTML = tagline;
  discipline.appendChild(theTagline);

  return card;
}
