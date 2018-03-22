//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let theworld = L.map('Brookemap').setView([29.953003, -90.071647], 13)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemap).addTo(theworld)
