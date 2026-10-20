<script setup lang="ts">
import type { Copy, Locale } from '~/data/content'
import windowTeam from '~/assets/images/window-team.jpg'

defineProps<{
  copy: Copy
  locale: Locale
  mailtoWaitlist: string
  mailtoDemo: string
}>()

const emit = defineEmits<{
  'select-locale': [value: Locale]
}>()
</script>

<template>
  <header class="hero">
    <div class="hero__name">
      <h1 aria-label="Hruno"><span aria-hidden="true">HRUNO</span></h1>
      <div class="hero__locale">
        <LocaleSwitch
          :locale="locale"
          :label="copy.locale.label"
          @select="emit('select-locale', $event)"
        />
      </div>
    </div>

    <nav class="hero__nav" :aria-label="copy.nav.label">
      <a href="#product">{{ copy.nav.product }}</a>
      <a href="#copilot">{{ copy.nav.copilot }}</a>
      <a href="#how-it-works">{{ copy.nav.how }}</a>
      <a href="#faq">{{ copy.nav.faq }}</a>
    </nav>

    <div class="hero__left">
      <figure class="hero__photo">
        <img
          :src="windowTeam"
          :alt="copy.hero.photoAlt"
          width="1200"
          height="1500"
          fetchpriority="high"
        />
        <figcaption>{{ copy.hero.photoCaption }}</figcaption>
      </figure>

      <ul class="hero__facts">
        <li v-for="fact in copy.hero.facts" :key="fact">{{ fact }}</li>
      </ul>
    </div>

    <div id="copilot" class="hero__center">
      <CopilotDemo :copy="copy.hero" />

      <div class="hero__statement">
        <div class="hero__statement-copy">
          <p class="hero__statement-lead">{{ copy.hero.statement }}</p>
          <p class="hero__audience">{{ copy.hero.audience }}</p>
        </div>
        <div class="hero__actions">
          <a class="btn" :href="mailtoWaitlist">{{ copy.hero.primary }}</a>
          <a class="link-arrow" :href="mailtoDemo">
            {{ copy.hero.secondary }}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>

    <aside class="hero__right" :aria-label="copy.hero.railLabel">
      <div v-for="tile in copy.hero.rail" :key="tile.label" class="rail-tile">
        <span class="rail-tile__label">{{ tile.label }}</span>
        <span class="rail-tile__value">{{ tile.value }}</span>
      </div>

      <a
        class="rail-tile rail-tile--accent"
        :href="mailtoWaitlist"
        :aria-label="copy.hero.primary"
      >
        <span class="rail-tile__label">{{ copy.hero.actionTile.label }}</span>
        <span class="rail-tile__value">
          {{ copy.hero.actionTile.value }}
          <span aria-hidden="true">→</span>
        </span>
      </a>
    </aside>
  </header>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--gap);
}

.hero__name {
  position: relative;
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: clamp(104px, 12vw, 170px);
  padding: 0 clamp(16px, 2vw, 32px);
  overflow: hidden;
  background: var(--surface);
}

.hero__name h1 {
  flex: 0 0 auto;
  font-size: var(--display);
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -0.045em;
  white-space: nowrap;
}

.hero__name h1 span {
  display: block;
}

.hero__locale {
  flex: 0 0 auto;
}

.hero__nav {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--gap);
}

.hero__nav a {
  display: flex;
  align-items: center;
  min-height: 60px;
  padding: 0 18px;
  animation: seat-in 420ms var(--ease) both;
  background: var(--surface);
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 180ms var(--ease);
}

.hero__nav a:nth-child(1) {
  animation-delay: 40ms;
}

.hero__nav a:nth-child(2) {
  animation-delay: 90ms;
}

.hero__nav a:nth-child(3) {
  animation-delay: 140ms;
}

.hero__nav a:nth-child(4) {
  animation-delay: 190ms;
}

.hero__nav a:hover {
  background: var(--surface-2);
}

.hero__left {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  min-width: 0;
}

.hero__photo {
  overflow: clip;
  background: var(--surface);
}

.hero__photo img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  filter: grayscale(1) contrast(1.04);
  animation: photo-drift 26s ease-in-out infinite alternate;
}

.hero__photo figcaption {
  padding: 12px 16px 14px;
  color: var(--ink);
  font-size: 1rem;
  line-height: 1.35;
}

.hero__facts {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  padding: 20px 16px;
  background: var(--surface);
}

.hero__facts li {
  position: relative;
  padding-left: 14px;
  color: var(--ink);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.3;
}

.hero__facts li::before {
  position: absolute;
  top: 0.62em;
  left: 0;
  width: 5px;
  height: 5px;
  background: var(--muted);
  content: '';
}

.hero__center {
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  min-width: 0;
}

.hero__statement {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  padding: clamp(20px, 2vw, 28px);
  background: var(--surface);
}

.hero__statement-copy {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.hero__statement-lead {
  max-width: 38ch;
  font-size: var(--lead);
  line-height: 1.16;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.hero__audience {
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.4;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 26px;
}

.hero__right {
  grid-column: span 2;
  display: grid;
  grid-template-rows: repeat(5, minmax(0, 1fr));
  gap: var(--gap);
  min-width: 0;
}

.rail-tile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  min-height: 0;
  padding: 18px 16px;
  background: var(--surface);
  transition: background-color 180ms var(--ease);
}

.rail-tile__label {
  color: var(--muted);
  font-size: 0.875rem;
  line-height: 1.2;
}

.rail-tile__value {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.02em;
}

.rail-tile--accent {
  background: var(--accent);
  color: var(--accent-ink);
  animation: seat-in 420ms var(--ease) 300ms both;
}

.rail-tile--accent:hover {
  background: var(--accent-hover);
}

.rail-tile--accent .rail-tile__label {
  color: var(--accent-ink);
}

@media (max-width: 1100px) {
  .hero__left {
    grid-column: 1 / -1;
    grid-row: 4;
    flex-direction: row;
  }

  .hero__photo {
    flex: 0 0 38%;
  }

  .hero__facts {
    flex: 1;
  }

  .hero__center {
    grid-column: 1 / -1;
    grid-row: 3;
  }

  .hero__right {
    grid-column: 1 / -1;
    grid-row: 5;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: none;
  }

  .hero__right .rail-tile {
    min-height: 96px;
  }

  .hero__right .rail-tile--accent {
    grid-column: auto;
  }
}

@media (max-width: 760px) {
  .hero__name {
    display: block;
    min-height: 132px;
    padding: 0 16px;
  }

  .hero__name h1 {
    padding-top: 14px;
    font-size: var(--display);
  }

  .hero__locale {
    position: absolute;
    right: 14px;
    bottom: 8px;
  }

  .hero__nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero__nav a {
    min-height: 56px;
    padding: 0 14px;
  }

  .hero__left {
    grid-column: 1 / -1;
    grid-row: 4;
    flex-direction: column;
  }

  .hero__photo {
    flex: none;
  }

  .hero__photo img {
    aspect-ratio: 4 / 3;
  }

  .hero__center {
    grid-row: 3;
    flex-direction: column-reverse;
  }

  .hero__statement {
    gap: 20px;
    padding: 20px;
  }

  .hero__statement-lead {
    max-width: none;
  }

  .hero__right {
    grid-column: 1 / -1;
    grid-row: 5;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero__right .rail-tile--accent {
    grid-column: span 2;
  }

  .hero__facts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .hero__facts li:last-child {
    grid-column: 1 / -1;
  }
}
</style>
