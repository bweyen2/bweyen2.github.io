let sugarland = L.map('sugarlandtour').setView([38, -98], 4)

let stillthesame = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(sugarland)

let stay = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}')

let ithappens = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}')

let jenniferkristian = {
  'Open street map': stillthesame,
  'Open top map': stay,
  'World Physical': ithappens,
}

let sugarpin = L.icon({
  iconUrl: 'sugarland.png',
  iconSize: [25, 25],
  iconAnchor: [3, 3],
  popupAnchor: [-3, -76]
})

let oklahoma = L.marker([33.9531,	-96.4134], {icon: sugarpin}).addTo(sugarland);
oklahoma.bindPopup('<center>Venue: choctaw grand theater </center>' + '<br>Location: durant , ok, us ' + '<br>Date: may. 4 ' + '<br>Ticket Availability: Sold Out')

let texas = L.marker([30.2770,	-97.7322], {icon: sugarpin}).addTo(sugarland);
texas.bindPopup('<center>Venue:  iheart country festival  </center>' + '<br>Location: austin, tx, us ' + '<br>Date: may. 5  ' + '<br>Ticket Availability:  buy tickets')

var oktotx = [
    [33.9531,	-96.4134],
    [30.2770,	-97.7322]
];
var oktxline = L.polyline(oktotx, {color: 'blue'}).addTo(sugarland);

let georgia = L.marker([33.4700,	-81.9665], {icon: sugarpin}).addTo(sugarland);
georgia.bindPopup('<center>Venue: james brown arena </center>' + '<br>Location:  augusta, ga, us ' + '<br>Date: may. 25 ' + '<br>Ticket Availability: buy tickets')

var txtoga = [
    [30.2770,	-97.7322],
    [33.4700,	-81.9665]
];
var txgaline = L.polyline(txtoga, {color: 'blue'}).addTo(sugarland);

let northcarolina = L.marker([35.8033,	-78.7218], {icon: sugarpin}).addTo(sugarland);
northcarolina.bindPopup('<center>Venue: pnc arena </center>' + '<br>Location:  raleigh, nc, us ' + '<br>Date: may. 26 ' + '<br>Ticket Availability: buy tickets')

var gatonc = [
    [33.4700,	-81.9665],
    [35.8033,	-78.7218]
];
var gancline = L.polyline(gatonc, {color: 'blue'}).addTo(sugarland);

let florida = L.marker([29.1852,	-81.0705], {icon: sugarpin}).addTo(sugarland);
florida.bindPopup('<center>Venue: country 500 music fest </center>' + '<br>Location:  daytona beach, fl, us ' + '<br>Date: may. 27 ' + '<br>Ticket Availability: buy tickets')

var nctofl = [
    [35.8033,	-78.7218],
    [29.1852,	-81.0705]
];
var ncflline = L.polyline(nctofl, {color: 'blue'}).addTo(sugarland);
