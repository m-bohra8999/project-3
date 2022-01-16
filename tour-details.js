import destinations from './data/tour.js'

function convertToSlug(Text) {
  return Text.toLowerCase()
             .replace(/[^\w ]+/g, '')
             .replace(/ +/g, '-');
} 

const container = document.getElementById('destinations'); 

destinations().forEach((result, idx) => { 
  const content = `
     ${result.overview}
  `;  
  container.innerHTML += content; 
})