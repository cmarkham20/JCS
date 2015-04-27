$('#home').on('pageinit', function() {
	$("#link-ultra-family").click(function() {
		$("#nav-ultra-family").slideToggle();
	});
});

$(document).on('pagebeforeshow', "#home", function (event, data) {
    $("#nav-ultra-family").hide();	
});