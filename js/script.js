$(document).ready(function(){
	
	//$('li ul ').offset({left:$('.navbar').offset().left+15});


	$('li.dropdown').click(function(){
		if($('li').hasClass('dropdown')){
			setTimeout(function(){

				if($('button.navbar-toggle').css('display') == 'block'){
					$('ul.dropdown-menu').css('left',0);
					$('div.rsp-submenu-holder').css('width',0);
				}else{
					$('li ul').offset({left: $('.navbar').offset().left+15} );
					$('li ul div').css('width',$('.navbar').width());
					$('li ul').css('text-align','center');
				}

				/*if($('div.navbar-collapse').attr('aria-expanded')){
					
				}else{
					
				}*/
				
			},10);
			
		}
	});

	/*$('button.navbar-toggle').click(function(){
		setTimeout(function(){
			if($('div.navbar-collapse').attr('aria-expanded')){
				$('ul.dropdown-menu').css('left',0);
				$('div.rsp-submenu-holder').css('width',0);
			}
		},100);
	});*/
});