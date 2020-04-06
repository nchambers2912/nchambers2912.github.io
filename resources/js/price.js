var cards;
var data;

window.addEventListener("load", function () {
  data = getData();
  loadHeaderHtml();
  buildPage();
  cards = document.querySelector(".cards");
  addCardSection();
});

function insertAfter(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function insertBefore(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode);
}

function buildPage() {
  var content = document.createElement("section");
  content.classList.add("content");
  content.id = "bookmark";
  var ref = document.querySelector(".footer");
  insertBefore(content, ref);

  var title = document.createElement("h1");
  title.classList.add("contentTitle");
  title.innerText = data.title;
  content.appendChild(title);

  var mainDescription = document.createElement("p");
  mainDescription.classList.add("mainDescription");
  mainDescription.innerText = data.description;
  content.appendChild(mainDescription);

  var disciplines = document.createElement("section");
  disciplines.classList.add("disciplines");
  content.appendChild(disciplines);

  var cards = document.createElement("ul");
  cards.classList.add("cards");
  disciplines.appendChild(cards);

  var allergies = document.createElement("p");
  allergies.classList.add("allergies");
  allergies.innerText = data.allergies;
  content.appendChild(allergies);
}

function addCardSection() {
  data.prices.forEach((element) => {
    var card = buildCard(
      element.image,
      element.number,
      element.type,
      element.cost,
      element.time,
      element.description
    );
    cards.appendChild(card);
  });
}

function getData() {
  var request = new XMLHttpRequest();
  request.open("GET", "../../resources/json/fees.json", false);
  request.send();
  var data = JSON.parse(request.responseText);
  return data;
}

function buildCard(image, number, type, cost, length, description) {
  /*
    Card HTML for reference

    <li class="card">
        <div class="discipline">
            <div class="image"></div>
            <h1 class="number">Empathy</h1>
            <h1 class="type">Type</h1>
            <h4 class="cost">Cost</h4>
            <h4 class="length">Length</h4>
            <div class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            sint!</div>
            </h4>
        </div>
    </li>
    */

  var card = document.createElement("li");
  card.classList.add("card");

  var discipline = document.createElement("div");
  discipline.classList.add("discipline");
  card.appendChild(discipline);

  var content = document.createElement("div");
  content.classList.add("content");
  card.appendChild(content);

  var div = document.createElement("div");
  div.classList.add("image");
  div.style.backgroundImage = `url(\\"${image}\\")`;
  content.appendChild(div);

  var details = document.createElement("div");
  details.classList.add("details");
  content.appendChild(details);

  var theNumber = document.createElement("h4");
  theNumber.classList.add("number");
  theNumber.innerHTML = number;
  details.appendChild(theNumber);

  var theTime = document.createElement("h4");
  theTime.classList.add("length");
  theTime.innerHTML = length;
  details.appendChild(theTime);

  var theTitle = document.createElement("h1");
  theTitle.classList.add("type");
  theTitle.innerHTML = type;
  details.appendChild(theTitle);

  var theCost = document.createElement("h4");
  theCost.classList.add("cost");
  theCost.innerHTML = cost;
  content.appendChild(theCost);

  var theButton = document.createElement("button");
  theButton.classList.add("button");
  var buttonText = document.createTextNode("Book now");
  theButton.appendChild(buttonText);
  content.appendChild(theButton);
  theButton.addEventListener("click", function () {
    window.location.href = "contact.html";
  });

  var theTagline = document.createElement("p");
  theTagline.classList.add("cardDescription");
  theTagline.innerHTML = description;
  content.appendChild(theTagline);

  return card;
}
