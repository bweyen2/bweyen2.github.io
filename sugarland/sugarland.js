let sugarland = L.map('sugarlandtour').setView([38, -98], 4)

let stillthesame = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(sugarlandtour)

let stay = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}')

let ithappens = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}')

let jenniferkristian = {
  'Open street map': stillthesame,
  'Open top map': stay,
  'World Physical': ithappens,
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
L.geoJSON(stateDemographics, brookegeoJSONoptions).addTo(sugarlandtour)

L.control.layers(jenniferkristian).addTo(sugarlandtour)
