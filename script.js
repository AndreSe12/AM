document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const container = document.querySelector('.envelope-container');
    
    // Crear elementos flotantes
    createParticles();
    createFloatingHearts();
    
    if (envelope) {
        envelope.addEventListener('click', function() {
            container.classList.add('open');
            createConfetti();
            createFlowerExplosion();
        });
    }
});

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const symbols = ['🌸', '🌷', '🌹', '✨', '💫'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
        container.appendChild(particle);
    }
}

function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
        container.appendChild(heart);
    }
}

function createConfetti() {
    const container = document.getElementById('confetti');
    if (!container) return;
    
    const colors = ['#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 8 + 4) + 'px';
        confetti.style.height = (Math.random() * 12 + 10) + 'px';
        container.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode === container) {
                confetti.remove();
            }
        }, 6000);
    }
}

function createFlowerExplosion() {
    const container = document.getElementById('confetti');
    if (!container) return;
    
    const flowers = ['🌸', '🌷', '🌹', '💐', '💖'];
    
    for (let i = 0; i < 30; i++) {
        const flower = document.createElement('div');
        flower.classList.add('confetti-piece');
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.background = 'transparent';
        flower.style.fontSize = (Math.random() * 20 + 15) + 'px';
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDelay = Math.random() * 2 + 's';
        flower.style.width = 'auto';
        flower.style.height = 'auto';
        flower.style.backgroundColor = 'transparent';
        container.appendChild(flower);
        
        setTimeout(() => {
            if (flower.parentNode === container) {
                flower.remove();
            }
        }, 5000);
    }
}