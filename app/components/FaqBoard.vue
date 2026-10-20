<script setup lang="ts">
import { ref } from 'vue'
import type { Copy } from '~/data/content'

const props = defineProps<{
  copy: Copy['faq']
  mailtoDemo: string
}>()

const openIndex = ref(0)
const current = () => props.copy.items[openIndex.value] ?? props.copy.items[0]!
</script>

<template>
  <section id="faq" class="faq" aria-labelledby="faq-title">
    <div class="section-head">
      <h2 id="faq-title">{{ copy.heading }}</h2>
    </div>

    <div class="faq__body">
      <ul class="faq__list">
        <li
          v-for="(item, index) in copy.items"
          :key="item.q"
          class="faq__item"
          :class="{ 'is-open': openIndex === index }"
        >
          <button
            type="button"
            class="faq__question"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
            @click="openIndex = index"
          >
            {{ item.q }}
          </button>
          <div
            v-show="openIndex === index"
            :id="`faq-answer-${index}`"
            class="faq__inline"
          >
            <p>{{ item.a }}</p>
          </div>
        </li>
      </ul>

      <aside class="faq__pane" aria-live="polite">
        <Transition name="pane" mode="out-in">
          <div :key="openIndex" class="faq__answer">
            <h3>{{ current().q }}</h3>
            <p>{{ current().a }}</p>
          </div>
        </Transition>
        <a class="link-arrow faq__help" :href="mailtoDemo">
          {{ copy.help }}
          <span aria-hidden="true">→</span>
        </a>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.faq {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.faq__body {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: var(--gap);
  align-items: stretch;
}

.faq__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.faq__item {
  background: var(--surface);
}

.faq__question {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 74px;
  padding: 14px 20px;
  color: var(--ink);
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-align: left;
  cursor: pointer;
  transition: background-color 180ms var(--ease), color 180ms var(--ease);
}

.faq__question:hover {
  background: var(--surface-2);
}

.faq__item.is-open .faq__question {
  background: var(--accent);
  color: var(--accent-ink);
}

.faq__inline {
  display: none;
}

.faq__pane {
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 36px;
  min-height: 220px;
  padding: var(--pad);
  background: var(--surface-2);
}

.faq__help {
  align-self: flex-start;
  color: var(--accent-hover);
}

.faq__answer h3 {
  max-width: 24ch;
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-wrap: balance;
}

.faq__answer p {
  max-width: 62ch;
  margin-top: 20px;
  color: var(--ink);
  font-size: var(--body);
  line-height: 1.55;
}

.pane-enter-active,
.pane-leave-active {
  transition: opacity 180ms var(--ease), transform 180ms var(--ease);
}

.pane-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.pane-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 900px) {
  .faq__body {
    grid-template-columns: minmax(0, 1fr);
  }

  .faq__pane {
    display: none;
  }

  .faq__inline {
    display: block;
    padding: 0 20px 20px;
    background: var(--accent);
    color: var(--accent-ink);
  }

  .faq__inline p {
    max-width: 62ch;
    font-size: 1rem;
    line-height: 1.5;
  }

  .faq__item.is-open .faq__question {
    padding-bottom: 20px;
  }
}

@media (max-width: 620px) {
  .faq__question {
    min-height: 64px;
    padding: 13px 16px;
    font-size: 1.125rem;
  }

  .faq__inline {
    padding: 0 16px 18px;
  }
}
</style>
