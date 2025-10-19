<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-md">
      <nav class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        <div class="flex items-center gap-4">
          <a id="logo" href="/">
            <img src="./assets/logo.png" alt="Patricio Huang" width="138" height="41">
          </a>
          <div class="hidden sm:block">
            <span class="text-gray-500">• IT Student • Software Developer</span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <a :href="cvLink" target="_blank" rel="noopener" class="bg-[--accent] text-white font-medium text-sm px-4 py-2 rounded-lg
                    hover:bg-[#7e0c0d] transition duration-150 shadow-md">
            Download CV
          </a>

          <a href="https://github.com/patriciohuang" target="_blank"
            class="text-sm text-gray-700 hover:text-[--accent-dark] transition hidden sm:inline">GitHub</a>
          <a href="https://linkedin.com/in/patricio-huang-a8124b1ab/" target="_blank"
            class="text-sm text-gray-700 hover:text-[--accent-dark] transition hidden sm:inline">LinkedIn</a>

        </div>
      </nav>
    </header>

    <Home :cv-link="cvLink" />

    <footer class="border-t border-gray-200 bg-gray-50">
      <div class="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-500 text-center sm:text-left">
        © {{ new Date().getFullYear() }} Patricio Huang
      </div>
    </footer>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      cvLink: 'https://docs.google.com/document/d/12nuYCapb803OVrXibswWNBGRwt8zrVdmGZ0Y0d3Kiuk//export?format=pdf'
    }
  }
}
</script>