<template>
  <section class="section pt-20 pb-20 max-w-5xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-6xl font-extrabold mb-10 leading-tight text-gray-900">
          Hi, I’m <span class="text-[--accent]">Patricio Huang</span>
        </h1>
        <p class="text-xl text-gray-700 mb-10 mt-10">
          I'm an <b>IT student</b> and developer based in Amsterdam, focused on building websites and applications that
          are simple, reliable, and enjoyable to use. I combine the <b>creative side of design</b> with the <b>logical
            part of C# and JavaScript</b> to create seamless digital experiences.
        </p>

        <div class="w-16 h-1 bg-[--accent-dark] rounded my-10"></div>

        <div class="flex flex-wrap gap-4 mt-10">
          <a :href="cvLink" target="_blank"
            class="bg-[--accent] text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-[#7e0c0d] transition duration-150">
            Download CV
          </a>
          <a href="mailto:patricio.huang.a@gmail.com"
            class="border border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-500 transition duration-150 flex items-center gap-2">
            <img src="/src/assets/gmail.png" alt="Email Icon" class="w-5 h-5" />
            Email Me
          </a>
          <a href="https://github.com/patriciohuang" target="_blank"
            class="border border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-500 transition duration-150 flex items-center gap-2">
            <img src="/src/assets/github.png" alt="GitHub Icon" class="w-5 h-5" />
            GitHub
          </a>
        </div>

        <div class="mt-10 pt-4 border-t border-gray-200">
          <p class="text-lg text-gray-600">Location: <span class="font-semibold text-gray-800">Amsterdam,
              Netherlands</span></p>
          <p class="mt-2 text-lg text-gray-600">Languages: <span class="font-semibold text-gray-800">Chinese (Native) •
              Spanish (Native) • English (C1) • Dutch (A1)</span></p>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="w-72 h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-[--accent-light]/50">
          <img src="/src/assets/Patricio.jpeg" alt="Patricio portrait"
            class="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: ['cvLink']
}
</script>