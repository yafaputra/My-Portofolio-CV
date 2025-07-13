<template>
    <header class="sticky top-0 z-50 transition-all duration-500 border-b border-emerald-500/20 backdrop-blur-xl bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-900/95 shadow-2xl shadow-emerald-500/10">
        <!-- Animated background particles -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-0 left-0 w-full h-full">
                <div class="absolute animate-float-slow top-4 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full blur-sm"></div>
                <div class="absolute animate-float-medium top-6 right-1/3 w-1 h-1 bg-teal-400/40 rounded-full blur-sm"></div>
                <div class="absolute animate-float-fast top-8 left-2/3 w-1.5 h-1.5 bg-cyan-400/25 rounded-full blur-sm"></div>
            </div>
        </div>

        <nav class="container mx-auto px-6 py-3">
            <div class="flex justify-between items-center relative">
                <!-- Enhanced decorative background lines -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent animate-pulse-slow"></div>
                    <div class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500/20 to-transparent animate-pulse-slow"></div>
                    <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-pulse-slower"></div>
                </div>

                <!-- Simple Logo -->
                <div class="flex items-center group cursor-pointer relative">
                    <!-- Complete logo with scale effect -->
                    <div class="group-hover:scale-110 transition-all duration-300 flex items-center">
                        <!-- Terminal-style brackets -->
                        <span class="text-emerald-400 font-mono text-lg mr-1 group-hover:text-emerald-300 transition-colors duration-300">&lt;</span>

                        <!-- Name -->
                        <div class="text-xl font-bold text-white relative">
                            <span class="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent group-hover:from-emerald-200 group-hover:via-teal-200 group-hover:to-cyan-200 transition-all duration-500">
                                Yafa Nanda Putra
                            </span>
                        </div>

                        <span class="text-emerald-400 font-mono text-lg ml-1 group-hover:text-emerald-300 transition-colors duration-300">/&gt;</span>
                    </div>
                </div>

                <!-- Enhanced Navigation Menu -->
                <ul class="hidden md:flex space-x-8 items-center relative z-10">
                    <li v-for="(item, index) in navItems" :key="index">
                        <a :href="item.link"
                           class="relative text-gray-300 hover:text-emerald-400 font-medium transition-colors duration-300 px-4 py-2 group">
                            <!-- Simple text -->
                            <span class="relative z-10">{{ item.text }}</span>

                            <!-- Simple underline effect -->
                            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-4/5 transition-all duration-300 rounded-full"></div>
                        </a>
                    </li>
                </ul>

                <!-- Enhanced Contact Button -->
                <div class="hidden md:block relative z-10">
                    <a href="#kontak"
                       class="relative inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 overflow-hidden group transform hover:-translate-y-1 hover:scale-105 border border-emerald-500/30 hover:border-emerald-400/50">
                        <!-- Animated background -->
                        <div class="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <!-- Pulse effect -->
                        <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/20 to-teal-400/20 animate-pulse-glow opacity-0 group-hover:opacity-100"></div>

                        <!-- Enhanced brackets -->
                        <span class="relative z-10 font-mono text-sm text-emerald-200 group-hover:text-white transition-colors duration-300 group-hover:animate-bounce-subtle">&lt;</span>
                        <span class="relative z-10 font-semibold">Kontak</span>
                        <span class="relative z-10 font-mono text-sm text-emerald-200 group-hover:text-white transition-colors duration-300 group-hover:animate-bounce-subtle">/&gt;</span>

                        <!-- Moving light effect -->
                        <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-lg"></span>

                        <!-- Corner accents -->
                        <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                </div>

                <!-- Enhanced Mobile Menu Button -->
                <button @click="toggleMobileMenu" class="md:hidden p-3 rounded-lg hover:bg-emerald-500/10 transition-all duration-200 backdrop-blur-xl bg-slate-800/50 border border-emerald-500/30 group relative overflow-hidden">
                    <!-- Ripple effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>

                    <svg class="w-6 h-6 text-gray-300 group-hover:text-emerald-400 transition-colors duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>

                    <!-- Corner dots -->
                    <div class="absolute top-1 right-1 w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute bottom-1 left-1 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </div>

            <!-- Enhanced Mobile Menu -->
            <div v-show="mobileMenuOpen" class="md:hidden mt-6 pb-4 border-t border-emerald-500/20 animate-slide-down">
                <ul class="space-y-3 pt-4">
                    <li v-for="(item, index) in navItems" :key="index" class="animate-fade-in-up" :style="{ animationDelay: index * 0.1 + 's' }">
                        <a :href="item.link"
                           @click="closeMobileMenu"
                           class="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 font-medium py-3 px-4 rounded-lg hover:bg-emerald-500/10 transition-all duration-300 group border border-transparent hover:border-emerald-500/30 relative overflow-hidden">
                            <!-- Background effect -->
                            <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                            <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"></span>
                            <span class="relative z-10">{{ item.text }}</span>
                            <span class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-sm relative z-10 text-emerald-400">
                                &gt;
                            </span>
                        </a>
                    </li>
                    <li class="pt-3 animate-fade-in-up" style="animation-delay: 0.6s;">
                        <a href="#kontak"
                           @click="closeMobileMenu"
                           class="flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg transition-all duration-300 group overflow-hidden transform hover:scale-105 relative">
                            <!-- Animated background -->
                            <div class="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <span class="font-mono text-sm relative z-10">&lt;</span>
                            <span class="font-semibold relative z-10 mx-2">Kontak</span>
                            <span class="font-mono text-sm relative z-10">/&gt;</span>

                            <!-- Moving light effect -->
                            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-lg"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'EnhancedNavbar',
    setup() {
        const mobileMenuOpen = ref(false);
        const navItems = ref([
            { text: 'Home', link: '#myhero' },
            { text: 'Pendidikan', link: '#myeducation' },
            { text: 'Skill', link: '#myskills' },
            { text: 'Proyek', link: '#myprojects' },
        ]);

        const toggleMobileMenu = () => {
            mobileMenuOpen.value = !mobileMenuOpen.value;
        };

        const closeMobileMenu = () => {
            mobileMenuOpen.value = false;
        };

        return {
            mobileMenuOpen,
            navItems,
            toggleMobileMenu,
            closeMobileMenu
        };
    }
};
</script>

<style scoped>
/* Enhanced animations */
@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

@keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
}

@keyframes float-medium {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(120deg); }
}

@keyframes float-fast {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-6px) rotate(240deg); }
}

@keyframes pulse-slow {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.4; }
}

@keyframes pulse-slower {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
}

@keyframes pulse-glow {
    0%, 100% { opacity: 0; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
}

@keyframes bounce-subtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
}

@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-blink {
    animation: blink 1s infinite;
}

.animate-float-slow {
    animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
    animation: float-medium 4s ease-in-out infinite;
}

.animate-float-fast {
    animation: float-fast 3s ease-in-out infinite;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

.animate-pulse-slower {
    animation: pulse-slower 4s ease-in-out infinite;
}

.animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
}

.animate-bounce-subtle {
    animation: bounce-subtle 0.6s ease-in-out;
}

.animate-slide-down {
    animation: slide-down 0.3s ease-out;
}

.animate-fade-in-up {
    animation: fade-in-up 0.5s ease-out both;
}

/* Additional responsive enhancements */
@media (max-width: 768px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>
