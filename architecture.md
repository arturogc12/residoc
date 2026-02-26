# **📑 Residoc: Documento Maestro de Arquitectura y Diseño**

## **1\. Visión General**

**Residoc** es una aplicación de trazabilidad sanitaria de nicho para centros de estética y estudios de tatuaje. Su misión es vincular de forma inequívoca los lotes de productos (tintas, viales, agujas) con clientes específicos para garantizar la seguridad del paciente y cumplir con normativas legales.


---

## **2\. Pilares de Funcionalidad (Core)**

### **A. Dashboard y Buscador de Clientes**

* **Interfaz:** Barra de búsqueda prominente y centralizada (estilo Spotlight/Notion).  
* **Filtros:** Búsqueda por Nombre, DNI, Teléfono o Lote.  
* **Navegación:** Acceso instantáneo a la Ficha de Cliente.


### **B. Ficha de Cliente e Historial Visual**

* **Resumen Técnico:** Lista cronológica de servicios realizados.  
* **Detalle de Servicio:** Fecha, tipo de tratamiento y **vinculación al lote**.  
* **Evidencia Gráfica:** Mapa corporal (SVG interactivo) con "pins" que marcan la zona tratada. Cada pin está enlazado a la información del producto utilizado.

### **C. Buscador Inverso (Módulo de Seguridad)**

* **Propósito:** Localizar clientes afectados por un lote defectuoso.  
* **Lógica:** Introduces un "Número de Lote" $\\rightarrow$ Obtienes lista de clientes asociados \+ fechas de aplicación.

### **D. Reporting y Exportación**

* **Generador:** Filtros por rango de fechas y cliente.  
* **Formato:** Exportación a PDF/CSV con validez legal para inspecciones de sanidad.

---

## **3\. Modelo de Datos (Esquema de Relaciones)**

| Entidad | Campos Clave | Relación |
| :---- | :---- | :---- |
| **Cliente** | id, nombre, DNI, email | 1:N con Servicios |
| **Lote (Producto)** | id\_lote, nombre\_producto, fabricante, caducidad | 1:N con Servicios |
| **Servicio** | id\_servicio, fecha, id\_cliente, id\_lote, coords\_graficas | N:1 con Cliente y Lote |

---

## **4\. Identidad Visual (Concepto: Soft-Tech)**

El diseño debe alejarse de la frialdad médica y acercarse a una estética moderna, limpia y acogedora.

* **Estilo:** Minimalismo orgánico con bordes muy redondeados (Pill-shape) y espacios optimizados para lectura rápida.
* **Tipografía única:** Todo el sistema visual usa **Outfit** (Sans-serif moderna) en distintos pesos para mantener una imagen puramente tecnológica y eliminar distracciones "editoriales".  
* **Paleta de Colores (Pasteles):**  
  * **Fondo:** \#F9F7F2 (Crema/Hueso).  
  * **Acciones:** \#B8D8D8 (Verde Menta suave).  
  * **Acentos:** \#E2C2FF (Lavanda).  
  * **Texto:** \#4A4E69 (Gris azulado profundo).  
* **UI Components:** Sombras muy suaves (Soft Shadows), llamadas a la acción directas ("Prueba gratuita de 14 días") y alto contraste en métricas clave.

---

## **5\. Reglas de Negocio "Antigravity"**

1. **Trazabilidad Obligatoria:** No se puede cerrar un registro de servicio sin un lote asociado.
2. **Integridad de Datos:** Los lotes no se eliminan, se archivan (para mantener el histórico legal).  
3. **Privacidad:** Acceso restringido a datos sensibles de salud.

---

## **6\. Stack Tecnológico Sugerido**

* **Frontend:** Next.js (React) \+ Tailwind CSS.  
* **Backend/DB:** Supabase (PostgreSQL) para relaciones sólidas y rapidez de despliegue.  
* **Gráficos:** SVG interactivos para el mapa corporal.

# **7\. Ejemplo web:** https://www.trustkeith.co/?ref=saaspo.com

## **8. Navegación y UI**

* **Botón home:** El logo de la app debe ser el botón home.
* **Barra de navegación:** En la parte superior, transparente. Solo visible al inicio; desaparece al hacer scroll. Login y dashboard no tienen barra de navegación.
* **Títulos:** Claros y descriptivos. Primera letra en mayúscula, el resto en minúscula.
* **Clientes:** Los nombres de clientes siempre son enlaces a su ficha.

---

## **9. Diseño Mobile-First y Field-Ready**

La aplicación está diseñada prioritariamente para uso en móviles y tablets. El registro ocurre en el punto de atención al cliente, no en una oficina — la interfaz debe poder manejarse con una sola mano.

### **9.1. Adaptabilidad móvil**

* **Framework CSS:** Tailwind CSS con breakpoints desde 360px.
* **Touch targets:** Mínimo 44×44px en todos los elementos interactivos para uso cómodo en movimiento.
* **Optimización de carga:** Activos ligeros para funcionamiento óptimo en redes con cobertura limitada.

### **9.2. Integración de hardware**

* **Escaneo de código de barras / QR:** Captura mediante la cámara del dispositivo (API nativa del navegador) para leer lotes de proveedores directamente.
* **Captura de evidencias fotográficas:** Subida de fotos (albaranes, estado del lote, zona tratada) directamente a Supabase Storage desde la interfaz móvil.