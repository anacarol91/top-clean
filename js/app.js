var app = angular.module('main', []);

app.controller('MainCtrl', function(){
	 function myMap() {

        var location = new google.maps.LatLng(-19.8824519,-43.9399897);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map
        });

        var contentString = 'Top Clean';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

    }

    google.maps.event.addDomListener(window, 'load', myMap);
});