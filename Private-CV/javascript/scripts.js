$(document).ready(function() {
//	$('.dropdown-toggle').dropdown();

	hideEverything();
	$("#divHome").show("fast");

	$("#linkHome").click(function() {
		hideEverything();
		$("#divHome").show("fast");
		return false;
	});

	$("#linkWhoami").click(function() {
		hideEverything();
		$("#divWhoami").show("fast");
		return false;
	});

	$("#linkWhathaveideveloped").click(function() {
		hideEverything();
		$("#divWhathaveideveloped").show("fast");
		return false;
	});

	$("#linkWorkexperience").click(function() {
		hideEverything();
		$("#divWorkexperience").show("fast");
		return false;
	});
});

function hideEverything() {
	$("#divHome").hide();
	$("#divWhoami").hide();
	$("#divWhathaveideveloped").hide();
	$("#divWorkexperience").hide();
}