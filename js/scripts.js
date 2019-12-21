

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

/*T-Shirt Info Section - hide the 'Color' options div until a choice is made, and then only show available colors in that theme 

Some code is commented out as it is irrelevant with the exceeds code, which initially hides the 'Color' div

*/

$("#design option:first").attr("hidden", true); 						//Hide first design theme select option

//$("#color option:eq(0)").text("Please select a t-shirt theme"); 		//Initialise t-shirt color select menu so you have to chose a design theme

//$("#color").attr("disabled", true); 									//Disable t-shirt color select menu until a design theme is selected

/*EXCEEDS - Hide "Color" dropdown until "Design" option selected*/

$("#colors-js-puns").attr("hidden", true);

$("#design").change( function () {

if ( $("#design option[value = 'heart js']").attr("selected", true) ) {

	$("#colors-js-puns").attr("hidden", false);
	}

else if ($("#design option[value = 'js puns']").attr("selected", true) ) {

	$("#colors-js-puns").attr("hidden", false);
	}

else 	{
	$("#colors-js-puns").attr("hidden", true);
	}

});

/*Event listener to activate t-shirt color select menu

The options displayed in the 'Color' menu depend on the 'Design' theme picked

*/

$("#design").change( function (event) {							

	//$("#color").attr("disabled", false);								//Enables t-shirt color menu on click event


if ($(event.target).val() === "js puns") {
	
	$("#color option:eq(0)").html("<p>Cornflower Blue (JS Puns shirt only)</p>");      //Overwrite :eq(0) with t-shirt rather than placeholder text
	$("#color option:eq(0)").attr("selected", true);								   //Use 'selected' attributes to get correct t-shirts in placeholder for select menu
	$("#color option:eq(3)").attr("selected", false);
	$("#color option:eq(0)").show();
	$("#color option:eq(1)").show();
	$("#color option:eq(2)").show();
	$("#color option:eq(3)").hide();
	$("#color option:eq(4)").hide();
	$("#color option:eq(5)").hide();

}

else if ($(event.target).val() === "heart js") {

	$("#color option:eq(3)").attr("selected", true);
	$("#color option:eq(0)").attr("selected", false);
	$("#color option:eq(0)").hide();
	$("#color option:eq(1)").hide();
	$("#color option:eq(2)").hide();
	$("#color option:eq(3)").show();
	$("#color option:eq(4)").show();
	$("#color option:eq(5)").show();
}

});


/*Conditionals for conflicting activies and cost tracking

A 'cost' variable is used to store any accumulated activity costs

If conflicting activities are chosen, unavailable checkboxes are disabled and the related label faded out using a CSS class

*/

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
           		$('input[name="express"]').parent().addClass("clash");
                cost = cost + 100; 
            }
        else if($(this).prop("checked") == false){
                $('input[name="express"]').attr("disabled", false);
                $('input[name="express"]').parent().removeClass("clash");
                cost = cost - 100;
            }
        });

 $('input[name="express"]').click(function(){

        if($(this).prop("checked") == true){
                $('input[name="js-frameworks"]').attr("disabled", true);
                $('input[name="js-frameworks"]').parent().addClass("clash");
                cost = cost + 100; 
            }
        else if($(this).prop("checked") == false){
                $('input[name="js-frameworks"]').attr("disabled", false);
                $('input[name="js-frameworks"]').parent().removeClass("clash");
                cost = cost - 100;
            }
        });

$('input[name="js-libs"]').click(function(){
        
        if($(this).prop("checked") == true){
                $('input[name="node"]').attr("disabled", true);
                $('input[name="node"]').parent().addClass("clash");
                cost = cost + 100; 
            }
        else if($(this).prop("checked") == false){
                $('input[name="node"]').attr("disabled", false);
                $('input[name="node"]').parent().removeClass("clash");
                cost = cost - 100;
            }
        });

