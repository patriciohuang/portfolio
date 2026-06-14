<template>
  <section id="projects" class="section scroll-mt-20 py-20 border-t border-zinc-100 dark:border-zinc-900">
    <header class="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3" v-reveal>
      <div>
        <p class="section-label">Projects</p>
        <h2 class="section-title">Selected work</h2>
      </div>
      <a href="https://github.com/patriciohuang" target="_blank" rel="noopener"
        class="text-sm font-semibold text-accent transition hover:text-accent-dark dark:text-accent-light">View all on
        GitHub →</a>
    </header>

    <div class="grid gap-6 md:grid-cols-2">
      <article v-for="project in projects" :key="project.title" v-reveal
        class="card flex flex-col overflow-hidden !p-0 group hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
        <div class="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
          @click="project.imageSrc !== 'placeholder' && openModal(project.imageSrc)">
          <img v-if="project.imageSrc !== 'placeholder'" :src="project.imageSrc"
            :alt="'Screenshot of ' + project.title"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div v-else class="flex h-full w-full items-center justify-center text-sm text-zinc-400">No preview</div>
        </div>

        <div class="flex flex-1 flex-col p-6">
          <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-50">{{ project.title }}</h3>
          <p class="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{{ project.description }}</p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
          </div>

          <div class="mt-5 flex gap-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
            <a :href="project.github" target="_blank" rel="noopener"
              class="text-sm font-semibold text-zinc-700 transition hover:text-accent dark:text-zinc-200 dark:hover:text-accent-light">View
              code →</a>
            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener"
              class="text-sm font-semibold text-zinc-700 transition hover:text-accent dark:text-zinc-200 dark:hover:text-accent-light">Live
              demo →</a>
          </div>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <div v-if="isModalOpen" class="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
        @click.self="closeModal">
        <div class="relative max-h-[90vh] max-w-6xl">
          <button @click="closeModal"
            class="absolute -top-10 right-0 text-3xl text-white/70 transition hover:text-white focus:outline-none"
            aria-label="Close">&times;</button>
          <img :src="modalImageSrc" alt="Full screen project screenshot"
            class="max-h-[85vh] max-w-full rounded-lg object-contain" />
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      isModalOpen: false,
      modalImageSrc: '',
      projects: [
        {
          title: 'ItineraryHub — Travel Planning Web App',
          description: 'A travel planning platform built on a custom MVC architecture (no frameworks) with a clean separation of Controllers, Services, and Views. Trip invitations update in real time with no page refresh using AJAX and REST APIs.',
          imageSrc: '/itineraryhub.png',
          tags: ['C#', 'Custom MVC', 'AJAX', 'REST API', 'MySQL'],
          github: 'https://github.com/patriciohuang/ItineraryHub',
          demo: null
        },
        {
          title: 'Chapeau — Restaurant Ordering System',
          description: 'A full-stack, staff-facing ordering system built by a 4-person team, with modules for Waiters (CRUD orders), Kitchen/Bar fulfillment, payments, and employee authentication. I built the Kitchen and Bar view for real-time order tracking.',
          imageSrc: '/Chapeau.jpeg',
          tags: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework'],
          github: 'https://github.com/patriciohuang/Chapeau',
          demo: null
        },
        {
          title: 'Home Stock Manager',
          description: 'A responsive PWA for managing home inventory — add, edit, and track items with expiration dates, organize by category, and spot what is running low. Built with Vue 3 and Firebase for real-time updates and authentication.',
          imageSrc: '/home-stock-manager.png',
          tags: ['Vue 3', 'Vuetify', 'Firebase', 'PWA'],
          github: 'https://github.com/patriciohuang/home-stock-manager',
          demo: 'https://home-stock-manager.vercel.app/'
        },
        {
          title: 'Someren — Study Trip Logistics',
          description: 'A logistics and financial administration system for a student study trip: multi-user accommodation assignment, participant registration, activity tracking, and bar sales with VAT calculation.',
          imageSrc: '/someren.jpeg',
          tags: ['C#', '.NET', 'SQL', 'Database Design', 'UML'],
          github: 'https://github.com/patriciohuang/Someren',
          demo: null
        },
        {
          title: 'Fitness Website',
          description: 'A static, fully responsive site for workout guides built with HTML and CSS, with a focus on accessibility and a beginner-friendly user experience.',
          imageSrc: '/startfit.png',
          tags: ['HTML', 'CSS', 'Responsive'],
          github: 'https://github.com/Patohuang/web-markup',
          demo: 'https://startfit-jdggfi1zd-patriciohuangs-projects.vercel.app/'
        }
      ]
    }
  },
  methods: {
    openModal(src) {
      this.modalImageSrc = src
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.modalImageSrc = ''
    }
  }
}
</script>
