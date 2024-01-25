document.addEventListener('DOMContentLoaded', function () {
    var waveContainers = document.querySelectorAll('.waveformContainer');

    waveContainers.forEach(function (container) {
        var wavesurfer = WaveSurfer.create({
            container: container.querySelector('.waveform'),
            waveColor: '#F5F5F5',
            progressColor: '#fff',
            cursorWidth: 0,
            barWidth: 2,
            barHeight: 2.5,
            responsive: true,
            hideScroolbar: true,
            barRadius: 3,
        });

        wavesurfer.load('/assets/audio/sample_audio.mp3');

        var toggleBtn = container.querySelector('.toggle-btn');
        var toggleImg = container.querySelector('.toggle-img');

        toggleBtn.addEventListener('click', function () {
            if (wavesurfer.isPlaying()) {
                wavesurfer.pause();
            } else {
                wavesurfer.play();
            }

            updateToggleButton();
        });

        function updateToggleButton() {
            var imgSrc = wavesurfer.isPlaying() ? './assets/icons/roles/pause.svg' : './assets/icons/roles/play.svg';
            toggleImg.src = imgSrc;
            toggleImg.alt = wavesurfer.isPlaying() ? 'Pause' : 'Play';
        }

        updateToggleButton();
    });
});