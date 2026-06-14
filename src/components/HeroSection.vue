<template>
  <section class="section pt-20 pb-24 sm:pt-28">
    <div class="grid md:grid-cols-5 gap-12 items-center">
      <div class="md:col-span-3" v-reveal>
        <p class="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          Available for internships &amp; junior roles
        </p>

        <h1 class="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-zinc-900 dark:text-zinc-50">
          Hi, I'm Patricio<span class="text-accent dark:text-accent-light">.</span>
        </h1>
        <p class="mt-4 text-xl font-medium text-zinc-500 dark:text-zinc-400">
          IT Student &amp; Software Developer
        </p>

        <p class="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          I build websites and applications that are simple, reliable, and enjoyable to use — pairing the creative side
          of design with the logic of <span class="font-semibold text-zinc-800 dark:text-zinc-100">C#</span> and
          <span class="font-semibold text-zinc-800 dark:text-zinc-100">JavaScript</span>. Based in Amsterdam.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a :href="cvLink" target="_blank" rel="noopener" class="btn-primary">Download CV</a>
          <a href="mailto:patriciohuang20@gmail.com" class="btn-ghost">Email me</a>
          <a href="https://github.com/patriciohuang" target="_blank" rel="noopener" class="btn-ghost">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.02 2.8-.02 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
            GitHub
          </a>
        </div>

        <dl class="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <div>
            <dt class="text-xs font-semibold uppercase tracking-widest text-zinc-400">Location</dt>
            <dd class="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">Amsterdam, Netherlands</dd>
          </div>
          <div>
            <dt class="text-xs font-semibold uppercase tracking-widest text-zinc-400">Languages</dt>
            <dd class="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">Chinese &amp; Spanish (Native) · English (C1) · Dutch (A1)</dd>
          </div>
        </dl>
      </div>

      <div class="md:col-span-2 flex justify-center md:justify-end" v-reveal="{ delay: 120 }">
        <div class="relative">
          <div class="absolute -inset-3 rounded-full bg-accent/10 blur-2xl dark:bg-accent/20" aria-hidden="true"></div>
          <div class="relative h-60 w-60 sm:h-72 sm:w-72 overflow-hidden rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800 shadow-xl">
            <img :src="portrait" alt="Patricio Huang"
              class="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import portrait from '../assets/Patricio.jpeg'

export default {
  name: 'HeroSection',
  props: ['cvLink'],
  data() {
    return { portrait }
  }
}
</script>
