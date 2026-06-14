import { ref } from 'vue'

// Initial state is set by the inline boot script in index.html (anti-FOUC),
// so we just read whatever class is already on <html>.
const isDark = ref(
  typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
)

function apply(dark) {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch (e) {
    /* localStorage unavailable — ignore */
  }
}

export function useTheme() {
  const toggle = () => apply(!isDark.value)
  return { isDark, toggle }
}
