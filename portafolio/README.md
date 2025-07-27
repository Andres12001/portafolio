# 📄 CV - Carpeta Principal

Esta es la carpeta **OFICIAL** donde se almacena tu Curriculum Vitae que se descarga desde el portafolio.

## 📋 Archivo Actual

### `cv_vargas.pdf`
- ✅ **Archivo activo**: Este es el CV que se descarga cuando los visitantes hacen clic en "Descargar CV"
- 🔗 **Referenciado en**: `js/cv-downloader.js`
- 📱 **Funciona en**: Español e Inglés (mismo archivo)

## 🔄 Para Actualizar tu CV

### Opción 1: Reemplazar archivo (Recomendado)
1. **Prepara tu CV actualizado** en formato PDF
2. **Nómbralo exactamente**: `cv_vargas.pdf`
3. **Reemplaza** el archivo existente en esta carpeta
4. **¡Listo!** - El nuevo CV se descargará automáticamente

### Opción 2: Cambiar nombre del archivo
Si prefieres un nombre diferente:

1. **Renombra tu archivo** como desees (ej: `Carlos-Vargas-CV.pdf`)
2. **Actualiza el código** en `js/cv-downloader.js`:
   ```javascript
   link.href = 'portafolio/TU-NUEVO-NOMBRE.pdf';
   link.download = 'TU-NUEVO-NOMBRE.pdf';
   ```

## ⚙️ Configuración Técnica

### Ubicación en el código:
- **Archivo**: `js/cv-downloader.js`
- **Línea**: `link.href = 'portafolio/cv_vargas.pdf';`

### Características:
- 📥 **Descarga automática**: Sin redirecciones
- 🌐 **Multiidioma**: Notificaciones en ES/EN
- ✨ **Feedback visual**: Animaciones y confirmaciones
- 📊 **Analytics ready**: Preparado para tracking

## 📝 Recomendaciones para el CV

### Contenido esencial:
- 📧 **Contacto**: Email, LinkedIn, GitHub actualizados
- 🎯 **Perfil profesional**: 2-3 líneas sobre tu especialización en IA
- 💻 **Tecnologías**: Python, TensorFlow, OpenCV, etc.
- 🚀 **Proyectos**: 3-5 proyectos más relevantes
- 🎓 **Educación y certificaciones**

### Formato técnico:
- 📄 **Páginas**: Máximo 2 páginas
- 📐 **Tamaño**: Menor a 5MB para descarga rápida
- 🎨 **Diseño**: Profesional, colores consistentes con el portafolio
- 🔤 **Fuente**: Inter, Helvetica o Arial (legibles)

## 🧪 Pruebas

Para verificar que funciona:
1. Abrir el portafolio en el navegador
2. Hacer clic en "Descargar CV" / "Download CV"
3. Verificar que se descarga `cv_vargas.pdf`
4. Comprobar en ambos idiomas (ES/EN)

## 🆘 Solución de Problemas

### Si no se descarga:
- ✅ Verificar que el archivo existe: `portafolio/cv_vargas.pdf`
- ✅ Comprobar permisos del archivo
- ✅ Ver consola del navegador (F12) para errores
- ✅ Verificar que el path en `cv-downloader.js` es correcto

### Si el nombre es incorrecto:
- Actualizar `link.download` en `cv-downloader.js`

---

*Carpeta gestionada automáticamente por el sistema de descarga del portafolio*
