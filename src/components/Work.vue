<template>
    <section id="work">
        <div class="d-flex flex-row mb-6 ">
            <h2 class="numbered-heading">Some Things I’ve Built</h2>
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
                <v-card text="A Progressive Web App to manage your home stock.
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with 
                the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus 
                PageMaker including versions of Lorem Ipsum." position="relative" color="#F5F3F4"></v-card>
            </v-col>
        </v-row>
    </section>
</template>