$(document).ready(function() {
	var audio = new Audio('audio.mp3');

	var play 		= $('#play'),
		seek		= $('.seek'),
		mute 		= $('#mute'),
		loop 		= audio.loop,
		pause 		= $('#pause'),
		muted 		= audio.muted,
		buffer		= $('.buffer'),
		status		= $('.status'),
		unmute 		= $('#unmute'),
		buffered	= audio.buffered,
		currentTime = audio.currentTime;

	play.click(function() {
		audio.play();
		$('#pause').removeClass('hide');
		$(this).addClass('hide');
		seek.attr('max', audio.duration);
	});

	pause.click(function() {
		audio.pause();
		$('#play').removeClass('hide');
		$(this).addClass('hide');
	});

	mute.click(function() {
		if(audio.muted === false) {
			audio.muted = true;
		}
		$('#unmute').removeClass('hide');
		$(this).addClass('hide');
	});

	unmute.click(function() {
		if(audio.muted) {
			audio.muted = false;
		}
		$('#mute').removeClass('hide');
		$(this).addClass('hide');
	});

	seek.bind('change', function() {
		audio.currentTime = $(this).val();
		seek.attr('max', audio.duration);
	});

	audio.addEventListener('timeupdate', function() {
		var curtime = parseInt(audio.currentTime, 10);
		seek.attr('value', curtime);
	})
});
