/* ========================================
   FORMULARIO DE CONTACTO
   ======================================== */

const ContactForm = {
    form: null,
    submitButton: null,
    inputs: null,
    
    init() {
        this.form = document.getElementById('contactForm');
        if (!this.form) return;
        
        this.submitButton = this.form.querySelector('.submit-button');
        this.inputs = this.form.querySelectorAll('input, select, textarea');
        
        this.setupValidation();
        this.setupSubmission();
        this.setupContactMethods();
        this.injectFormStyles();
        
        console.log('📝 ContactForm inicializado');
    },
    
    setupValidation() {
        this.inputs.forEach(input => {
            input.addEventListener('input', () => this.validateField(input));
            input.addEventListener('blur', () => this.validateField(input));
        });
    },
    
    setupSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.validateForm()) {
                this.submitForm();
            }
        });
    },
    
    validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');
        const fieldGroup = field.closest('.form-group');
        
        // Remover mensajes de error previos
        const existingError = fieldGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        field.classList.remove('error', 'valid');
        
        // Validar campo requerido
        if (isRequired && !value) {
            this.showFieldError(field, window.translator ? window.translator.t('contact.validation.required') : 'Este campo es obligatorio');
            return false;
        }
        
        // Validaciones específicas
        if (field.type === 'email' && value) {
            if (!Utils.isValidEmail(value)) {
                this.showFieldError(field, window.translator ? window.translator.t('contact.validation.invalidEmail') : 'Ingresa un email válido');
                return false;
            }
        }
        
        if (field.name === 'message' && value && value.length < 10) {
            this.showFieldError(field, window.translator ? window.translator.t('contact.validation.messageLength') : 'El mensaje debe tener al menos 10 caracteres');
            return false;
        }
        
        // Campo válido
        if (value) {
            field.classList.add('valid');
        }
        
        return true;
    },
    
    showFieldError(field, message) {
        field.classList.add('error');
        const fieldGroup = field.closest('.form-group');
        const errorDiv = Utils.createElement('div', ['error-message']);
        errorDiv.textContent = message;
        fieldGroup.appendChild(errorDiv);
    },
    
    validateForm() {
        let isValid = true;
        
        this.inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    },
    
    async submitForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Mostrar estado de carga
        this.setLoadingState(true);
        
        try {
            // Simular envío del formulario
            await this.simulateFormSubmission(data);
            
            // Éxito
            this.handleSubmissionSuccess();
            
        } catch (error) {
            // Error
            this.handleSubmissionError(error);
        } finally {
            this.setLoadingState(false);
        }
    },
    
    async simulateFormSubmission(data) {
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Datos del formulario:', data);
        
        // En producción, aquí iría la llamada real al servidor
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        // 
        // if (!response.ok) {
        //     throw new Error('Error en el servidor');
        // }
        
        return { success: true };
    },
    
    handleSubmissionSuccess() {
        const successMessage = window.translator ? window.translator.t('contact.success') : '¡Mensaje enviado exitosamente! Te contactaré pronto.';
        NotificationSystem.show(successMessage, 'success');
        
        // Limpiar formulario
        this.form.reset();
        
        // Remover clases de validación
        this.inputs.forEach(input => {
            input.classList.remove('valid', 'error');
            const fieldGroup = input.closest('.form-group');
            const errorMessage = fieldGroup.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        });
        
        // Efecto de confeti
        AnimationManager.createConfetti();
    },
    
    handleSubmissionError(error) {
        console.error('Error al enviar formulario:', error);
        NotificationSystem.show('Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
    },
    
    setLoadingState(isLoading) {
        if (isLoading) {
            this.submitButton.classList.add('loading');
            this.submitButton.disabled = true;
        } else {
            this.submitButton.classList.remove('loading');
            this.submitButton.disabled = false;
        }
    },
    
    setupContactMethods() {
        const contactMethods = document.querySelectorAll('.contact-method');
        
        contactMethods.forEach((method, index) => {
            // Animación de entrada escalonada
            setTimeout(() => {
                method.style.opacity = '1';
                method.style.transform = 'translateX(0)';
            }, index * 200);
            
            // Efecto de clic para copiar información
            method.addEventListener('click', async () => {
                const details = method.querySelector('.contact-details p');
                const text = details.textContent;
                
                if (text.includes('@') || text.includes('linkedin.com') || text.includes('github.com')) {
                    const success = await Utils.copyToClipboard(text);
                    
                    if (success) {
                        NotificationSystem.show(`${text} copiado al portapapeles`, 'success');
                        
                        // Efecto visual de copiado
                        method.style.transform = 'translateX(10px) scale(1.02)';
                        setTimeout(() => {
                            method.style.transform = 'translateX(10px)';
                        }, 200);
                    } else {
                        NotificationSystem.show('No se pudo copiar al portapapeles', 'error');
                    }
                }
            });
        });
    },
    
    injectFormStyles() {
        if (document.querySelector('#form-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'form-styles';
        style.textContent = `
            .contact-method {
                opacity: 0;
                transform: translateX(-50px);
                transition: all 0.6s ease-out;
            }
        `;
        document.head.appendChild(style);
    }
};
