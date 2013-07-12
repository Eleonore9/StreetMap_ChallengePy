// $(document).ready(function() {
//  var result = [];
//  for(i=0; i<19; i++) {
//      $.getJSON('/static/js/json/data'.concat(i.toString(),'.json'), function(data) {
//          var loc = data.search("location");
//          var data_loc = data.substring(loc);
//          var l = data_loc.substring(data_loc.indexOf("{") + 1,data_loc.indexOf("}"));
//          var lat_lng = l.match(/-?\d+.\d+/g);
//          result.push(lat_lng);                   
//      });
//  }

//  google.maps.event.addDomListener(window, 'load', initialize);
// })


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
    //  position:new google.maps.LatLng(51.51121389999999,-0.1198244),
    //  zoom:15,
    //  map:map
    // });
    //marker.setMap(map);

    // var stores = new Array("Snowden Flood", "Locomocean", "j-me original design", "Whitbread and Wilkinson",
    //                      "MAIDEN", "Archipelago Textiles", "Ganesha", "Black+Blum", "Live with Me",
    //                      "Start Space", "B Southgate", "Of Cabbages and Kings", "East London Furniture",
    //                      "Rouge", "Copperleafprint", "Bodo Sperlein", "Gillian Anderson Price Ltd", 
    //                      "Family Tree", "Homage");
    
    // for(i=0; i<19; i++) {
    // $.getJSON('/static/js/json/data'.concat(i.toString(),'.json'), function(data, result) {
    //     var result = [];
    //     var loc = data.search("location");
    //     var data_loc = data.substring(loc);
    //     var l = data_loc.substring(data_loc.indexOf("{") + 1,data_loc.indexOf("}"));
    //     var lat_lng = l.match(/-?\d+.\d+/g);
    //     result.push(lat_lng); 
    //     $('.lat_lng').append(result);
    //     });
    // }


    // var Stores = $('.stores_names').html();
    // var LatLng = $('.lat_lng').html();
    // console.log('Stores: ' + Stores);
    // console.log('LatLng: ' + LatLng);

    // var storesLoc = getLocations();
    // console.log("storesLoc: " + storesLoc + typeof storesLoc);

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
       for (i = 0; i < storesLoc.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(storesLoc[i][0], storesLoc[i][1]),
            map: map
          });

       google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
           infowindow.setContent(stores[i]);
           infowindow.open(map, marker);
         }
       })(marker, i));
     }
}

google.maps.event.addDomListener(window, 'load', initialize);


// function getLocations() {
//  var result = new Array();
//  for(i=0; i<19; i++) {
//      $.getJSON('/static/js/json/data'.concat(i.toString(),'.json'), function(data) {
//          var loc = data.search("location");
//          var data_loc = data.substring(loc);
//          var l = data_loc.substring(data_loc.indexOf("{") + 1,data_loc.indexOf("}"));
//          var lat_lng = l.match(/-?\d+.\d+/g);
//          console.log("lat_lng: " + lat_lng);
//          var stores = new Array("Snowden Flood", "Locomocean", "j-me original design", "Whitbread and Wilkinson",
//                      "MAIDEN", "Archipelago Textiles", "Ganesha", "Black+Blum", "Live with Me",
//                      "Start Space", "B Southgate", "Of Cabbages and Kings", "East London Furniture",
//                      "Rouge", "Copperleafprint", "Bodo Sperlein", "Gillian Anderson Price Ltd", 
//                      "Family Tree", "Homage");
//          var infowindow = new google.maps.InfoWindow();

//          var marker, i;
                
//                marker = new google.maps.Marker({
//                  position: new google.maps.LatLng(lat_lng[0], lat_lng[1]),
//                  map: map
//                });
//                google.maps.event.addListener(marker, 'click', (function(marker, i) {
//                  return function() {
//                      infowindow.setContent(stores[i]);
//                      infowindow.open(map, marker);
//                    }
//                  })(marker, i));
                                    
//      });
//  }
// }


// function getLocations() {
//     var result = [];
//     for(i=0; i<19; i++) {
//         $.getJSON('/static/js/json/data'.concat(i.toString(),'.json'), function(data, result) {
//             // var result = [];
//             var loc = data.search("location");
//             var data_loc = data.substring(loc);
//             var l = data_loc.substring(data_loc.indexOf("{") + 1,data_loc.indexOf("}"));
//             var lat_lng = l.match(/-?\d+.\d+/g);
//             console.log("lat_lng: " + lat_lng);
//             result.push(lat_lng);  
//             console.log("result: " + result);                 
//         });
//     }
//     console.log("RETURN: " + result);
//     return result;
// }

