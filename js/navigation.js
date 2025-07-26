/* ========================================
   SISTEMA DE NAVEGACIÓN
   ======================================== */

const NavigationManager = {
    navbar: null,
    navLinks: null,
    sections: null,
    
    init() {
        this.navbar = document.querySelector('.navbar');
        this.navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        this.sections = document.querySelectorAll('section[id]');
        
        this.setupScrollEffect();
        this.setupSmoothScroll();
        this.setupSectionDetection();
        this.setupCTAButtons();
        
        console.log('📱 NavigationManager inicializado');
    },
    
    setupScrollEffect() {
        const scrollHandler = Utils.throttle(() => {
            const scrollY = Utils.getScrollPosition();
            
            if (scrollY > 100) {
                this.navbar.style.background = 'rgba(26, 26, 46, 0.98)';
            } else {
                this.navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            }
        }, 16);
        
        window.addEventListener('scroll', scrollHandler);
    },
    
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    Utils.smoothScrollTo(targetSection);
                    this.updateActiveNavItem(targetId);
                }
            });
        });
    },
    
    setupSectionDetection() {
        const scrollHandler = Utils.throttle(() => {
            this.updateActiveSection();
        }, 100);
        
        window.addEventListener('scroll', scrollHandler);
    },
    
    updateActiveSection() {
        let currentSection = '';
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const scrollY = Utils.getScrollPosition();
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        this.updateActiveNavItem(`#${currentSection}`);
    },
    
    updateActiveNavItem(targetId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    },
    
    setupCTAButtons() {
        const ctaButtons = document.querySelectorAll('.cta-button');
        
        ctaButtons.forEach(button => {
            button.addEventListener('click', () => {
                const buttonText = button.textContent.toLowerCase();
                
                if (buttonText.includes('proyectos') || buttonText.includes('projects')) {
                    const projectsSection = document.querySelector('#proyectos');
                    Utils.smoothScrollTo(projectsSection);
                } else if (buttonText.includes('cv') || buttonText.includes('download')) {
                    this.downloadCV();
                }
            });
        });
    },
    
    downloadCV() {
        // Usar traducción para el mensaje
        const message = window.translator ? window.translator.t('notifications.cvDownloaded') : 'CV descargado exitosamente';
        NotificationSystem.show(message, 'success');
        
        // En producción, aquí iría la lógica real de descarga
        // window.open('/assets/cv-carlos-vargas.pdf', '_blank');
    }
};
