//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let theworld = L.map('Brookemap').setView([29.953003, -90.071647], 13)
let basemap = 'https://{s}.{base}.maps.cit.api.here.com/maptile/2.1/{type}/{mapID}/normal.day/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}'
L.tileLayer(basemap).addTo(theworld)
