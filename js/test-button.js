// Script de prueba simple para el botón de idioma
console.log('🔧 Script de prueba cargado');

document.addEventListener('DOMContentLoaded', function() {
    console.log('🟢 DOM cargado');
    
    const button = document.getElementById('languageToggle');
    console.log('🔍 Botón encontrado:', button);
    
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🖱️ ¡Botón clickeado!');
            
            const flag = button.querySelector('.language-flag');
            const text = button.querySelector('.language-text');
            
            if (text.textContent === 'ES') {
                flag.textContent = '🇺🇸';
                text.textContent = 'EN';
                console.log('🇺🇸 Cambiado a inglés');
            } else {
                flag.textContent = '🇪🇸';
                text.textContent = 'ES';
                console.log('🇪🇸 Cambiado a español');
            }
        });
        
        console.log('✅ Event listener agregado al botón');
    } else {
        console.error('❌ No se encontró el botón #languageToggle');
    }
});
