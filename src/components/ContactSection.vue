<template>
  <section id="contact" class="section scroll-mt-20 py-20 border-t border-zinc-100 dark:border-zinc-900">
    <header class="mb-12" v-reveal>
      <p class="section-label">Contact</p>
      <h2 class="section-title">Let's get in touch</h2>
    </header>

    <div class="grid gap-6 md:grid-cols-2" v-reveal>
      <!-- Left: intro + links -->
      <div class="card flex flex-col justify-between bg-zinc-50/60 dark:bg-zinc-900">
        <div>
          <h3 class="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Let's connect</h3>
          <p class="mt-3 text-zinc-600 dark:text-zinc-300">
            I'm currently looking for internships and junior software roles. Feel free to reach out to talk about my
            projects, my studies, or a potential opportunity.
          </p>
        </div>

        <div class="mt-8 space-y-3">
          <a v-for="link in links" :key="link.label" :href="link.href" :target="link.external ? '_blank' : null"
            rel="noopener"
            class="group flex items-center gap-3 text-sm font-medium text-zinc-700 transition hover:text-accent dark:text-zinc-200 dark:hover:text-accent-light">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition group-hover:border-accent group-hover:text-accent dark:border-zinc-700 dark:text-zinc-400 dark:group-hover:text-accent-light"
              v-html="link.icon"></span>
            {{ link.label }}
          </a>
        </div>
      </div>

      <!-- Right: form -->
      <div class="card">
        <h3 class="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Send a message</h3>
        <form class="mt-5 space-y-4" @submit.prevent="sendEmail">
          <div>
            <label class="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
            <input v-model="form.name" required placeholder="Your name" :class="inputClass" />
          </div>
          <div>
            <label class="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
            <input v-model="form.email" type="email" required placeholder="you@example.com" :class="inputClass" />
          </div>
          <div>
            <label class="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
            <textarea v-model="form.message" rows="4" required placeholder="How can I help?" :class="inputClass"></textarea>
          </div>
          <button type="submit" class="btn-primary w-full" :disabled="loading">
            <span v-if="!loading">Send message</span>
            <span v-else>Sending…</span>
          </button>
          <p v-if="status" class="text-center text-sm font-medium" :class="statusClass">{{ status }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactSection',
  data() {
    return {
      form: { name: '', email: '', message: '' },
      loading: false,
      status: '',
      inputClass:
        'block w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition ' +
        'focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 ' +
        'dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder-zinc-500',
      links: [
        {
          label: 'patriciohuang20@gmail.com',
          href: 'mailto:patriciohuang20@gmail.com',
          external: false,
          icon: '<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>'
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/patricio-huang-a8124b1ab/',
          external: true,
          icon: '<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17V10.3H6.13V17h2.21zM7.23 9.39a1.28 1.28 0 1 0 0-2.56 1.28 1.28 0 0 0 0 2.56zM18 17v-3.68c0-1.97-1.05-2.88-2.46-2.88-1.13 0-1.64.62-1.92 1.06v-.91h-2.2c.03.62 0 6.7 0 6.7h2.2v-3.74c0-.2.01-.4.07-.54.16-.4.52-.81 1.13-.81.8 0 1.12.6 1.12 1.5V17H18z"/></svg>'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/patriciohuang',
          external: true,
          icon: '<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.02 2.8-.02 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>'
        }
      ]
    }
  },
  computed: {
    statusClass() {
      return this.status.includes('sent') ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
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
          emailjs.init(publicKey)
        } else {
          console.error('EmailJS Public Key is missing or undefined.')
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
