function initialize()
{
var mapProp = {
	center:new google.maps.LatLng(51.51121389999999,-0.1198244),
	zoom:15,
	mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var geocoder = new google.maps.Geocoder();

// marker = new google.maps.Marker({
// 	position:new google.maps.LatLng(51.51121389999999,-0.1198244),
// 	zoom:15,
// 	map:map
// });

//marker.setMap(map);

var storesLoc = getLocations();

var infowindow = new google.maps.InfoWindow();

var marker, i;
   for (i = 0; i < storesLoc.length; i++) {  
	  marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][0], locations[i][1]),
		map: map
	  });

	  google.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function() {
		  infowindow.setContent(locations[i][0]);
		  infowindow.open(map, marker);
		}
	  })(marker, i));
	}
}

google.maps.event.addDomListener(window, 'load', initialize);


function getLocations() {
	var Locations = [];
	for(i=0; i<19; i++){
		$.getJSON('/static/js/json/data'.concat(i.toString(),'.json'), function(data) {
			var loc = data.search("location");
			var data_loc = data.substring(loc);
			var location = data_loc.substring(data_loc.indexOf("{") + 1,data_loc.indexOf("}"))
			var lat_lng = location.match(/-?\d+.\d+/g);
			Locations.push(lat_lng);
		});
	}return Locations;
}
