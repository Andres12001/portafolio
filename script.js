// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeScrollEffects();
    initializeNeuralNetwork();
    initializeParticles();
    initializeContactForm();
});

// Inicializar animaciones
function initializeAnimations() {
    // Animación de aparición de elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos animables
    document.querySelectorAll('.project-card, .skill-item').forEach(el => {
        observer.observe(el);
    });
}

// Navegación suave y efectos
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    
    // Efecto de transparencia en la navegación
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        } else {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        }
    });

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Botones CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Proyectos')) {
                document.querySelector('#proyectos').scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (this.textContent.includes('CV')) {
                // Simular descarga de CV
                showNotification('CV descargado exitosamente');
            }
        });
    });
}

// Efectos de scroll
function initializeScrollEffects() {
    const hero = document.querySelector('.hero');
    const neuralNetwork = document.querySelector('.neural-network');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax en la red neuronal
        if (neuralNetwork) {
            neuralNetwork.style.transform = `translate(-50%, calc(-50% + ${rate}px))`;
        }
        
        // Fade out del hero
        if (hero) {
            const opacity = 1 - (scrolled / window.innerHeight);
            hero.style.opacity = Math.max(0, opacity);
        }
    });
}

// Animaciones de la red neuronal
function initializeNeuralNetwork() {
    const connections = document.querySelectorAll('.connection');
    const neurons = document.querySelectorAll('.neuron');
    
    // Animación secuencial de conexiones
    function animateConnections() {
        connections.forEach((connection, index) => {
            setTimeout(() => {
                connection.style.animation = 'pulse 2s ease-in-out';
                setTimeout(() => {
                    connection.style.animation = 'pulse 3s infinite ease-in-out';
                }, 2000);
            }, index * 200);
        });
    }
    
    // Animación de neuronas
    function animateNeurons() {
        neurons.forEach((neuron, index) => {
            setTimeout(() => {
                neuron.style.animation = 'neuronPulse 1.5s ease-in-out';
                setTimeout(() => {
                    neuron.style.animation = 'neuronPulse 2s infinite ease-in-out';
                }, 1500);
            }, index * 150);
        });
    }
    
    // Iniciar animaciones
    setTimeout(animateConnections, 1000);
    setTimeout(animateNeurons, 500);
    
    // Repetir cada 10 segundos
    setInterval(() => {
        animateConnections();
        animateNeurons();
    }, 10000);
}

