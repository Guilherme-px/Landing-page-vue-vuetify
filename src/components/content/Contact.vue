<template>
    <section class="black py-10" id="contact">
        <div class="display-1 font-weight-bold py-9 text-center" style="color: white"
        data-aos="zoom-in" data-aos-offset="200">
            Infos
        </div>
        <v-container grid-list-sm class="py-10">
            <v-layout row wrap>
                <v-flex d-flex xs12 sm6 child-flex class="px-10 py-10">
                    <v-card class="grey darken-4 py-10" data-aos="flip-right" data-aos-offset="200">
                        <div class="white--text">
                            <div class="title text-center d-flex justify-center align-center">
                                Meet our cafeteria
                            </div>
                            <div class="subtitle d-flex align-center px-10 pt-10">
                                Address:
                            </div>
                            <div class="body-1 d-flex align-center py-2 px-10">
                                rue Notre-Dame Est Montréal
                            </div>
                        </div>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6 child-flex class="px-10 py-10">
                    <v-card class="grey darken-4 py-10" data-aos="flip-left" data-aos-offset="200"
                        data-aos-delay="500">
                        <div class="white--text">
                            <div class="title text-center d-flex justify-center align-center">
                                Contact
                            </div>
                            <div class="subtitle d-flex align-center px-10 pt-10 pb-2">
                                Talk to us:
                            </div>
                            <div class="body-1 d-flex align-center py-2 px-10">
                                E-mail: xxxxx@xx.com
                            </div>
                            <div class="body-1 d-flex align-center py-2 px-10">
                                Phone: 99 9999-9999
                            </div>
                        </div>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style>

</style>