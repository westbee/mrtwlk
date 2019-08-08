import * as content from "./content.js";

let aboutImages = '';

for(var i = 0; i < content.about["imageUrl"].length; i++){
  aboutImages += `
    <div class="col-md">
      <img src="${content.about["imageUrl"][i]}">
    </div>
  `
}

let aboutParagraphs = '';

for(var i = 0; i < content.about["text"].length; i++){
  aboutParagraphs += `<p>${content.about["text"][i]}</p>`
}

let aboutPage = `
  <div class="container">
    <div class="row about-images">
      ${aboutImages}
    </div>
    <div class="row justify-content-center sub-section-padding">
      <div class="col-md-9">
        <div class="quote-box">
          <h1>&ldquo;</h1>
          <h3 class="quote-text"><i>${content.about["quote"]}</i></h3>
          <p class="quote-author">&mdash; Marta Wilk</p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center sub-section-padding">
      <div class="col-md-7">
        <div class="about-box">
          ${aboutParagraphs}
        </div>
        <div class="button-box">
          <p class="text-center"><a class="btn btn-outline-dark btn-sm custom-button" href="contact.html" role="button">zum Kontakt</a></p>
        </div>
      </div>
    </div>
  </div>
`;

$('#about').append(aboutPage);
$('.about-images .col-md:nth-child(-n+2)').addClass("d-none d-md-block");