# **📑 Residoc: Documento Maestro de Arquitectura y Diseño (V4)**

## **1\. Visión General**

**Residoc** es una plataforma de trazabilidad sanitaria "Audit-Ready". Su arquitectura está diseñada para que, ante una inspección de sanidad, el centro pueda demostrar la trazabilidad total (quién, qué, cuándo y dónde) en menos de un minuto.

---

## **2\. Lógica de Compliance Regional (Dynamic Loading)**

La aplicación no es estática; se adapta al marco legal de cada Comunidad Autónoma:

1. **Detección:** El sistema identifica el `CCAA_ID` en el perfil del centro tras el login.  
2. **Inyección:** Supabase sirve las `regional_rules` correspondientes.  
3. **Renderizado Condicional:** \* **Madrid:** Activa Libro de Mantenimiento de Bronceado.  
   * **Cataluña:** Activa Registro específico para Autoridades Sanitarias.  
   * **General:** Textos legales de Consentimiento Informado adaptados por zona.

---

## **3\. Módulos de Control y Gestión (Dashboard)**

El Dashboard es un **Centro de Mando de Cumplimiento**, no una herramienta de entrada de servicios.

### **A. Widget de Trazabilidad Pendiente (Control 24h)**

* **Función:** Localiza servicios estancados en Fase 1 (Legal pero sin datos técnicos).  
* **Alerta Roja:** Los registros que superan las 24h sin completar la Fase 2 resaltan visualmente.  
* **Responsabilidad:** Identifica nombre y apellido del operario que dejó el registro incompleto.


### **B. Gestión de Residuos Biosanitarios (Clase III)**

* **Registro de Retirada:** Formulario para documentar la recogida por gestor autorizado.  
* **Evidencia:** Foto del albarán/DCS almacenada en Supabase Storage.

### **C. Módulo "Audit-Ready" (Modo Inspección)**

* **Acceso:** Panel simplificado de solo lectura para tablets.  
* **Exportación Flash (Un clic):** Genera un ZIP con:  
  1. Histórico de lotes.  
  2. Certificados de técnicos y contratos.  
  3. Registros de esterilización y residuos.

---

## **4\. Operativa en Cabina (Ficha de Cliente)**

Único punto de entrada para servicios, diseñado para **Mobile-First**.

### **Registro en Dos Tiempos**

1. **Fase 1: Aseguramiento Legal (Check-In):** Antes de tocar al cliente. Se crea el servicio y se sube la foto del **Consentimiento Firmado**. El servicio queda "blindado".  
2. **Fase 2: Trazabilidad (Check-Out):** Al finalizar o al final de la jornada.  
   * **Registro de Lotes:** Escaneo de tintas, agujas o viales usados.  
   * **Mapa Corporal:** Pins en el SVG interactivo.  
   * **Evidencia Visual:** Foto del resultado final ("Después").

---

## **5\. Registro de Operarios e Inmutabilidad (Audit Trail)**

Para eliminar el anonimato y cumplir con Sanidad:

* **Sesión Activa:** Cada acción se vincula al `auth.uid()` del trabajador logueado.  
* **Sello de Firma Digital:** Los informes incluyen: *"Documentado por: \[Nombre\] | ID: \[UUID\] | Timestamp inmutable"*.  
* **Seguridad RLS:** Un operario solo edita sus borradores. Una vez cerrado el registro (Fase 2), es **inalterable** (Soporte legal ante inspección).

---

## **6\. Identidad Visual y Stack (Soft-Tech)**

* **Stack:** Next.js \+ Tailwind \+ Supabase (RLS estricto para aislamiento de datos entre centros).  
* **Paleta Pastel:** Fondo `#F9F7F2`, Menta `#B8D8D8`, Lavanda `#E2C2FF`.  
* **UI:** Tipografía **Outfit** única. Sin barra de navegación en Dashboard. Nombres de clientes siempre son enlaces.

