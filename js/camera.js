import * as content from "./content.js";

import "./index.js";
import "./about.js";
import "./gallery.js";
import "./preise.js";
import "./contact.js";

// navigation

let navItems = '';

for(var i = 0; i < content.navItems.length; i++){
  navItems += `<a class="nav-item nav-link" href="${content.navItems[i].link}">${content.navItems[i].name}</a>`
}

let nav = `
  <nav class="nav nav-justified navbar navbar-expand-lg fixed-top">
    <img src="img/logo_big_black.png" class="navbar-brand">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span><img src="img/icon-nav.png" width="22px"></span>
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
    $(".navbar-brand").removeClass("navbar-brand__width-toggler")
  } else {
    $("nav").addClass("nav-bg-light");
    $(".navbar-brand").addClass("navbar-brand__width-toggler");
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
  //   layout Masonry after each image loads
  //   msnry.layout();
  // });
});

//image error? -> remove it and the parent-div
$("img").on("error", function() {
    $(this).parent().remove();
  }
);