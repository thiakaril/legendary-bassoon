<script setup lang="ts">
const { locale, copy, setLocale, mailtoWaitlist, mailtoDemo } = useLocale()
</script>

<template>
  <main id="top" class="page">
    <HeroBoard
      :copy="copy"
      :locale="locale"
      :mailto-waitlist="mailtoWaitlist"
      :mailto-demo="mailtoDemo"
      @select-locale="setLocale"
    />

    <MarqueeBand :text="copy.marquee" />

    <FeatureBoard :copy="copy.features" />

    <RecordsBoard :copy="copy.records" />

    <HowItWorks :copy="copy.how" />

    <FaqBoard :copy="copy.faq" :mailto-demo="mailtoDemo" />

    <CtaBoard
      :copy="copy.cta"
      :mailto-waitlist="mailtoWaitlist"
      :mailto-demo="mailtoDemo"
    />

    <SiteFooter :copy="copy.footer" />
  </main>
</template>
