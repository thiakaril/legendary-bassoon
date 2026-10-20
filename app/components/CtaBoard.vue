<script setup lang="ts">
import type { Copy } from '~/data/content'
import concreteSky from '~/assets/images/concrete-sky.jpg'

defineProps<{
  copy: Copy['cta']
  mailtoWaitlist: string
  mailtoDemo: string
}>()
</script>

<template>
  <section class="cta" aria-labelledby="cta-title">
    <figure class="cta__photo">
      <img
        :src="concreteSky"
        :alt="copy.photoAlt"
        width="1200"
        height="1500"
        loading="lazy"
      />
      <figcaption>{{ copy.photoCaption }}</figcaption>
    </figure>

    <div class="cta__action">
      <h2 id="cta-title">{{ copy.heading }}</h2>
      <p>{{ copy.body }}</p>
      <div class="cta__buttons">
        <a class="btn btn--inverse" :href="mailtoWaitlist">{{ copy.primary }}</a>
        <a class="link-arrow cta__secondary" :href="mailtoDemo">
          {{ copy.secondary }}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <div class="cta__flat" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
.cta {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--gap);
  min-height: 440px;
}

.cta__photo {
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  overflow: clip;
  background: var(--surface);
}

.cta__photo img {
  flex: 1;
  width: 100%;
  min-height: 0;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.03);
  animation: photo-drift 30s ease-in-out infinite alternate-reverse;
}

.cta__photo figcaption {
  padding: 12px 16px;
  background: var(--surface);
  color: var(--ink);
  font-size: 0.875rem;
  line-height: 1.35;
}

.cta__action {
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  padding: var(--pad);
  background: var(--accent);
  color: var(--accent-ink);
}

.cta__action h2 {
  max-width: 12ch;
  font-size: var(--head);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.02;
  text-wrap: balance;
}

.cta__action p {
  max-width: 42ch;
  font-size: var(--body);
  line-height: 1.45;
}

.cta__buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 24px;
}

.cta__secondary {
  color: var(--accent-ink);
}

.cta__secondary:hover {
  color: var(--surface);
}

.cta__flat {
  position: relative;
  grid-column: span 4;
  overflow: clip;
  background: var(--surface-2);
}

.cta__flat::after {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18%;
  aspect-ratio: 1;
  background: var(--surface-3);
  content: '';
}

@media (max-width: 900px) {
  .cta {
    grid-template-columns: minmax(0, 1fr);
    min-height: 0;
  }

  .cta__action {
    grid-column: 1 / -1;
    order: 1;
    min-height: 360px;
  }

  .cta__photo {
    grid-column: 1 / -1;
    order: 2;
    aspect-ratio: 16 / 9;
  }

  .cta__flat {
    display: none;
  }
}
</style>
