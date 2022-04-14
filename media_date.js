$(document).ready(function(){
	$(".path-media .view-photos .views-field-title a").each(function(){
		var mediaTitle = $(this).html();
		var splitDash = mediaTitle.split(" - ");
		$(this).html('<span class="media-date">' + splitDash[0] + '</span>' + splitDash[1])
		removeDatefromLink()
	})
	function removeDatefromLink() {
		$(".views-row .views-field-title a .media-date").each(function(){
			var mediaDate = $(this);
			$(this).closest(".views-field-title a").before(mediaDate)
		})
	}
})