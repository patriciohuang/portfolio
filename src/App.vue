<template>
  <v-layout class="d-flex flex-column">
    <header class="d-flex justify-space-between">
      <NavbarList />
    </header>
    <v-main >
      <RouterView />
    </v-main>
    <footer>
      <Footer />
    </footer>
  </v-layout>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import NavbarList from './components/NavbarList.vue';
import Footer from './components/Footer.vue';
export default {
  components: { NavbarList, Footer },
}

</script>
<style>
header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}
nav a:link, a:visited, #logo {
  color: black;
  text-decoration: none;
}
#logo {
  font-size: 2em;
  padding: 10px 20px;
}
</style>

