/* ========================================
   SISTEMA DE PARTÍCULAS
   ======================================== */

const ParticleSystem = {
    hero: null,
    enabled: true,
    particles: [],
    
    init() {
        this.hero = document.querySelector('.hero');
        
        if (this.hero && !Utils.isMobile()) {
            this.setupParticleEffect();
            this.injectParticleStyles();
        }
        
        console.log('✨ ParticleSystem inicializado');
    },
    
    setupParticleEffect() {
        if (!this.enabled) return;
        
        this.hero.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.95) { // Solo 5% de probabilidad
                this.createParticle(e.clientX, e.clientY);
            }
        });
    },
    
    createParticle(x, y) {
        if (!this.enabled) return;
        
        const particle = Utils.createElement('div', ['particle'], {
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: 'linear-gradient(45deg, #00ffff, #8b5cf6)',
            borderRadius: '50%',
            pointerEvents: 'none',
            left: `${x}px`,
            top: `${y}px`,
            opacity: '0',
            zIndex: '5',
            animation: 'particleRise 3s ease-out forwards'
        });
        
        this.hero.appendChild(particle);
        this.particles.push(particle);
        
        // Remover partícula después de la animación
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
            this.particles = this.particles.filter(p => p !== particle);
        }, 3000);
    },
    
    injectParticleStyles() {
        if (document.querySelector('#particle-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes particleRise {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(0);
                }
                50% {
                    opacity: 1;
                    transform: translateY(-50px) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-100px) scale(0);
                }
            }
        `;
        document.head.appendChild(style);
    },
    
    // Crear ráfaga de partículas
    createBurst(x, y, count = 10) {
        if (!this.enabled) return;
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const offsetX = x + (Math.random() - 0.5) * 100;
                const offsetY = y + (Math.random() - 0.5) * 100;
                this.createParticle(offsetX, offsetY);
            }, i * 50);
        }
    },
    
    // Desactivar sistema de partículas
    disable() {
        this.enabled = false;
        this.clearAllParticles();
    },
    
    // Activar sistema de partículas
    enable() {
        this.enabled = true;
        if (this.hero && !Utils.isMobile()) {
            this.setupParticleEffect();
        }
    },
    
    // Limpiar todas las partículas
    clearAllParticles() {
        this.particles.forEach(particle => {
            if (particle.parentNode) {
                particle.remove();
            }
        });
        this.particles = [];
    }
};
