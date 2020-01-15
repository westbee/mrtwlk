import * as content from "./content.js";

let images = "", packages = "", prices = "", shootings = "", buttons = "";

content.pricing.forEach(function(packages, index) {
  for (var x in content.pricing[index].packages) {
    packages += `
    <div class="col-md-5">
      <div class="price-package">
        <h5 class="price-headline">${
          content.pricing[index].packages[x].name
        }</h5>
        <p class="price-package-detail">&rarr; ${content.pricing[
          index
        ].packages[x].details.join("<br>&rarr; ")}</p>
        <p class="price-package-extra">${
          content.pricing[index].packages[x].extra
        }</p>
        <h5>&mdash; ${
          content.pricing[index].packages[x].price
        } &mdash;<br><span class="steuer">inkl. MwSt.</span></h5>
      </div>
    </div>`;
  }

  shootings += `
    <div class="collapse" id="id-${content.pricing[index].id}">
      <div class="row justify-content-center">
        <div class="col-10">
          <h3>${content.pricing[index].title}</h3>
          <p class="price-description">${content.pricing[index].description}</p>
        </div>
      </div>
      <div class="price-bg-img-${content.pricing[index].id}">
        <div class="row justify-content-center">
          ${packages}
        </div>
      </div>
    </div>
  `;

  shootings = shootings.replace("[object Object]", "");

  buttons += `
    <button class="btn btn-outline-dark btn-sm btn-price" type="button" data-toggle="collapse" data-target="#id-${
      content.pricing[index].id
    }" aria-expanded="true" aria-controls="id-${content.pricing[index].id}">${
    content.pricing[index].title
  }</button>
  `;
});

let pricing = `
  <div class="container">
    <div class="row justify-content-center">
      ${buttons}
    </div>
    <div class="row sub-section-padding">
      ${shootings}
    </div>
  </div>
`;

$("#pricing").append(pricing);
$("#id-0").addClass("show");

content.pricing.forEach(function(index) {
  $(`.price-bg-img-${index.id}`).css(
    "background-image",
    `url('../${index.bgImg}')`
  );
});

$(document).ready(function() {
  $(".collapse").on("show.bs.collapse", function() {
    $(".collapse.show").each(function() {
      $(this).collapse("hide");
    });
  });
});
