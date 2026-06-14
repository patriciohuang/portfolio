// Lightweight scroll-reveal directive (replaces the AOS dependency).
// Usage: v-reveal  or  v-reveal="{ delay: 120 }"
export const reveal = {
  mounted(el, binding) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.classList.add('reveal-in')
      return
    }

    el.classList.add('reveal')
    const delay = binding.value && binding.value.delay
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-in')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
  }
}
