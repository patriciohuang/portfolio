<template>
  <section class="section max-w-5xl mx-auto pt-16">
    <div class="flex items-center justify-between mb-10 border-b-2 border-gray-200 pb-2">
      <h2 class="text-3xl font-bold text-gray-800">Selected Projects</h2>
      <a href="https://github.com/patriciohuang" target="_blank"
        class="text-lg font-medium text-[--accent-dark] hover:text-[--accent] transition">View all on GitHub →</a>
    </div>

    <div class="grid md:grid-cols-2 gap-10">
      <article v-for="project in projects" :key="project.title"
        class="bg-white p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col">
        <div class="w-full h-48 mb-4 overflow-hidden rounded-lg border border-gray-200 cursor-pointer"
          @click="openModal(project.imageSrc)">
          <img v-if="project.imageSrc !== 'placeholder'" :src="project.imageSrc" :alt="'Screenshot of ' + project.title"
            class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
          <div v-else class="w-full h-full bg-gray-50 flex items-center justify-center text-gray-500 font-medium">
            Screenshot Placeholder (16:9 Aspect Ratio)
          </div>
        </div>

        <h3 class="text-xl font-bold text-[--primary]">{{ project.title }}</h3>

        <div class="grow">
          <p class="text-md text-gray-600 mt-2">{{ project.description }}</p>
        </div>

        <div class="mt-4 flex flex-wrap gap-2 text-sm">
          <span v-for="tag in project.tags" :key="tag"
            class="px-3 py-1 rounded-full bg-[--accent-light]/20 text-[--accent-dark] font-semibold border border-[--accent-light]">
            {{ tag }}
          </span>
        </div>

        <div class="mt-4 pt-4 border-t border-gray-200 flex gap-6">
          <a :href="project.github" target="_blank"
            class="font-medium text-gray-700 hover:text-[--accent] transition duration-150">View Code →</a>
          <a v-if="project.demo" :href="project.demo" target="_blank"
            class="font-medium text-gray-700 hover:text-[--accent] transition duration-150">Live Demo →</a>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <div v-if="isModalOpen" class="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-90 p-4"
        @click.self="closeModal" @keydown.esc="closeModal">
        <div class="relative max-w-6xl max-h-[90vh] p-4 bg-gray-900 rounded-lg shadow-2xl">
          <button @click="closeModal"
            class="absolute top-0 right-0 m-4 text-white text-3xl opacity-70 hover:opacity-100 transition focus:outline-none"
            aria-label="Close Modal">
            &times;
          </button>
          <img :src="modalImageSrc" alt="Full screen project screenshot"
            class="max-w-full max-h-[85vh] object-contain rounded-md" />
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script>
// The script section remains exactly the same as your original
export default {
  name: 'ProjectsSection',
  data() {
    return {
      isModalOpen: false,
      modalImageSrc: '',
      projects: [
        {
          title: 'Fitness Website (web-markup)',
          description: 'Static site for workout guides — HTML, CSS, responsive layout. Focus on accessibility and beginner UX.',
          imageSrc: '/startfit.png',
          tags: ['HTML', 'CSS', 'Responsive'],
          github: 'https://github.com/Patohuang/web-markup',
          demo: 'https://startfit-jdggfi1zd-patriciohuangs-projects.vercel.app/'
        },
        {
          title: 'Home Stock Manager (Vue 3 / Firebase)',
          description: 'A responsive web app that helps manage home inventory more easily. Users can add, edit, and track household items with expiration dates, organize them by category, and quickly see which products are running low. Built with Vue 3, Vuetify, and Firebase for real-time updates and authentication.',
          imageSrc: '/home-stock-manager.png',
          tags: ['Vue 3', 'Vuetify', 'Firebase', 'Vuelidate', 'Vue Router', 'PWA'],
          github: 'https://github.com/patriciohuang/home-stock-manager',
          demo: 'https://home-stock-manager.vercel.app/'
        },
        {
          title: 'Chapeau - Restaurant Ordering System (C# / ASP.NET Core)',
          description: 'A comprehensive, staff-facing ordering system built by a team to manage restaurant operations, featuring dedicated modules for Waiters (CRUD orders), Kitchen/Bar (Order Fulfillment), Payments (Splitting/Methods), and Employee Authentication.',
          imageSrc: '/Chapeau.jpeg',
          tags: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/patriciohuang/Chapeau',
          demo: null
        },
        {
          title: 'Someren - Study Trip Logistics System (C# / Database)',
          description: 'A logistics and financial administration system for a student study trip. Key features include multi-user accommodation assignment (rooms/dormitories), participant registration (students/lecturers), activity tracking, and bar sales management with VAT calculation.',
          imageSrc: '/someren.jpeg',
          tags: ['C#', '.NET', 'SQL Database', 'Database Design', 'UML', 'Data Management'],
          github: 'https://github.com/patriciohuang/Someren',
          demo: null
        }
      ]
    }
  },
  methods: {
    openModal(src) {
      this.modalImageSrc = src;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.modalImageSrc = '';
    }
  }
}
</script>