import * as content from "./content.js";

import "./index.js";
import "./about.js";
import "./gallery.js";
import "./preise.js";
import "./faq.js";
import "./contact.js";

// navigation

let navItems = '';

for(var i = 0; i < content.navItems.length; i++){
  navItems += `<a class="nav-item nav-link nav-link-top" href="${content.navItems[i].link}">${content.navItems[i].name}</a>`
}

let nav = `
  <nav class="nav nav-justified navbar navbar-expand-lg fixed-top">
    <div class="logo-img">
      <img src="img/logo_sm_black.png" class="navbar-brand">
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span><img src="img/icon-nav.png" class="img-fluid"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      ${navItems}
    </div>
  </nav>
`;

$('body').prepend(nav);

$("button").click(function(){
  $("nav").toggleClass("nav-bg");
});

function collapseNavbar() {

  if ( $("nav").offset().top < 40 ) {
    $("nav").removeClass("nav-bg-light");
    $(".nav-link").removeClass("nav-link-scroll").addClass("nav-link-top");
  } else {
    $("nav").addClass("nav-bg-light");
    $(".nav-link").removeClass("nav-link-top").addClass("nav-link-scroll");
  }
}

$(window).scroll(collapseNavbar);

// footer

var socialMedia = ``;
for (var i in content.socialMedia){
  socialMedia += `
    <li>
      <a class="${content.socialMedia[i].class}" href="${content.socialMedia[i].link}" target="${content.socialMedia[i].target}">
        <img src="${content.socialMedia[i].image}" class="socico">
      </a>
    </li>
  `
};

var date = new Date().getFullYear();
var footer = `
  <footer>
    <div class="container">
      <div class="row footer-bar align-items-center">
        <div class="col">
          <div class ="socialmedia-icon">
            <ul class="soc">
              ${socialMedia}
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="footer-text">&copy;2015-${date} Marta Wilk Photography | All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
`;

$('body').append(footer);

// smooth scrolling

$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})

// images responsive

$('img').addClass('img-fluid');

// parallax effect

function isInViewport(node) {
  var rect = node.getBoundingClientRect()
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

$(window).resize(function () {
    var screen = $(window)
    if (screen.width() >= 768) {
        $('.jumbotron-welcome').addClass('parallax');
    } else {
      $('.jumbotron-welcome').removeClass('parallax');
    }
});

$(window).scroll(function() {
  var scrolled = $(window).scrollTop()
  $('.parallax').each(function(index, element) {
    var initY = $(this).offset().top
    var height = $(this).height()
    var endY  = initY + $(this).height()

    // Check if the element is in the viewport.
    var visible = isInViewport(this)
    if(visible) {
      var diff = scrolled - initY
      var ratio = Math.round((diff / height) * 100)
      $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
    }
  })
})

$(function() {

            // init Masonry
        var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
        });
        // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
        $grid.masonry();
        });


        // change size of item by toggling gigante class
        $grid.on( 'click', '.grid-item', function() {
          $(this).toggleClass('gigante');
          // trigger layout after item size changes
          $grid.masonry('layout');
        });


          // imagesLoaded( grid, function() {
            // layout Masonry after each image loads
          //  msnry.layout();
         // });
        });

  //image error? -> remove it and the parent-div
  $("img").on("error", function() {
      $(this).parent().remove();
    }
  );

// // navigation
//
// let navItems = '';
//
// for(var i = 0; i < content.navItems.length; i++){
//   navItems += `<a class="nav-item nav-link nav-link-top" href="${content.navItems[i].link}">${content.navItems[i].name}</a>`
// }
//
// let nav = `
//   <nav class="nav nav-justified navbar navbar-expand-lg fixed-top">
//     <div class="logo-img">
//       <img src="img/logo_sm_black.png" class="navbar-brand">
//     </div>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span><img src="img/icon-nav.png" class="img-fluid"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       ${navItems}
//     </div>
//   </nav>
// `;
//
// $('body').prepend(nav);
//
// function collapseNavbar() {
//   if ( $("nav").offset().top > 40 ) {
//     $("nav").addClass("nav-bg-light");
//     $(".nav-link").removeClass("nav-link-top").addClass("nav-link-scroll");
//   } else {
//     $("nav").removeClass("nav-bg-light");
//     $(".nav-link").removeClass("nav-link-scroll").addClass("nav-link-top");
//   }
// }
//
// $(window).scroll(collapseNavbar);

