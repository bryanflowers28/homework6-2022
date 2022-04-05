let video;

const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const slowerButton = document.querySelector('#slower');
const fasterButton = document.querySelector('#faster');
const skipButton = document.querySelector('#skip');
const muteButton = document.querySelector('#mute');
const videoObject = document.querySelector('#player1');
const volume = document.querySelector('#volume');
videoObject.autoplay = false
videoObject.loop = false

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

playButton.addEventListener('click', () => {
	videoObject.play();
	console.log("Play Video")
	volume.textContent = videoObject.volume
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
		videoObject.pause()
		videoObject.currentTime = 0
		console.log(videoObject.currentTime)
	}
	else {
		videoObject.currentTime += 15
		console.log(videoObject.currentTime)
	} 
})

muteButton.addEventListener('click', () => {


})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

