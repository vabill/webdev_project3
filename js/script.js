// for maps.html
function initMap(){
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 32.857166293767435, lng: -117.25741432029214},
		zoom: 10,
		mapTypeID: "satellite",
	});
	
	map.setTilt(45);

	const marker = new google.maps.marker.AdvancedMarkerElement({
		position: {lat: 32.857166293767435, lng: -117.25741432029214},
		map: map,
		title: "La Jolla Shores Beach",
		animation: google.maps.Animation.BOUNCE,
	});
	
	const infoWindow = new google.maps.InfoWindow({
		content: "<h3>La Jolla Shores Beach</h3><p>I was here almost weekly when I lived in Cali!</p>"
	});
	
	marker.addListener("click", () => {
		infoWindow.open(map, marker);
	});
}

google.maps.event.addDOMListener(window, 'load', initMap)