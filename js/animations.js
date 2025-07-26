/* ========================================
   GESTOR DE ANIMACIONES
   ======================================== */

const AnimationManager = {
    observer: null,
    
    init() {
        this.setupIntersectionObserver();
        this.setupCardHoverEffects();
        
        console.log('✨ AnimationManager inicializado');
    },
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Opcional: dejar de observar el elemento después de la animación
                    // this.observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observar elementos animables
        const animatableElements = document.querySelectorAll('.project-card, .skill-item, .contact-method');
        animatableElements.forEach(el => {
            this.observer.observe(el);
        });
    },
    
    setupCardHoverEffects() {
        const cards = document.querySelectorAll('.project-card, .skill-item');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.enhanceCardHover(card, true);
            });
            
            card.addEventListener('mouseleave', () => {
                this.enhanceCardHover(card, false);
            });
        });
    },
    
    enhanceCardHover(card, isHovering) {
        if (isHovering) {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 255, 255, 0.3)';
            
            // Efecto especial en skill cards
            if (card.classList.contains('skill-card')) {
                const icon = card.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                }
            }
        } else {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            
            // Restaurar skill icon
            if (card.classList.contains('skill-card')) {
                const icon = card.querySelector('.skill-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            }
        }
    },
    
    // Efecto de escritura para textos
    typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    },
    
    // Contador animado
    animateCounter(element, start, end, duration = 2000) {
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = current;
            
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    },
    
    // Efecto de confeti
    createConfetti() {
        const colors = ['#00ffff', '#8b5cf6', '#3b82f6', '#e94560'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            this.createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
        }
    },
    
    createConfettiPiece(color) {
        const confetti = Utils.createElement('div', [], {
            position: 'fixed',
            width: '10px',
            height: '10px',
            background: color,
            top: '-10px',
            left: `${Math.random() * 100}vw`,
            zIndex: '10000',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: `confettiFall ${2 + Math.random() * 3}s linear forwards`
        });
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
};

// Estilos CSS para efectos de animación
const animationStyles = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
`;

// Inyectar estilos de animación
if (!document.querySelector('#animation-styles')) {
    const style = document.createElement('style');
    style.id = 'animation-styles';
    style.textContent = animationStyles;
    document.head.appendChild(style);
}
