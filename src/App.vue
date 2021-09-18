<template>
    <v-app>
        <Header :color="color" :reSize="reSize" v-scroll="onscroll" />
        <v-main class="pt-0">
            <Home />
            <About />
            <Coffee />
            <Contact />
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import Header from './components/template/Header'
import Footer from './components/template/Footer'
import Home from './components/home/Home';
import About from './components/content/About';
import Coffee from './components/content/Coffee';
import Contact from './components/content/Contact';

export default {
    name: 'App',
    components: { 
        Header,
        Footer,
        Home,
        About,
        Coffee,
        Contact,
        },
    data: () => ({
        color: "",
        isTop: null,
        reSize: null,
    }),
    methods: {
        onscroll(e) {
            if(typeof window === "undefined") return
            const top = window.pageYOffset || e.target.scrollTop || 0
            this.isTop = top > 60
        }
    },
    created() {
        const top = window.pageYOffset || 0
        if(top <= 60) {
            this.color = "transparent"
            this.reSize = true
        }
    },
    watch: {
        isTop(value) {
            if(value) {
                this.color = "black"
                this.reSize = false
            } else {
                this.color = "transparent"
                this.reSize = true
            }
        }
    },
};
</script>

<style>

</style>
