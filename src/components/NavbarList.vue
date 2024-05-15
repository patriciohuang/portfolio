<template>
    <a id="logo" href="/"><img src="../assets/logo.png" alt="Patricio Huang" width="138" height="41"></a>
    <nav class="topnav" :class="{ responsive: active }" id="myTopnav">
        <a href="#" class="list-style-none text-button text-decoration-none active" @click="toggleNav()">Home</a> 
        <a href="#about" class="text-button text-decoration-none" @click="toggleNav()">About</a> 
        <a href="#work" class="text-button text-decoration-none" @click="toggleNav()">Work</a> 
        <a href="#contact" class="text-button text-decoration-none"  @click="toggleNav()">Contact</a> 
        <a href="javascript:void(0);" class="icon" @click="toggleNav()">
            <font-awesome-icon :icon="['fas', 'fa-bars']" />
        </a>
    </nav>
</template>
<script>
export default {
    data: () => ({
        active: false
    }),
    methods: {
        toggleNav: function () {
            this.active = !this.active
        }
    },
}
</script>