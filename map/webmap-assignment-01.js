let theworld = L.map('Brookemap').setView([29.951105,	-90.081227], 13)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemap).addTo(theworld)
let mypoint = L.marker([29.951105,	-90.081227]).addTo(theworld)
let myshape = L.polygon([
  [29.951848,	-90.088608],
  [29.959582,	-90.075734],
  [29.944449,	-90.076935]
]).addTo(theworld)

myshape.bindPopup('New Orleans')
mypoint.bindPopup('Mercedes-Benz Superdome')

theworld.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
var latlngs = [
    [29.951127,	-90.081347],
    [29.948412,	-90.070361],
    [29.949565,	-90.062936]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(theworld);
