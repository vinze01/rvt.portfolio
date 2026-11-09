import { createApp } from 'vue';
import App from './App.vue';
import './global.css';
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import router from './router';
import { vReveal, vMagnetic, vTilt } from './composables/useReveal';

const app = createApp(App);

app.use(Antd);
app.use(router);
app.directive('reveal', vReveal);
app.directive('magnetic', vMagnetic);
app.directive('tilt', vTilt);

app.mount('#app');
