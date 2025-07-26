# 📄 Gestión del CV

Esta carpeta contiene los archivos del Curriculum Vitae que se descargan desde el portafolio.

## 📁 Archivos Disponibles

### `CV-Carlos-Vargas.pdf`
- **Formato**: PDF optimizado para descarga
- **Uso**: Archivo principal que se descarga al hacer clic en "Descargar CV"
- **Recomendación**: Mantener actualizado con la información más reciente

### `CV-Carlos-Vargas.md`
- **Formato**: Markdown para fácil edición
- **Uso**: Versión editable del CV para actualizaciones
- **Beneficio**: Fácil de mantener y convertir a otros formatos

## 🔄 Cómo Actualizar el CV

### Opción 1: Reemplazar el PDF
1. Crea tu CV actualizado en PDF
2. Nómbralo como `CV-Carlos-Vargas.pdf`
3. Reemplaza el archivo existente en esta carpeta

### Opción 2: Editar el Markdown
1. Edita el archivo `CV-Carlos-Vargas.md`
2. Usa un conversor online para generar PDF desde Markdown
3. Reemplaza el archivo PDF

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
