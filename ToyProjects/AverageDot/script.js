const places = [];

class Place {
  posX;
  posY;
}

function writes() {
  var e = window.event;

  var place = new Place();
  place.posX = e.clientX - 5;
  place.posY = e.clientY - 15;

  places.push(place);
  places.sort();
  putDot(place.posX, place.posY);
}

function putDot(x, y) {
  var p = document.createElement("P");
  p.style.position = "fixed";
  p.style.left = x + "px";
  p.style.top = y + "px";
  p.style.userSelect = "none";
  p.style.fontWeight = "bold";
  p.className = "dots";
  
  p.appendChild(document.createTextNode("X"));

  document.body.appendChild(p);
}

function getAverage() {
    deleteDots();


    place = calculateAveragePoint();

    
    putDot(place.posX, place.posY);
}

function deleteDots(){
    const dots = document.querySelectorAll(".dots");
    dots.forEach((dot) => {
      dot.remove();
    });
}

function calculateAveragePoint(){
    var place = new Place();
    
        place.posX = 0;
        place.posY = 0;
    
    places.forEach(item => {
        place.posX += item.posX;
        place.posY += item.posY;
    });
    place.posX/=places.length;
    place.posY/=places.length;

    return place;
}

function restart(){
    location.reload();
}