<template>
  <footer id="kontak" class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 border-t border-emerald-500/20">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Floating shapes -->
      <div class="absolute top-[15%] left-[10%] w-[100px] h-[100px] rounded-full border-2 border-emerald-500/10 opacity-30 animate-[shape-float_4s_ease-in-out_infinite]"></div>
      <div class="absolute top-[70%] right-[15%] w-[70px] h-[70px] rounded-full border-2 border-teal-500/10 opacity-30 animate-[shape-float_5s_ease-in-out_infinite]"></div>
      <div class="absolute top-[40%] left-[80%] w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-emerald-500/20 opacity-20 animate-[shape-float_10s_ease-in-out_infinite]"></div>
      <div class="absolute top-[80%] left-[20%] w-[60px] h-[60px] border-2 border-teal-500/20 opacity-20 rotate-45 animate-[shape-float_15s_ease-in-out_infinite]"></div>

      <!-- Small floating code icons -->
      <div class="absolute top-[10%] left-[5%] text-emerald-400/10 font-mono text-2xl animate-bounce">
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

      <!-- Gradient lines -->
      <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-teal-400/20 to-transparent animate-[pulse_4s_ease-in-out_infinite]"></div>
    </div>

    <!-- Glowing circles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/5 left-1/5 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.3),transparent] opacity-30 blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
      <div class="absolute top-3/5 right-1/10 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.2),transparent)] opacity-20 blur-2xl animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
      <div class="absolute bottom-1/10 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.15),transparent)] opacity-15 blur-xl animate-[pulse_5s_ease-in-out_infinite]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Hubungi <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Saya</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-6 rounded-full"></div>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Jangan ragu untuk terhubung dengan saya. Mari berdiskusi tentang proyek atau kolaborasi yang menarik!
        </p>
      </div>

      <!-- Contact Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(contact, index) in contactInfo"
          :key="contact.title"
          class="relative bg-white/5 rounded-2xl p-8 transition-all duration-300 ease-in-out backdrop-blur-md overflow-hidden border border-white/10 shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-emerald-500/30"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
          :class="['opacity-0 translate-y-[60px]', 'animate-[slideInUp_1s_ease-out_forwards]']"
        >
          <div class="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_70%)] opacity-10 animate-[cardGlow_6s_ease-in-out_infinite_alternate] pointer-events-none z-10 group-hover:opacity-30"></div>
          <div class="relative z-20 text-center">
            <div class="w-[60px] h-[60px] bg-gradient-to-br from-emerald-500/90 to-teal-600/90 rounded-full flex items-center justify-center mx-auto mb-4 text-white transition-all duration-300 ease-in-out shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-emerald-500/50">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="contact.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">{{ contact.title }}</h3>
            <a :href="contact.link" class="text-emerald-400 font-medium hover:text-emerald-300 transition-colors duration-300">{{ contact.value }}</a>
          </div>
        </div>
      </div>

      <!-- Main CTA Button -->
      <div class="text-center mb-16">
        <a
          href="mailto:yafaputra94@gmail.com"
          class="inline-flex items-center gap-2 bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-emerald-500/30 relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/50 hover:bg-gradient-to-br hover:from-teal-600 hover:to-emerald-500 border-2 border-emerald-500/30"
        >
          <span class="flex items-center gap-2 relative z-10">
            <span class="font-mono">&lt;</span>
            Kirim Email
            <span class="font-mono">/&gt;</span>
          </span>
          <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        </a>
      </div>

      <!-- Social Links -->
      <div class="flex justify-center space-x-8 mb-12">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          class="relative w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-gray-400 backdrop-blur-md border border-white/10 transition-all duration-300 ease-in-out hover:bg-emerald-500/10 hover:text-emerald-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/30"
          :title="social.name"
        >
          <div class="transition-transform duration-300 ease-in-out hover:scale-110">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path :d="social.icon"></path>
            </svg>
          </div>
          <span class="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded text-sm whitespace-nowrap opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1">
            {{ social.name }}
            <span class="absolute top-full left-1/2 -translate-x-1/2 border-5 border-transparent border-t-black/80"></span>
          </span>
        </a>
      </div>

      <!-- Footer Text -->
      <div class="text-center">
        <p class="text-gray-400 text-sm">
          &copy; {{ new Date().getFullYear() }} Yafa Nanda Putra.
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Dibuat dengan ❤️</span> menggunakan Vue.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yafaputra',
    icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
    color: '#333'
  },
  {
    name: 'LinkedIn',
    url: 'www.linkedin.com/in/yafa-putra-60739a28b',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    color: '#0077B5'
  },
  {
    name: 'Twitter',
    url: '#',
    icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
    color: '#1DA1F2'
  }
];

const contactInfo = [
  {
    icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Email',
    value: 'yafaputra94@gmail.com',
    link: 'mailto:yafaputra94@gmail.com'
  },
  {
    icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z',
    title: 'Phone',
    value: '+62 123 456 789',
    link: 'tel:+62123456789'
  },
  {
    icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M15 10a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Location',
    value: 'Yogyakarta, Indonesia',
    link: '#'
  }
];
</script>

<style>
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardGlow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes shape-float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-20px) rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
}

@media (max-width: 768px) {
  .contact-card {
    padding: 1.5rem !important;
  }

  .contact-icon {
    width: 50px !important;
    height: 50px !important;
  }

  .cta-button {
    padding: 0.8rem 1.5rem !important;
  }

  .social-link {
    width: 45px !important;
    height: 45px !important;
  }
}

@media (max-width: 480px) {
  .contact-card {
    padding: 1.25rem !important;
  }

  .contact-icon {
    width: 45px !important;
    height: 45px !important;
  }

  .social-link {
    width: 40px !important;
    height: 40px !important;
  }

  .cta-button {
    padding: 0.7rem 1.2rem !important;
    font-size: 0.9rem !important;
  }
}
</style>
