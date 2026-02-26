# **📑 Residoc: Documento Maestro de Arquitectura y Diseño**

## **1\. Visión General**

**Residoc** es una aplicación de trazabilidad sanitaria de nicho para centros de estética y estudios de tatuaje. Su misión es vincular de forma inequívoca los lotes de productos (tintas, viales, agujas) con clientes específicos para garantizar la seguridad del paciente y cumplir con normativas legales.

---

## **2\. Pilares de Funcionalidad (Core)**

### **A. Dashboard y Buscador de Clientes**

* **Interfaz:** Barra de búsqueda prominente y centralizada (estilo Spotlight/Notion).  
* **Filtros:** Búsqueda por Nombre, DNI o Teléfono.  
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

