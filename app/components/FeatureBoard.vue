<script setup lang="ts">
import type { Copy } from '~/data/content'

defineProps<{
  copy: Copy['features']
}>()

const spans = [5, 7, 4, 8, 6, 6]
</script>

<template>
  <section id="product" class="features" aria-labelledby="features-title">
    <div class="section-head">
      <h2 id="features-title">{{ copy.heading }}</h2>
      <p class="section-sub">{{ copy.sampleNote }}</p>
    </div>

    <div class="features__grid">
      <article
        v-for="(item, index) in copy.items"
        :key="item.title"
        class="feature"
        :class="[
          index % 3 === 0 ? 'feature--right' : index % 3 === 1 ? 'feature--left' : 'feature--full',
        ]"
       
        :style="{ '--span': spans[index] }"
      >
        <div class="feature__copy">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </div>
        <div class="feature__ui">
          <FeatureFragment :copy="copy" :index="index" />
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.features {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--gap);
  align-items: start;
}

.feature {
  display: flex;
  flex-direction: column;
  grid-column: span var(--span);
  min-width: 0;
  padding: var(--pad) var(--pad) 0;
  overflow: clip;
  background: var(--surface);
}

.feature__copy {
  max-width: 34ch;
}

.feature__copy h3 {
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.08;
  text-wrap: balance;
}

.feature__copy p {
  margin-top: 10px;
  color: var(--ink);
  font-size: var(--body);
  line-height: 1.45;
}

.feature__ui {
  width: auto;
  margin-top: 28px;
}

.feature--right .feature__ui {
  margin-left: 12%;
  margin-right: calc(var(--pad) * -1);
}

.feature--left .feature__ui {
  margin-left: calc(var(--pad) * -1);
  margin-right: 12%;
}

.feature--full .feature__ui {
  margin-left: calc(var(--pad) * -1);
  margin-right: calc(var(--pad) * -1);
}

@media (max-width: 1100px) {
  .feature {
    grid-column: span 6;
  }
}

@media (max-width: 760px) {
  .feature {
    grid-column: span 12;
    padding: 20px 20px 0;
  }

  .feature__ui,
  .feature--right .feature__ui,
  .feature--left .feature__ui,
  .feature--full .feature__ui {
    margin-right: -20px;
    margin-left: -20px;
  }
}
</style>
