'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function Bounce (element) {
	$(element).animate({
		width:420
	}, 100);
	$(element).animate({
		width:400
	}, 200);
};



function initializePage() {

	//Initial Shake 
	setInterval((function(){
		$( "#testjs" ).effect({
		  	effect:"shake", 
		  	direction:"up",
		  	distance:2,
		  	times:2
		});
	}),4000);


	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
			$("#testjs").hide();
			$('.jumbotron').toggleClass("active");
			$('.jumbotron p').toggleClass("active");
			$('.jumbotron').append("<img src='images/good_job.jpg' alt='Lorem Pixel image' class='jumba_img'>");
			$('.jumbotron').append("<h1>Good job</h1>");
			Bounce(".jumbotron img");
			
	});



	$(".project").click(function(e) {
		e.preventDefault();
		var containingProject = $(this).closest(".project");
	    var description = $(containingProject).find(".project-description");
	    if (description.length == 0) {
	       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	    } else {
	       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	   }
	});
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}