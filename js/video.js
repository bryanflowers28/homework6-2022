let video;

const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const slowerButton = document.querySelector('#slower');
const fasterButton = document.querySelector('#faster');
const skipButton = document.querySelector('#skip');
const muteButton = document.querySelector('#mute');
const videoObject = document.querySelector('#player1');
const volumeDiv = document.querySelector('#volume');
const volumeSlider = document.querySelector('#slider');
const oldButton = document.querySelector('#vintage');
const originalButton = document.querySelector('#orig');




videoObject.autoplay = false
videoObject.loop = false

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

playButton.addEventListener('click', () => {
	videoObject.play();
	console.log("Play Video")
	volumeDiv.textContent = volumeSlider.value + '%'
})

pauseButton.addEventListener('click', () => {
	videoObject.pause();
	console.log("Pause Video")
})

slowerButton.addEventListener('click', () => {
	videoObject.playbackRate -= .05
	console.log(videoObject.playbackRate)

})

fasterButton.addEventListener('click', () => {
	videoObject.playbackRate += .05
	console.log(videoObject.playbackRate)
})

skipButton.addEventListener('click', () => {
	let cutoff = videoObject.duration - 15
	if ((videoObject.currentTime) > cutoff) {
		videoObject.currentTime = 0
		console.log(videoObject.currentTime)
	}
	else {
		videoObject.currentTime += 15
		console.log(videoObject.currentTime)
	} 
})

muteButton.addEventListener('click', () => {
	if (videoObject.muted == true) {
		videoObject.muted = false
		muteButton.textContent = 'Mute'
	} else {
		videoObject.muted = true;
		muteButton.textContent = 'Unmute'
	}

})

volumeSlider.addEventListener('click', () => {
	volumeDiv.textContent = volumeSlider.value + '%'
	videoObject.volume = volumeSlider.value /100

})

oldButton.addEventListener('click', () => {
	if (videoObject.classList.contains('video')) {
		videoObject.classList.remove('video')
		videoObject.classList.add('oldSchool')
	}

})

originalButton.addEventListener('click', () => {
	if (videoObject.classList.contains('oldSchool')) {
		videoObject.classList.remove('oldSchool')
		videoObject.classList.add('video')
	}

})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

