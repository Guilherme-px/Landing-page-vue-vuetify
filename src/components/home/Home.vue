<template>
    <section id="home">
        <v-carousel
            cycle
            height="auto"
            hide-delimiter-background
            show-arrows-on-hover
        >
   
            <v-carousel-item
                aspect-ratio="1.2"
                height="auto"
                max-height="630"
                gradient="to right, rgba(0, 0, 0, .3), rgba(5 , 5, 5, .5)"
                v-for="(slide,i) in slides"
                :key="i"
                :src="slide.src"   
            >
                <v-container fill-height>
                    <v-layout align-center>
                        <v-flex>
                            <span>{{ slide.text }}</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-carousel-item>
        </v-carousel>
    </section>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            slides: [
                {
                    src: require('../../assets/bg2.jpg'),
                    text: "We use high quality Arabica and bourbon beans."
                }, {
                    src: require('../../assets/bg3.jpg'),
                    text: "Tasty coffee with freshly ground beans."
                }, {
                    src: require('../../assets/bg.jpg'),
                    text: "Modern equipment and a wide variety of coffee flavors."
                }
            ]
        }
    }
}
</script>

<style scoped>
.flex, .child-flex > * {
    position: absolute;
    right: 0;
    top: 80px;
    font-size: 1.5rem;
    color: whitesmoke;
    padding: 50px;
}

@media (max-width: 600px) {
    .flex, .child-flex > * {
        position: absolute;
        left: 100px;
        top: 20px;
        font-size: 1.1rem;
        color: whitesmoke;
    }
}
</style>