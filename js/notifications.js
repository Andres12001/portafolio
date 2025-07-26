/* ========================================
   SISTEMA DE NOTIFICACIONES
   ======================================== */

const NotificationSystem = {
    container: null,
    notifications: [],
    
    init() {
        this.createContainer();
        this.injectStyles();
        
        console.log('🔔 NotificationSystem inicializado');
    },
    
    createContainer() {
        this.container = Utils.createElement('div', ['notification-container'], {
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: '10000',
            pointerEvents: 'none'
        });
        
        document.body.appendChild(this.container);
    },
    
    show(message, type = 'success', duration = 3000) {
        // Verificar si el mensaje es una clave de traducción
        const translatedMessage = window.translator ? 
            (message.includes('.') ? window.translator.t(message) : message) : 
            message;
            
        const notification = this.createNotification(translatedMessage, type);
        
        this.container.appendChild(notification);
        this.notifications.push(notification);
        
        // Mostrar con animación
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        }, 10);
        
        // Ocultar después del tiempo especificado
        setTimeout(() => {
            this.hideNotification(notification);
        }, duration);
        
        return notification;
    },
    
    createNotification(message, type) {
        const notification = Utils.createElement('div', ['notification', `notification--${type}`], {
            background: this.getBackgroundForType(type),
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '10px',
            marginBottom: '10px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            transform: 'translateX(100%)',
            opacity: '0',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: 'auto',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            maxWidth: '350px',
            wordWrap: 'break-word'
        });
        
        notification.textContent = message;
        
        // Cerrar al hacer clic
        notification.addEventListener('click', () => {
            this.hideNotification(notification);
        });
        
        return notification;
    },
    
    getBackgroundForType(type) {
        switch (type) {
            case 'success':
                return 'linear-gradient(135deg, #00ffff, #8b5cf6)';
            case 'error':
                return 'linear-gradient(135deg, #e94560, #ff6b6b)';
            case 'warning':
                return 'linear-gradient(135deg, #ffa726, #ff7043)';
            case 'info':
                return 'linear-gradient(135deg, #3b82f6, #1e40af)';
            default:
                return 'linear-gradient(135deg, #00ffff, #8b5cf6)';
        }
    },
    
    hideNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
            this.notifications = this.notifications.filter(n => n !== notification);
        }, 500);
    },
    
    // Métodos de conveniencia
    success(message, duration) {
        return this.show(message, 'success', duration);
    },
    
    error(message, duration) {
        return this.show(message, 'error', duration);
    },
    
    warning(message, duration) {
        return this.show(message, 'warning', duration);
    },
    
    info(message, duration) {
        return this.show(message, 'info', duration);
    },
    
    // Limpiar todas las notificaciones
    clearAll() {
        this.notifications.forEach(notification => {
            this.hideNotification(notification);
        });
    },
    
    injectStyles() {
        if (document.querySelector('#notification-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification-container {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }
            
            .notification:hover {
                transform: translateX(-5px) !important;
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4) !important;
            }
            
            @media (max-width: 480px) {
                .notification-container {
                    top: 10px;
                    right: 10px;
                    left: 10px;
                    align-items: stretch;
                }
                
                .notification {
                    max-width: none !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
};
