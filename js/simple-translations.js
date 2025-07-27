// Sistema de traducciones simplificado
console.log('Cargando sistema de traducciones...');

const SimpleTranslator = {
    currentLanguage: 'es',
    
    translations: {
        es: {
            // Navegación
            'nav-home': 'Inicio',
            'nav-projects': 'Proyectos', 
            'nav-skills': 'Habilidades',
            'nav-contact': 'Contacto',
            
            // Hero
            'hero-greeting': 'Hola, soy',
            'hero-name': 'Carlos Andrés Vargas',
            'hero-title': 'Desarrollador de Inteligencia Artificial',
            'hero-subtitle': 'Especializado en Computer Vision y Procesamiento de Lenguaje Natural',
            'hero-description': 'Transformando ideas innovadoras en soluciones de IA que impactan positivamente en la sociedad.',
            'hero-cta1': 'Ver Proyectos',
            'hero-cta2': 'Descargar CV',
            
            // Proyectos
            'projects-title': 'Proyectos Destacados',
            'projects-subtitle': 'Explora mis trabajos más recientes en Inteligencia Artificial',
            'project1-title': 'COLMI - Reconocimiento de Lenguaje de Señas',
            'project1-desc': 'Sistema de IA que traduce lenguaje de señas a texto en tiempo real usando computer vision y redes neuronales convolucionales.',
            'project2-title': 'Saludia - Chatbot Médico Inteligente',
            'project2-desc': 'App Android médica que interpreta exámenes de sangre mediante IA y comunica los resultados de forma simple y comprensible a los usuarios.',
            'project3-title': 'PaesFacil - Preparación PAES',
            'project3-desc': 'App móvil gratuita que ayuda a estudiantes chilenos a prepararse para la PAES con ejercicios, simulacros y seguimiento de progreso.',
            
            // Habilidades
            'skills-title': 'Habilidades Técnicas',
            'skills-subtitle': 'Tecnologías y herramientas que domino',
            
            // Contacto
            'contact-title': 'Contacto',
            'contact-subtitle': 'Trabajemos juntos en tu próximo proyecto',
            
            // CV Download
            'cv-download-start': 'Iniciando descarga del CV...',
            'cv-download-success': '¡CV descargado exitosamente!',
            'cv-download-error': 'Error al descargar el CV'
        },
        
        en: {
            // Navigation
            'nav-home': 'Home',
            'nav-projects': 'Projects',
            'nav-skills': 'Skills', 
            'nav-contact': 'Contact',
            
            // Hero
            'hero-greeting': 'Hi, I am',
            'hero-name': 'Carlos Andrés Vargas',
            'hero-title': 'Artificial Intelligence Developer',
            'hero-subtitle': 'Specialized in Computer Vision and Natural Language Processing',
            'hero-description': 'Transforming innovative ideas into AI solutions that positively impact society.',
            'hero-cta1': 'View Projects',
            'hero-cta2': 'Download CV',
            
            // Projects
            'projects-title': 'Featured Projects',
            'projects-subtitle': 'Explore my latest work in Artificial Intelligence',
            'project1-title': 'COLMI - Sign Language Recognition',
            'project1-desc': 'AI system that translates sign language to text in real-time using computer vision and convolutional neural networks.',
            'project2-title': 'Saludia - Intelligent Medical Chatbot',
            'project2-desc': 'Medical Android app that interprets blood test results using AI and communicates findings in a simple, understandable way to users.',
            'project3-title': 'PaesFacil - PAES Preparation',
            'project3-desc': 'Free mobile app that helps Chilean students prepare for PAES with exercises, mock tests, and progress tracking.',
            
            // Skills
            'skills-title': 'Technical Skills',
            'skills-subtitle': 'Technologies and tools I master',
            
            // Contact
            'contact-title': 'Contact',
            'contact-subtitle': 'Let\'s work together on your next project',
            
            // CV Download
            'cv-download-start': 'Starting CV download...',
            'cv-download-success': 'CV downloaded successfully!',
            'cv-download-error': 'Error downloading CV'
        }
    },
    
    init() {
        console.log('Inicializando traductor simple...');
        this.loadLanguagePreference();
        this.setupLanguageButton();
        this.updateContent();
        console.log('Traductor inicializado correctamente');
    },
    
    loadLanguagePreference() {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && (saved === 'es' || saved === 'en')) {
            this.currentLanguage = saved;
        }
    },
    
    setupLanguageButton() {
        const button = document.getElementById('languageToggle');
        console.log('Configurando botón de idioma:', button);
        
        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Botón clickeado, idioma actual:', this.currentLanguage);
                this.toggleLanguage();
            });
            
            this.updateLanguageButton();
        } else {
            console.error('Botón de idioma no encontrado');
        }
    },
    
    toggleLanguage() {
        const newLang = this.currentLanguage === 'es' ? 'en' : 'es';
        console.log('Cambiando de', this.currentLanguage, 'a', newLang);
        
        this.currentLanguage = newLang;
        localStorage.setItem('preferredLanguage', newLang);
        
        this.updateContent();
        this.updateLanguageButton();
        
        console.log('Idioma cambiado a:', this.currentLanguage);
    },
    
    updateLanguageButton() {
        const button = document.getElementById('languageToggle');
        const flag = button?.querySelector('.language-flag');
        const text = button?.querySelector('.language-text');
        
        if (button && flag && text) {
            if (this.currentLanguage === 'es') {
                flag.textContent = '🇪🇸';
                text.textContent = 'ES';
                button.title = 'Cambiar a inglés';
            } else {
                flag.textContent = '🇺🇸';
                text.textContent = 'EN';
                button.title = 'Switch to Spanish';
            }
        }
    },
    
    updateContent() {
        console.log('Actualizando contenido al idioma:', this.currentLanguage);
        const lang = this.currentLanguage;
        const translations = this.translations[lang];
        
        // Actualizar elementos por ID y clase
        this.updateElementsByAttribute('data-translate', translations);
        
        // Actualizar título de página
        document.title = lang === 'es' 
            ? 'Carlos Andrés Vargas - Desarrollador de IA'
            : 'Carlos Andrés Vargas - AI Developer';
        
        document.documentElement.lang = lang;
    },
    
    updateElementsByAttribute(attribute, translations) {
        const elements = document.querySelectorAll(`[${attribute}]`);
        console.log(`Encontrados ${elements.length} elementos para traducir`);
        
        elements.forEach(element => {
            const key = element.getAttribute(attribute);
            if (translations[key]) {
                element.textContent = translations[key];
                console.log(`Traducido: ${key} -> ${translations[key]}`);
            }
        });
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM listo, inicializando traductor simple...');
    SimpleTranslator.init();
});

// Exponer globalmente
window.SimpleTranslator = SimpleTranslator;
