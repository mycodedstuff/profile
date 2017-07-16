function initMap() {
    var mylocation = {lat: 25.3214, lng: 74.5870};
    var map = new google.maps.Map(document.getElementById('googleMaps'), {
        zoom: 11,
        center: mylocation,
        draggable: false, 
        scrollwheel: false, 
        disableDoubleClickZoom: true
    });
    var marker = new google.maps.Marker({
        position: mylocation,
        map: map,
        animation : google.maps.Animation.BOUNCE
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(mylocation);
    });
    var infoWindow = new google.maps.InfoWindow({
        content : "<div style='float: left'><img style='height:80px; width: 80px' src='images/me.png'><p style='color: black;'><strong>That's where I am.</strong></p></div>",
        maxWidth: 140
    });
    marker.addListener("click", function(){
        infoWindow.open(map, marker);
    });
    $("#googleMaps").click(function(){
       map.setCenter(mylocation); 
    });
}