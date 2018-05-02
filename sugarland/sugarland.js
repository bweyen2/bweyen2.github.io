let sugarland = L.map('sugarland').setView([38, -98], 4)

let basemap = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(sugarland)

let basemap2 = L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}')

let basemap3 = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}')

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
L.geoJSON(stateDemographics, brookegeoJSONoptions).addTo(sugarland)

L.control.layers(worldbasemap).addTo(sugarland)
