import destinations from './data/tour.js'

function convertToSlug(Text) {
  return Text.toLowerCase()
             .replace(/[^\w ]+/g, '')
             .replace(/ +/g, '-');
} 

const container = document.getElementById('destinations');
const container2 = document.getElementById('destinations-list');

destinations().forEach((result, idx) => { 
  const content = `
    <div class="col-lg-6 col-md-6 col-sm-12 tour-block">
        <div class="tour-block-one">
            <div class="inner-box">
                <figure class="image-box">
                    <img src=${result.image} alt="">
                    <a href="tour-details.html?destination=${convertToSlug(result.title)}"><i class="fas fa-link"></i></a>
                </figure>
                <div class="lower-content">
                    <div class="rating"><span><i class="fas fa-star"></i>4.8 Superb</span></div>
                    <h3><a href="tour-details.html?destination=${convertToSlug(result.title)}">${result.title}</a></h3>
                    <ul class="info clearfix">
                        <li><i class="far fa-clock"></i>${result.duration}</li>
                        <li><i class="far fa-map"></i>${result.location}</li>
                    </ul>
                    <p>${result.brief}</p>
                    <div class="btn-box">
                        <a href="tour-details.html?destination=${convertToSlug(result.title)}">See Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;

  const content2 = `
    <div class="tour-block-two">
        <div class="inner-box">
            <figure class="image-box">
                <img src=${result.imageList} alt="">
                <a href="tour-details.html?destination=${convertToSlug(result.title)}"><i class="fas fa-link"></i></a>
            </figure>
            <div class="content-box">
                <div class="rating"><span><i class="fas fa-star"></i>8.0 Superb</span></div>
                <h3><a href="tour-details.html?destination=${convertToSlug(result.title)}">${result.title}</a></h3>
                <ul class="info clearfix">
                    <li><i class="far fa-clock"></i> ${result.duration}</li>
                    <li><i class="far fa-map"></i> ${result.location}</li>
                </ul>
                <p>${result.brief}</p>
                <div class="btn-box">
                    <a href="tour-details.html?destination=${convertToSlug(result.title)}">See Details</a>
                </div>
            </div>
        </div>
    </div>
  `
  // Append newyly created card element to the container
  container.innerHTML += content;
  container2.innerHTML += content2;
})