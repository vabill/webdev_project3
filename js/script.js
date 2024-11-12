// for maps.html
function init(){
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(32.857711548212926, -117.25744114237271);
	var mapOptions = {
		center: myLocation,
		zoom: 12,
		mapTypeID: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};
	
	var myMap = new google.maps.Map(el, mapOptions);
	
	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
	});
	
	var contentString = '<h3>La Jolla Shores Beach</h3><p>I used to come here almost weekly when I lived in Cali!</p>';
	
	var infoWindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	google.maps.event.addListener(marker, 'click', function() {
		infowWindow.open(myMap, marker);
	});
}

google.maps.event.addDomListener(window, 'load', init);