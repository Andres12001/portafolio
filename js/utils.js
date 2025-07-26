/* ========================================
   UTILIDADES GENERALES
   ======================================== */

const Utils = {
    // Detectar dispositivo móvil
    isMobile() {
        return window.innerWidth <= 768;
    },
    
    // Función debounce para optimizar eventos
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Función throttle para scroll events
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Generar ID único
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },
    
    // Validar email
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    
    // Formatear texto
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    
    // Scroll suave a elemento
    smoothScrollTo(element, offset = 80) {
        if (!element) return;
        
        const targetPosition = element.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    },
    
    // Crear elemento con clases y estilos
    createElement(tag, classes = [], styles = {}) {
        const element = document.createElement(tag);
        
        if (classes.length > 0) {
            element.classList.add(...classes);
        }
        
        Object.assign(element.style, styles);
        
        return element;
    },
    
    // Copiar texto al portapapeles
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
            return false;
        }
    },
    
    // Obtener posición de scroll
    getScrollPosition() {
        return window.pageYOffset || document.documentElement.scrollTop;
    },
    
    // Verificar si elemento está en viewport
    isInViewport(element, threshold = 0.1) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        return rect.top < windowHeight * (1 - threshold) && rect.bottom > windowHeight * threshold;
    }
};
