<template>
  <section id="about" class="section scroll-mt-20 py-20 border-t border-zinc-100 dark:border-zinc-900">
    <div class="grid gap-10 md:grid-cols-3 items-start">
      <header class="md:col-span-1" v-reveal>
        <p class="section-label">About</p>
        <h2 class="section-title">A bit about me</h2>
      </header>

      <div class="md:col-span-2 space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300" v-reveal>
        <p>
          I grew up in Argentina and moved to the Netherlands to study
          <span class="font-semibold text-zinc-800 dark:text-zinc-100">Information Technology</span> at InHolland.
          Before my studies I worked at <span class="font-semibold text-zinc-800 dark:text-zinc-100">Wabi Inc.</span>
          as an Operations Analyst — a tech-heavy role managing Salesforce, GraphQL integrations, and automation that
          taught me how to bridge technical systems with real-world processes.
        </p>
        <p>
          Today I'm focused on web development, security, and data management, pairing university theory with hands-on
          projects that demand both critical and creative problem-solving. Outside of code, I play volleyball, train at
          the gym, and explore the city by bike — because continuous discovery is what keeps me motivated.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'AboutSection' }
</script>
