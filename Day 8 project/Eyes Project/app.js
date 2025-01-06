const pupils = [document.getElementById('pupil1'), document.getElementById('pupil2')];

document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye, index) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = Math.min(rect.width / 4, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 4);

        const pupilX = distance * Math.cos(angle);
        const pupilY = distance * Math.sin(angle);

        pupils[index].style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});