// // introduction
//
// let introduction = `
//   <div class="container">
//     <div class="row v-align-middle">
//       <div class="col-sm">
//         <div class="intro-box">
//           <h3>${content.introduction["welcomeHeadline"]}</h3>
//           <p class="welcome-text">${content.introduction["welcomeText"]}</p>
//           <hr class="d-none d-md-block">
//         </div>
//       </div>
//       <div class="col-md">
//         <div class="intro-image">
//           <img src="${content.introduction["imageUrl"]}">
//         </div>
//       </div>
//       <div class="col-lg">
//         <div class="intro-box">
//           <hr class="d-none d-lg-block">
//           <p class="hightlight-headline">${content.introduction["highlightHeadline"]}</p>
//           <p class="hightlight-text">${content.introduction["highlightText"]}</p>
//           <p class="text-center"><a class="btn btn-outline-dark btn-sm custom-button" href="about.html" role="button">${content.introduction["button"]}</a></p>
//         </div>
//       </div>
//     </div>
//   </div>
// `;
//
// $('#introduction').append(introduction);
//
// // portfolioHighlights
//
// let portfolioHighlights = `
//   <div class="container">
//     <div class="row">
//       <div class="col-md-4">
//         <p class="hightlight-headline">${content.portfolioHighlights["explainer"]}</p>
//         <h3>${content.portfolioHighlights["headline"]}</h3>
//         <img src="${content.portfolioHighlights["imagesUrl"][0]}">
//       </div>
//       <div class="col-md half-bg">
//         <div class="row v-align-middle">
//           <div class="col-md-8 d-none d-md-block">
//             <img src="${content.portfolioHighlights["imagesUrl"][1]}">
//           </div>
//           <div class="col-md">
//             <h2 class="portfolio-number">${content.portfolioHighlights["imagesUrl"].length}</h2>
//             <h4 class="portfolio-text">Bilder</h4>
//             <p class="text-center"><a class="btn btn-outline-dark btn-sm custom-button" href="gallery.html" role="button">View Gallery</a></p>
//           </div>
//         </div>
//         <div class="row">
//           <div class="col-md-7 d-none d-md-block">
//             <img src="${content.portfolioHighlights["imagesUrl"][2]}">
//           </div>
//           <div class="col-md-4 d-none d-md-block">
//             <img src="${content.portfolioHighlights["imagesUrl"][3]}">
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// `;
//
// $('#portfolio-highlights').append(portfolioHighlights);

// about

// let aboutImages = '';
//
// for(var i = 0; i < content.about["imageUrl"].length; i++){
//   aboutImages += `
//     <div class="col-md">
//       <img src="${content.about["imageUrl"][i]}">
//     </div>
//   `
// }
//
// let aboutParagraphs = '';
//
// for(var i = 0; i < content.about["text"].length; i++){
//   aboutParagraphs += `<p>${content.about["text"][i]}</a>`
// }
//
// let aboutPage = `
//   <div class="container">
//     <div class="row about-images">
//       ${aboutImages}
//     </div>
//     <div class="row justify-content-center sub-section-padding">
//       <div class="col-md-9">
//         <div class="quote-box">
//           <h1>&ldquo;</h1>
//           <h3 class="quote-text"><i>${content.about["quote"]}</i></h3>
//           <p class="quote-author">&mdash; Marta Wilk</p>
//         </div>
//       </div>
//     </div>
//     <div class="row justify-content-center sub-section-padding">
//       <div class="col-md-7">
//         <div class="about-box">
//           ${aboutParagraphs}
//         </div>
//       </div>
//     </div>
//   </div>
// `;
//
// $('#about').append(aboutPage);
// $('.about-images .col-md:nth-child(-n+2)').addClass("d-none d-md-block");

// portfolio

