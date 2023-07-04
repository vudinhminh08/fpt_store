<template>
  <div class="mask-popup">
    <v-btn @click="Close" class="ma-4" style="background-color: #99a2aa; color: white">
      <strong>Close</strong></v-btn>
    <div class="noti-warning">

      <v-container fluid>

        <v-row class="ma-5">
          <v-col cols="12" sm="3" align="center" justify="center" v-for="(laptop, i) in laptops" :key="i">
            <v-card align="center" tile>
              <v-img :src="laptop.ImageLink" width="200" height="200" contain>
              </v-img>
              <v-card-text class="mt-n1" style="height: 50px">
                <strong>{{ laptop.Name }}</strong>
              </v-card-text>
              <v-card-text class="">
                <button class="pa-2 rounded" style="background-color: #cb1c22; color: white">
                  <strong>{{ laptop.Price }}</strong>
                </button>
              </v-card-text>
              <v-card-text class="ma-2" style="background-color: #f8f9fa">
                <div class="ml-2">
                  <v-row style="color: #6c757d">{{ "Brand: " + laptop.Brand }}</v-row>
                  <v-row style="color: #6c757d">{{ "CPU: " + laptop.CPU }}</v-row>
                  <v-row style="color: #6c757d">{{ "Weight: " + laptop.Weight }}</v-row>
                  <v-row style="color: #6c757d">{{ "Source: " + laptop.Source }}</v-row>
                </div>
              </v-card-text>
              <v-row>
                <v-col><v-btn :href="`${laptop.Link}`" class="ma-4" style="background-color: #cb1c22; color: white">
                    <strong>Mua ngay</strong></v-btn></v-col>
                <v-col><v-btn class="ma-4" style="background-color: #99a2aa; color: white">
                    <strong>So sánh</strong></v-btn></v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "PopupView",
  props: ["laptops"],
  methods: {
    Close() {
      this.$emit("Close")
    }
  }
}

</script>
<style>
.mask-popup {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #222222cb;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 101;
}

.noti-warning {
  background-color: white;
  border-radius: 4px;
  border: 2px solid #dfdfdf;
  width: 1200px;
  box-sizing: border-box;
}

.v-container {
  width: 100%;
  padding: 16px 0px o !important;
  margin-right: auto;
  margin-left: auto;
}
</style>