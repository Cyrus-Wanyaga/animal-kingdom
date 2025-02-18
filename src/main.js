import { createApp } from 'vue';
import './styles.scss';
import './style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
