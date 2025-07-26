// Sistema de traducciones para el portafolio
class TranslationSystem {
    constructor() {
        this.currentLanguage = 'es';
        this.translations = {
            es: {
                // Navegación
                nav: {
                    home: 'Inicio',
                    projects: 'Proyectos',
                    skills: 'Habilidades',
                    contact: 'Contacto'
                },
                // Hero Section
                hero: {
                    greeting: 'Hola, soy',
                    name: 'Carlos Andrés Vargas',
                    title: 'Desarrollador de Inteligencia Artificial',
                    subtitle: 'Especializado en Computer Vision y Procesamiento de Lenguaje Natural',
                    description: 'Transformando ideas innovadoras en soluciones de IA que impactan positivamente en la sociedad. Con experiencia en redes neuronales, machine learning y desarrollo de aplicaciones inteligentes.',
                    cta1: 'Ver Proyectos',
                    cta2: 'Descargar CV'
                },
                // Proyectos
                projects: {
                    title: 'Proyectos Destacados',
                    subtitle: 'Explora mis trabajos más recientes en Inteligencia Artificial',
                    project1: {
                        title: 'Reconocimiento de Lenguaje de Señas',
                        description: 'Sistema de IA que traduce lenguaje de señas a texto en tiempo real usando computer vision y redes neuronales convolucionales.'
                    },
                    project2: {
                        title: 'Chatbot Inteligente',
                        description: 'Asistente virtual basado en NLP capaz de entender contexto y mantener conversaciones naturales con los usuarios.'
                    },
                    project3: {
                        title: 'Análisis Predictivo de Datos',
                        description: 'Modelo de machine learning para predicción de tendencias de mercado usando análisis de series temporales.'
                    },
                    viewProject: 'Ver Proyecto',
                    github: 'Código'
                },
                // Habilidades
                skills: {
                    title: 'Habilidades Técnicas',
                    subtitle: 'Tecnologías y herramientas que domino',
                    categories: {
                        ai: 'Inteligencia Artificial',
                        programming: 'Programación',
                        tools: 'Herramientas',
                        soft: 'Habilidades Blandas'
                    },
                    items: {
                        tensorflow: 'Machine Learning y Deep Learning',
                        opencv: 'Computer Vision y Procesamiento de Imágenes',
                        nlp: 'Procesamiento de Lenguaje Natural',
                        python: 'Desarrollo Backend y Scripting',
                        javascript: 'Desarrollo Frontend y Aplicaciones Web',
                        react: 'Interfaces de Usuario Modernas',
                        git: 'Control de Versiones y Colaboración',
                        docker: 'Containerización y Despliegue',
                        aws: 'Cloud Computing y MLOps',
                        teamwork: 'Trabajo en Equipo',
                        problemSolving: 'Resolución de Problemas',
                        communication: 'Comunicación Efectiva'
                    }
                },
                // Contacto
                contact: {
                    title: 'Contacto',
                    subtitle: 'Trabajemos juntos en tu próximo proyecto',
                    methods: {
                        email: {
                            title: 'Email',
                            description: 'Contáctame directamente'
                        },
                        linkedin: {
                            title: 'LinkedIn',
                            description: 'Conectemos profesionalmente'
                        },
                        github: {
                            title: 'GitHub',
                            description: 'Revisa mi código'
                        }
                    },
                    form: {
                        title: 'Envíame un Mensaje',
                        name: 'Nombre completo',
                        email: 'Correo electrónico',
                        subject: 'Asunto',
                        subjects: {
                            collaboration: 'Colaboración',
                            job: 'Oportunidad Laboral',
                            consulting: 'Consultoría',
                            other: 'Otro'
                        },
                        message: 'Mensaje',
                        submit: 'Enviar Mensaje',
                        sending: 'Enviando...'
                    },
                    validation: {
                        required: 'Este campo es obligatorio',
                        invalidEmail: 'Ingresa un email válido',
                        messageLength: 'El mensaje debe tener al menos 10 caracteres'
                    },
                    success: '¡Mensaje enviado exitosamente! Te contactaré pronto.',
                    copied: 'copiado al portapapeles',
                    copyError: 'No se pudo copiar al portapapeles'
                },
                // Footer
                footer: {
                    rights: 'Todos los derechos reservados.',
                    madeWith: 'Hecho con',
                    and: 'y'
                },
                // Notificaciones
                notifications: {
                    cvDownloaded: 'CV descargado exitosamente',
                    konamiActivated: '¡Código Konami activado! 🎮 Modo desarrollador ON'
                },
                // Botón de idioma
                language: {
                    button: 'EN',
                    tooltip: 'Cambiar a inglés'
                }
            },
            en: {
                // Navigation
                nav: {
                    home: 'Home',
                    projects: 'Projects',
                    skills: 'Skills',
                    contact: 'Contact'
                },
                // Hero Section
                hero: {
                    greeting: 'Hi, I\'m',
                    name: 'Carlos Andrés Vargas',
                    title: 'Artificial Intelligence Developer',
                    subtitle: 'Specialized in Computer Vision and Natural Language Processing',
                    description: 'Transforming innovative ideas into AI solutions that positively impact society. With experience in neural networks, machine learning, and intelligent application development.',
                    cta1: 'View Projects',
                    cta2: 'Download CV'
                },
                // Projects
                projects: {
                    title: 'Featured Projects',
                    subtitle: 'Explore my latest work in Artificial Intelligence',
                    project1: {
                        title: 'Sign Language Recognition',
                        description: 'AI system that translates sign language to text in real-time using computer vision and convolutional neural networks.'
                    },
                    project2: {
                        title: 'Intelligent Chatbot',
                        description: 'NLP-based virtual assistant capable of understanding context and maintaining natural conversations with users.'
                    },
                    project3: {
                        title: 'Predictive Data Analysis',
                        description: 'Machine learning model for market trend prediction using time series analysis.'
                    },
                    viewProject: 'View Project',
                    github: 'Code'
                },
                // Skills
                skills: {
                    title: 'Technical Skills',
                    subtitle: 'Technologies and tools I master',
                    categories: {
                        ai: 'Artificial Intelligence',
                        programming: 'Programming',
                        tools: 'Tools',
                        soft: 'Soft Skills'
                    },
                    items: {
                        tensorflow: 'Machine Learning and Deep Learning',
                        opencv: 'Computer Vision and Image Processing',
                        nlp: 'Natural Language Processing',
                        python: 'Backend Development and Scripting',
                        javascript: 'Frontend Development and Web Applications',
                        react: 'Modern User Interfaces',
                        git: 'Version Control and Collaboration',
                        docker: 'Containerization and Deployment',
                        aws: 'Cloud Computing and MLOps',
                        teamwork: 'Teamwork',
                        problemSolving: 'Problem Solving',
                        communication: 'Effective Communication'
                    }
                },
                // Contact
                contact: {
                    title: 'Contact',
                    subtitle: 'Let\'s work together on your next project',
                    methods: {
                        email: {
                            title: 'Email',
                            description: 'Contact me directly'
                        },
                        linkedin: {
                            title: 'LinkedIn',
                            description: 'Let\'s connect professionally'
                        },
                        github: {
                            title: 'GitHub',
                            description: 'Check out my code'
                        }
                    },
                    form: {
                        title: 'Send me a Message',
                        name: 'Full name',
                        email: 'Email address',
                        subject: 'Subject',
                        subjects: {
                            collaboration: 'Collaboration',
                            job: 'Job Opportunity',
                            consulting: 'Consulting',
                            other: 'Other'
                        },
                        message: 'Message',
                        submit: 'Send Message',
                        sending: 'Sending...'
                    },
                    validation: {
                        required: 'This field is required',
                        invalidEmail: 'Enter a valid email',
                        messageLength: 'Message must be at least 10 characters long'
                    },
                    success: 'Message sent successfully! I\'ll contact you soon.',
                    copied: 'copied to clipboard',
                    copyError: 'Could not copy to clipboard'
                },
                // Footer
                footer: {
                    rights: 'All rights reserved.',
                    madeWith: 'Made with',
                    and: 'and'
                },
                // Notifications
                notifications: {
                    cvDownloaded: 'CV downloaded successfully',
                    konamiActivated: 'Konami Code activated! 🎮 Developer mode ON'
                },
                // Language button
                language: {
                    button: 'ES',
                    tooltip: 'Switch to Spanish'
                }
            }
        };
    }

