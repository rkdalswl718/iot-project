const time = document.querySelector(".second");
const button = document.querySelector(".button");
const audio = new Audio('../js/sound.mp3');
audio.loop = true;

window.onload = () => {
    audio.play();
    let seconds = 60;
    const updateTime = () => {
        time.textContent = seconds;
        if (seconds === 0) {
            alert('신고가 접수되었습니다.');
            audio.pause();
        }
        else {
            seconds--;
            setTimeout(updateTime, 1000);
        }
    };
    updateTime();
};

button.addEventListener("click", () => {
    clearTimeout(time);
    window.location.href = "http://127.0.0.1:5500/html/safety.html#";
});
