
<!DOCTYPE HTML>

<html>

<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Div Wrap | Theme: circled</title>
		
		<link  href="../../../../fonts.googleapis.com/css@family=Kreon_3A300,400,700" rel="stylesheet" type="text/css" >
        
        <link href="selector/styles.css" rel="stylesheet" media="all" />
        <link href="selector/tipsy.css" rel="stylesheet" media="all" />
        
		<!--[if IE]>
			
			<style type="text/css">
			
				li.purchase a {
					padding-top: 5px;
					background-position: 0px -4px;
				}
				
				li.remove_frame a {
					padding-top: 5px;
					background-position: 0px -3px;
				}
				
				#theme_select {
					padding: 8px 8px;
				}
				
				#theme_list {
					margin-top: 2px;
				}
			
			</style>
			
		<![endif]--> 
		
		<style type="text/css">
		
				
		</style>
	        
        <script type="text/javascript" src="selector/jquery-1.4.2.min.js"></script>
        <script type="text/javascript" src="selector/jquery.tipsy.js"></script>
        
        <script type="text/javascript">
        
        var theme_list_open = false;
        
        $(document).ready(function () {
        
        	function fixHeight () {
        	
        	var headerHeight = $("#switcher").height();
        	        	
        	$("#iframe").attr("height", (($(window).height() - 10) - headerHeight) + 'px');
        	
        	}
        	
        	$(window).resize(function () {
               	
        		fixHeight();
        	
        	}).resize();
        	
        	$("#theme_select").click( function () {
        	
        		if (theme_list_open == true) {
        	
        		$(".center ul li ul").fadeOut('fast');
        		
        		theme_list_open = false;
        		
        		} else {
        		
        		$(".center ul li ul").show();         		
        		
        		theme_list_open = true;
        		
        		}
        		
        		return false;
        	
        	});
        	
        	$("#theme_list ul li a").click(function () {
        	
        	var theme_data = $(this).attr("rel").split(",");
        	        	
        	$("li.purchase a").attr("href", theme_data[1]);
        	$("li.remove_frame a").attr("href", theme_data[0]);
        	$("#iframe").attr("src", theme_data[0]);
        	
        	$("#theme_list a#theme_select").text($(this).text());
        	
        	$(".center ul li ul").hide();
        	
        	theme_list_open = false;
        	
        	return false;
        	
        	});
        
        });
        
        </script>
         
</head>

<body>

<script type='text/javascript'>
$(function() {

	$('.tip').tipsy({
		fade: true
	});

});
</script>

	<div id="switcher">
	
		<div class="center">
		
		<ul>
		
		<li id="logo"><a href="../../../../divwrap.com/default.htm"><img src="selector/divwrap-sm-rogan.png" alt="" /><span>DivWrap.com</span></a></li>
		
		<li id="theme_list"><a id="theme_select" href="#">Select A Theme...</a>
		
			<ul>
			
				<li><a href="#" rel="../../../../themes.divwrap.com/circled/,http_3A/themeforest.net/item/circled-portfolio-wordpress-theme/1608683@ref=divwrap">Circled</a></li><li><a href="#" rel="../../../../themes.divwrap.com/landed/,http_3A/themeforest.net/item/landed-a-sharp-wordpress-theme/2364023@ref=divwrap">Landed</a></li><li><a href="#" rel="../../../../themes.divwrap.com/ingredients/,http_3A/themeforest.net/item/ingredients-a-fresh-recipe-wordpress-theme/2447685@ref=divwrap">Ingredients</a></li>				
			</ul>
		
		</li>	
		
		<li class="remove_frame" rel="../../../../themes.divwrap.com/circled/default.htm"><a href="../../../../themes.divwrap.com/circled/default.htm" class="tip" title="Remove Bar"></a></li>	
		<li class="purchase" rel="../../../../themeforest.net/item/circled-portfolio-wordpress-theme/1608683@ref=divwrap"><a href="../../../../themeforest.net/item/circled-portfolio-wordpress-theme/1608683@ref=divwrap">Purchase</a></li>		
		
		</div>
		
		</ul>
	
	</div>
	
    <iframe id="iframe" src="../../../../themes.divwrap.com/circled/default.htm" frameborder="0" width="100%"></iframe>
    
</body>

</html>