// let galleryCategories = '';
//
// for(var i = 0; i < content.category.length; i++){
//   galleryCategories += `
//   <div class="col-md">
//     <div class="category-image">
//       <a href="${content.category[i].link}"><img src="${content.category[i].image}"></a>
//     </div>
//     <div class="category-description">
//       <h4 class="category-head">${content.category[i].name}</h4>
//     </div>
//   </div>
//   `
// }
//
// let gallery = `
//   <div class="container">
//     <div class="row">
//       ${galleryCategories}
//     </div>
//   </div>
// `;
//
// $('#gallery').append(gallery);
//
// function descriptionBox(headline, title, description, gridId) {
//
//   return `
//   <div class="container-fluid">
//     <div class="row justify-content-center">
//       <div class="col-md-7">
//         <h3>${headline}</h3>
//         <h4 class="gallery-title">${title}</h4>
//         <p class="text-center">${description}</p>
//       </div>
//     </div>
//     <div class="sub-section-padding">
//       <div class="grid masonry">
//         <div class="grid-sizer" id="${gridId}"></div>
//       </div>
//     </div>
//   </div>`
// }
//
// let neugeboreneBabybauch = descriptionBox(content.category[0].name, content.category[0].title, content.category[0].description, "grid_neugeborene_babybauch");
// let kinderFamilien = descriptionBox(content.category[1].name, content.category[1].title, content.category[1].description, "grid_kinder_familien");
// let portraitphotographie = descriptionBox(content.category[2].name, content.category[2].title, content.category[2].description, "grid_portraitphotographie");
//
// $('#neugeborene-babybauch').append(neugeboreneBabybauch);
// $('#kinder-familien').append(kinderFamilien);
// $('#portraitphotographie').append(portraitphotographie);
//
// for (i = 60; i > 0; i--) {
//   $('#grid_neugeborene_babybauch').append(`
//     <div class="grid-item">
//       <img src="img/newborn/medium/${i}.jpg">
//     </div>
//   `);
// }
//
// for (i = 84; i > 0; i--) {
//    $('#grid_kinder_familien').append(`
//      <div class="grid-item">
//        <img src="img/kinder/medium/${i}.jpg">
//      </div>
//    `);
// }
//
// for (i = 44; i > 0; i--) {
//    $('#grid_portraitphotographie').append(`
//      <div class="grid-item">
//        <img src="img/portrait/medium/${i}.jpg">
//      </div>
//    `);
// }

// pricing

// let images = "";
// let packages = "";
// let prices = "";
// let shootings = "";
// let buttons = "";
// let samples = "";
//
// for (var i = 2; i <= 3 ; i++) {
//   samples += `
//    <div class="col-md">
//      <img src="img/preise/paket${[i]}.jpg">
//    </div>
//   `
// }
//
// content.pricing.forEach(function (packages, index){
//
//   for (var x in content.pricing[index].packages){
//
//     packages += `
//       <div class="col-md-5">
//         <div class="price-image">
//           <img src="${content.pricing[index].packages[x].imgUrl}">
//         </div>
//         <div class="price-package">
//           <h5 class="price-headline">${content.pricing[index].packages[x].name}</h5>
//           <p class="price-package-detail">&rarr; ${content.pricing[index].packages[x].details.join("<br>&rarr; ")}</p>
//           <p class="price-package-extra">${content.pricing[index].packages[x].extra}</p>
//           <h5>&mdash; ${content.pricing[index].packages[x].price} &mdash;<br><span class="steuer">inkl. MwSt.</span></h5>
//         </div>
//       </div>`;
//   }
//
//   shootings += `
//   <div class="collapse" id="id-${content.pricing[index].id}">
//     <div class="row justify-content-center">
//       <div class="col-10">
//         <h3>${content.pricing[index].title}</h3>
//         <p class="price-description">${content.pricing[index].description}</p>
//       </div>
//     </div>
//     <div class="row justify-content-center">
//       ${packages}
//     </div>
//   </div>
//   `;
//
//   shootings = shootings.replace("[object Object]", "");
//
//   buttons += `
//     <button class="btn btn-outline-dark btn-sm custom-button btn-price" type="button" data-toggle="collapse" data-target="#id-${content.pricing[index].id}" aria-expanded="true" aria-controls="id-${content.pricing[index].id}">${content.pricing[index].title}</button>
//   `;
// });
//
// let pricing = `
//   <div class="container">
//     <div class="row justify-content-center">
//       ${samples}
//     </div>
//     <div class="row justify-content-center">
//       ${buttons}
//     </div>
//     <div class="row sub-section-padding">
//       ${shootings}
//     </div>
//   </div>
// `;
//
// $('#pricing').append(pricing);
// $('#id-0').addClass('show');
//
// $(document).ready(function(){
//   $('.collapse').on('show.bs.collapse', function () {
//     $('.collapse.show').each(function(){
//         $(this).collapse('hide');
//     });
//   });
// });

// faq

