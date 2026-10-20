<script setup lang="ts">
import type { Copy } from '~/data/content'

defineProps<{
  copy: Copy['features']
  index: number
}>()
</script>

<template>
  <div class="frag" data-ui>
    <template v-if="index === 0">
      <div class="frag__bar">
        <span class="frag__mark" aria-hidden="true">H</span>
        <span>Copilot</span>
        <span class="frag__muted">Sample</span>
      </div>
      <p class="frag__prompt">{{ copy.fragments.ask.prompt }}</p>
      <p class="frag__answer">{{ copy.fragments.ask.answer }}</p>
      <div class="frag__chips">
        <span>Ayu</span>
        <span>Bima</span>
        <span>Citra</span>
      </div>
    </template>

    <template v-else-if="index === 1">
      <div class="frag__bar">
        <span>{{ copy.fragments.leave.name }}</span>
        <span class="frag__muted">{{ copy.fragments.leave.quarter }}</span>
      </div>
      <p class="frag__date">{{ copy.fragments.leave.dates }}</p>
      <div class="frag__week" aria-hidden="true">
        <div
          v-for="(day, dayIndex) in copy.fragments.leave.days"
          :key="`${day}-${dayIndex}`"
          class="frag__day"
          :class="{ 'is-on': dayIndex > 0 && dayIndex < 4 }"
        >
          <span>{{ day }}</span>
          <i />
        </div>
      </div>
      <div class="frag__status-row">
        <span class="frag__status">{{ copy.fragments.leave.status }}</span>
        <span class="frag__muted">{{ copy.fragments.leave.duration }}</span>
      </div>
    </template>

    <template v-else-if="index === 2">
      <div class="frag__bar">
        <span>{{ copy.fragments.attendance.title }}</span>
        <span class="frag__muted">{{ copy.fragments.attendance.today }}</span>
      </div>
      <ul class="frag__list">
        <li v-for="row in copy.fragments.attendance.rows" :key="row.name" class="frag__list-row">
          <span class="frag__list-name">{{ row.name }}</span>
          <span class="frag__muted">{{ row.detail }}</span>
          <span class="frag__state" :class="{ 'is-attention': row.state === 'Review' || row.state === 'Tinjau' }">
            {{ row.state }}
          </span>
        </li>
      </ul>
    </template>

    <template v-else-if="index === 3">
      <div class="frag__bar">
        <span>{{ copy.fragments.payroll.title }}</span>
        <span class="frag__muted">{{ copy.fragments.payroll.status }}</span>
      </div>
      <div class="frag__money">
        <div v-for="row in copy.fragments.payroll.rows" :key="row.label" class="frag__money-row">
          <span>{{ row.label }}</span>
          <span>{{ row.value }}</span>
        </div>
        <div class="frag__money-row frag__money-row--net">
          <span>{{ copy.fragments.payroll.netLabel }}</span>
          <span>{{ copy.fragments.payroll.net }}</span>
        </div>
      </div>
    </template>

    <template v-else-if="index === 4">
      <div class="frag__bar">
        <span>{{ copy.fragments.hiring.title }}</span>
        <span class="frag__muted">Q4</span>
      </div>
      <div class="frag__stages">
        <div v-for="stage in copy.fragments.hiring.stages" :key="stage.label" class="frag__stage">
          <span class="frag__stage-value">{{ stage.value }}</span>
          <span class="frag__muted">{{ stage.label }}</span>
        </div>
      </div>
      <div class="frag__candidate">
        <span>{{ copy.fragments.hiring.candidate }}</span>
        <span class="frag__muted">{{ copy.fragments.hiring.note }}</span>
      </div>
    </template>

    <template v-else>
      <div class="frag__person">
        <span class="frag__avatar" aria-hidden="true">AL</span>
        <div>
          <p class="frag__person-name">{{ copy.fragments.people.name }}</p>
          <p class="frag__muted">{{ copy.fragments.people.role }}</p>
        </div>
        <span class="frag__state">{{ copy.fragments.people.status }}</span>
      </div>
      <p class="frag__meta">{{ copy.fragments.people.meta }}</p>
      <div class="frag__fields">
        <div v-for="field in copy.fragments.people.fields" :key="field.label">
          <span class="frag__muted">{{ field.label }}</span>
          <span>{{ field.value }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.frag {
  width: 100%;
  padding: 16px 18px 18px;
  background: var(--panel);
  color: var(--ink);
}

.frag__bar {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 28px;
  font-size: 0.875rem;
  font-weight: 500;
}

.frag__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1;
}

.frag__muted {
  color: var(--muted);
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.3;
}

.frag__bar .frag__muted:last-child {
  margin-left: auto;
}

.frag__prompt {
  margin-top: 14px;
  padding: 10px 12px;
  background: var(--surface);
  font-size: 1rem;
  line-height: 1.3;
}

.frag__answer {
  max-width: 36ch;
  margin-top: 14px;
  font-size: 1rem;
  line-height: 1.35;
}

.frag__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.frag__chips span {
  padding: 5px 8px;
  background: var(--surface-2);
  color: var(--muted);
  font-size: 0.8125rem;
  line-height: 1;
}

.frag__date {
  margin-top: 8px;
  font-size: 1.125rem;
  font-weight: 500;
}

.frag__week {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 4px;
  margin-top: 14px;
}

.frag__day {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  padding: 6px 0;
  background: var(--surface);
  color: var(--muted);
  font-size: 0.8125rem;
}

.frag__day i {
  display: block;
  width: 100%;
  height: 5px;
  background: var(--surface-3);
}

.frag__day.is-on {
  color: var(--accent-ink);
  background: var(--accent);
}

.frag__day.is-on i {
  background: var(--accent-ink);
}

.frag__status-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 14px;
}

.frag__status {
  padding: 4px 7px;
  background: var(--surface-2);
  font-size: 0.8125rem;
  line-height: 1;
}

.frag__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;
}

.frag__list-row {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
  min-height: 38px;
  padding: 0 10px;
  background: var(--surface);
}

.frag__list-name {
  overflow: hidden;
  font-size: 0.875rem;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.frag__state {
  padding: 4px 7px;
  background: var(--surface-2);
  color: var(--ink);
  font-size: 0.8125rem;
  line-height: 1;
  white-space: nowrap;
}

.frag__state.is-attention {
  background: var(--accent);
  color: var(--accent-ink);
}

.frag__money {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
}

.frag__money-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 10px;
  background: var(--surface);
  font-size: 0.875rem;
}

.frag__money-row--net {
  margin-top: 2px;
  background: var(--ink);
  color: var(--bg);
  font-size: 1rem;
  font-weight: 500;
}

.frag__stages {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4px;
  margin-top: 12px;
}

.frag__stage {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
  background: var(--surface);
}

.frag__stage-value {
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.03em;
}

.frag__candidate {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
  padding: 9px 10px;
  background: var(--surface-2);
  font-size: 0.875rem;
  font-weight: 500;
}

.frag__person {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
}

.frag__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--surface-3);
  font-size: 0.8125rem;
  font-weight: 500;
}

.frag__person-name {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
}

.frag__meta {
  margin-top: 12px;
  padding: 8px 10px;
  background: var(--surface);
  color: var(--muted);
  font-size: 0.8125rem;
}

.frag__fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px;
  margin-top: 8px;
}

.frag__fields div {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 9px 10px;
  background: var(--surface);
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
