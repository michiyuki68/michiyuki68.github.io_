var map;

function initialize() {
  if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map_canvas"));
    map.setCenter(new GLatLng(41.791217,140.775032), 12);

    GEvent.addListener(map, "click", clickAction);
  }
}

function downloadData(){
  GDownloadUrl("data.json", function dispData(data, statusCode){
    var obj = eval("(" + data + ")");

    for (var i = 0; i < obj.marker.length; i++) {
      var lat = obj.marker[i].lat;
      var lng = obj.marker[i].lng;
      var name = obj.marker[i].name;

      map.addOverlay(createMarker(lat, lng, name));
    }
  });
}

function createMarker(lat, lng, name) {
  var marker = new GMarker(new GLatLng(lat, lng));

  var html = "<p>" + name + "</p>";
  GEvent.addListener(marker, "click", function(){
    marker.openInfoWindowHtml(html);
  });

  return marker;
}