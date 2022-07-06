import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Slide } from 'vue3-burger-menu';
import axios from "axios";


createApp(App).use(router).mount('#app')

export default {
    data() {
        return {
            user: {},
        }
    },
    mounted() {
        this.currentUser();
    },
    components: {
        Slide
    },
    methods: {
        async currentUser() {
            this.result = (await axios.get('http://localhost:3000/user', {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            })).data;

            this.user = this.result;
            console.log(this.user);
        },
    }
}