<script setup lang="ts">
import type { Copy } from '~/data/content'

defineProps<{
  copy: Copy['how']
}>()
</script>

<template>
  <section id="how-it-works" class="how" aria-labelledby="how-title">
    <div class="section-head">
      <h2 id="how-title">{{ copy.heading }}</h2>
    </div>

    <div class="how__bar">
      <article
        v-for="(stage, index) in copy.stages"
        :key="stage.title"
        class="stage"
        :class="`stage--${index + 1}`"
      >
        <span class="stage__duration">{{ stage.duration }}</span>
        <div class="stage__copy">
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.body }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.how {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.how__bar {
  display: flex;
  min-height: 280px;
}

.stage {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 36px;
  padding: var(--pad);
  background: var(--surface);
}

.stage--1 {
  flex: 5;
}

.stage--2 {
  flex: 3;
  background: var(--surface-2);
}

.stage--3 {
  flex: 2;
}

.stage__duration {
  color: var(--muted);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
}

.stage__copy h3 {
  max-width: 18ch;
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.08;
  text-wrap: balance;
}

.stage__copy p {
  max-width: 36ch;
  margin-top: 12px;
  color: var(--ink);
  font-size: var(--body);
  line-height: 1.45;
}

@media (max-width: 900px) {
  .how__bar {
    flex-direction: column;
    min-height: 0;
  }

  .stage {
    flex: none;
    gap: 28px;
  }

  .stage__copy h3 {
    max-width: none;
  }
}
</style>
