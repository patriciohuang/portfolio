<template>
  <v-footer
    class="text-center d-flex justify-center py-6"
  >
    <div id="social-links">
      <ul>
        <li v-for="icon in icons">
          <a :href="icon.href" target="_blank" style="text-decoration: none;">
          <v-icon class="py-5" :icon="icon.icon"></v-icon></a> 
        </li>
      </ul>
      
    </div>
    <div>
      Designed & Built by Patricio Huang
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
        href: 'https://www.linkedin.com/in/patricio-huang-a8124b1ab/'
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

