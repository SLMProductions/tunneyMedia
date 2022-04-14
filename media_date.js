$(document).ready(function(){
	$(".path-media .view-photos .views-field-title a").each(function(){
		var mediaTitle = $(this).html();
		var splitDash = mediaTitle.split(" - ");
		$(this).html('<span class="media-date">' + splitDash[0] + '</span>' + splitDash[1])
		removeDatefromLink()
	})
	function removeDatefromLink() {
		$(".media-date").remove();
	}
})