// let faqItems = '';
//
// for(var i = 0; i < content.faq.length; i++){
//   faqItems += `
//   <div class="faq-box">
//     <div class="row v-align-middle">
//       <div class="col-md">
//         <img src="${content.faq[i].imageUrl}">
//       </div>
//       <div class="col-md">
//         <h4 class="faq-head">${content.faq[i].title}</h4>
//         <p class="faq-text">${content.faq[i].text}</p>
//       </div>
//     </div>
//   </div>
// `
// }
//
// let faq = `
//   <div class="container">
//       ${faqItems}
//   </div>
// `;
//
// $('#faq').append(faq);

// contact

// let contact = `
// <div class="container">
//   <div class="row justify-content-center">
//     <div class="col-md-8 col-lg-6">
//       <div class="contact-box">
//         <h3>Lass uns kennenlernen!</h3>
//         <p class="contact-text">${content.contactData.text}</p>
//       </div>
//       <div class="contact-box">
//         <p class="contact-text">${content.contactData.email}</p>
//         <p class="contact-text">${content.contactData.mobile}</p>
//         <p class="contact-text">${content.contactData.address.street} <br/> ${content.contactData.address.city}</p>
//       </div>
//     </div>
//   </div>
//   <div class="row justify-content-center">
//     <div class="col-md">
//       <div class="contact-box">
//         <h2 class="contact-icon"><i class="fas fa-mobile"></i></h2>
//         <h6>Ruf mich an</h6>
//         <p class="contact-text"><b>Tel:</b> ${content.contactData.mobile}</p>
//       </div>
//     </div>
//     <div class="col-md">
//       <div class="contact-box">
//         <h2 class="contact-icon"><i class="fas fa-envelope"></i></h2>
//         <h6>Schreibe mir</h6>
//         <p class="contact-text"><b>Email:</b> ${content.contactData.email}</p>
//       </div>
//     </div>
//     <div class="col-md">
//       <div class="contact-box">
//         <h2 class="contact-icon"><i class="fas fa-map-marked-alt"></i></h2>
//         <h6>Komm vorbei</h6>
//         <p class="contact-text">${content.contactData.address.street}</p>
//         <p class="contact-text">${content.contactData.address.city}</p>
//       </div>
//     </div>
//   </div>
// </div>
// `;
//
// $('#contact').append(contact);

// // footer
//
// var date = new Date().getFullYear();
// var copyRights = `
//   <div class="container">
//     <div class="text-center">
//       <p class="footer-text">&copy;2015-${date} Marta Wilk Photography | Website - <a href="https://admlkswcz.bitballoon.com" target="_blank">Adam Lukasiewicz</a> | All rights reserved.</p>
//     </div>
//   </div>
// `;
//
// $('body').append(copyRights);

// images responsive

// $('img').addClass('img-fluid');

// // parallax effect
//
// function isInViewport(node) {
//   var rect = node.getBoundingClientRect()
//   return (
//     (rect.height > 0 || rect.width > 0) &&
//     rect.bottom >= 0 &&
//     rect.right >= 0 &&
//     rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.left <= (window.innerWidth || document.documentElement.clientWidth)
//   )
// }
//
// $(window).scroll(function() {
//   var scrolled = $(window).scrollTop()
//   $('.parallax').each(function(index, element) {
//     var initY = $(this).offset().top
//     var height = $(this).height()
//     var endY  = initY + $(this).height()
//
//     // Check if the element is in the viewport.
//     var visible = isInViewport(this)
//     if(visible) {
//       var diff = scrolled - initY
//       var ratio = Math.round((diff / height) * 100)
//       $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
//     }
//   })
// })
//
// $(function() {
//
//             // init Masonry
//         var $grid = $('.grid').masonry({
//         itemSelector: '.grid-item',
//         percentPosition: true,
//         columnWidth: '.grid-sizer'
//         });
//         // layout Isotope after each image loads
//         $grid.imagesLoaded().progress( function() {
//         $grid.masonry();
//         });
//
//
//         // change size of item by toggling gigante class
//         $grid.on( 'click', '.grid-item', function() {
//           $(this).toggleClass('gigante');
//           // trigger layout after item size changes
//           $grid.masonry('layout');
//         });
//
//
//           // imagesLoaded( grid, function() {
//             // layout Masonry after each image loads
//           //  msnry.layout();
//          // });
//         });
//
//   //image error? -> remove it and the parent-div
//   $("img").on("error", function() {
//       $(this).parent().remove();
//     }
//   );