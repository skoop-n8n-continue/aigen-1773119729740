document.addEventListener('DOMContentLoaded', () => {
    // --- Slideshow Logic ---
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');

    const displayDuration = 3000; // 3 seconds visible
    const transitionDuration = 1000; // 1 second sliding

    function startSequence() {
        // Slide 1 In
        slide1.classList.remove('exit');
        slide1.classList.add('active');

        setTimeout(() => {
            // Slide 1 Out
            slide1.classList.remove('active');
            slide1.classList.add('exit');

            setTimeout(() => {
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

    // --- Food Grid Logic ---
    const foodItems = [
        { icon: '🍕', name: 'Artisan Pizza', desc: 'Freshly baked with premium toppings and mozzarella.' },
        { icon: '🍔', name: 'Gourmet Burger', desc: 'Juicy beef patty with secret sauce and brioche bun.' },
        { icon: '🥗', name: 'Fresh Salad', desc: 'Crispy seasonal greens with house-made vinaigrette.' },
        { icon: '🍣', name: 'Sushi Platter', desc: 'Premium grade fish with perfectly seasoned rice.' },
        { icon: '🌮', name: 'Street Tacos', desc: 'Authentic corn tortillas with slow-cooked meats.' },
        { icon: '🍝', name: 'Pasta Special', desc: 'Handmade noodles tossed in rich, savory sauce.' },
        { icon: '🍦', name: 'Gelato Mix', desc: 'Creamy Italian style frozen dessert in varied flavors.' },
        { icon: '🍜', name: 'Miso Ramen', desc: 'Traditional broth with tender noodles and pork.' },
        { icon: '🍰', name: 'Velvet Cake', desc: 'Soft, layered sponge with light cream frosting.' },
        { icon: '🥑', name: 'Avocado Toast', desc: 'Creamy avocado on toasted sourdough with seeds.' }
    ];

    function populateFoodGrid() {
        const grid = document.getElementById('foodGrid');
        // Shuffle and pick 6
        const shuffled = [...foodItems].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);

        grid.innerHTML = selected.map(item => `
            <div class="food-item">
                <div class="food-icon">${item.icon}</div>
                <div class="food-name">${item.name}</div>
                <div class="food-desc">${item.desc}</div>
            </div>
        `).join('');
    }

    // Initialize
    populateFoodGrid();
    startSequence();
});
