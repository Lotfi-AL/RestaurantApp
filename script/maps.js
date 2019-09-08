function initMap() {
  var location = {lat: 63.415470, lng: 10.406140};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });

}
