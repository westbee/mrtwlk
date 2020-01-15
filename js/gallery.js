import * as content from "./content.js";

let galleryCategories = "";

for (var i = 0; i < content.category.length; i++) {
  galleryCategories += `
  <div class="col-md col-padding">
    <a href="${content.category[i].link}">
      <div class="category-image">
        <img src="${content.category[i].image}">
      </div>
      <div class="category-description">
        <h6 class="category-head">${content.category[i].name}</h6>
      </div>
    </a>
  </div>
  `;
}

let gallery = `
  <div class="container">
    <div class="row justify-content-center">
      ${galleryCategories}
    </div>
  </div>
`;

$("#gallery").append(gallery);

function descriptionBox(headline, title, description, gridId) {
  return `
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <h3>${headline}</h3>
        <h4 class="gallery-title">${title}</h4>
        <p class="text-center">${description}</p>
      </div>
    </div>
    <div class="sub-section-padding">
      <div class="grid masonry">
        <div class="grid-sizer" id="${gridId}"></div>
      </div>
    </div>
  </div>`;
}

let neugeboreneBabybauch = descriptionBox(
  content.category[0].name,
  content.category[0].title,
  content.category[0].description,
  "grid_neugeborene_babybauch"
);
let kinderFamilien = descriptionBox(
  content.category[1].name,
  content.category[1].title,
  content.category[1].description,
  "grid_kinder_familien"
);
let portraitphotographie = descriptionBox(
  content.category[2].name,
  content.category[2].title,
  content.category[2].description,
  "grid_portraitphotographie"
);

$("#neugeborene-babybauch").append(neugeboreneBabybauch);
$("#kinder-familien").append(kinderFamilien);
$("#portraitphotographie").append(portraitphotographie);

for (i = 60; i > 0; i--) {
  $("#grid_neugeborene_babybauch").append(`
    <div class="grid-item">
      <img src="img/newborn/medium/${i}.jpg">
    </div>
  `);
}

for (i = 84; i > 0; i--) {
  $("#grid_kinder_familien").append(`
     <div class="grid-item">
       <img src="img/kinder/medium/${i}.jpg">
     </div>
   `);
}

for (i = 44; i > 0; i--) {
  $("#grid_portraitphotographie").append(`
     <div class="grid-item">
       <img src="img/portrait/medium/${i}.jpg">
     </div>
   `);
}
