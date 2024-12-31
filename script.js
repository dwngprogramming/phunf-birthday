$(document).ready(function () {
    const openEnvelopeSound = new Audio('./media/open-envelope.mp3');
    const backgroundMusic = $('#bg-audio')[0];
    const playButon = $('#playButton');

    backgroundMusic.volume = 0.6;

    playButon.click(function () {
        if (backgroundMusic.paused) {
            backgroundMusic.currentTime = 0;
            backgroundMusic.play();
            playButon.text('Dừng nhạc lại !!!');
        } else {
            backgroundMusic.pause();
            playButon.text('Bật nhạc nền ~');
        }
    });

    $('#envelope').click(function () {
        openEnvelopeSound.play();
        $(this).addClass('open');
        $('#overlay').addClass('show');
        // Phát âm thanh khi mở thư
        $('.letter').removeClass('unread');
    });

    $('.close-btn').click(function (e) {
        e.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
        $('#envelope').removeClass('open');
        $('#overlay').removeClass('show');
        $('.letter').addClass('unread');
    });
});