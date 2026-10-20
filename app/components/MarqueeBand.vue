<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <section class="marquee" aria-label="Hruno">
    <p class="sr-only">{{ text }}</p>
    <div class="marquee__track" aria-hidden="true">
      <span
        v-for="index in 4"
        :key="index"
        class="marquee__item"
        :data-text="text"
      />
    </div>
  </section>
</template>

<style scoped>
.marquee {
  position: relative;
  overflow: hidden;
  background: var(--surface-2);
  color: var(--ink);
}

.marquee__track {
  display: flex;
  align-items: center;
  gap: 0.35em;
  width: max-content;
  padding: 18px 0 22px;
  white-space: nowrap;
  animation: marquee 34s linear infinite;
}

.marquee__item {
  display: block;
  font-size: clamp(2.75rem, 7.5vw, 7rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
}

.marquee__item::before {
  content: attr(data-text);
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
    transform: none;
  }
}
</style>
