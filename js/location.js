function initMap() {
    var mylocation = {lat: 31.2536, lng: 75.7037};
    var map = new google.maps.Map(document.getElementById('googleMaps'), {
        zoom: 14,
        center: mylocation,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: mylocation,
        map: map,
        animation : google.maps.Animation.BOUNCE,
        icon: "./images/custom-marker.png"
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(mylocation);
    });
    var infoWindow = new google.maps.InfoWindow({
        content : "<div style='float: left; color: black;'><strong>That's where I am.</strong></div>",
        maxWidth: 140
    });
    marker.addListener("click", function(){
        infoWindow.open(map, marker);
    });
    $("#googleMaps").click(function(){
       map.setCenter(mylocation); 
    });
}