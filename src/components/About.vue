<template>
  <section id="about">
    <div class="about d-flex flex-row mb-6 ">
      <h2 class="numbered-heading">About Me</h2>
    </div>
    <v-row>
      <v-col lg="6" md="12">
        <p class="pb-2">Hello! My name is Patricio and I enjoy creating things that live on the internet. My interest in 
          web development started back in 2020 when I decided to start studying web development — turns out 
          hacking together a custom button taught me a lot about HTML & CSS!</p>
        <p class="pb-2"> I have yet to find my first development job, but I do have some experience gained when building 
          several projects for the different courses during my studies. </p>
        <p class="pb-2">In my previous working experiences, I collaborated in multidisciplinary teams with people with 
          different points of view, from sales to operations to IT. I learned that by helping each other, 
          we come up with better solutions and achieve greater results. </p>
        <Skills />
      </v-col>
      <v-col lg="6" md="12" class="d-flex justify-center">
        <picture>
          <source type="image/webp" srcset="../assets/Patricio.webp">
          <img width="300" data-main-image src="../assets/Patricio.png" alt="Headshot">
        </picture>
      </v-col>
    </v-row>
    
  </section>
</template>
<script>
import Skills from './Skills.vue';
export default {
  components: {Skills}
}
</script>
<style>
#headshot img {
  object-fit: cover;
}
</style>