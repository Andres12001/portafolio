// Funcionalidad de descarga de CV
console.log('📄 Módulo de descarga de CV cargado');

const CVDownloader = {
    init() {
        this.setupDownloadButton();
    },

    setupDownloadButton() {
        // Buscar el botón de descarga de CV
        const downloadButton = document.querySelector('[data-translate="hero-cta2"]');
        console.log('🔍 Botón de descarga encontrado:', downloadButton);

        if (downloadButton) {
            downloadButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.downloadCV();
            });
            console.log('✅ Event listener agregado al botón de descarga');
        } else {
            console.error('❌ No se encontró el botón de descarga de CV');
        }
    },

    downloadCV() {
        console.log('📥 Iniciando descarga del CV...');
        
        // Obtener texto traducido
        const startMessage = this.getTranslatedText('cv-download-start');
        const successMessage = this.getTranslatedText('cv-download-success');
        
        // Mostrar notificación de inicio de descarga
        this.showDownloadNotification(startMessage, 'info');

        // Crear elemento de descarga - usando la carpeta portafolio existente
        const link = document.createElement('a');
        link.href = 'portafolio/cv_vargas.pdf';
        link.download = 'CV-Carlos-Vargas.pdf';
        link.style.display = 'none';
        
        // Agregar al DOM, hacer clic y remover
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Mostrar notificación de éxito
        setTimeout(() => {
            this.showDownloadNotification(successMessage, 'success');
        }, 500);

        // Tracking analytics (opcional)
        this.trackDownload();
    },

    getTranslatedText(key) {
        // Intentar obtener el texto del sistema de traducciones
        if (window.SimpleTranslator && window.SimpleTranslator.translations) {
            const lang = window.SimpleTranslator.currentLanguage || 'es';
            return window.SimpleTranslator.translations[lang][key] || key;
        }
        
        // Fallback a textos por defecto
        const fallbacks = {
            'cv-download-start': 'Iniciando descarga del CV...',
            'cv-download-success': '¡CV descargado exitosamente!',
            'cv-download-error': 'Error al descargar el CV'
        };
        
        return fallbacks[key] || key;
    },

    showDownloadNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `download-notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #00ffff, #8b5cf6)' : 'linear-gradient(135deg, #3b82f6, #1d4ed8)'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 10000;
            animation: slideInRight 0.5s ease-out;
            box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        `;
        
        // Agregar icono según el tipo
        const icon = type === 'success' ? '✅' : '📄';
        notification.innerHTML = `${icon} ${message}`;
        
        document.body.appendChild(notification);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }, 3000);
    },

    trackDownload() {
        // Aquí podrías agregar analytics como Google Analytics
        console.log('📊 Descarga de CV registrada para analytics');
        
        // Ejemplo de tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'event_category': 'CV',
                'event_label': 'Carlos Vargas CV',
                'value': 1
            });
        }
    }
};

// Agregar estilos CSS para las animaciones de notificación
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
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
    
    .download-notification {
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        transition: all 0.3s ease;
    }
    
    .download-notification:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 40px rgba(0, 255, 255, 0.4);
    }
`;
document.head.appendChild(notificationStyles);

// Auto-inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Inicializando descargador de CV...');
    CVDownloader.init();
});

// Exportar para uso global
window.CVDownloader = CVDownloader;
