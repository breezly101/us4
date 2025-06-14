let container = document.querySelector('#youare-container');
let audio = document.querySelector('#youare-audio');
let ovlap = document.querySelector('#youare-overlap');
let micon = document.querySelector('#youare-micon');

let overlap = false;

function audioPlay() {
    if (!overlap) {
        audio.currentTime = 0;
        audio.play().catch(() => {
            // If autoplay is blocked, show click prompt
            container.classList.add('clicky');
            console.log('Autoplay blocked, waiting for user interaction.');
        });
    } else {
        ovlap.currentTime = 0;
        ovlap.play();
    }

    container.removeEventListener('click', audioPlay);

    audio.addEventListener('timeupdate', audioOverlap);
    ovlap.addEventListener('timeupdate', audioOverlap);

    container.classList.remove('clicky');
    micon.src = "images/speaker.avif";
}

function audioStop() {
    audio.currentTime = 0;
    audio.pause();

    ovlap.currentTime = 0;
    ovlap.pause();

    container.addEventListener('click', audioPlay);

    audio.removeEventListener('timeupdate', audioOverlap);
    ovlap.removeEventListener('timeupdate', audioOverlap);

    container.classList.add('clicky');
    micon.src = "images/speakerm.avif";
}

function audioSwitch() {
    if (
        audio.duration > 0 && audio.paused &&
        ovlap.duration > 0 && ovlap.paused
    ) {
        audioPlay();
    } else {
        audioStop();
    }
}

function audioOverlap() {
    if (!overlap && audio.currentTime > audio.duration - 0.45) {
        ovlap.currentTime = 0;
        ovlap.play();

        overlap = true;
    }

    if (overlap && ovlap.currentTime > ovlap.duration - 0.5) {
        audio.currentTime = 0;
        audio.play();

        overlap = false;
    }
}

// Start with muted icon and clicky prompt
micon.src = "images/speakerm.avif";
container.classList.add('clicky');

// Attach play handler to container click - required if autoplay blocked
container.addEventListener('click', () => {
    audioPlay();
    container.classList.remove('clicky');
});

micon.addEventListener('click', audioSwitch);

// Try autoplay on page load
window.addEventListener('DOMContentLoaded', () => {
    audioPlay();
});
