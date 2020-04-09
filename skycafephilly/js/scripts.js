//initialize Accordion at 1000px viewport
getAccordion("#tabs",1000);

//run openNav function
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

//run closeNav function
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Initialize and add the Google map
function initMap() {
  // The location of Sky Cafe
  var skyCafe = {lat: 39.937037, lng: -75.162849};
  // The map, centered at Sky Cafe
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: skyCafe});
  // The marker, positioned at Sky Cafe
  var marker = new google.maps.Marker({position: skyCafe, map: map});
}