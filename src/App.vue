<template>
  <div class="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors">
    <header
      class="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <nav class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <!-- Wordmark -->
        <a href="#top" class="flex items-center gap-2.5 shrink-0 group">
          <span
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white shadow-sm">PH</span>
          <span class="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hidden sm:inline">Patricio
            Huang</span>
        </a>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-7">
          <a v-for="link in links" :key="link.href" :href="link.href" class="nav-link">{{ link.label }}</a>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <button type="button" @click="toggle" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            class="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition hover:bg-zinc-50 hover:text-accent dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-accent-light">
            <!-- Sun -->
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <!-- Moon -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <a :href="cvLink" target="_blank" rel="noopener" class="btn-primary hidden sm:inline-flex !py-2 !px-4">
            Download CV
          </a>

          <!-- Mobile menu toggle -->
          <button type="button" @click="menuOpen = !menuOpen" aria-label="Toggle menu"
            class="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round">
              <path v-if="!menuOpen" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      <div v-if="menuOpen" class="md:hidden border-t border-zinc-200 dark:border-zinc-800">
        <div class="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-1">
          <a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false"
            class="nav-link py-2">{{ link.label }}</a>
          <a :href="cvLink" target="_blank" rel="noopener" class="btn-primary mt-2 sm:hidden">Download CV</a>
        </div>
      </div>
    </header>

    <span id="top"></span>
    <Home :cv-link="cvLink" />

    <footer class="border-t border-zinc-200 dark:border-zinc-800">
      <div
        class="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
        <p>© {{ new Date().getFullYear() }} Patricio Huang</p>
        <div class="flex items-center gap-5">
          <a href="https://github.com/patriciohuang" target="_blank" rel="noopener"
            class="transition-colors hover:text-accent dark:hover:text-accent-light">GitHub</a>
          <a href="https://www.linkedin.com/in/patricio-huang-a8124b1ab/" target="_blank" rel="noopener"
            class="transition-colors hover:text-accent dark:hover:text-accent-light">LinkedIn</a>
          <a href="mailto:patriciohuang20@gmail.com"
            class="transition-colors hover:text-accent dark:hover:text-accent-light">Email</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import { useTheme } from './composables/useTheme'

export default {
  name: 'App',
  components: { Home },
  setup() {
    const { isDark, toggle } = useTheme()
    return { isDark, toggle }
  },
  data() {
    return {
      menuOpen: false,
      cvLink: '/resume.pdf',
      links: [
        { label: 'Education', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' }
      ]
    }
  }
}
</script>
