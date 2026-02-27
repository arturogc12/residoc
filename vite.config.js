import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        fichaCliente: resolve(__dirname, 'ficha-cliente.html'),
        fichaLotes: resolve(__dirname, 'ficha-lotes.html'),
        fichaServicio: resolve(__dirname, 'ficha-servicio.html'),
        inspeccion: resolve(__dirname, 'inspeccion.html'),
        listadoClientes: resolve(__dirname, 'listado-clientes.html'),
        listadoLotes: resolve(__dirname, 'listado-lotes.html'),
        listadoServicios: resolve(__dirname, 'listado-servicios.html'),
        onboarding: resolve(__dirname, 'onboarding.html'),
        reportes: resolve(__dirname, 'reportes.html'),
        residuos: resolve(__dirname, 'residuos.html'),
      },
    },
  },
});
