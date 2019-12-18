

/*Add focus to #name after initial page load*/

$("#name").focus();

/*Include a text field that will initially be hidden, but will be revealed if 'Other' is selected from the 'Job Role' select menu*/

$( function () {

  $("#other-title").css('display', 'none'); //Initially hide text box

	  $("#title").change( function () {		//Change method listens for a change in the select elements value

		   if ($("#title").val() == 'other') {

		     $("#other-title").css('display', 'block');

		   }

		    else if ($("#title").val() != 'other') {

		     $("#other-title").css('display', 'none');
		     
		   }

	   });

});

// /*T-Shirt Info Section - hide the color options until a choice is made, and then */

$("#design option:first").attr("hidden", true); 						//Hide first design theme select option

$("#color option:first").text("Please select a t-shirt theme"); 		//Initialise t-shirt color select menu so you have to chose a design theme

$("#color").attr("disabled", true); 									//Disable t-shirt color select menu until a design theme is selected

$("#design").change( function (event) {									//Event listener to activate t-shirt color select menu - NEEDS FURTHER WORK ON SELECT MENU

	$("#color").attr("disabled", false);
	$("#color option:eq(0)").html("<p>Cornflower Blue (JS Puns shirt only)</p>");
	$("#color option:first").text("Please select a t-shirt color"); 
	
if ($(event.target).val() === "js puns") {
	
	$("#color option:first").html("<p>Cornflower Blue (JS Puns shirt only)</p>");
	$("#color option:eq(0)").show();
	$("#color option:eq(1)").show();
	$("#color option:eq(2)").show();
	$("#color option:eq(3)").hide();
	$("#color option:eq(4)").hide();
	$("#color option:eq(5)").hide();

}

else if ($(event.target).val() === "heart js") {

	$("#color option:first").html("<p>Tomato (I &#9829; JS shirt only)</p>");
	$("#color option:eq(0)").hide();
	$("#color option:eq(1)").hide();
	$("#color option:eq(2)").hide();
	$("#color option:eq(3)").show();
	$("#color option:eq(4)").show();
	$("#color option:eq(5)").show();
}

});


/*Conditionals for conflicting activies and cost tracking*/

let cost = 0; 

$('input[name="all"]').click(function(){
        
        if($(this).prop("checked") == true){
                cost = cost + 200; 
            }
        else if($(this).prop("checked") == false){
                cost = cost - 200;
            }
        });

$('input[name="js-frameworks"]').click(function(){
        
        if($(this).prop("checked") == true){
                $('input[name="express"]').attr("disabled", true);
                cost = cost + 100; 
            }
        else if($(this).prop("checked") == false){
                $('input[name="express"]').attr("disabled", false);
                cost = cost - 100;
            }
        });

 $('input[name="express"]').click(function(){

        if($(this).prop("checked") == true){
                $('input[name="js-frameworks"]').attr("disabled", true);
                cost = cost + 100; 
            }
        else if($(this).prop("checked") == false){
                $('input[name="js-frameworks"]').attr("disabled", false);
                cost = cost - 100;
            }
        });

$('input[name="js-libs"]').click(function(){
        
        if($(this).prop("checked") == true){
                $('input[name="node"]').attr("disabled", true);
                cost = cost + 100; 
            }
        else if($(this).prop("checked") == false){
                $('input[name="node"]').attr("disabled", false);
                cost = cost - 100;
            }
        });

$('input[name="node"]').click(function(){
        
        if($(this).prop("checked") == true){
                $('input[name="js-libs"]').attr("disabled", true);
                cost = cost + 100; 
            }
        else if($(this).prop("checked") == false){
                $('input[name="js-libs"]').attr("disabled", false);
                cost = cost - 100;
            }
        });

$('input[name="build-tools"]').click(function(){
        
        if($(this).prop("checked") == true){
                cost = cost + 100; 
            }
        else if($(this).prop("checked") == false){
                cost = cost - 100;
            }
        });

$('input[name="npm"]').click(function(){
        
        if($(this).prop("checked") == true){
                cost = cost + 100; 
            }
        else if($(this).prop("checked") == false){
                cost = cost - 100;
            }
        });



/*Append a 'cost' div to the end of the 'Register for Activities' list

Show or hide total depending on value of 'cost'*/

const $cost = $("<div></div>");
$(".activities").append($cost);


$(".activities").click(function () {

$($cost).html("<p>Total Cost: $" + cost + "</p>");

	if (cost === 0) {

		($cost).hide();
	}

	else {

		($cost).show();
	}

});
