import * as content from "./content.js";

// introduction

let introduction = `
  <div class="container">
    <div class="row v-align-middle">
      <div class="col-sm">
        <div class="intro-box">
          <h3>${content.introduction["welcomeHeadline"]}</h3>
          <p class="welcome-text">${content.introduction["welcomeText"]}</p>
          <hr class="d-none d-md-block">
        </div>
      </div>
      <div class="col-md">
        <div class="intro-image">
          <img src="${content.introduction["imageUrl"]}">
        </div>
      </div>
      <div class="col-lg">
        <div class="intro-box">
          <hr class="d-none d-lg-block">
          <p class="hightlight-headline">${content.introduction["highlightHeadline"]}</p>
          <p class="hightlight-text">${content.introduction["highlightText"]}</p>
          <p class="text-center"><a class="btn btn-outline-dark btn-sm custom-button" href="about.html" role="button">${content.introduction["button"]}</a></p>
        </div>
      </div>
    </div>
  </div>
`;

$('#introduction').append(introduction);

// portfolioHighlights

let portfolioHighlights = `
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-lg-4">
        <p class="hightlight-headline">${content.portfolioHighlights["explainer"]}</p>
        <h3>${content.portfolioHighlights["headline"]}</h3>
        <img src="${content.portfolioHighlights["imagesUrl"][0]}" class="d-none d-md-block">
      </div>
      <div class="col-md half-bg">
        <div class="row v-align-middle">
          <div class="col-lg-8">
            <img src="${content.portfolioHighlights["imagesUrl"][1]}">
          </div>
          <div class="col-md">
            <h2 class="portfolio-number">${content.portfolioHighlights["imagesUrl"].length}</h2>
            <h4 class="portfolio-text">Bilder</h4>
            <p class="text-center"><a class="btn btn-outline-dark btn-sm custom-button" href="gallery.html" role="button">View Gallery</a></p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 d-md-none d-lg-block">
            <img src="${content.portfolioHighlights["imagesUrl"][2]}">
          </div>
          <div class="col-lg-4 d-none d-lg-block">
            <img src="${content.portfolioHighlights["imagesUrl"][3]}">
          </div>
        </div>
      </div>
    </div>
  </div>
`;

$('#portfolio-highlights').append(portfolioHighlights);