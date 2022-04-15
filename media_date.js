$(document).ready(function(){
	$(".path-media .view-photos .views-field-title a").each(function(){
		var mediaTitle = $(this).html();
		var splitDash = mediaTitle.split(" - ");
		$(this).html(splitDash[1])
	})
	$(".path-media .view-photos .views-row").each(function(){
		$(this).find(".views-field-created, .views-field-title").wrapAll('<div class="media-info">')
	})
})
