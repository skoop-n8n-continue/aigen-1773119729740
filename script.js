document.addEventListener('DOMContentLoaded', () => {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');

    const displayDuration = 3000; // 3 seconds visible
    const transitionDuration = 1000; // 1 second sliding

    function startSequence() {
        // --- Slide 1 Action ---
        // Slide 1 In
        slide1.classList.remove('exit');
        slide1.classList.add('active');

        setTimeout(() => {
            // Slide 1 Out
            slide1.classList.remove('active');
            slide1.classList.add('exit');

            setTimeout(() => {
                // --- Slide 2 Action ---
                // Slide 2 In
                slide2.classList.remove('exit');
                slide2.classList.add('active');

                setTimeout(() => {
                    // Slide 2 Out
                    slide2.classList.remove('active');
                    slide2.classList.add('exit');

                    // Reset and loop back to start
                    setTimeout(startSequence, transitionDuration);
                }, displayDuration);
            }, transitionDuration);
        }, displayDuration);
    }

    // Initial trigger
    startSequence();
});
