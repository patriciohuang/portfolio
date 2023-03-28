<template>
  <v-footer
    class="bg-indigo-lighten-1 text-center d-flex justify-center py-6"
  >
    <div v-for="icon in icons">
      <a :href="icon.href" target="_blank" style="text-decoration: none;">
        <v-btn
        :key="icon.icon"
        :icon="icon.icon"
      ></v-btn>
    </a>
    </div>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [{
        icon: 'mdi-facebook',
        href: 'https://www.facebook.com/patricio.huang'
      },
      {
        icon: 'mdi-linkedin',
        href: 'https://www.linkedin.com/in/patricio-huang-055b05129/'
      },
      {
        icon: 'mdi-instagram',
        href: 'https://www.instagram.com/pato_h7/?next=%2F'
      },
      {
        icon: 'mdi-github',
        href: 'https://github.com/patriciohuang'
      },
      {
        icon: 'mdi-whatsapp',
        href: 'https://wa.me/31687388726'
      },
      ],
    }),
  }
</script>


