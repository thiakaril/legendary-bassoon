<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Copy } from '~/data/content'

const props = defineProps<{
  copy: Copy['hero']
}>()

const active = ref(0)
const approved = ref(false)
const openedPrompt = ref<number | null>(null)
const prompt = computed(() => props.copy.copilot.prompts[active.value] ?? props.copy.copilot.prompts[0]!)

const isLeave = (tag: string) => tag === 'Leave' || tag === 'Cuti'
const rowDetail = (row: { tag: string; detail: string }) =>
  approved.value && isLeave(row.tag)
    ? `${props.copy.copilot.approvedShort} · ${row.detail}`
    : row.detail

const actionLabel = computed(() => {
  if (active.value === 0) {
    return approved.value ? props.copy.copilot.approved : prompt.value.action
  }
  return openedPrompt.value === active.value
    ? props.copy.copilot.opened
    : prompt.value.action
})

const actionPressed = computed(() =>
  active.value === 0 ? approved.value : openedPrompt.value === active.value,
)

const runAction = () => {
  if (active.value === 0) {
    approved.value = !approved.value
    return
  }
  openedPrompt.value = openedPrompt.value === active.value ? null : active.value
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
</script>

<template>
  <div class="copilot" data-ui>
    <div class="copilot__bar">
      <span class="copilot__mark" aria-hidden="true">H</span>
      <span class="copilot__title">{{ copy.copilot.title }}</span>
      <span class="copilot__sample">{{ copy.sample }}</span>
    </div>

    <div class="copilot__prompts" role="group" :aria-label="copy.copilot.promptLabel">
      <button
        v-for="(item, index) in copy.copilot.prompts"
        :key="item.q"
        type="button"
        class="copilot__prompt"
        :class="{ 'is-active': active === index }"
        :aria-pressed="active === index"
        @click="active = index"
      >
        {{ item.q }}
      </button>
    </div>

    <div class="copilot__answer" aria-live="polite">
      <p class="copilot__text">{{ prompt.text }}</p>

      <ul class="copilot__rows">
        <li v-for="row in prompt.rows" :key="row.name" class="copilot__row">
          <span class="copilot__avatar" aria-hidden="true">{{ initials(row.name) }}</span>
          <span class="copilot__name">{{ row.name }}</span>
          <span class="copilot__tag">{{ row.tag }}</span>
          <span class="copilot__detail">{{ rowDetail(row) }}</span>
        </li>
      </ul>

      <button
        type="button"
        class="copilot__action"
        :aria-pressed="actionPressed"
        @click="runAction"
      >
        {{ actionLabel }}
        <span aria-hidden="true">{{ actionPressed ? '✓' : '→' }}</span>
      </button>
      <p v-if="actionPressed" class="copilot__note">{{ copy.copilot.actionNote }}</p>
    </div>

    <div class="copilot__foot">
      <span v-for="item in copy.copilot.foot" :key="item">{{ item }}</span>
    </div>
  </div>
</template>

<style scoped>
.copilot {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--panel);
  color: var(--ink);
}

.copilot__bar {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 0 16px;
  background: var(--surface);
}

.copilot__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1;
}

.copilot__title {
  font-size: 1rem;
  font-weight: 500;
}

.copilot__sample {
  margin-left: auto;
  color: var(--muted);
  font-size: 0.8125rem;
  line-height: 1;
}

.copilot__prompts {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 8px 16px;
  overflow-x: auto;
  scrollbar-width: none;
}

.copilot__prompts::-webkit-scrollbar {
  display: none;
}

.copilot__prompt {
  flex: 0 0 auto;
  max-width: 34ch;
  padding: 8px 10px;
  overflow: hidden;
  color: var(--muted);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 180ms var(--ease), color 180ms var(--ease);
}

.copilot__prompt:hover {
  color: var(--ink);
}

.copilot__prompt.is-active {
  max-width: 38ch;
  background: var(--accent);
  color: var(--accent-ink);
}

.copilot__answer {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: clamp(16px, 1.8vw, 22px);
}

.copilot__text {
  max-width: 58ch;
  font-size: 1.125rem;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.copilot__rows {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 16px;
}

.copilot__row {
  display: grid;
  grid-template-columns: 30px minmax(0, 1.4fr) minmax(0, 1fr) auto;
  gap: 10px;
  animation: seat-in 360ms var(--ease) both;
  align-items: center;
  min-height: 36px;
  padding: 3px 10px 3px 0;
  background: var(--surface);
}

.copilot__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: var(--surface-3);
  color: var(--ink);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1;
}

.copilot__row:nth-child(1) {
  animation-delay: 180ms;
}

.copilot__row:nth-child(2) {
  animation-delay: 230ms;
}

.copilot__row:nth-child(3) {
  animation-delay: 280ms;
}

.copilot__name {
  overflow: hidden;
  font-size: 1rem;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.copilot__tag {
  overflow: hidden;
  color: var(--muted);
  font-size: 0.8125rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.copilot__detail {
  color: var(--muted);
  font-size: 0.8125rem;
  white-space: nowrap;
}

.copilot__action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: flex-start;
  margin-top: 14px;
  padding: 0;
  color: var(--accent);
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
}

.copilot__action:hover {
  color: var(--accent-hover);
}

.copilot__note {
  max-width: 46ch;
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.8125rem;
  line-height: 1.35;
}

.copilot__foot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 20px;
  padding: 8px 16px;
  background: var(--surface);
  color: var(--muted);
  font-size: 0.8125rem;
  line-height: 1.3;
}

@media (max-width: 760px) {
  .copilot__bar {
    padding: 0 12px;
  }

  .copilot__prompts {
    padding: 8px 12px;
  }

  .copilot__answer {
    padding: 16px 12px 18px;
  }

  .copilot__row {
    grid-template-columns: 28px minmax(0, 1fr) auto;
    gap: 8px;
  }

  .copilot__avatar {
    width: 28px;
    height: 28px;
  }

  .copilot__tag {
    display: none;
  }

  .copilot__detail {
    font-size: 0.8125rem;
  }

  .copilot__foot {
    padding: 8px 12px;
    font-size: 0.8125rem;
  }
}
</style>
