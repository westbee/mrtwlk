$(document).ready(function() {
	var a1 = "<div class='intro-body'>\
            <div class='container'>\
                <div class='row'>\
                    <div class='col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3' >\
                        <img src='moments.png' class='img-responsive' />\
					</div>\
                </div>\
            </div>\
        </div>\
		";
	var a2 = "<nav class='navbar navbar-custom navbar-fixed-top' role='navigation'>\
			<div class='container'>\
					<div class='navbar-header'>\
						<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-main-collapse'>\
							<span class='sr-only'>Toggle navigation</span>\
              <span class='icon-bar'></span>\
              <span class='icon-bar'></span>\
              <span class='icon-bar'></span>\
						</button>\
						<div class='row'>\
							<div class='col-xs-5 col-md-10'>\
								<a class='navbar-brand' href='#'><img src='moments1.png' class='img-responsive'></a>\
							</div>\
						</div>\
					</div>\
					<div class='collapse navbar-collapse navbar-right navbar-main-collapse'>\
						<ul class='nav navbar-nav'>\
								<li class='hidden'><a href='#page-top'></a></li>\
								<li><a href='#' data-toggle='modal' data-target='#modalAbout'>About</a></li>\
								<li><a href='#' data-toggle='modal' data-target='#modalKontakt'>Kontakt</a></li>\
								<li><p>|</p></li>\
								<li><a href='http://martawilkphotography.com/'>Mrtwlk</a></li>\
						</ul>\
					</div>\
			</div>\
		</nav>\
	";
	
	var intro = [
		{
			name: "first-pic",
			pic: "1"
		},
		{
			name: "second-pic",
			pic: "2"
		},
		{
			name: "third-pic",
			pic: "3"
		},
		{
			name: "fourth-pic",
			pic: "4"
		},
		{
			name: "fifth-pic",
			pic: "5"
		},
		{
			name: "sixth-pic",
			pic: "6"
		}
	];
	
	var a3 = "\
		<div class='container-fluid'>\
			<div id='welcome' class='row bg'>\
			</div>\
		</div>\
	";

	var a4 = "\
		<div id='about-bl' class='bg'></div>\
		<div id='about' class='bg bg-about'></div>\
	";

	var a5 = "<div id='photos-bl' class='bg'></div>\
			  <div id='photos' class='bg bg-photos'></div>\
	";

	var a6 = "<div id='kontakt-bl' class='bg'></div>\
		<div id='kontakt' class='bg bg-kontakt'></div>\
	";

	$('.intro').append(a1).hide().fadeIn(2000).fadeOut(2000, function(){
		
		$('#nav').prepend(a2).hide().fadeIn(500);

		$('main').append(a3, a4, a5, a6).hide().fadeIn(500, function (){

			if ($(window).width() < 768) {

		   		$('div#welcome').addClass('small-intro').hide().fadeIn(1000);
								
			} else if ($(window).width() < 991) {

				$('div#welcome').addClass('medium-intro').hide().fadeIn(1000);

			} else {
				
				$('div').remove("#about, #photos, #kontakt");
							
				for(var i = 0; i < intro.length; ++i ) {
				  $('div#welcome').append("\
					<div id='"+ intro[i].name +"' class='col-20'>\
					</div>\
				  ");
				  
				  var kolumna = $('div#'+intro[i].name+'');
				  var zdj = intro[i].pic;
				  var sz = kolumna.width();
				  
				  kolumna.css("background-image", "url(img/wyb/"+zdj+".jpg)").hide().fadeIn(1000);
				  kolumna.css("left", ""+i*sz+"px");
				  
					  kolumna.on({
						mouseenter: function(){
							$('.col-20').addClass('col-15');
							$(this).addClass('active');
						}, mouseleave: function() {
							$('.col-20').removeClass('col-15');
							$('.col-20').addClass('col-after');
							$(this).removeClass('active');
						}
					
					  });
					  
					  
				  
				  //$(document).scroll(function() {
					//  if ($(document).scrollTop() > 0) {
					//	$('div#welcome').children().addClass('posfix').off('mouseenter');
					//	$('.col-20').removeClass('col-after');
				//	  } else {
					//	$('div#welcome').children().removeClass('posfix').on({
					//	mouseenter: function(){
				//			$('.col-20').addClass('col-15');
				//			$(this).addClass('active');
				//		}, mouseleave: function() {
				//			$('.col-20').removeClass('col-15');
				//			$('.col-20').addClass('col-after');
				//			$(this).removeClass('active');
				//		}
					
				//	  }); 
						
					 // }
					//});
				  
				};
			}


			$(window).on('scroll', function () {
			    
				var pixs = $(document).scrollTop();
				var bris = $(document).scrollTop();
				var bb = $("div#welcome").offset().top;
				var cc = $("div#about-bl").offset().top;
				var dd = $("div#about").offset().top;
				var ee = $("div#photos-bl").offset().top;
				var ff = $("div#photos").offset().top;
				var gg = $("div#kontakt-bl").offset().top;
				var hh = $("div#kontakt").offset().top;
				var ii = $(window).height();
				
				if ($("div#about-bl").offset().top - $(window).scrollTop() > 0) {
					
					pixs = 5*(pixs-bb)/(cc-bb);
					bris = 1-((bris-bb)/(2*(cc-bb)));
					$("div#welcome, div#about-bl").css({"-webkit-filter": "brightness("+bris+")","filter": "brightness("+bris+")" });  
					$('main').css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });
				
				} else if ($("div#about").offset().top - $(window).scrollTop() > 0) {
				
					pixs = 5*(1-((pixs-cc)/(dd-cc)));
					bris = 0.5*(((bris-cc)/(dd-cc))+1);
					$("div.bg-about, div#about").css({"-webkit-filter": "brightness("+bris+")","filter": "brightness("+bris+")" });  
					$('main').css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });
				
				} else if ($("div#photos-bl").offset().top - $(window).scrollTop() > 0) {
				
					pixs = 5*(pixs-dd)/(ee-dd);
					bris = 1-((bris-dd)/(2*(ee-dd)));
					$("div#about, div#photos-bl").css({"-webkit-filter": "brightness("+bris+")","filter": "brightness("+bris+")" });  
					$('main').css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });
				
				} else if ($("div#photos").offset().top - $(window).scrollTop() > 0) {
				
					pixs = 5*(1-((pixs-ee)/(ff-ee)));
					bris = 0.5*(((bris-ee)/(ff-ee))+1);
					$("div.bg-photos, div#photos").css({"-webkit-filter": "brightness("+bris+")","filter": "brightness("+bris+")" });  
					$('main').css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });
				
				} else if ($("div#kontakt-bl").offset().top - $(window).scrollTop() > 0) {
					
					pixs = 5*(pixs-ff)/(gg-ff);
					bris = 1-((bris-ff)/(2*(gg-ff)));
					$("div.bg-photos, div#kontakt-bl").css({"-webkit-filter": "brightness("+bris+")","filter": "brightness("+bris+")" });  
					$('main').css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });
				
				} else if ($("div#kontakt").offset().top - $(window).scrollTop() > 0) {
				
					pixs = 5*(1-((pixs-gg)/(hh-gg)));
					bris = 0.5*(((bris-gg)/(hh-gg))+1);
					$("div.bg-kontakt, div#kontakt").css({"-webkit-filter": "brightness("+bris+")","filter": "brightness("+bris+")" });  
					$('main').css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });
				
				}
				
				if ($('div#about-bl').offset().top-$(window).scrollTop() < 0) {
					$('div#about-bl').removeClass('small-intro').addClass('bg-about');
				} else {
					$('div#about-bl').removeClass('bg-about').addClass('small-intro');
				}
					
				if ($('div#photos-bl').offset().top-$(window).scrollTop() < 0) {
					$('div#photos-bl').removeClass('bg-about').addClass('bg-photos');
				} else {
					$('div#photos-bl').removeClass('bg-photos').addClass('bg-about');
				}
					
				if ($('div#kontakt-bl').offset().top-$(window).scrollTop() < 0) {
					$('div#kontakt-bl').removeClass('bg-photos').addClass('bg-kontakt');
				} else {
					$('div#kontakt-bl').removeClass('bg-kontakt').addClass('bg-photos');
				}
			
			});

			// $(window).scroll(function() {
			// 	if ($(document).scrollTop() > 50) {
			//       $('div#welcome').addClass("test");
			//     } else {
			//       $('div#welcome').removeClass("test");
			//     }
			//   });



		});
	});
});


