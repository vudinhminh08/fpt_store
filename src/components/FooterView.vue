<template>
  <v-footer>
    <v-card
      class="text-center"
      elevation="0"
      rounded="0"
      width="100%"
      color="FAFAFA"
    >
      <v-card-text>
        <v-btn class="mx-4" variant="text">Catalog</v-btn>
        <v-btn class="mx-4" variant="text">Designers</v-btn>
        <v-btn class="mx-4" variant="text">Blog</v-btn>
        <v-btn class="mx-4" variant="text">Inspiration</v-btn>
        <v-btn class="mx-4" variant="text">About us</v-btn>
        <v-btn class="mx-4" variant="text">Contact</v-btn>
      </v-card-text>
      <v-card-text>
        @ {{ new Date().getFullYear() }} <strong> Design by Minhvu</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style>
.v-footer {
  padding: 8px 0 !important;
}
</style>
