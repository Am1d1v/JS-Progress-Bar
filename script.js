

function start(progressPercent, changingSpeed) {
    const progress = document.querySelector('.progress');
    let width = 0;
    const timeInterval = setInterval(fill , changingSpeed);

    function fill(progressPercent){
        if(width >= progressPercent){
            clearInterval(timeInterval);
        } else {
            progress.style.width = `${width}%`;
            progress.textContent = `${width}%`
            width++;
        }

        if(width > 100){
            width = 100;
            progress.style.borderRadius = `${0}px`;
        }
    }
}
start(100, 10);