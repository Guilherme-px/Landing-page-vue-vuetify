<template>
    <section class="pt-10 grey darken-4" id="coffee">
        <div class="display-1 font-weight-bold py-9 text-center"
            style="color: white"
            data-aos="fade-down" data-aos-offset="200"
        >
            Menu
        </div>
        <v-container grid-list-sm class="pt-10">
            <v-layout row wrap>
                <v-flex
                    d-flex xs12 sm6 md4 child-flex
                    v-for="card, i in cards"
                    :key="i"
                    class="pa-9"
                    data-aos="flip-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                >
                    <v-card elevation="10" class="mx-auto black">
                        <v-img
                            :src="card.src"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                        >
                        </v-img>
                        
                        <div class="title white--text text-center d-flex justify-center align-center py-5">
                            {{card.title}}
                        </div>
                        <v-divider class="white"></v-divider>
                        <div class="subtitle-1 white--text d-flex justify-center align-center py-5">
                            {{card.price}}
                        </div>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'Coffee',
    props: ['isXs'],
    data: () => ({
        cards: 
        [{ 
            src: require('../../assets/coffee.jpg'),
            title: "Creamy cappuccino",
            price: "$ 20"
        }, {
            src: require('../../assets/coffee2.jpg'), 
            title: "Cappuccino with ice cream",
            price: "$ 25" 
        }, { 
            src: require('../../assets/coffee3.jpg'), 
            title: "Mocha coffee",
            price: "$ 20" 
        }, { 
            src: require('../../assets/coffee4.jpg'), 
            title: "Irish cappuccino",
            price: "$ 22" 
        }, { 
            src: require('../../assets/coffee5.jpg'), 
            title: "Espresso",
            price: "$ 5" 
        }, { 
            src: require('../../assets/coffee6.jpg'), 
            title: "Latte macchiato",
            price: "$ 15" 
        }],
    }),
}
</script>

<style>

</style>