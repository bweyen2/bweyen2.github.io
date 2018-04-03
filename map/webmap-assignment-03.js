let theworld = L.map('Brookemap').setView([29.951105,	-90.081227], 13)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemap).addTo(theworld)

let myredpin = L.icon({
  iconUrl: 'redpin.png',
  iconSize: [38, 95], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let markerCoords = [51.5, -0.09]
let markerOptions = { icon: myredpin }

let mypoint = L.marker([29.951105,	-90.081227]).addTo(theworld)
let myshape = L.polygon([
  [29.951848,	-90.088608],
  [29.959582,	-90.075734],
  [29.944449,	-90.076935]
]).addTo(theworld)
