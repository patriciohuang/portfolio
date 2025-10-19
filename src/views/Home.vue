<template>
  <main class="flex-1">
    <HeroSection :cv-link="cvLink" />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ExperienceSection />
    <ContactSection :cv-link="cvLink" />
  </main>
</template>
<script>
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import ContactSection from '../components/ContactSection.vue';

export default {
  props: {
    cvLink: {
      type: String,
      required: true
    }
  },
  components: { HeroSection, AboutSection, ProjectsSection, SkillsSection, ExperienceSection, ContactSection }
}
</script>
