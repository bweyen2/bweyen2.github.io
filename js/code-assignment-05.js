let projectData = []


projectData[0] = {
  id: 1,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=b3b3a7f9b65343829aab12b77d73cf9c',
  title: 'New Orleans Tour',
  desc: 'An ArcGIS Online Story Map Tour showing points of interest in New Orleans, LA.',
  thumb: true,
  keywords: ['New Orleans', 'Louisiana', 'ArcGIS']
}


projectData[1] = {
  id: 2,
  url: 'https://www.arcgis.com/apps/View/index.html?appid=e2894432fe6f47758e812c9deedbe582',
  title: 'Map of Recent Earthquakes',
  desc: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 4.5 or greater that have occurred in the last 7 days.',
  thumb: true,
  keywords: ['ArcGIS', 'Earthquakes', 'Worldwide']
}


for (let i = 0; i < projectData.length; i++) {
  console.log('Index position ' + i + ' title: ' + projectData[i].title)
  if (projectData[i].thumb === true) {
    console.log('images/ss-project-' + projectData[i].id + '.png')
  } else {
    console.log('images/no-preview.png')
  }
}