    // Obtener traducción
    t(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                console.warn(`Translation not found for key: ${key}`);
                return key;
            }
        }
        
        return translation;
    }

    // Cambiar idioma
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.updateContent();
            this.saveLanguagePreference(lang);
            return true;
        }
        return false;
    }

    // Obtener idioma actual
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Actualizar contenido de la página
    updateContent() {
        // Actualizar atributo lang del HTML
        document.documentElement.lang = this.currentLanguage;

        // Actualizar título de la página
        document.title = this.currentLanguage === 'es' 
            ? 'Carlos Andrés Vargas - Desarrollador de IA'
            : 'Carlos Andrés Vargas - AI Developer';

        // Actualizar botón de idioma
        this.updateLanguageButton();

        // Actualizar navegación
        this.updateNavigation();
        
        // Actualizar sección hero
        this.updateHeroSection();
        
        // Actualizar proyectos
        this.updateProjectsSection();
        
        // Actualizar habilidades
        this.updateSkillsSection();
        
        // Actualizar contacto
        this.updateContactSection();
        
        // Actualizar footer
        this.updateFooter();

        // Actualizar botón de idioma
        this.updateLanguageButton();

        // Disparar evento personalizado
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
    }

    updateNavigation() {
        const navLinks = document.querySelectorAll('.nav-menu a');
        const navTexts = ['nav.home', 'nav.projects', 'nav.skills', 'nav.contact'];
        
        navLinks.forEach((link, index) => {
            if (navTexts[index]) {
                link.textContent = this.t(navTexts[index]);
            }
        });
    }

    updateHeroSection() {
        const elements = {
            '.hero-greeting': 'hero.greeting',
            '.hero-name': 'hero.name',
            '.hero-title': 'hero.title',
            '.hero-subtitle': 'hero.subtitle',
            '.hero-description': 'hero.description'
        };

        Object.entries(elements).forEach(([selector, key]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = this.t(key);
            }
        });

        // Actualizar botones CTA
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach((button, index) => {
            if (index === 0) {
                button.textContent = this.t('hero.cta1');
            } else if (index === 1) {
                button.textContent = this.t('hero.cta2');
            }
        });
    }

    updateProjectsSection() {
        const titleElement = document.querySelector('#proyectos h2');
        const subtitleElement = document.querySelector('#proyectos .section-subtitle');
        
        if (titleElement) titleElement.textContent = this.t('projects.title');
        if (subtitleElement) subtitleElement.textContent = this.t('projects.subtitle');

        // Actualizar tarjetas de proyectos
        const projectCards = document.querySelectorAll('.project-card');
        const projectKeys = ['project1', 'project2', 'project3'];

        projectCards.forEach((card, index) => {
            if (projectKeys[index]) {
                const titleEl = card.querySelector('.project-title');
                const descEl = card.querySelector('.project-description');
                const viewBtn = card.querySelector('.project-link');
                const githubBtn = card.querySelector('.github-link');

                if (titleEl) titleEl.textContent = this.t(`projects.${projectKeys[index]}.title`);
                if (descEl) descEl.textContent = this.t(`projects.${projectKeys[index]}.description`);
                if (viewBtn) viewBtn.textContent = this.t('projects.viewProject');
                if (githubBtn) githubBtn.textContent = this.t('projects.github');
            }
        });
    }

    updateSkillsSection() {
        const titleElement = document.querySelector('#habilidades h2');
        const subtitleElement = document.querySelector('#habilidades .section-subtitle');
        
        if (titleElement) titleElement.textContent = this.t('skills.title');
        if (subtitleElement) subtitleElement.textContent = this.t('skills.subtitle');

        // Actualizar categorías de habilidades
        const categoryElements = document.querySelectorAll('.skill-category h3');
        const categoryKeys = ['ai', 'programming', 'tools', 'soft'];

        categoryElements.forEach((element, index) => {
            if (categoryKeys[index]) {
                element.textContent = this.t(`skills.categories.${categoryKeys[index]}`);
            }
        });

        // Actualizar descripciones de habilidades
        const skillItems = document.querySelectorAll('.skill-item p');
        const skillKeys = [
            'tensorflow', 'opencv', 'nlp',
            'python', 'javascript', 'react',
            'git', 'docker', 'aws',
            'teamwork', 'problemSolving', 'communication'
        ];

        skillItems.forEach((item, index) => {
            if (skillKeys[index]) {
                item.textContent = this.t(`skills.items.${skillKeys[index]}`);
            }
        });
    }

    updateContactSection() {
        const titleElement = document.querySelector('#contacto h2');
        const subtitleElement = document.querySelector('#contacto .section-subtitle');
        
        if (titleElement) titleElement.textContent = this.t('contact.title');
        if (subtitleElement) subtitleElement.textContent = this.t('contact.subtitle');

        // Actualizar métodos de contacto
        const contactMethods = document.querySelectorAll('.contact-method');
        const methodKeys = ['email', 'linkedin', 'github'];

        contactMethods.forEach((method, index) => {
            if (methodKeys[index]) {
                const titleEl = method.querySelector('h3');
                const descEl = method.querySelector('.contact-details p:last-child');

                if (titleEl) titleEl.textContent = this.t(`contact.methods.${methodKeys[index]}.title`);
                if (descEl) descEl.textContent = this.t(`contact.methods.${methodKeys[index]}.description`);
            }
        });

        // Actualizar formulario
        this.updateContactForm();
    }

    updateContactForm() {
        const formTitle = document.querySelector('.contact-form h3');
        if (formTitle) formTitle.textContent = this.t('contact.form.title');

        // Actualizar labels y placeholders
        const formElements = {
            'input[name="name"]': 'contact.form.name',
            'input[name="email"]': 'contact.form.email',
            'select[name="subject"]': 'contact.form.subject',
            'textarea[name="message"]': 'contact.form.message'
        };

        Object.entries(formElements).forEach(([selector, key]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.placeholder = this.t(key);
                const label = element.previousElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.textContent = this.t(key);
                }
            }
        });

        // Actualizar opciones del select
        const subjectSelect = document.querySelector('select[name="subject"]');
        if (subjectSelect) {
            const options = subjectSelect.querySelectorAll('option');
            const subjectKeys = ['', 'collaboration', 'job', 'consulting', 'other'];
            
            options.forEach((option, index) => {
                if (index === 0) {
                    option.textContent = this.t('contact.form.subject');
                } else if (subjectKeys[index]) {
                    option.textContent = this.t(`contact.form.subjects.${subjectKeys[index]}`);
                }
            });
        }

        // Actualizar botón de envío
        const submitButton = document.querySelector('.submit-button');
        if (submitButton) {
            submitButton.textContent = this.t('contact.form.submit');
        }
    }

    updateFooter() {
        const footerText = document.querySelector('.footer-text');
        if (footerText) {
            const year = new Date().getFullYear();
            footerText.innerHTML = `© ${year} Carlos Andrés Vargas. ${this.t('footer.rights')}`;
        }

        const madeWithText = document.querySelector('.footer-made-with');
        if (madeWithText) {
            madeWithText.innerHTML = `${this.t('footer.madeWith')} ❤️ ${this.t('footer.and')} ☕`;
        }
    }

    updateLanguageButton() {
        const langButton = document.querySelector('.language-toggle');
        if (langButton) {
            langButton.textContent = this.t('language.button');
            langButton.title = this.t('language.tooltip');
        }
    }

    // Guardar preferencia de idioma
    saveLanguagePreference(lang) {
        localStorage.setItem('preferredLanguage', lang);
    }

    // Cargar preferencia de idioma
    loadLanguagePreference() {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && this.translations[saved]) {
            this.currentLanguage = saved;
        } else {
            // Detectar idioma del navegador
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('en')) {
                this.currentLanguage = 'en';
            }
        }
    }

    // Inicializar sistema de traducciones
    init() {
        this.loadLanguagePreference();
        this.setupLanguageButton();
        this.updateContent();
    }

    // Configurar botón de cambio de idioma existente
    setupLanguageButton() {
        const langButton = document.querySelector('#languageToggle');
        console.log('Botón de idioma encontrado:', langButton);
        
        if (langButton) {
            // Configurar evento de clic
            langButton.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Botón clickeado, idioma actual:', this.currentLanguage);
                
                const newLang = this.currentLanguage === 'es' ? 'en' : 'es';
                console.log('Cambiando a idioma:', newLang);
                
                this.setLanguage(newLang);
            });

            // Actualizar contenido del botón
            this.updateLanguageButton();
            console.log('Sistema de traducción inicializado correctamente');
        } else {
            console.error('No se encontró el botón de idioma #languageToggle');
        }
    }

    // Actualizar contenido del botón de idioma
    updateLanguageButton() {
        const langButton = document.querySelector('#languageToggle');
        const flagSpan = langButton?.querySelector('.language-flag');
        const textSpan = langButton?.querySelector('.language-text');
        
        console.log('Actualizando botón de idioma:', this.currentLanguage);
        console.log('Elementos encontrados:', { langButton, flagSpan, textSpan });
        
        if (langButton && flagSpan && textSpan) {
            if (this.currentLanguage === 'es') {
                flagSpan.textContent = '🇪🇸';
                textSpan.textContent = 'ES';
                langButton.title = 'Cambiar a inglés';
            } else {
                flagSpan.textContent = '🇺🇸';
                textSpan.textContent = 'EN';
                langButton.title = 'Switch to Spanish';
            }
            console.log('Botón actualizado correctamente');
        } else {
            console.error('No se pudieron encontrar los elementos del botón de idioma');
        }
    }
}

// Crear instancia global
window.translator = new TranslationSystem();

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando traductor...');
    window.translator.init();
});

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TranslationSystem;
}
