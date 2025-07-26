/* ========================================
   EFECTOS DE SCROLL
   ======================================== */

const ScrollEffects = {
    hero: null,
    neuralNetwork: null,
    
    init() {
        this.hero = document.querySelector('.hero');
        this.neuralNetwork = document.querySelector('.neural-network');
        
        this.setupParallaxEffect();
        
        console.log('🌊 ScrollEffects inicializado');
    },
    
    setupParallaxEffect() {
        const scrollHandler = Utils.throttle(() => {
            const scrolled = Utils.getScrollPosition();
            const rate = scrolled * -0.5;
            
            // Parallax en la red neuronal
            if (this.neuralNetwork) {
                this.neuralNetwork.style.transform = `translate(-50%, calc(-50% + ${rate}px))`;
            }
            
            // Fade out del hero
            if (this.hero) {
                const opacity = 1 - (scrolled / window.innerHeight);
                this.hero.style.opacity = Math.max(0, opacity);
            }
            
            // Efecto adicional: mover elementos de fondo
            this.updateBackgroundElements(scrolled);
            
        }, 16); // ~60fps
        
        window.addEventListener('scroll', scrollHandler);
    },
    
    updateBackgroundElements(scrolled) {
        // Mover elementos flotantes en contacto
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.1;
            const yPos = scrolled * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Efecto parallax en patrones de circuito
        const circuitPattern = document.querySelector('.circuit-pattern');
        if (circuitPattern) {
            const yPos = scrolled * 0.2;
            circuitPattern.style.transform = `translateY(${yPos}px)`;
        }
    },
    
    // Scroll suave a sección específica
    scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            Utils.smoothScrollTo(section);
        }
    },
    
    // Obtener progreso de scroll de la página
    getScrollProgress() {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Utils.getScrollPosition() / totalHeight;
        return Math.min(Math.max(progress, 0), 1);
    }
};
