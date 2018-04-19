let theworld = L.map('Brooke').setView([38, -98], 4)

let basemap = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(theworld)

let basemap2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')

let basemap3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}')

let worldbasemap = {
  'Open street map': basemap,
  'Open top map': basemap2,
  'World Physical': basemap3,
}

geoJSONstyle = function (states) {
  let age = states.properties.MED_AGE
  let statecolor = 'Blue'
  if ( age < 38 ) {statecolor = 'Pink'}
  let mystyle = {
    color: statecolor,
    weight: 2,
    fillOpacity: 0.2,
    opacity: 0.3,
  }
  return mystyle
}

function createPopup (states, statelayer) {
  let population = states.properties.POPULATION
  let name = states.properties.STATE_NAME
  let age = states.properties.MED_AGE
  statelayer.bindPopup('Population of ' + name + ':' + population + '<br>Median age ' + ': ' + age + '<br>National average: 38')
}

brookegeoJSONoptions = {
  style: geoJSONstyle,
  onEachFeature: createPopup
}
L.geoJSON(stateDemographics, brookegeoJSONoptions).addTo(theworld)

L.control.layers(worldbasemap).addTo(theworld)
