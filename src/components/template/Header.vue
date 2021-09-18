<template>
    <section>
        <v-navigation-drawer v-model="drawer" temporary dark app class="grey darken-4">
            <v-list>
                <v-list-item class="d-flex flex-column pt-9">
                    <v-list-item-avatar>
                        <img
                            src="https://cdn.pixabay.com/photo/2014/04/02/16/23/coffee-307147_960_720.png"
                            alt="logo"
                        />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title">Cyber coffee</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list v-for="(item, i) in items" :key="i" class="pa-0"> 
                <router-link :to="{hash: item.hash}">        
                    <v-list-item link v-show="isXs" >
                        <v-list-item-icon class="justify-center">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="subtitile-1">
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>   
                <v-divider dark/>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar :reSize="reSize" dark app :color="color" :class="{ sizeY: reSize }">
            <v-toolbar-title class="pl-6" v-show="!isXs">
                    <v-img
                        src="https://cdn.pixabay.com/photo/2014/04/02/16/23/coffee-307147_960_720.png"
                        max-height="50"
                        max-width="50"
                    />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="isXs"></v-app-bar-nav-icon>
            <v-container class="d-flex flex-row justify-end mr-0" v-else>
                <router-link v-for="(item, i) in items" :key="i" :to="{hash: item.hash}">
                    <v-btn text>{{item.text}}</v-btn>
                </router-link>
            </v-container>
        </v-app-bar>
    </section>
</template>

<script>
export default {
    name: 'Header',
    props: { 
        reSize: Boolean,
        color: String 
    },
    data: () => ({
        drawer: null,
        isXs: false,
        scrollY: null,
        items: [
            {
                icon: "mdi-home",
                text: "Home", 
                hash: "#home"
            },
            {
                icon: "mdi-information-variant", 
                text: "About", 
                hash: "#about"
            },
            {
                icon: "mdi-coffee",
                text: "Coffees", 
                hash: "#coffee"
            },
            {
                icon: "mdi-email", 
                text: "Contact", 
                hash: "#contact"
            },
        ],
    }),
    methods: {
        onResize() {
            this.isXs = window.innerWidth < 650;
        },
    },
    watch: {
        isXs(value) {
            if(!value) {
                if(this.drawer) {
                    this.drawer = false;
                }
            }
        },
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true })
    },
};
</script>

<style scoped>
.sizeY {
  height: 80px !important;
  padding-top: 10px;
}

a {
    text-decoration: none;
}

.v-btn__content a {
    color: white;
}
</style>