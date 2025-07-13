<template>
  <div class="text-center mb-12" :class="customClass">
    <!-- Greeting with gradient text -->
    <h2 v-if="greeting" class="text-3xl md:text-4xl font-light text-white mb-2 animate-slide-in-right">
      {{ greeting }}
      <span v-if="greetingHighlight" class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-bold">{{ greetingHighlight }}</span>
    </h2>

    <!-- Main Title with gradient highlight -->
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
      {{ title }}
      <span v-if="highlight" class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">{{ highlight }}</span>
    </h1>

    <!-- Divider with gradient background -->
    <div v-if="showDivider" class="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-emerald-400 to-teal-400"></div>

    <!-- Subtitle with animated appearance -->
    <p v-if="subtitle" class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto animate-slide-in-right" style="animation-delay: 200ms;">
      {{ subtitle }}
    </p>

    <slot></slot> <!-- Untuk konten tambahan -->
  </div>
</template>

<script setup>
defineProps({
  greeting: {
    type: String,
    default: ''
  },
  greetingHighlight: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  highlight: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  showDivider: {
    type: Boolean,
    default: true
  },
  // Kelas tambahan
  customClass: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
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

.animate-slide-in-right {
  animation: slideInRight 1s ease-out forwards;
  opacity: 0;
}
</style>
