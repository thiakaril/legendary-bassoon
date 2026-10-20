<script setup lang="ts">
import { ref } from 'vue'
import type { Copy } from '~/data/content'

const props = defineProps<{
  copy: Copy['records']
}>()

const openIndex = ref(1)

const needsAttention = (status: string) =>
  ['Needs review', 'Pending', 'Perlu tinjau', 'Menunggu'].includes(status)

const isOpen = (index: number) => openIndex.value === index

const toggle = (index: number) => {
  openIndex.value = index
}
</script>

<template>
  <section class="records" aria-labelledby="records-title">
    <div class="section-head">
      <h2 id="records-title">{{ copy.heading }}</h2>
      <p class="section-sub">{{ copy.caption }}</p>
    </div>

    <ul class="records__list">
      <li
        v-for="(row, index) in copy.rows"
        :key="row.name"
        class="records__item"
        :class="{ 'is-open': isOpen(index) }"
      >
        <button
          type="button"
          class="record"
          :aria-expanded="isOpen(index)"
          @click="toggle(index)"
        >
          <span class="record__name">{{ row.name }}</span>
          <span class="record__module">{{ row.module }}</span>
          <span class="record__detail">{{ row.detail }}</span>
          <span
            class="record__status"
            :class="{ 'is-attention': needsAttention(row.status) }"
          >
            {{ row.status }}
          </span>
        </button>

        <div v-if="isOpen(index)" class="record__open">
          <p>{{ row.long }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.records {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.records__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.records__item {
  background: var(--surface);
  transition: background-color 220ms var(--ease);
}

.records__item.is-open {
  background: var(--accent);
  color: var(--accent-ink);
}

.record {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 1.1fr) minmax(0, 2.2fr) minmax(110px, 1fr);
  gap: 18px;
  align-items: center;
  width: 100%;
  min-height: 76px;
  padding: 16px 24px;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.record__name {
  overflow: hidden;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.record__module,
.record__detail {
  overflow: hidden;
  color: var(--muted);
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.is-open .record__module,
.is-open .record__detail {
  color: var(--accent-ink);
}

.record__status {
  justify-self: end;
  padding: 7px 9px;
  background: var(--surface-2);
  color: var(--ink);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
}

.record__status.is-attention {
  background: var(--accent);
  color: var(--accent-ink);
}

.is-open .record__status {
  background: var(--accent-ink);
  color: var(--accent);
}

.record__open {
  padding: 0 24px 24px;
  animation: rise-in 320ms var(--ease) both;
}

.record__open p {
  max-width: 72ch;
  padding-top: 12px;
  background: var(--accent);
  font-size: var(--body);
  line-height: 1.45;
}

@media (max-width: 900px) {
  .record {
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr) auto;
    gap: 12px;
    padding: 14px 18px;
  }

  .record__module {
    display: none;
  }

  .record__name {
    font-size: 1.75rem;
  }

  .record__open {
    padding: 0 18px 20px;
  }
}

@media (max-width: 620px) {
  .record {
    grid-template-areas:
      'name status'
      'detail status';
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 2px 12px;
    min-height: 68px;
    padding: 14px 16px;
  }

  .record__name {
    grid-area: name;
    font-size: 1.125rem;
  }

  .record__detail {
    grid-area: detail;
    display: block;
    font-size: 0.875rem;
  }

  .record__status {
    grid-area: status;
  }

  .record__status {
    padding: 6px 7px;
    font-size: 0.8125rem;
  }

  .record__open {
    padding: 0 16px 18px;
  }

  .record__open p {
    font-size: 1rem;
  }
}
</style>
