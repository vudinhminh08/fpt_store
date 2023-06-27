<template>
  <v-app>
    <NavBar />
    <v-container fluid>
      <v-card
        color="#F7F7F7"
        height="180px"
        tile
        flat
        class="d-flex align-center justify-center mt-12"
        dark
      >
        <v-col cols="12" sm="12">
          <v-item-group mandatory class="mt-n1">
            <v-container>
              <v-row justify="center" class="space">
                <v-col
                  cols="12"
                  xs="12"
                  md="2"
                  ms="2"
                  v-for="(category, i) in categories"
                  :key="i"
                >
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      :color="active ? '#D5F0DB' : 'white'"
                      :class="active ? 'borderme' : 'borderout'"
                      class="d-flex-algin-center rounded-lg mx-2 pa-5"
                      dark
                      height="170"
                      @click="toggle"
                      flat
                    >
                      <v-row>
                        <v-col cols="12" sm="12">
                          <v-list-item
                            three-line
                            class="text-center align-center justify-center pa-0"
                          >
                            <v-list-item-content>
                              <div
                                align="center"
                                justify="center"
                                class="mt-5"
                                style="height: 70px"
                              >
                                <v-img
                                  :src="category.img"
                                  max-height="80"
                                  max-width="80"
                                  contain
                                >
                                </v-img>
                              </div>
                              <v-list-item-subtitle
                                :class="active ? 'green--text' : 'black--text'"
                                class="caption mt-5"
                              >
                                {{ category.title }}
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </v-col>
      </v-card>

      <v-divider></v-divider>
      <v-toolbar color="transparent">
        <v-toolbar-title>LOUNGE CHAIRS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn varient="text" color="grey">Sort by:</v-btn>
        <v-btn varient="text" color="">Name</v-btn>
        <v-btn varient="text" color="grey">Popularity</v-btn>
        <v-btn varient="text" color="grey">Price</v-btn>
      </v-toolbar>
      <v-row class="ma-5">
        <v-col
          cols="12"
          sm="3"
          align="center"
          justify="center"
          v-for="(chair, i) in chairs"
          :key="i"
        >
          <v-card align="center" tile>
            <v-img :src="chair.ImageLink" width="200" height="200" contain>
            </v-img>
            <v-card-text class="mt-n1" style="height: 50px">
              <strong>{{ chair.Name }}</strong>
            </v-card-text>
            <v-card-text class="">
              <button
                class="pa-2 rounded"
                style="background-color: #cb1c22; color: white"
              >
                <strong>{{ chair.Price }}</strong>
              </button>
            </v-card-text>
            <v-card-text class="ma-2" style="background-color: #f8f9fa">
              <div class="ml-2">
                <v-row style="color: #6c757d">{{ chair.Brand }}</v-row>
                <v-row style="color: #6c757d">{{ chair.Storage }}</v-row>
                <v-row style="color: #6c757d">{{ chair.OS }}</v-row>
                <v-row style="color: #6c757d">{{ chair.Weight }}</v-row>
              </div>
            </v-card-text>
            <v-row>
              <v-col
                ><v-btn
                  class="ma-4"
                  style="background-color: #cb1c22; color: white"
                >
                  <strong>Mua ngay</strong></v-btn
                ></v-col
              >
              <v-col
                ><v-btn
                  class="ma-4"
                  style="background-color: #99a2aa; color: white"
                >
                  <strong>So sánh</strong></v-btn
                ></v-col
              >
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-toolbar color="transparent">
        <v-toolbar-title class="text-caption">
          Show more chairs</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-icon color="grey" left class="mr-4 mt-n1"
          >fas fa-long-arrow-alt-left</v-icon
        >
        <span class="text-caption"></span>
        <v-icon color="grey" left class="mr-4 mt-n1"
          >fas fa-long-arrow-alt-right</v-icon
        >
      </v-toolbar>
    </v-container>
    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

import NavBar from "@/components/NavBar.vue";
import FooterView from "@/components/FooterView.vue";
// import axios from "axios";
export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    FooterView,
  },
  data() {
    return {
      chair: true,
      other: false,
      slider2: 50,
      categories: [
        { img: "9.png", title: "SLEEPING BEDS" },
        { img: "2.png", title: "LOUNGE CHAIRS" },
        { img: "1.png", title: "CHAIRS" },
        { img: "4.png", title: "OFFICE CHAIRS" },
        { img: "8.jpg", title: "TABLES NIGHTSTANDS" },
        { img: "6.png", title: "KITCHEN FURNITURE" },
      ],
      chairs: [],
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch("http://localhost:3000/laptops");
      this.chairs = await response.json();
    },
  },
});
</script>
<style scoped>
.v-container {
  width: 100%;
  padding: 16px 0px o !important;
  margin-right: auto;
  margin-left: auto;
}
.v-card.borderme {
  border: 2px solid black !important;
}
.v-card.borderout {
  border: 1px solid #d5f0db !important;
}
</style>
