<template>
  <section class="section max-w-5xl mx-auto" data-aos="fade-up">
    <h2 class="text-3xl font-bold text-gray-800 mb-10 text-center">Get In Touch</h2>

    <div class="grid md:grid-cols-2 gap-10">

      <div class="bg-gray-50 rounded-lg p-8 shadow-inner border border-gray-100 flex flex-col justify-between">
        <div>
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">Let's Connect</h3>
          <p class="text-gray-600 mb-6">
            I'm currently seeking opportunities in software development and operations analysis. Feel free to reach out
            to discuss my projects, studies, or potential roles.
          </p>

          <div class="space-y-4">
            <p class="text-sm text-gray-700 flex items-center gap-3">
              <img src="/src/assets/gmail.png" alt="Gmail Icon" class="w-6 h-6 text-indigo-600" />
              <a class="text-indigo-600 font-medium hover:text-indigo-800 transition duration-150 max-w-full break-words"
                href="mailto:patricio.huang20@gmail.com">
                Mail
              </a>
            </p>

            <p class="text-sm text-gray-700 flex items-center gap-3">
              <img src="/src/assets/linkedin.png" alt="LinkedIn Icon" class="w-6 h-6 text-indigo-600" />
              <a href="https://www.linkedin.com/in/patricio-huang-a8124b1ab/" target="_blank"
                class="hover:underline text-gray-800 max-w-full break-words">
                LinkedIn
              </a>
            </p>

            <p class="text-sm text-gray-700 flex items-center gap-3">
              <img src="/src/assets/github.png" alt="GitHub Icon" class="w-6 h-6 text-indigo-600" />
              <a href="https://github.com/patriciohuang" target="_blank"
                class="hover:underline text-gray-800 max-w-full break-words">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg p-8 shadow-xl border border-gray-200">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Send a Message Directly</h3>
        <form class="space-y-4" @submit.prevent="sendEmail">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              class="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
              placeholder="Your name" v-model="form.name" required />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email"
              class="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
              placeholder="you@example.com" v-model="form.email" required />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows="4"
              class="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
              placeholder="Let me know how I can help!" v-model="form.message" required></textarea>
          </div>
          <div class="text-right">
            <button type="submit"
              class="btn-accent bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150"
              :disabled="loading">
              <span v-if="!loading">Send Message</span>
              <span v-else>Sending...</span>
            </button>
          </div>
        </form>
        <p v-if="status" class="mt-4 text-center font-medium" :class="statusClass">{{ status }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactSection',
  props: ['cvLink'],
  data() {
    return {
      form: { name: '', email: '', message: '' },
      loading: false,
      status: '',
    }
  },
  computed: {
    statusClass() {
      return this.status.includes('sent')
        ? 'text-green-600'
        : 'text-red-600'
    }
  },
  methods: {
    async sendEmail() {
      this.loading = true
      this.status = ''

      try {
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        if (publicKey) {
          emailjs.init(publicKey);
        } else {
          console.error("EmailJS Public Key is missing or undefined.");
        }

        const params = {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message,
        }

        await emailjs.send(serviceID, templateID, params, publicKey)
        this.status = '✅ Message sent successfully!'
        this.form = { name: '', email: '', message: '' }
      } catch (error) {
        console.error('EmailJS error:', error)
        this.status = '❌ Failed to send message. Please try again later.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>