// Sistema de partículas interactivas
function initializeParticles() {
    const hero = document.querySelector('.hero');
    let particles = [];
    
    // Crear partículas
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #00ffff, #8b5cf6);
            border-radius: 50%;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            opacity: 0;
            z-index: 5;
        `;
        
        hero.appendChild(particle);
        
        // Animar partícula
        particle.style.animation = 'particleRise 3s ease-out forwards';
        
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
    
    // Evento de mouse para crear partículas
    hero.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) { // Solo 5% de probabilidad
            createParticle(e.clientX, e.clientY);
        }
    });
    
    // CSS para animación de partículas
    const style = document.createElement('style');
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
}

// Efectos de hover mejorados para las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card, .skill-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 255, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Efecto de escritura para el título
function typeWriter(element, text, speed = 100) {
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
}

// Notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00ffff, #8b5cf6);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 1000;
        animation: slideInRight 0.5s ease-out;
        box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
    
    // CSS para animaciones de notificación
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Contador animado para estadísticas (si se agregan más adelante)
function animateCounter(element, start, end, duration) {
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
}

// Detección de dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Optimizaciones para móvil
function optimizeForMobile() {
    if (isMobile()) {
        // Reducir animaciones en móvil para mejor rendimiento
        document.querySelectorAll('.connection').forEach(connection => {
            connection.style.animationDuration = '4s';
        });
        
        // Desactivar partículas en móvil
        document.querySelector('.hero').removeEventListener('mousemove', () => {});
    }
}

// Inicializar optimizaciones
window.addEventListener('resize', optimizeForMobile);
optimizeForMobile();

// Easter egg: Konami Code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    showNotification('¡Código Konami activado! 🎮 Modo desarrollador ON', 'success');
    
    // Efecto especial en la red neuronal
    document.querySelectorAll('.neuron').forEach(neuron => {
        neuron.style.animation = 'neuronPulse 0.5s infinite ease-in-out';
        neuron.style.fill = '#ff0080';
    });
    
    setTimeout(() => {
        document.querySelectorAll('.neuron').forEach(neuron => {
            neuron.style.animation = 'neuronPulse 2s infinite ease-in-out';
            neuron.style.fill = '';
        });
    }, 5000);
}

// Precarga de imágenes críticas
function preloadImages() {
    const imageUrls = [
        // Aquí se pueden agregar URLs de imágenes críticas cuando se implementen
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Inicializar precarga
preloadImages();

// Inicializar formulario de contacto
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('.submit-button');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Validación en tiempo real
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateField(this);
        });
        
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
    
    // Envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Validar campo individual
    function validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');
        const fieldGroup = field.closest('.form-group');
        
        // Remover mensajes de error previos
        const existingError = fieldGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        field.classList.remove('error', 'valid');
        
        if (isRequired && !value) {
            showFieldError(field, 'Este campo es obligatorio');
            return false;
        }
        
        // Validaciones específicas
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Ingresa un email válido');
                return false;
            }
        }
        
        if (field.name === 'message' && value && value.length < 10) {
            showFieldError(field, 'El mensaje debe tener al menos 10 caracteres');
            return false;
        }
        
        if (value) {
            field.classList.add('valid');
        }
        
        return true;
    }
    
    // Mostrar error en campo
    function showFieldError(field, message) {
        field.classList.add('error');
        const fieldGroup = field.closest('.form-group');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        fieldGroup.appendChild(errorDiv);
    }
    
    // Validar formulario completo
    function validateForm() {
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    // Enviar formulario
    function submitForm() {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Mostrar estado de carga
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        
        // Simular envío (en producción aquí iría la llamada al servidor)
        setTimeout(() => {
            console.log('Datos del formulario:', data);
            
            // Simular respuesta exitosa
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
            
            // Mostrar mensaje de éxito
            showNotification('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success');
            
            // Limpiar formulario
            form.reset();
            
            // Remover clases de validación
            inputs.forEach(input => {
                input.classList.remove('valid', 'error');
                const fieldGroup = input.closest('.form-group');
                const errorMessage = fieldGroup.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            });
            
            // Efecto de confeti
            createConfetti();
            
        }, 2000);
    }
}

// Crear efecto de confeti
function createConfetti() {
    const colors = ['#00ffff', '#8b5cf6', '#3b82f6', '#e94560'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
    }
}

function createConfettiPiece(color) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${color};
        top: -10px;
        left: ${Math.random() * 100}vw;
        z-index: 10000;
        border-radius: 50%;
        pointer-events: none;
        animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Animación de caída del confeti
if (!document.querySelector('#confetti-styles')) {
    const style = document.createElement('style');
    style.id = 'confetti-styles';
    style.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
            border-color: #e94560;
            box-shadow: 0 0 10px rgba(233, 69, 96, 0.3);
        }
        
        .form-group input.valid,
        .form-group select.valid,
        .form-group textarea.valid {
            border-color: #00ffff;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
        }
        
        .error-message {
            color: #e94560;
            font-size: 0.8rem;
            margin-top: 0.25rem;
            animation: errorSlide 0.3s ease-out;
        }
        
        @keyframes errorSlide {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Efectos adicionales para la sección de contacto
function initializeContactEffects() {
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach((method, index) => {
        // Animación de entrada escalonada
        method.style.opacity = '0';
        method.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            method.style.transition = 'all 0.6s ease-out';
            method.style.opacity = '1';
            method.style.transform = 'translateX(0)';
        }, index * 200);
        
        // Efecto de clic para copiar información
        method.addEventListener('click', function() {
            const details = this.querySelector('.contact-details p');
            const text = details.textContent;
            
            if (text.includes('@') || text.includes('linkedin.com') || text.includes('github.com')) {
                navigator.clipboard.writeText(text).then(() => {
                    showNotification(`${text} copiado al portapapeles`, 'success');
                    
                    // Efecto visual de copiado
                    this.style.transform = 'translateX(10px) scale(1.02)';
                    setTimeout(() => {
                        this.style.transform = 'translateX(10px)';
                    }, 200);
                }).catch(() => {
                    showNotification('No se pudo copiar al portapapeles', 'error');
                });
            }
        });
    });
}

// Inicializar efectos de contacto cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Delay para asegurar que los elementos estén renderizados
    setTimeout(initializeContactEffects, 500);
});

// Smooth scroll mejorado para incluir la sección de contacto
function initializeImprovedNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = 80; // Altura del navbar
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Actualizar estado activo del menú
                updateActiveNavItem(targetId);
            }
        });
    });
}

// Actualizar elemento activo del menú
function updateActiveNavItem(targetId) {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// Detectar sección activa durante el scroll
function initializeSectionDetection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Inicializar navegación mejorada
document.addEventListener('DOMContentLoaded', function() {
    initializeImprovedNavigation();
    initializeSectionDetection();
});
