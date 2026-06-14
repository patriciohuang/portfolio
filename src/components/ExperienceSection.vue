<template>
  <section id="experience" class="section scroll-mt-20 py-20 border-t border-zinc-100 dark:border-zinc-900">
    <header class="mb-12" v-reveal>
      <p class="section-label">Experience</p>
      <h2 class="section-title">Where I've worked</h2>
    </header>

    <div class="relative pl-8" v-reveal>
      <!-- timeline rail -->
      <div class="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true"></div>

      <div v-for="(job, i) in jobs" :key="job.role + job.company" class="relative" :class="i !== jobs.length - 1 ? 'pb-10' : ''">
        <!-- node -->
        <span class="absolute -left-8 top-1.5 flex h-3 w-3 items-center justify-center rounded-full ring-4 ring-white dark:ring-zinc-950"
          :class="job.current ? 'bg-accent' : 'bg-zinc-300 dark:bg-zinc-600'"></span>

        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-50">
            {{ job.role }} <span class="font-medium text-zinc-500 dark:text-zinc-400">· {{ job.company }}</span>
          </h3>
          <span class="text-sm font-medium text-zinc-400 whitespace-nowrap">{{ job.period }}</span>
        </div>
        <p class="mt-0.5 text-xs uppercase tracking-wider text-zinc-400">{{ job.location }}</p>

        <ul class="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          <li v-for="point in job.points" :key="point" class="flex gap-2.5">
            <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent dark:bg-accent-light"></span>
            <span v-html="point"></span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      jobs: [
        {
          role: 'Waiter',
          company: 'Takumi Ramen Amsterdam',
          location: 'Netherlands',
          period: 'Mar 2024 — Present',
          current: true,
          points: [
            'Deliver attentive customer service in a fast-paced environment while managing orders and resolving issues, demonstrating adaptability and teamwork.'
          ]
        },
        {
          role: 'Operations Analyst',
          company: 'Wabi Inc.',
          location: 'Argentina',
          period: '2020 — 2022',
          current: false,
          points: [
            'Managed Salesforce, GraphQL services, and the internal web admin platform to onboard and configure <strong class="font-semibold text-zinc-800 dark:text-zinc-100">200+ restaurant accounts</strong>, improving setup efficiency by <strong class="font-semibold text-zinc-800 dark:text-zinc-100">30%</strong>.',
            'Optimized data workflows with the marketing and CRM teams, automating onboarding and reducing manual configuration time by <strong class="font-semibold text-zinc-800 dark:text-zinc-100">25%</strong>.',
            'Resolved issues across account configurations, API integrations, and system errors, cutting support resolution time by <strong class="font-semibold text-zinc-800 dark:text-zinc-100">20%</strong> and improving platform reliability.'
          ]
        }
      ]
    }
  }
}
</script>
