/**
*
*author: Tamires D Boniolo
*
*/

/*
*JQuery selector object that get three input values
*if all the inputs are true will calculate the future value
*of the given inputs when clicked on the botton.
*If the inputs are false will show an alert to the user correct it.
*/

var calculateClick = function () {
	
	// Get the user entries from the first three text boxes.
	 var investment = parseFloat( $("#investment").val() );
	 var annualRate = parseFloat( $("#rate").val() );
	 var years = parseInt( $("#years").val() );
	 var futureValue = investment;
	 
	 // Test the three input values for validity.
	 if (isNaN(investment) || investment <= 0) {
			alert("Investment must be a valid number greater than zero.");
	}
	else if(isNaN(annualRate) || annualRate <= 0) {
			alert("Annual rate must be a valid number greater than zero.");
		}
	else if(isNaN(years) || years <= 0) {
			alert("Years must be a valid number\nand greater than zero.");
		}
	 
	 // if all entries are valid, calulate future value
	else {
		
		 for ( i = 1; i <= years; i++ ) 
		 {
			 // Set the value of the fourth text box to the future value
			futureValue += ((futureValue * annualRate) / 100);
		 }
			$("#future_value").val(futureValue.toFixed());
		}
	// set focus back to investment input
	$("#investment").focus();
}

//"calculate" botton when click makes the calculation
$(document).ready(function () {
	$("#calculate" ).click(calculateClick);	
});
		 

/**
Validation logic testing:

1. I left all the fields empty and clicked "Calculate". Expected: show an alert. Result confirmed.

2.I entered each time on all the fields 0 and negative numbers. Expected: show an alert "Must be a valid number greater than zero". Result confirmed. 

3."Investment Amount" and "Annual Interest Rate" accept floats numbers but needs to be with a dot and not a comma or wont work(example: 2.6)."Numbers of Years" wont work with float numbers. But all of them wont show an any alert, the only thing that happens is that the botton "calculate" wont work.

4.I entered letters each time separately and on all the fields. Expected: show an alert. Result confirmed! It shows the first field alert when it is on all fields "Investment must be a valid number greater than zero" and the other alerts to the others fields. 

5. I entered just a space on all the fields and clicked "Calculate". Expected: show an alert. Result confirmed! 

6.I entered a symbol (@,$,&,#) in each field and clicked "Calculate". Expected: show an alert. Result confirmed! 

*/