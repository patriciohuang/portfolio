<template>
  <section id="about">
    <div class="about d-flex flex-row mb-6 ">
      <h2 class="numbered-heading">About Me</h2>
    </div>
    <v-row>
      <v-col md="12">
        <p class="pb-2">Hello! My name is Patricio and I enjoy creating things that live on the internet. My interest 
          started back in 2020 when I decided to start studying web development. I found that creating small, 
          custom website features was a fun way to learn the ins and outs of HTML & CSS, and it sparked my interest.</p>
        <p class="pb-2"> While I have yet to secure my first development job, I have gained valuable experience by building 
          several projects during my studies. These projects have allowed me to hone my skills in web development, and I'm 
          confident in my ability to take on new challenges. </p>
        <p class="pb-2">In addition, my previous working experiences have taught me the importance of collaboration in 
          achieving success. Working with people from diverse backgrounds, I have learned how to effectively communicate 
          and work as part of a team. I believe that by leveraging these skills, I can contribute to creating innovative 
          and impactful digital solutions.</p>
        <Skills />
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