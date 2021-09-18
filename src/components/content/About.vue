<template>
    <section id="about">
        <v-img class="d-flex justify-center align-center"
            aspect-ratio="1.2"
            height="auto"
            max-height="650"
            gradient="to right, rgba(10, 10, 10, .9), rgba(15 , 15, 15, .6)"
            src="../../assets/bg-about.jpg"
        >   
        <v-container>
            <v-layout>
                <v-row class="pa-5">
                    <v-flex>
                        <div data-aos="fade-down" data-aos-offset="50" data-aos-delay="500" class="display-1
                        font-weight-bold mb-9 text-center" style="color: white">
                            About us
                        </div>
                    </v-flex>
                    <v-flex>
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="500" class="body-1 mt-9 text-center" style="color: white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor Nullam ac tortor vitae purus. A iaculis at erat pellentesque adipiscing commodoelit. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibusnisl.
                    </div>
                </v-flex>
                </v-row>
            </v-layout>
        </v-container>
        </v-img>
    </section>
</template>

<script>

export default {
    name: 'About'
}
</script>

<style>

</style>