<template>
    <section>
        <v-footer padless dark>
            <v-card flat tile min-width="100%" class="grey darken-4 text-center">
                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>
                
                <v-card-text class="white--text body-1">
                    <span>developed by Guilherme Gonçalves</span>
                </v-card-text>
                
                <v-card-text class="white--text body-1">
                    <span>&copy; Copyright 2021 — {{ new Date().getFullYear() }} </span>
                </v-card-text>

            </v-card>
        </v-footer>
    </section>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-instagram',
        ],
    }),
}
</script>

<style>

</style>