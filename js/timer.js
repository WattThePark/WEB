$(function(){
	$('.skill').on('click', 'button', function(){
		var skillBar = $(this).siblings().find('.inner');
		var skillVal = skillBar.attr("data-progress");
		$(skillBar).animate({
			height: skillVal
		}, 1500);
	});
}