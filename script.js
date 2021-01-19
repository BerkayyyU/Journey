images = [
  {
    name: "Harbor",
    img: "./images/TallinnHarbor.jpeg",
    caption: "Harbor - Tallinn/Estonia"
  },
  {
    name: "Sunrise",
    img: "./images/TallinnSunrise.jpeg",
    caption: "Sunrise - Tallinn/Estonia"
  },
  {
    name: "Wonderworks",
    img: "./images/Wonderworks.jpeg",
    caption: "Wonderworks - South Carolina/USA"
  },
  {
    name: "Broadway",
    img: "./images/Broadway.jpeg",
    caption: "Broadway night view - South Carolina/USA"
  },
  {
    name: "White House",
    img: "./images/WhiteHouse.jpeg",
    caption: "White House - Washington/USA"
  },
  {
    name: "War",
    img: "./images/IHaveSeen.jpeg",
    caption: "I have seen war, I hate war - Washington/USA"
  },
  {
    name: "Empire State",
    img: "./images/EmpireState.jpeg",
    caption: "Night view - New York/USA"
  },
  {
    name: "Statue of Liberty",
    img: "./images/LibertyStatue.jpeg",
    caption: "Statue of Liberty - New York/USA"
  },
  {
    name: "Grand Central Terminal",
    img: "./images/GrandCentralTerminal.jpeg",
    caption: "Grand Central Terminal - New York/USA"
  },
  {
    name: "Central Park",
    img: "./images/CentralPark.jpeg",
    caption: "Central Park - New York/USA"
  },
  {
    name: "The High Line",
    img: "./images/TheHighLine.jpeg",
    caption: "The High Line - New York/USA"
  },
  {
    name: "Old Train Station",
    img: "./images/OldTrain.jpeg",
    caption: "Old Train Station - Edirne/Turkey"
  },
  {
    name: "Iguana",
    img: "./images/Iguana.jpeg",
    caption: "My Little Pony - Istanbul/Turkey"
  }
];

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var prev = document.getElementsByClassName(prev);
var x;

openModal = function (index) {
  modal.style.display = "block";
  modalImg.src = images[index-1].img;
  captionText.innerHTML = images[index-1].caption;
  x = index;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function plusSlides(n){
  openModal(x += n);
}




