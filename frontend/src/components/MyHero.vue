<template>
    <section class="relative h-auto flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16">
        <!-- Background Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Floating shapes -->
            <div class="absolute top-[15%] left-[10%] w-[100px] h-[100px] rounded-full border-2 border-emerald-500/10 opacity-30 animate-shape-float"></div>
            <div class="absolute top-[70%] right-[15%] w-[70px] h-[70px] rounded-full border-2 border-teal-500/10 opacity-30 animate-shape-float-5s"></div>
            <div class="absolute top-[40%] left-[80%] w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-emerald-500/20 opacity-20 animate-shape-float-10s"></div>
            <div class="absolute top-[80%] left-[20%] w-[60px] h-[60px] border-2 border-teal-500/20 opacity-20 rotate-45 animate-shape-float-15s"></div>

            <!-- Small floating code icons -->
            <div class="absolute top-[10%] left-[5%] text-emerald-400/10 font-mono text-2xl animate-bounce" style="animation-delay: 0s;">
                &lt;/&gt;
            </div>
            <div class="absolute top-[25%] right-[10%] text-teal-400/10 font-mono text-xl animate-bounce" style="animation-delay: 1s;">
                { }
            </div>
            <div class="absolute bottom-[15%] left-[15%] text-emerald-400/10 font-mono text-xl animate-bounce" style="animation-delay: 2s;">
                &lt;/&gt;
            </div>
            <div class="absolute bottom-[30%] right-[5%] text-teal-400/10 font-mono text-2xl animate-bounce" style="animation-delay: 3s;">
                { }
            </div>
            <div class="absolute top-[5%] right-[20%] text-emerald-400/10 font-mono text-xl animate-bounce" style="animation-delay: 4s;">
                &lt;/&gt;
            </div>
            <div class="absolute bottom-[20%] left-[25%] text-teal-400/10 font-mono text-2xl animate-bounce" style="animation-delay: 5s;">
                { }
            </div>
            <div class="absolute top-[60%] left-[5%] text-emerald-400/10 font-mono text-2xl animate-bounce" style="animation-delay: 6s;">
                [ ]
            </div>
            <div class="absolute top-[30%] left-[30%] text-teal-400/10 font-mono text-xl animate-bounce" style="animation-delay: 7s;">
                ( )
            </div>

            <!-- Gradient lines -->
            <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent animate-pulse-3s"></div>
            <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-teal-400/20 to-transparent animate-pulse-4s"></div>
        </div>

        <!-- Glowing circles -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-1/5 left-1/5 w-[400px] h-[400px] rounded-full bg-gradient-radial from-emerald-500/30 to-transparent opacity-30 blur-3xl animate-pulse-4s"></div>
            <div class="absolute top-3/5 right-1/10 w-[300px] h-[300px] rounded-full bg-gradient-radial from-teal-500/20 to-transparent opacity-20 blur-2xl animate-pulse-6s-reverse"></div>
            <div class="absolute bottom-1/10 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-gradient-radial from-emerald-500/15 to-transparent opacity-15 blur-xl animate-pulse-5s"></div>
        </div>

        <!-- Main Content -->
        <div class="container mx-auto px-6 relative z-10 py-16">
            <div class="flex flex-col lg:flex-row items-center justify-center gap-12">
                <!-- Profile Image with Enhanced Code Icons -->
                <div class="relative animate-slide-in-left">
                    <div class="relative inline-block">
                        <!-- Glow effects -->
                        <div class="absolute -inset-6 rounded-full bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 blur-xl animate-pulse"></div>
                        <div class="absolute -inset-8 rounded-full border-2 border-emerald-400/30 animate-spin-slow"></div>
                        <div class="absolute -inset-10 rounded-full border border-teal-400/20 animate-ping"></div>

                        <!-- Main image container -->
                        <div class="relative p-3 rounded-full bg-gradient-to-br from-emerald-500/90 to-teal-500/90 backdrop-blur-sm z-[2] border-2 border-emerald-400/30">
                            <img src="@/assets/images/yafa-foto.jpg"
                                alt="Yafa Nanda Putra - Software Engineer"
                                class="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-white/20">
                        </div>

                        <!-- Large decorative code icons around the image -->
                        <div class="absolute -top-8 -left-8 text-emerald-400 font-mono text-4xl opacity-80 animate-float-3s">
                            &lt;/&gt;
                        </div>
                        <div class="absolute -bottom-8 -right-8 text-teal-400 font-mono text-4xl opacity-80 animate-float-5s">
                            { }
                        </div>
                        <div class="absolute -top-8 -right-8 text-emerald-400 font-mono text-3xl opacity-80 animate-float-4s">
                            [ ]
                        </div>
                        <div class="absolute -bottom-8 -left-8 text-teal-400 font-mono text-3xl opacity-80 animate-float-6s">
                            ( )
                        </div>
                    </div>
                </div>

                <!-- Text Content -->
                <div class="lg:w-1/2 text-center lg:text-left animate-slide-in-right space-y-6 ml-4">
                    <div class="animate-slide-in-right mb-4">
                        <h2 class="text-3xl md:text-4xl font-light text-white mb-2">
                            Hey I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-bold">Yafa</span>
                        </h2>
                    </div>

                    <div class="animate-slide-in-right mb-8" style="animation-delay: 200ms;">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                            I'm a <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400" id="animated-job-title">WEB DEVELOPER</span>
                        </h1>
                    </div>

                    <div class="animate-slide-in-right mb-8 relative" style="animation-delay: 400ms;">
                        <p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Software Engineer yang bersemangat dalam pengembangan web modern, mobile applications, dan teknologi cloud. Menciptakan solusi digital yang inovatif dan user-friendly.
                        </p>
                        <div class="absolute -bottom-4 -right-4 text-emerald-400/30 font-mono text-4xl animate-spin-slow">
                            [ ]
                        </div>
                    </div>

                    <!-- Social Links with Code Icons -->
                    <div class="animate-slide-in-right flex gap-4 justify-center lg:justify-start mb-8" style="animation-delay: 600ms;">
                        <a href="/https://github.com/yafaputra" class="group relative w-12 h-12 flex items-center justify-center rounded-lg border-2 border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500 hover:-translate-y-1 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="group-hover:scale-110 transition-transform">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <div class="absolute -top-2 -right-2 text-emerald-400/50 font-mono text-xs group-hover:opacity-100 opacity-0 transition-opacity">
                                &lt;/&gt;
                            </div>
                        </a>
                        <a href="#" class="group relative w-12 h-12 flex items-center justify-center rounded-lg border-2 border-teal-500/40 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 hover:border-teal-500 hover:-translate-y-1 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="group-hover:scale-110 transition-transform">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <div class="absolute -top-2 -right-2 text-teal-400/50 font-mono text-xs group-hover:opacity-100 opacity-0 transition-opacity">
                                { }
                            </div>
                        </a>
                        <a href="#" class="group relative w-12 h-12 flex items-center justify-center rounded-lg border-2 border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500 hover:-translate-y-1 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="group-hover:scale-110 transition-transform">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                            <div class="absolute -top-2 -right-2 text-emerald-400/50 font-mono text-xs group-hover:opacity-100 opacity-0 transition-opacity">
                                [ ]
                            </div>
                        </a>
                        <a href="#" class="group relative w-12 h-12 flex items-center justify-center rounded-lg border-2 border-teal-500/40 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 hover:border-teal-500 hover:-translate-y-1 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="group-hover:scale-110 transition-transform">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <div class="absolute -top-2 -right-2 text-teal-400/50 font-mono text-xs group-hover:opacity-100 opacity-0 transition-opacity">
                                ( )
                            </div>
                        </a>
                    </div>

                    <!-- CTA Button with Code Elements -->
                    <div class="animate-slide-in-right relative" style="animation-delay: 800ms;">
                        <div class="absolute -top-6 -left-6 text-emerald-400/30 font-mono text-3xl animate-spin-slow">
                            &lt;/&gt;
                        </div>
                        <a href="#contact" class="group inline-block px-10 py-4 md:px-12 md:py-4 text-white font-bold rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:scale-105 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 border-2 border-emerald-500/30 hover:border-emerald-400/50">
                            <span class="relative z-10 flex items-center gap-2">
                                <span class="font-mono">&lt;</span>
                                Hire Me
                                <span class="font-mono">/&gt;</span>
                            </span>
                            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        </a>
                        <div class="absolute -bottom-6 -right-6 text-teal-400/30 font-mono text-3xl animate-float-4s">
                            { }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'ProgrammerHero',
    data() {
        return {
            typingTimeout: null,
            jobTitles: [
                "WEB DEVELOPER",
                "FULLSTACK DEVELOPER",
                "FRONTEND ENGINEER",
                "BACKEND DEVELOPER",
                "MOBILE DEVELOPER"
            ],
            titleIndex: 0,
            charIndex: 0,
            isDeleting: false,
        };
    },
    mounted() {
        this.typeWriter();
    },
    beforeUnmount() {
        if (this.typingTimeout) {
            clearTimeout(this.typingTimeout);
        }
    },
    methods: {
        typeWriter() {
            const jobTitleElement = document.getElementById('animated-job-title');
            if (!jobTitleElement) return;

            const currentTitle = this.jobTitles[this.titleIndex];

            if (this.isDeleting) {
                jobTitleElement.textContent = currentTitle.substring(0, this.charIndex - 1);
                this.charIndex--;
            } else {
                jobTitleElement.textContent = currentTitle.substring(0, this.charIndex + 1);
                this.charIndex++;
            }

            let typeSpeed = 100;
            if (this.isDeleting) {
                typeSpeed = 50;
            }

            if (!this.isDeleting && this.charIndex === currentTitle.length) {
                typeSpeed = 2000;
                this.isDeleting = true;
            } else if (this.isDeleting && this.charIndex === 0) {
                this.isDeleting = false;
                this.titleIndex++;
                typeSpeed = 500;
                if (this.titleIndex === this.jobTitles.length) {
                    this.titleIndex = 0;
                }
            }

            this.typingTimeout = setTimeout(this.typeWriter, typeSpeed);
        }
    }
};
</script>

