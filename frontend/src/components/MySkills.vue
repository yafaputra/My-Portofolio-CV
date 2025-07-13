<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const skills = ref([]);
const API_URL = import.meta.env.PROD ? '/api/skills' :
'http://localhost:3000/api/skills';
onMounted(async () => {
try {
skills.value = (await axios.get(API_URL)).data;
} catch (error) {
console.error('Gagal mengambil data skill:', error);
}
});
</script>

<template>
  <section id="skill" class="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
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

      <!-- Glowing circles -->
      <div class="absolute top-1/5 left-1/5 w-[400px] h-[400px] rounded-full bg-gradient-radial from-emerald-500/30 to-transparent opacity-30 blur-3xl animate-pulse-4s"></div>
      <div class="absolute top-3/5 right-1/10 w-[300px] h-[300px] rounded-full bg-gradient-radial from-teal-500/20 to-transparent opacity-20 blur-2xl animate-pulse-6s-reverse"></div>
      <div class="absolute bottom-1/10 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-gradient-radial from-emerald-500/15 to-transparent opacity-15 blur-xl animate-pulse-5s"></div>
    </div>

    <div class="container relative z-10 px-6 mx-auto">
      <!-- Section Title -->
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold text-white md:text-5xl">
          My <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Skills</span>
        </h2>
        <div class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
        <p class="max-w-2xl mx-auto text-lg text-gray-300">
          Technologies and tools I master to create modern and high-performance web applications
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="relative overflow-hidden transition-all duration-300 ease-in-out bg-gray-800/30 rounded-2xl p-6 group hover:-translate-y-1 hover:scale-102 hover:shadow-lg hover:shadow-emerald-500/10 backdrop-blur-sm border border-gray-700 hover:border-emerald-400/30"
          :style="{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'forwards'
          }"
          :class="{
            'opacity-0 translate-y-[60px] animate-slide-in-up': true,
          }"
        >
          <!-- Glow Effect -->
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          <!-- Card Content -->
          <div class="relative z-[2] text-center">
            <!-- Skill Icon -->
            <div class="mb-6">
              <div class="flex items-center justify-center w-16 h-16 p-3 mx-auto transition-all duration-300 ease-in-out bg-white/90 rounded-xl shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:bg-white">
                <img :src="skill.icon" :alt="skill.name" class="object-contain w-4/5 h-4/5" />
              </div>
            </div>

            <!-- Skill Info -->
            <div class="mb-6">
              <h3 class="mb-2 text-xl font-bold text-white">{{ skill.name }}</h3>
              <p class="text-sm font-medium text-gray-400">{{ skill.category }}</p>
            </div>

            <!-- Circular Progress -->
            <div class="relative inline-block mb-6">
              <svg class="transform -rotate-90" width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4" />
                <circle cx="40" cy="40" r="34" fill="none"
                        :stroke="skill.color" stroke-width="4" stroke-linecap="round"
                        :style="{
                          'stroke-dasharray': `${2 * Math.PI * 34}`,
                          'stroke-dashoffset': `${2 * Math.PI * 34 * (1 - skill.level / 100)}`,
                          'transition': 'stroke-dashoffset 1s ease-in-out'
                        }" />
              </svg>
              <div class="absolute text-lg font-bold text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {{ skill.level }}<span class="text-xs">%</span>
              </div>
            </div>

            <!-- Skill Level Bar -->
            <div class="w-full h-2 mt-4 overflow-hidden rounded-full bg-gray-700">
              <div class="h-full rounded-full transition-all duration-1000 ease-in-out relative overflow-hidden"
                   :style="{
                     width: `${skill.level}%`,
                     'background': `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`
                   }">
                <div class="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>

            <!-- Decorative code icon -->
            <div class="absolute top-2 right-2 text-emerald-400/20 font-mono text-lg group-hover:text-emerald-400/50 transition-colors">
              &lt;/&gt;
            </div>
            <div class="absolute bottom-2 left-2 text-teal-400/20 font-mono text-lg group-hover:text-teal-400/50 transition-colors">
              { }
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations */
@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shapeFloat {
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

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Apply animations */
.animate-slide-in-up {
  animation: slide-in-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
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

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}
</style>

