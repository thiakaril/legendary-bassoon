<script setup lang="ts">
import type { Locale } from '~/data/content'

defineProps<{
  locale: Locale
  label: string
}>()

const emit = defineEmits<{
  select: [value: Locale]
}>()
</script>

<template>
  <div class="locale" role="group" :aria-label="label">
    <button
      type="button"
      class="locale__button"
      :class="{ 'is-active': locale === 'en' }"
      :aria-pressed="locale === 'en'"
      @click="emit('select', 'en')"
    >
      EN
    </button>
    <span class="locale__slash" aria-hidden="true">/</span>
    <button
      type="button"
      class="locale__button"
      :class="{ 'is-active': locale === 'id' }"
      :aria-pressed="locale === 'id'"
      @click="emit('select', 'id')"
    >
      ID
    </button>
  </div>
</template>

<style scoped>
.locale {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
}

.locale__button {
  min-width: 32px;
  min-height: 38px;
  padding: 0;
  color: var(--muted);
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
  transition: color 180ms var(--ease);
}

.locale__button:hover {
  color: var(--ink);
}

.locale__button.is-active {
  color: var(--ink);
  font-weight: 700;
}

.locale__slash {
  color: var(--surface-3);
}

@media (max-width: 760px) {
  .locale {
    font-size: 0.875rem;
  }

  .locale__button {
    min-width: 28px;
    min-height: 36px;
  }
}
</style>
