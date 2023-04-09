<template>
    <section id="work">
        <div class="d-flex flex-row mb-6 ">
            <h2 class="numbered-heading">Featured Project</h2>
        </div>
        <h3 class="d-flex flex-row-reverse"><a href="https://home-stock-manager.vercel.app" target="_blank">Home Stock Manager</a></h3>
        <v-row>
            <v-col lg="6" md="6" sm="12" xs="12" class="d-flex justify-center">
                <picture>
                    <a href="https://home-stock-manager.vercel.app" target="_blank">
                        <source type="image/png" srcset="../assets/hsm.png">
                        <img data-main-image src="../assets/hsm.png" alt="Home Stock Manager">
                    </a>
                </picture>
            </v-col>
            <v-col lg="6" md="6" sm="12" xs="12" class="work-content d-flex align-end flex-column" z-index="2">   
                <v-card text="Home Stock Manager is a web application designed to help users keep track of their 
                household inventory. Users can add items to their inventory with details such as name, 
                and expiration date. The application allows users to search their inventory and view items that 
                are close to or have passed their expiration date. With a simple and intuitive interface, Home 
                Stock Manager makes it easy for users to stay organized and in control of their inventory." position="relative" color="#F5F3F4">
                    <div class="d-flex justify-space-around">
                        <v-chip color="#660708" variant="text">Firebase</v-chip>
                        <v-chip color="#660708" variant="text">Vue.js</v-chip>
                        <v-chip color="#660708" variant="text">Firestore</v-chip>
                        <v-chip color="#660708" variant="text">Vuetify</v-chip>
                        <v-chip color="#660708" variant="text">Vite</v-chip>
                    </div>
                </v-card>    
                <div id="links">
                    <a href="https://home-stock-manager.vercel.app" target="_blank">
                        <v-icon icon="mdi-open-in-new"></v-icon>
                    </a>
                </div>       
            </v-col>
        </v-row>
    </section>
</template>