

/*Add focus to #name after initial page load*/

$("#name").focus();

/*Include a text field that will initially be hidden, but will be revealed when 'Other' is selected from the 'Job Role' select menu*/

$( function () {

  $("#other-title").css('display', 'none'); //Initially hide text box

	  $("#title").change( function () {		//Change method listens for a change in the select elements

		   if ($("#title").val() == 'other') {

		     $("#other-title").css('display', 'block');

		   }

		    else if ($("#title").val() != 'other') {

		     $("#other-title").css('display', 'none');
		     
		   }

	   });

});

	

