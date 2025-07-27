# 📄 Gestión del CV

⚠️ **NOTA IMPORTANTE**: Esta carpeta ya no se usa para el CV. El CV actual se encuentra en la carpeta `/portafolio/cv_vargas.pdf`

## � Para actualizar tu CV:

1. Reemplaza el archivo `portafolio/cv_vargas.pdf` con tu CV actualizado
2. Mantén el nombre del archivo como `cv_vargas.pdf` 
3. O actualiza la referencia en `js/cv-downloader.js` si cambias el nombre

---

Esta carpeta fue creada durante el desarrollo, pero **el sistema usa la carpeta `/portafolio/` para el CV real**.

## 📁 Estado actual de la carpeta:
- ✅ **Icons**: Contiene logos de proyectos (logo.png para COLMI)
- ✅ **Solo documentación**: Este README explicativo
- 🗑️ **Archivos CV eliminados**: Los ejemplos de CV fueron removidos

## ✅ Archivo REAL que se descarga:
- **Ubicación**: `/portafolio/cv_vargas.pdf`
- **Configurado en**: `js/cv-downloader.js`

## 🎨 Gestión de Iconos y Logos

### 📁 Carpeta icons/
- **`logo.png`**: Logo de COLMI (proyecto de reconocimiento de lenguaje de señas)
- **`logo_saludia.png`**: Logo de Saludia (app médica Android para interpretación de exámenes)
- **`logo_paes.png`**: ⏳ _Pendiente_ - Logo de PaesFacil (app educativa para preparación PAES)
- **Uso**: Se muestran en las tarjetas de proyectos en `index.html`
- **Estilos**: Configurados en `css/projects.css` con efectos hover

### Para agregar más logos:
1. **Formato recomendado**: PNG con fondo transparente
2. **Tamaño**: Mínimo 200x200px, máximo 800x800px
3. **Nombrado**: `logo-proyecto.png` (descriptivo)
4. **Actualizar HTML**: Agregar `<img src="assets/icons/nuevo-logo.png">`
5. **Verificar CSS**: Los estilos `.project-logo` se aplican automáticamente

### 📋 Próximo logo pendiente:
**PaesFacil**: Cuando tengas el logo listo, nómbralo como `logo_paes.png` y actualiza el HTML del proyecto 3:
```html
<img src="assets/icons/logo_paes.png" alt="PaesFacil - Preparación PAES" class="project-logo">
```

## 🔄 Cómo Actualizar el CV

**RECORDATORIO**: El CV real está en `/portafolio/cv_vargas.pdf`

### Para actualizar tu CV:
1. Reemplaza el archivo `portafolio/cv_vargas.pdf` con tu CV actualizado
2. Mantén el nombre `cv_vargas.pdf` o actualiza `js/cv-downloader.js`
3. El sistema automáticamente usará el nuevo archivo

## 📋 Contenido Recomendado

### Secciones Esenciales
- ✅ **Información de Contacto**: Email, LinkedIn, GitHub
- ✅ **Perfil Profesional**: Resumen ejecutivo (2-3 líneas)
- ✅ **Experiencia Técnica**: Habilidades organizadas por categorías
- ✅ **Proyectos Destacados**: 3-5 proyectos principales
- ✅ **Habilidades Blandas**: Competencias interpersonales

### Secciones Adicionales (Opcional)
- 📚 **Educación**: Títulos, certificaciones
- 🏆 **Logros**: Reconocimientos, premios
- 🌐 **Idiomas**: Nivel de competencia
- 📖 **Publicaciones**: Artículos, papers

## 🎨 Consejos de Diseño

### Para PDF
- **Fuente**: Inter, Helvetica, o Arial (legibles)
- **Tamaño**: 10-12pt para texto, 14-16pt para títulos
- **Colores**: Mantener consistencia con el portafolio (#00ffff, #8b5cf6)
- **Longitud**: Máximo 2 páginas

### Formato Profesional
- **Encabezado**: Nombre prominente, información de contacto
- **Espaciado**: Usar espacios en blanco para facilitar lectura
- **Consistencia**: Mismo formato para secciones similares
- **Palabras clave**: Incluir términos relevantes para IA/ML

## 🔗 Links de Herramientas Útiles

### Convertidores Markdown → PDF
- [Markdown to PDF](https://md-to-pdf.fly.dev/)
- [Pandoc](https://pandoc.org/) (herramienta de línea de comandos)
- [GitPrint](https://gitprint.com/) (para archivos de GitHub)

### Editores de CV Online
- [Resume.io](https://resume.io/)
- [Canva CV Templates](https://www.canva.com/resumes/)
- [Overleaf](https://www.overleaf.com/) (para LaTeX)

## 📊 Analytics

El sistema registra automáticamente:
- ✅ Número de descargas del CV
- ✅ Timestamp de cada descarga
- ✅ Idioma del usuario al momento de descarga

## 🔧 Personalización Técnica

### Cambiar nombre del archivo
Si quieres cambiar el nombre del archivo:

1. **Renombrar archivo**: Cambia `CV-Carlos-Vargas.pdf` por tu nombre
2. **Actualizar JavaScript**: Modifica la línea en `js/cv-downloader.js`:
   ```javascript
   link.href = 'assets/TU-NUEVO-NOMBRE.pdf';
   link.download = 'TU-NUEVO-NOMBRE.pdf';
   ```

### Agregar múltiples idiomas
Para tener CV en español e inglés:

1. **Crear archivos**: `CV-Carlos-Vargas-ES.pdf` y `CV-Carlos-Vargas-EN.pdf`
2. **Modificar JavaScript**: Detectar idioma actual y descargar el apropiado

## 📝 Notas Importantes

- **Tamaño del archivo**: Mantener el PDF bajo 5MB para descarga rápida
- **Compatibilidad**: Probar en diferentes navegadores
- **Actualización regular**: Revisar y actualizar cada 3-6 meses
- **Backup**: Mantener copias de seguridad de las versiones anteriores

---

*Última actualización: 2025*
