let theworld = L.map('Brookemap4').setView([38,	-98], 4)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemap).addTo(theworld)

myGeojsonstyle = function (state) {
  let age = state.properties.MED_AGE
   let stateColor = 'Olive'
   if ( age < 38 ) { stateColor = 'Green' }
   let myStyle = {
     color: stateColor,
     weight: 1,
     fillOpacity: 0.2
   }
   return myStyle
}

function createPopup (state, statelayer) {
  let name = state.properties.STATE_NAME
  let age = state.properties.MED_AGE
  statelayer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}

myGeojsonOpOptions = {
  style: myGeojsonstyle,
  onEachFeature: createPopup
}
L.geoJSON(stateDemographics, myGeojsonOpOptions).addTo(theworld)
