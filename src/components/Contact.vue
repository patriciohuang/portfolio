<template>
    <section id="contact">
        <h2 class="numbered-heading">What’s Next?</h2>
        <p id="contact-p">Get In Touch</p>
        <div>
            <p>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <v-btn variant="outlined">
                <a href="mailto:patriciohuang20@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
            </v-btn>
        </div>
    </section>
</template>
<style>
#contact-p {
    font-size: 2em;
}
#contact div{
    padding: 50px 0 200px 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
} 
#contact div p {
    padding: 20px 0;
}
#contact p {
    text-align: center;
}
</style>