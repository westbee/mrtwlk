import * as content from "./content.js";

let faqItems = '';

for(var i = 0; i < content.faq.length; i++){
  faqItems += `
  <div class="faq-box">
    <div class="row justify-content-around v-align-middle">
      <div class="col-lg col-md-5 col-10">
        <img src="${content.faq[i].imageUrl}" class="faq-image">
      </div>
      <div class="col-lg col-md-7 col-11">
        <h4 class="faq-head"> > ${content.faq[i].title} < </h4>
        <p class="faq-text">${content.faq[i].text}</p>
      </div>
    </div>
  </div>
  `
}

let faq = `
  <div class="container">
    <div class="row justify-content-center">
      ${faqItems}
    </div>
  </div>
`;

$('#faq').append(faq);
// $('.faq-images .col-md:nth-child(2n)').addClass("d-none d-md-block");