$('input[name="node"]').click(function(){
        
        if($(this).prop("checked") == true){
                $('input[name="js-libs"]').attr("disabled", true);
                $('input[name="js-libs"]').parent().addClass("clash");
                cost = cost + 100; 
            }
        else if($(this).prop("checked") == false){
                $('input[name="js-libs"]').attr("disabled", false);
                $('input[name="js-libs"]').parent().removeClass("clash");
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



/*Append a div to the end of the 'Register for Activities' list

Show or hide div depending on value of 'cost' variable*/

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

/*Page initialisation and event handler for payment options

Unclear from brief if they wanted first option hidden or removed, so have both with one commented out.

*/

//$("#payment option:first").attr("hidden", true);	//Disable 'Select Payment Method' in drop down menu

$("#payment option:first").remove();				//Remove 'Select Payment Method' in drop down menu

$(".paypal").hide();								//Hide PayPal and Bitcoin on initial page load
$(".bitcoin").hide();

$("#payment").change( function (event) {			//Event handler for payment select menu

if ($(event.target).val() === "select method"||$(event.target).val() === "credit card") {

$(".credit-card").show();
$(".paypal").hide();
$(".bitcoin").hide();

}

if ($(event.target).val() === "paypal") {

$(".credit-card").hide();
$(".paypal").show();
$(".bitcoin").hide();

}

if ($(event.target).val() === "bitcoin") {

$(".credit-card").hide();
$(".paypal").hide();
$(".bitcoin").show();

}

});


/*
Alert divs for errors

'alert' class removes some top margin using CSS to move alerts closer to related input field

*/

const $nameAlert = $("<div class = 'alert'></div>");
$($nameAlert).html("<strong><p class = 'alert' style = 'color:red'>Please enter a valid name!</p></strong>");
$("#name").after($nameAlert);
$($nameAlert).hide();

const $mailAlert = $("<div class = 'alert'></div>");
$($mailAlert).html("<strong><p class = 'alert' style = 'color:red'>Please enter a valid email address: name@domainName.domain!</p></strong>");
$("#mail").after($mailAlert);
$($mailAlert).hide();

const $checkAlert = $("<div class = 'alert'></div>");
$($checkAlert).html("<strong><p class = 'alert' style = 'color:red'>Please select at least one activity!</p></strong>");
$(".activities").after($checkAlert);
$($checkAlert).hide();

const $cardNumberAlert = $("<div class = 'alert'></div>");
$($cardNumberAlert).html("<strong><p class = 'alert' style = 'color:red'>Invalid credit card number!</p></strong>");
$("#cc-num").after($cardNumberAlert);
$($cardNumberAlert).hide();

const $cardNumberAlert2 = $("<div class = 'alert'></div>");
$($cardNumberAlert2).html("<strong><p class = 'alert' style = 'color:red'>Empty credit card number!</p></strong>");
$("#cc-num").after($cardNumberAlert2);
$($cardNumberAlert2).hide();

const $zipCodeAlert = $("<div class = 'alert'></div>");
$($zipCodeAlert).html("<strong><p class = 'alert' style = 'color:red'>Invalid zip code!</p></strong>");
$("#zip").after($zipCodeAlert);
$($zipCodeAlert).hide();

const $cvvAlert = $("<div class = 'alert'></div>");
$($cvvAlert).html("<strong><p class = 'alert' style = 'color:red'>Invalid CVV!</p></strong>");
$("#cvv").after($cvvAlert);
$($cvvAlert).hide();

/*
Validators
*/

/*Name validator*/

$('#name').focusout('input', function() {

	const input = $(this);
	const is_name = input.val();
	
	if(is_name)
		{input.removeClass("invalid")
		$($nameAlert).hide();
		}

	else
		{input.addClass("invalid");
		$($nameAlert).show();
		}
});


/*Email has real time validation

Regex expression for simple emails: /^[^@]+@[^@.]+\.[a-z]+$/i;

Other more complex regex's available from: https://emailregex.com/

*/

$('#mail').on('input', function() {

	const input = $(this);
	const regex = /^[^@]+@[^@.]+\.[a-z]+$/i;
	const is_email = regex.test(input.val());

	if (is_email)
		{input.removeClass("invalid");
		$($mailAlert).hide();
	}

	else
		{input.addClass("invalid");
		$($mailAlert).show();
	}
});

/*Credit card number has conditional validation

Error message depends on wether the field is empty or not the correct range of numbers (13 - 16)

*/

$('#cc-num').focusout('input', function() {

	const input = $(this);
	const regex = /^\d{13,16}$/;
	const is_ccNum = regex.test(input.val());

	if (is_ccNum)
		{input.removeClass("invalid");
		$($cardNumberAlert).hide();
		$($cardNumberAlert2).hide()
	}

	else if (input.val() === "") {

		input.addClass("invalid");
		$($cardNumberAlert2).show();
		$($cardNumberAlert).hide();
	}

	else
		{input.addClass("invalid");
		$($cardNumberAlert).show();
		$($cardNumberAlert2).hide();
	}
});

/*Zip code validator*/

$('#zip').focusout('input', function() {

	const input = $(this);
	const regex = /^\d{5}$/;
	const is_zip = regex.test(input.val());

	if (is_zip)
		{input.removeClass("invalid");
		$($zipCodeAlert).hide();
	}

	else
		{input.addClass("invalid");
		$($zipCodeAlert).show();
	}
});

/*CVV validator*/

$('#cvv').focusout('input', function() {

	const input = $(this);
	const regex = /^\d{3}$/;
	const is_cvv = regex.test(input.val());

	if (is_cvv)
		{input.removeClass("invalid");
		$($cvvAlert).hide();
	}

	else
		{input.addClass("invalid");
		$($cvvAlert).show();
	}
});		

/*Final Submission Check - Event Listener on register button

Will prevent form submission using prevent.default() if the relevant conditions aren't met

1) Name or mail field cannot have 'invalid' class
2) Mail field must have content (Note the name field will automatically switch to 'invalid if tabbed away from on page load')
3) Must be at least one activity selected
4) IF credit card selected as payment method, must have no 'invalid' class applied or empty fields
*/

$("button[type='submit']").click(function (event) {

if ($("#name").hasClass("invalid")
	||$("#mail").hasClass("invalid")
	)

	{event.preventDefault();
	}

if ($("#mail").val() === "")

	{
	event.preventDefault();
	$("#mail").addClass("invalid");
	$($mailAlert).show();
	}

if ($('.activities input:checked').length === 0)

	{event.preventDefault();
	$($checkAlert).show();	
	}

if ($("option[value = 'credit card']").is(":selected")) {

		if ($("#cc-num").hasClass("invalid")
			||$("#zip").hasClass("invalid")
			||$("#cvv").hasClass("invalid")
			)

			{event.preventDefault();
			}

		if ($("#cc-num").val() === "")

			{event.preventDefault();
			$($cardNumberAlert2).show();
			} 	

		if	($("#zip").val() === "") {

			event.preventDefault();
			$($zipCodeAlert).show();
			}

		if ($("#cvv").val() === "") {

			event.preventDefault();
			$($cvvAlert).show();
			}

	}

});


