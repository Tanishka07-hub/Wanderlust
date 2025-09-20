mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12', // Use the standard style for the map
    zoom: 8, // initial zoom level, 0 is the world view, higher values zoom in
    center:coordinates // center the map on this longitude and latitude
});
const marker= new mapboxgl.Marker({color:"Red"})
    .setLngLat(coordinates)
    .setPopup(new mapboxgl.Popup({offset:25}).setHTML("<p>Exact location visible after booking</p>"))
    .addTo(map);
    
