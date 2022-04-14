$(document).ready(function(){
	$(".path-media .view-photos .views-field-title a").each(function(){
		var mediaTitle = $(this).html();
		var splitDash = mediaTitle.split(" - ");
		$(this).html(splitDash[1])
	})
})
