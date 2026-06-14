<template>
  <main class="flex-1">
    <HeroSection :cv-link="cvLink" />
    <EducationSection />
    <ProjectsSection />
    <ExperienceSection />
    <SkillsSection />
    <AboutSection />
    <ContactSection />
  </main>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import EducationSection from '../components/EducationSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ContactSection from '../components/ContactSection.vue';

export default {
  props: {
    cvLink: {
      type: String,
      required: true
    }
  },
  components: { HeroSection, EducationSection, ProjectsSection, ExperienceSection, SkillsSection, AboutSection, ContactSection }
}
</script>
