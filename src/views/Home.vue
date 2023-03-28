<template>  
  <Home />
  <About />
  <Work />
  <Contact />
</template>
<script>
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Work from '@/components/Work.vue';
import Contact from '@/components/Contact.vue';
export default {
  components: { Home, About, Work, Contact }
}
</script>
