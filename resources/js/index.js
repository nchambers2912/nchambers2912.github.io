var cards = document.querySelector(".cards");

window.addEventListener("load", function () {
  addCardSection();
});

function bookNow() {
  window.location.href = "contact.html#bookmark";
}

function addCardSection() {
  var data = getData();
  data.forEach((element) => {
    var card = buildCard(element.title, element.description, element.image);
    cards.appendChild(card);
  });
}

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
  div.style.backgroundImage = 'url("' + image + '")';
  discipline.appendChild(div);

  var theTitle = document.createElement("h1");
  theTitle.classList.add("disciplineheader");
  theTitle.innerHTML = title;
  discipline.appendChild(theTitle);

  var theTagline = document.createElement("p");
  theTagline.classList.add("diciplinetagline");
  theTagline.innerHTML = tagline;
  discipline.appendChild(theTagline);

  return card;
}
