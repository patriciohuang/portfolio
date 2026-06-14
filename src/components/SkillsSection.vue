<template>
  <section id="skills" class="section scroll-mt-20 py-20 border-t border-zinc-100 dark:border-zinc-900">
    <header class="mb-12" v-reveal>
      <p class="section-label">Skills &amp; Interests</p>
      <h2 class="section-title">What I work with</h2>
    </header>

    <div class="grid gap-6 md:grid-cols-3" v-reveal>
      <div v-for="group in groups" :key="group.title" class="card hover:border-accent/40">
        <h3 class="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{{ group.title }}</h3>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="skill in group.items" :key="skill" class="chip">{{ skill }}</span>
        </div>
      </div>
    </div>

    <div class="mt-6 grid gap-6 sm:grid-cols-2" v-reveal>
      <div class="card">
        <h3 class="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Languages</h3>
        <div class="mt-4 flex flex-wrap gap-2">
          <span class="chip">Chinese — Native</span>
          <span class="chip">Spanish — Native</span>
          <span class="chip">English — C1</span>
          <span class="chip">Dutch — A1</span>
        </div>
      </div>
      <div class="card">
        <h3 class="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Interests</h3>
        <div class="mt-4 flex flex-wrap gap-2">
          <span class="chip">Volleyball (InHolland &amp; UVO)</span>
          <span class="chip">Strength training</span>
          <span class="chip">Cycling</span>
          <span class="chip">Travel</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      groups: [
        {
          title: 'Front-end & UI/UX',
          items: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'Vue.js', 'React', 'Next.js', 'Figma']
        },
        {
          title: 'Back-end & Database',
          items: ['C#', 'ASP.NET Core', 'Java', 'Python', 'Flask', 'Node.js', 'PHP', 'Laravel', 'SQL Server', 'MySQL']
        },
        {
          title: 'Tools & Platforms',
          items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Salesforce', 'GraphQL', 'WordPress']
        }
      ]
    }
  }
}
</script>
