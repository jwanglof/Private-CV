function hideEverything() {
	//$("#divWhoami").hide();	
}

$(document).ready(function() {
//	$('.dropdown-toggle').dropdown();

	hideEverything();

	$("#linkWhoami").click(function() {
		$("#divWhoami").show("fast");
		return false;
	});
});