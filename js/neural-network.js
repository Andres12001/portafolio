/* ========================================
   ANIMACIÓN DE RED NEURONAL
   ======================================== */

const NeuralNetwork = {
    connections: null,
    neurons: null,
    animationInterval: null,
    
    init() {
        this.connections = document.querySelectorAll('.connection');
        this.neurons = document.querySelectorAll('.neuron');
        
        this.startAnimations();
        this.setupPeriodicAnimation();
        
        console.log('🧠 NeuralNetwork inicializado');
    },
    
    startAnimations() {
        // Iniciar animaciones con delay
        setTimeout(() => this.animateConnections(), 1000);
        setTimeout(() => this.animateNeurons(), 500);
    },
    
    animateConnections() {
        this.connections.forEach((connection, index) => {
            setTimeout(() => {
                connection.style.animation = 'pulse 2s ease-in-out';
                setTimeout(() => {
                    connection.style.animation = 'pulse 3s infinite ease-in-out';
                }, 2000);
            }, index * 200);
        });
    },
    
    animateNeurons() {
        this.neurons.forEach((neuron, index) => {
            setTimeout(() => {
                neuron.style.animation = 'neuronPulse 1.5s ease-in-out';
                setTimeout(() => {
                    neuron.style.animation = 'neuronPulse 2s infinite ease-in-out';
                }, 1500);
            }, index * 150);
        });
    },
    
    setupPeriodicAnimation() {
        // Repetir animaciones cada 10 segundos
        this.animationInterval = setInterval(() => {
            this.animateConnections();
            this.animateNeurons();
        }, 10000);
    },
    
    // Activar modo especial (Easter egg)
    activateSpecialMode() {
        this.neurons.forEach(neuron => {
            neuron.style.animation = 'neuronPulse 0.5s infinite ease-in-out';
            neuron.style.fill = '#ff0080';
        });
        
        // Restaurar después de 5 segundos
        setTimeout(() => {
            this.neurons.forEach(neuron => {
                neuron.style.animation = 'neuronPulse 2s infinite ease-in-out';
                neuron.style.fill = '';
            });
        }, 5000);
    },
    
    // Parar todas las animaciones
    stop() {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
        
        this.connections.forEach(connection => {
            connection.style.animation = 'none';
        });
        
        this.neurons.forEach(neuron => {
            neuron.style.animation = 'none';
        });
    },
    
    // Reanudar animaciones
    resume() {
        this.startAnimations();
        this.setupPeriodicAnimation();
    }
};
