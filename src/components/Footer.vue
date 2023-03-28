<template>
  <v-footer
    class="text-center d-flex justify-center py-6"
  >
    <div id="social-links">
      <ul>
        <li v-for="icon in icons">
          <a :href="icon.href" target="_blank" style="text-decoration: none;">
          <span :class="icon.icon"></span></a> 
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
        icon: 'mdi mdi-facebook',
        href: 'https://www.facebook.com/patricio.huang'
      },
      {
        icon: 'mdi mdi-linkedin',
        href: 'https://www.linkedin.com/in/patricio-huang-055b05129/'
      },
      {
        icon: 'mdi mdi-instagram',
        href: 'https://www.instagram.com/pato_h7/?next=%2F'
      },
      {
        icon: 'mdi mdi-github',
        href: 'https://github.com/patriciohuang'
      },
      {
        icon: 'mdi mdi-whatsapp',
        href: 'https://wa.me/31687388726'
      },
      ],
    }),
  }
</script>

