function injectNavigation() {
    const navContainer = document.getElementById('mainNav');
    if (!navContainer) return;

    // Get current page name to highlight active item
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';

    const menuItems = [
        { name: 'Inicio', icon: 'ph-house', path: 'dashboard.html' },
        { name: 'Residuos', icon: 'ph-biohazard', path: 'residuos.html' },
        { name: 'Inspección', icon: 'ph-shield-check', path: 'inspeccion.html' },
    ];

    const navHtml = `
        <!-- Floating Navigation -->
        
        <!-- PC Sidebar (Left) -->
        <aside class="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 w-20 bg-[#0f172a] border border-white/10 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex-col items-center py-8 z-[100] gap-8">
            <div class="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shrink-0">
                <i class="ph ph-activity text-xl font-bold"></i>
            </div>
            
            ${menuItems.map(item => `
                <a href="${item.path}" 
                   class="flex flex-col items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 group ${currentPage === item.path ? 'bg-brand/10 text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}">
                    <div class="relative">
                        <i class="ph ${item.icon} text-2xl transition-transform group-hover:scale-110"></i>
                        ${currentPage === item.path ? '<div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand rounded-full shadow-[0_0_10px_#4A90E2]"></div>' : ''}
                    </div>
                </a>
            `).join('')}
            
            <div class="mt-auto pt-6 border-t border-white/10 w-10 flex flex-col items-center">
                 <button onclick="handleLogout()" class="w-12 h-12 flex items-center justify-center rounded-2xl text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-all">
                    <i class="ph ph-power text-2xl"></i>
                </button>
            </div>
        </aside>

        <!-- Mobile/Tablet Bottom Bar -->
        <nav class="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 h-16 bg-[#0f172a] border border-white/10 rounded-[24px] shadow-2xl flex items-center justify-around px-2 z-[100] w-[90%] max-w-[400px]">
            ${menuItems.map(item => `
                <a href="${item.path}" 
                   class="flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${currentPage === item.path ? 'text-white bg-brand/10' : 'text-white/40'}">
                    <div class="relative">
                        <i class="ph ${item.icon} text-2xl"></i>
                        ${currentPage === item.path ? '<div class="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand rounded-full shadow-[0_0_10px_#4A90E2]"></div>' : ''}
                    </div>
                </a>
            `).join('')}
            
            <div class="w-px h-6 bg-white/10 mx-1"></div>
            
            <button onclick="handleLogout()" class="w-14 h-14 flex items-center justify-center rounded-2xl text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-all">
                <i class="ph ph-power text-2xl"></i>
            </button>
        </nav>

        <style>
            body { 
                padding-bottom: 7rem !important; 
            }
            
            @media (min-width: 1024px) {
                body { 
                    padding-left: 140px !important; 
                    padding-bottom: 2rem !important;
                }
            }

            aside, nav {
                box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
            }
        </style>
    `;

    navContainer.innerHTML = navHtml;
}

// Global logout function
window.handleLogout = async () => {
    try {
        if (window.supabase) {
            await window.supabase.auth.signOut();
        }
    } catch (e) {
        console.error('Error during sign out:', e);
    }
    window.location.href = 'index.html';
};

// Run immediately
injectNavigation();
