var map = L.map('map').setView([51.505, -0.09], 13);
//the scope, sa lerg mu dok map

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([42.674486, 21.180911]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

var marker2 = L.marker([41.328487, 19.818070]).addTo(map)
    .bindPopup('vend<br> Tirane')
    .openPopup();


var marker3 = L.marker([39.873122, 20.003893]).addTo(map)
.bindPopup('vend<br> Tirane')
    .openPopup();
;

var circle = L.circle([42.674486, 21.180911], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(map);

var polygon = L.polygon([
    [42.674486, 21.180911],[41.328487, 19.818070],
    [39.873122, 20.003893]
    
]).addTo(map);