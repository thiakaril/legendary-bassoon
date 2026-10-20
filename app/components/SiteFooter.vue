<script setup lang="ts">
import type { Copy } from '~/data/content'

defineProps<{
  copy: Copy['footer']
}>()

const letters = ['H', 'R', 'U', 'N', 'O']
const heights = [100, 72, 88, 60, 80]
</script>

<template>
  <footer class="footer">
    <div class="footer__mark" aria-hidden="true">
      <span
        v-for="(letter, index) in letters"
        :key="letter"
        class="footer__block"
        :class="`footer__block--${index + 1}`"
        :style="{ '--h': `${heights[index]}%` }"
        :data-letter="letter"
      />
    </div>

    <div class="footer__body">
      <div class="footer__top">
        <nav class="footer__links" :aria-label="copy.navLabel">
          <a v-for="link in copy.links" :key="link.href" :href="link.href">{{ link.label }}</a>
        </nav>

        <div class="footer__contact">
          <span>{{ copy.contactLabel }}</span>
          <a :href="`mailto:${copy.contact}`">{{ copy.contact }}</a>
        </div>
      </div>

      <div class="footer__bottom">
        <p>{{ copy.legal }}</p>
        <p>{{ copy.sampleNote }}</p>
        <p class="footer__credits">{{ copy.credits }}</p>
        <a class="footer__top-link" href="#top">{{ copy.backToTop }} <span aria-hidden="true">↑</span></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.footer__mark {
  display: flex;
  align-items: flex-end;
  gap: var(--gap);
  height: clamp(120px, 22vh, 220px);
  padding: 0;
  overflow: hidden;
}

.footer__block {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  height: var(--h);
  overflow: hidden;
  background: var(--surface-2);
  color: var(--bg);
  font-size: 0;
}

.footer__block::before {
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -0.05em;
  content: attr(data-letter);
}

.footer__block--1 {
  background: var(--surface-2);
  color: var(--ink);
}

.footer__block--2 {
  background: var(--surface-3);
  color: var(--ink);
}

.footer__block--3 {
  background: var(--muted);
}

.footer__block--4 {
  background: var(--ink);
}

.footer__block--5 {
  background: var(--surface-2);
  color: var(--ink);
}

.footer__body {
  padding: var(--pad);
  background: var(--surface);
}

.footer__top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 28px 48px;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
  font-size: 1.125rem;
  font-weight: 500;
}

.footer__links a {
  transition: color 180ms var(--ease);
}

.footer__links a:hover {
  color: var(--accent);
}

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  font-size: 1.125rem;
}

.footer__contact span {
  color: var(--muted);
}

.footer__contact a {
  font-size: 1.125rem;
  font-weight: 500;
}

.footer__contact a:hover {
  color: var(--accent);
}

.footer__bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px 28px;
  margin-top: 48px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.4;
}

.footer__credits {
  max-width: 68ch;
}

.footer__top-link {
  margin-left: auto;
  color: var(--ink);
  font-weight: 500;
}

.footer__top-link:hover {
  color: var(--accent);
}

@media (max-width: 760px) {
  .footer__mark {
    height: 120px;
  }

  .footer__block {
    font-size: 3rem;
  }

  .footer__body {
    padding: 20px;
  }

  .footer__top {
    flex-direction: column;
  }

  .footer__bottom {
    margin-top: 32px;
  }

  .footer__top-link {
    margin-left: 0;
  }
}
</style>
