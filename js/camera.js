// navbar

$('nav').addClass("navbar navbar-custom navbar-static-top").attr("role", "navigation");

var headMenu = '\
  <div class="container">\
    <div class="navbar-header">\
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">\
        <span class="sr-only">Toggle navigation</span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
      </button>\
    </div>\
    <img src="img/logo_big.jpg" class="logo-nav img-responsive">\
    <div class="row">\
      <div class="col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8">\
        <div class="nav">\
          <!-- Collect the nav links, forms, and other content for toggling -->\
          <div class="collapse navbar-collapse navbar-main-collapse">\
            <hr class="no-margin">\
            <ul class="nav nav-pills nav-justified">\
              <!-- Hidden li included to remove active class from about link when scrolled up past about section -->\
              <li class="hidden">\
                <a href="#page-top"></a>\
              </li>\
              <li><a href="/">Home</a></li>\
              <li><a href="gallery.html">Galerie</a></li>\
              <li><a href="about.html">über mich</a></li>\
              <li><a href="faq.html">Info</a></li>\
              <li><a href="contact.html">Kontakt</a></li> \
            </ul>\
            <hr class="no-margin">\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>\
 ';

$('nav').append(headMenu);

var category = [
  {
    name: "Neugeborene & Babybauch",
    title: "&minus; die schönste Zeit im Leben einer Frau &minus;",
    pic: "img/newborn/medium/39.jpg",
    link: "neugeborene-babybauch.html"
  },
  {
    name: "Kinder & Familien",
  	title: "&minus; einzigartige Andenken für viele Jahre &minus;",
    pic: "img/kinder/medium/6.jpg",
	  link: "kinder-familien.html"
  },
  {
    name: "Porträtfotografie",
    title: "&minus; eine kurze Geschichte über Dich &minus;",
    pic: "img/top/top 6.jpg",
    link: "portraitphotographie.html"
  }
];

for(var i = 0; i < category.length; ++i ) {
  $('div#category').append("\
    <div class='col-xs-10 col-xs-offset-1 col-sm-6 col-md-4 col-sm-offset-0'>\
      <a href='" + category[i].link + "' class='small-break no-deco'>\
        <img src='"+ category[i].pic +"' class='img-responsive'>\
        <h5 class='small-break'>" + category[i].name + "</h5>\
        <p class='text-center'>" + category[i].title + "</p>\
      </a>\
    </div>\
  ");
};


$('section#socialmedia').append("\
  <div class='container-fluid'>\
      <div class='row'>\
        <div class='col-sm-10 col-sm-offset-1'>\
          <hr class='small-margin'>\
          <div class='row'>\
            <div class='col-sm-6 center-algn'>\
              <div class='socialmedia-icon'>\
                <ul class='soc'>\
                    <li><a class='soc-mail' href='mailto:marta.wilk.photo@gmail.com'><img src='img/mail2.png' class='socico img-responsive'></a></li>\
                    <li><a class='soc-facebook' href='https://www.facebook.com/martawilkphotography' target='_blank'><img src='img/facebook-48.png' class='socico img-responsive'></a></li>\
                    <li><a class='soc-instagram soc-icon-last' href='https://instagram.com/marta_wilk_photography/' target='_blank'><img src='img/instagram-48.png' class='socico img-responsive'></a></li>\
                </ul>\
              </div>\
            </div>\
            <div class='col-sm-6 vertalg'>\
              <div class='short-title'>\
                <h6><strong>Fotografin | Marta Wilk | Berlin</strong></h6>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>\
");


for (i = 46; i > 0; i--) {
   $('div#baby-gallery').append("\
    <div class='grid-item'>\
      <img src='img/newborn/medium/"+ i +".jpg' class='img-responsive'>\
    </div>\
  ");
}

for (i = 58; i > 0; i--) {
   $('div#kinder-gallery').append("\
    <div class='grid-item'>\
      <img src='img/kinder/medium/"+ i +".jpg' class='img-responsive'>\
    </div>\
  ");
}

for (i = 44; i > 0; i--) {
   $('div#portrait-gallery').append("\
    <div class='grid-item'>\
      <img src='img/portrait/medium/"+ i +".jpg' class='img-responsive'>\
    </div>\
  ");
}

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
document.addEventListener("DOMContentLoaded", function(event) {
   document.querySelectorAll('img').forEach(function(img){
    img.onerror = function(){this.style.display='none';};
   })
});

// footer section
  
  var date = new Date().getFullYear();
  var copyRights = "\
    <div class='container'>\
      <div class='text-center'>\
        <p>&copy;2015-"+date+" Marta Wilk Photography | Website - <a href='https://admlkswcz.bitballoon.com' target='_blank'>Adam Lukasiewicz</a> | All rights reserved.</p>\
      </div>\
    </div>";

  $('footer').append(copyRights);