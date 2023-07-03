import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

library.add(faLaptop);

loadFonts()

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(vuetify)
  .mount('#app')