<style scoped>
@keyframes shapeFloat {
    0% {
        transform: translateY(0) rotate(0deg);
    }
    100% {
        transform: translateY(-20px) rotate(360deg);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes scrollDot {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(20px);
    }
}

.animate-shape-float {
    animation: shapeFloat 20s infinite linear;
}

.animate-shape-float-5s {
    animation: shapeFloat 20s infinite linear 5s;
}

.animate-shape-float-10s {
    animation: shapeFloat 20s infinite linear 10s;
}

.animate-shape-float-15s {
    animation: shapeFloat 20s infinite linear 15s;
}

.animate-float-3s {
    animation: float 3s ease-in-out infinite;
}

.animate-float-4s {
    animation: float 4s ease-in-out infinite;
}

.animate-float-5s {
    animation: float 5s ease-in-out infinite;
}

.animate-float-6s {
    animation: float 6s ease-in-out infinite;
}

.animate-pulse-3s {
    animation: pulse 3s ease-in-out infinite;
}

.animate-pulse-4s {
    animation: pulse 4s ease-in-out infinite alternate;
}

.animate-pulse-5s {
    animation: pulse 5s ease-in-out infinite alternate;
}

.animate-pulse-6s-reverse {
    animation: pulse 6s ease-in-out infinite alternate-reverse;
}

.animate-slide-in-left {
    animation: slideInLeft 1s ease-out forwards;
    opacity: 0;
}

.animate-slide-in-right {
    animation: slideInRight 1s ease-out forwards;
    opacity: 0;
}

.animate-scroll-dot {
    animation: scrollDot 2s infinite;
}

.animate-spin-slow {
    animation: spin 8s linear infinite;
}

.bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}

@keyframes pulse {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.4; }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>
