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
          Before my studies, I worked as an Operations Analyst at
          <span class="font-semibold text-zinc-800 dark:text-zinc-100">Wabi Inc.</span>
          I worked with Salesforce, GraphQL and automation there. It taught me how to connect technical systems
          with the way people actually work.
        </p>
        <p>
          Now I focus on web development, security and data management. I like to mix what I learn at university
          with real projects, because they make me think and be creative. Outside of code, I play volleyball, go to
          the gym and explore the city by bike. I like discovering new things, and that keeps me motivated.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'AboutSection' }
</script>