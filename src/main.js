import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { data } from './store.js'

data.loadProgrammerare().then(() => {
    const app = createApp(App);

    app.use(router);

    app.mount('#app');
});

