/* ========================================
   EASTER EGG - CÓDIGO KONAMI
   ======================================== */

const EasterEgg = {
    konamiCode: [],
    konamiSequence: [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ],
    
    init() {
        this.setupKonamiCodeListener();
        this.setupOtherEasterEggs();
        
        console.log('🥚 EasterEgg inicializado');
    },
    
    setupKonamiCodeListener() {
        document.addEventListener('keydown', (e) => {
            this.konamiCode.push(e.code);
            
            // Mantener solo los últimos 10 códigos
            if (this.konamiCode.length > this.konamiSequence.length) {
                this.konamiCode.shift();
            }
            
            // Verificar si coincide con la secuencia
            if (JSON.stringify(this.konamiCode) === JSON.stringify(this.konamiSequence)) {
                this.activateKonamiCode();
                this.konamiCode = [];
            }
        });
    },
    
    activateKonamiCode() {
        const message = window.translator ? window.translator.t('notifications.konamiActivated') : '¡Código Konami activado! 🎮 Modo desarrollador ON';
        NotificationSystem.show(message, 'success', 5000);
        
        // Efecto especial en la red neuronal
        NeuralNetwork.activateSpecialMode();
        
        // Crear efecto de partículas especial
        this.createSpecialParticleEffect();
        
        // Cambiar colores temporalmente
        this.activateSpecialColors();
        
        console.log('🎮 ¡Código Konami activado!');
    },
    
    createSpecialParticleEffect() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const colors = ['#ff0080', '#00ff80', '#8000ff', '#ff8000'];
        
        // Crear ráfaga de partículas especiales
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                this.createSpecialParticle(x, y, colors[Math.floor(Math.random() * colors.length)]);
            }, i * 100);
        }
    },
    
    createSpecialParticle(x, y, color) {
        const particle = Utils.createElement('div', [], {
            position: 'fixed',
            width: '8px',
            height: '8px',
            background: color,
            borderRadius: '50%',
            left: `${x}px`,
            top: `${y}px`,
            zIndex: '9999',
            pointerEvents: 'none',
            animation: 'konamiParticle 3s ease-out forwards'
        });
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 3000);
    },
    
    activateSpecialColors() {
        const root = document.documentElement;
        const originalCyan = getComputedStyle(root).getPropertyValue('--color-cyan').trim();
        
        // Cambiar colores temporalmente
        root.style.setProperty('--color-cyan', '#ff0080');
        root.style.setProperty('--color-purple', '#00ff80');
        
        setTimeout(() => {
            root.style.setProperty('--color-cyan', originalCyan);
            root.style.setProperty('--color-purple', '#8b5cf6');
        }, 5000);
    },
    
    setupOtherEasterEggs() {
        // Easter egg de doble clic en el logo
        const logo = document.querySelector('.nav-logo');
        if (logo) {
            let clickCount = 0;
            logo.addEventListener('click', () => {
                clickCount++;
                if (clickCount === 3) {
                    this.activateLogoEasterEgg();
                    clickCount = 0;
                }
                setTimeout(() => { clickCount = 0; }, 2000);
            });
        }
        
        // Easter egg de typing en la consola
        let devSequence = '';
        document.addEventListener('keypress', (e) => {
            devSequence += e.key.toLowerCase();
            if (devSequence.includes('developer')) {
                this.activateDeveloperMode();
                devSequence = '';
            }
            if (devSequence.length > 20) {
                devSequence = devSequence.slice(-10);
            }
        });
    },
    
    activateLogoEasterEgg() {
        NotificationSystem.show('¡Has encontrado el logo secreto! 🚀', 'info');
        
        const logo = document.querySelector('.nav-logo');
        if (logo) {
            logo.style.animation = 'logoSpin 2s ease-in-out';
            setTimeout(() => {
                logo.style.animation = '';
            }, 2000);
        }
    },
    
    activateDeveloperMode() {
        NotificationSystem.show('¡Modo desarrollador activado! 👨‍💻', 'info');
        
        // Mostrar información de depuración
        console.log('🔧 Información de depuración:', {
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            userAgent: navigator.userAgent,
            performance: performance.now(),
            memoryUsage: performance.memory ? performance.memory.usedJSHeapSize : 'No disponible'
        });
    },
    
    injectEasterEggStyles() {
        if (document.querySelector('#easter-egg-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'easter-egg-styles';
        style.textContent = `
            @keyframes konamiParticle {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: scale(1.5) rotate(180deg);
                    opacity: 0.8;
                }
                100% {
                    transform: scale(0) rotate(360deg);
                    opacity: 0;
                }
            }
            
            @keyframes logoSpin {
                0% { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.2); }
                100% { transform: rotate(360deg) scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
};

// Inicializar Easter Egg al cargar
document.addEventListener('DOMContentLoaded', () => {
    EasterEgg.init();
    EasterEgg.injectEasterEggStyles();
});
