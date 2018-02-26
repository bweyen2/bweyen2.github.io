let projectArray = [
  2,
  'https://www.arcgis.com/apps/View/index.html?appid=e2894432fe6f47758e812c9deedbe582',
  'Map of Recent Earthquakes',
  'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 4.5 or greater that have occurred in the last 7 days.',
  true,
  ['Earthquakes', 'worldwide','ArcGIS'],
]

let projectObject = {
id: 2,
url: 'https://www.arcgis.com/apps/View/index.html?appid=e2894432fe6f47758e812c9deedbe582',
title: 'Map of Recent Earthquakes',
desc: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 4.5 or greater that have occurred in the last 7 days.',
thumb: true,
keywords: [
 'Earthquakes',
 'worldwide',
 'ArcGIS'
]
}

console.log(projectArray[2])

console.log(projectObject.title)
console.log(projectObject["title"])
