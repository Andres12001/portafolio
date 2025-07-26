/* ========================================
   CONFIGURACIÓN PRINCIPAL
   ======================================== */

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // El sistema de traducciones se inicializa automáticamente
    console.log('Inicializando aplicación...');
    
    // Inicializar todos los módulos
    if (typeof AnimationManager !== 'undefined') AnimationManager.init();
    if (typeof NavigationManager !== 'undefined') NavigationManager.init();
    if (typeof ScrollEffects !== 'undefined') ScrollEffects.init();
    if (typeof NeuralNetwork !== 'undefined') NeuralNetwork.init();
    if (typeof ParticleSystem !== 'undefined') ParticleSystem.init();
    if (typeof ContactForm !== 'undefined') ContactForm.init();
    if (typeof NotificationSystem !== 'undefined') NotificationSystem.init();
    
    // Configuraciones adicionales
    setupGlobalEventListeners();
    optimizeForMobile();
    
    console.log('🚀 Portafolio inicializado correctamente');
});

// Event listeners globales
function setupGlobalEventListeners() {
    // Redimensionamiento de ventana
    window.addEventListener('resize', Utils.debounce(() => {
        optimizeForMobile();
        NavigationManager.updateActiveSection();
    }, 250));
    
    // Manejo de errores globales
    window.addEventListener('error', (e) => {
        console.error('Error capturado:', e.error);
    });
}

// Optimizaciones para dispositivos móviles
function optimizeForMobile() {
    if (Utils.isMobile()) {
        // Reducir animaciones en móvil para mejor rendimiento
        document.documentElement.style.setProperty('--transition', 'all 0.2s ease');
        
        // Desactivar partículas en móvil
        ParticleSystem.disable();
        
        // Optimizar animaciones de la red neuronal
        const connections = document.querySelectorAll('.connection');
        connections.forEach(connection => {
            connection.style.animationDuration = '4s';
        });
    } else {
        // Restaurar configuraciones para desktop
        document.documentElement.style.setProperty('--transition', 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)');
        ParticleSystem.enable();
    }
}
