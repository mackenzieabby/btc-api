	$(document).ready(function() { // Start of ready
		
		// Hides Content
		function hideContent() {
			$(".container").hide();
			$("html").css('background-image', 'none');
		}
		hideContent(); // Make Call

		// Fades in and Out Loader Text, then Fades In the main content
		function showAll(){
			var imageUrl = "http://www.nyest.hu/media/van-aki-nagyon-szereti-a-bitcoint.jpg?large"
			var fadeText =$("#filler_text");
			$("#loading_top").append('.').fadeIn(500, function(){
				$("#loading_top").append('.').fadeOut(700, function(){
					$("#loading_top").append('..').fadeIn(900);
				})
			})
			fadeText.html("The Load Is Worth The Wait....").fadeOut(2000, function(){
				fadeText.html("Loading API...").fadeIn(3000);
				fadeText.html("Loading API...").fadeOut(4000, function(){
					fadeText.html("API Ready").fadeIn(5000);
						fadeText.html("API Ready").fadeOut(5500, function(){
							$(".loading").hide();
							$(".container").show();
							$("html").css('background-image', 'url(' + imageUrl + ')');
						})
				})
			})

		}
		showAll(); // Make Call

		// Refreshes the data every 10 seconds.

		setInterval(showData,10000);


		// API GET as well as changing the html to the data
		function showData() {
			var results = $.ajax({
			url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
			type: 'GET',
			dataType: 'json',
		})
		.done(function(results) {
			console.log(results.bpi.USD.rate);
			$("h2").html(results.bpi.USD.rate + "\n" + "USD");
		});
		}
		showData(); // Calling the function

}); // End of ready
