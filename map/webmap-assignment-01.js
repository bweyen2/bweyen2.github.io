let theworld = L.map('Brookemap').setView([29.953003, -90.071647], 13)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemap).addTo(theworld)
let mypoint = L.marker([29.953003, -90.071647]).addTo(theworld)
let polygon = L.polygon([
  [29.951848,	-90.088608],
  [29.959582,	-90.075734],
  [29.944449,	-90.076935]
]).addTo(theworld);

myshape.bindPopup('St. Katharine\'s and Wapping')
mypoint.bindPopup('London Bridge Station')
