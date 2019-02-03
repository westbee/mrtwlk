$(document).ready(function() {

	$(window).on('resize',function(){location.reload();}); //refreshing while resize

	var a2 = "<nav class='navbar navbar-custom navbar-fixed-top' role='navigation'>\
			<div class='container-fluid w-padding'>\
					<div class='navbar-header'>\
						<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-main-collapse'>\
							<span class='sr-only'>Toggle navigation</span>\
              <span class='icon-bar'></span>\
              <span class='icon-bar'></span>\
              <span class='icon-bar'></span>\
						</button>\
						<div class='row'>\
							<div class='col-xs-9 col-md-10'>\
								<a class='navbar-brand' href='/'><img src='moments1.png' class='img-responsive'></a>\
							</div>\
						</div>\
					</div>\
					<div class='collapse navbar-collapse navbar-right navbar-main-collapse'>\
						<ul class='nav navbar-nav'>\
								<li class='hidden'><a href='#page-top'></a></li>\
								<li><a href='../fashion'>fashion</a></li>\
								<li><a href='../portrait'>portrait</a></li>\
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
		}
	];
	
	var a3 = "\
		<div class='container-fluid'>\
			<div id='welcome' class='row'>\
			</div>\
		</div>\
	";
	
		
		

		if ($(window).width() < 768) {

		 //   	$('main').prepend(bg,a4,a5,a6).hide().fadeIn(1000);
			// $('#nav').prepend(a2).hide().fadeIn(500);
			// for(var i = 0; i < intro.length; ++i ) {
			// 	$('div#photo-preview').append("\
			// 			<div class='col-xs-6 col-sm-4 center-block'>\
			// 				<div id='"+ intro[i].name +"'>\
			// 					<img src='img/"+ intro[i].pic +".jpg' class='img-responsive' />\
			// 				</div>\
			// 			</div>\
			// 	  ");
				  
					
			// };
											
		} else {
				
			$('main').append(a3).hide().fadeIn(500, function (){
				
				for(var i = 0; i < intro.length; ++i ) {

					$('div#welcome').append("\
						<div id='"+ intro[i].name +"' class='col-20'>\
						</div>\
					  ");
					  
					var kolumna = $('div#'+intro[i].name+'');
					var zdj = intro[i].pic;
					var sz = kolumna.width();
					  
					kolumna.css("background-image", "url(img/"+zdj+".jpg)").hide().fadeIn(1000);
					kolumna.css("left", ""+i*sz+"px");
					  
						kolumna.on({
							click: function(){
								$('.col-20').addClass('col-15');
								$(this).addClass('active');
							}, mouseleave: function() {
								$('.col-20').removeClass('col-15');
								$('.col-20').addClass('col-after');
								$(this).removeClass('active');
							}
						
						});
				};

				$('#nav').prepend(a2).hide().fadeIn(500);

			});
		}
});


