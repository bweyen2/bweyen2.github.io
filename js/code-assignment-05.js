let projectData = []


projectData[0] = {
  id: 1,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=b3b3a7f9b65343829aab12b77d73cf9c',
  title: 'A Tour of New Orleans',
  desc: 'An ArcGIS Online Story Map Tour showing locations of rooftop bars in New Orleans, LA.',
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


projectData[2] = {
  id: 3,
  url: 'https://bweyenberg9.maps.arcgis.com/apps/GeoForm/index.html?appid=d19dd20bb03d435caabc997822a875c9',
  title: 'Find LSU Gymnasts',
  desc: 'An ArcGIS Online Web App showing where LSU gymnasts have been spotted on campus.',
  thumb: true,
  keywords: ['Gymnast', 'LSU', 'Spotted', 'ArcGIS']
}


projectData[3] = {
  id: 4,
  url: 'https://bweyenberg9.maps.arcgis.com/apps/webappviewer/index.html?id=33ac7a74e85645fabf00185cb00d1ede',
  title: 'Population and Housing in Louisiana',
  desc: 'An ArcGIS Online Web App showing the population and Housing in different areas of Louisiana.',
  thumb: true,
  keywords: ['Populatio', 'Louisiana', 'ArcGIS', 'Housing']
}


projectData[4] = {
  id: 5,
  url: 'https://bweyenberg9.maps.arcgis.com/apps/webappviewer/index.html?id=6354651409244506ad0bf8ebfe02d002',
  title: 'United States Population Growth',
  desc: 'An ArcGIS Online Web App showing the growth in population in the United States from 1789 to 2009.',
  thumb: true,
  keywords: ['New Orleans', 'Louisiana', 'ArcGIS']
}


projectData[5] = {
  id: 6,
  url: 'https://brookeweyenberg.maps.arcgis.com/apps/webappviewer/index.html?id=68ee32a0122b4394a5f193284e3b1ef3',
  title: 'Public Health New Orleans',
  desc: 'An ArcGIS Online web app showng where to find hospitals, nursing homes, and public health clinics, and drug stores in the City of New Orleans',
  thumb: true,
  keywords: ['New Orleans', 'Louisiana', 'ArcGIS', 'Health', 'Public']
}


for (let i = 0; i < projectData.length; i++) {
  console.log('Index position ' + i + ' title: ' + projectData[i].title)
  if (projectData[i].thumb === true) {
    console.log('images/ss-project-' + projectData[i].id + '.png')
  } else {
    console.log('images/no-preview.png')
  }
}
