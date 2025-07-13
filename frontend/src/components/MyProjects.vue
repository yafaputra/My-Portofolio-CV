<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const projects = ref([]);
const API_URL = import.meta.env.PROD ? '/api/projects' :
'http://localhost:3000/api/projects';
onMounted(async () => {
try {
projects.value = (await axios.get(API_URL)).data;
} catch (error) {
console.error('Gagal mengambil data proyek:', error);
}
});
</script>

<template>
  <section id="proyek" class="relative h-auto overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20">
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

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <SectionTitle
        title="My"
        highlight="Projects"
        highlight-color="text-emerald-400"
        subtitle="Featured projects that showcase my skills and experience in various technologies"
        divider-color="bg-emerald-400"
      />

      <!-- Projects Grid -->
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="relative bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-sm border border-emerald-400/20 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:border-emerald-400/50 hover:shadow-emerald-400/20 hover:-translate-y-2 hover:scale-[1.02] opacity-0 translate-y-12 animate-slide-in-up"
          :style="{ 'animation-delay': `${index * 200}ms` }"
        >
          <!-- Project Image -->
          <div class="relative h-64 overflow-hidden group">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-400/80 to-teal-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between items-start p-5">
              <span
                :class="[
                  'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
                  project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-400/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                ]"
              >
                {{ project.status }}
              </span>
              <span class="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium backdrop-blur-sm border border-white/30">
                {{ project.category }}
              </span>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6 relative">
            <!-- Floating code icon -->
            <div class="absolute -top-6 -right-6 text-emerald-400/10 font-mono text-3xl animate-float-4s">
              &lt;/&gt;
            </div>

            <h3 class="text-xl font-bold text-white mb-3">{{ project.title }}</h3>
            <p class="text-gray-300 text-sm mb-4">{{ project.description }}</p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-400/20 backdrop-blur-sm transition-all hover:bg-emerald-400/20 hover:-translate-y-0.5 hover:shadow-sm hover:shadow-emerald-400/10"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Project Link -->
            <div class="flex justify-end">
              <a
                :href="project.link"
                class="group relative flex items-center gap-2 px-4 py-2 bg-emerald-400/10 text-emerald-400 font-semibold rounded-full border border-emerald-400/20 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-teal-400 hover:text-white transition-all hover:shadow-lg hover:shadow-emerald-400/20 hover:-translate-y-0.5"
              >
                <span class="text-sm">View Details</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform group-hover:translate-x-1">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
                <div class="absolute -top-2 -right-2 text-emerald-400/50 font-mono text-xs group-hover:opacity-100 opacity-0 transition-opacity">
                  { }
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.4; }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
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

.animate-slide-in-up {
    animation: slideInUp 0.8s ease-out forwards;
}

.animate-bounce {
    animation: bounce 3s ease-in-out infinite;
}

.bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .bg-gradient-radial {
        @apply blur-2xl;
    }
}

@media (max-width: 768px) {
    .bg-gradient-radial {
        @apply blur-xl;
    }
}
</style>


