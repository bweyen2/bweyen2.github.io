function createTitle  (title) {
  console.log('Title: ' + title)
}
function createthumbnail (thumb, id) {
  if (thumb === true) {
    console.log('images/ss-project-' + id + '.png')
  } else {
    console.log('images/no-preview.png')
  }
}
