<template>
  <section id="education" class="section scroll-mt-20 py-20 border-t border-zinc-100 dark:border-zinc-900">
    <header class="mb-12" v-reveal>
      <p class="section-label">Education</p>
      <h2 class="section-title">Where I'm studying</h2>
    </header>

    <div class="grid gap-6 md:grid-cols-3" v-reveal>
      <!-- Main degree card -->
      <div class="card md:col-span-2 hover:border-accent/40">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-50">Bachelor in Information Technology</h3>
            <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">InHolland University of Applied Sciences ·
              Netherlands</p>
          </div>
          <span class="chip whitespace-nowrap">2024 — Present</span>
        </div>

        <ul class="mt-5 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-300">
          <li class="flex gap-2.5">
            <svg class="mt-0.5 h-4 w-4 shrink-0 text-accent dark:text-accent-light" viewBox="0 0 20 20"
              fill="currentColor"><path fill-rule="evenodd"
                d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0z"
                clip-rule="evenodd" /></svg>
            <span><span class="font-semibold text-zinc-800 dark:text-zinc-100">Propedeuse awarded</span> — completed the
              full first-year diploma.</span>
          </li>
          <li class="flex gap-2.5">
            <svg class="mt-0.5 h-4 w-4 shrink-0 text-accent dark:text-accent-light" viewBox="0 0 20 20"
              fill="currentColor"><path fill-rule="evenodd"
                d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0z"
                clip-rule="evenodd" /></svg>
            <span><span class="font-semibold text-zinc-800 dark:text-zinc-100">Student Assistant</span> — supporting
              first-year IT students with coursework and technical guidance.</span>
          </li>
          <li class="flex gap-2.5">
            <svg class="mt-0.5 h-4 w-4 shrink-0 text-accent dark:text-accent-light" viewBox="0 0 20 20"
              fill="currentColor"><path fill-rule="evenodd"
                d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0z"
                clip-rule="evenodd" /></svg>
            <span>Focus on software development, security, data &amp; AI, web applications, and practical industry
              projects.</span>
          </li>
        </ul>
      </div>

      <!-- Side card -->
      <div class="card flex flex-col justify-between">
        <div>
          <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-50">Digital Media Management</h3>
          <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Escuela Da Vinci · Argentina</p>
          <span class="chip mt-3">2020 — 2021</span>
        </div>
        <p class="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
          Professional certification in web design &amp; programming: UX, HTML, CSS, JavaScript, Vue.js, React, Node.js,
          PHP, Laravel, and MySQL.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: 'EducationSection' }
</script>
