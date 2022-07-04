import axios from "axios";
export default {

    data() {
        return {
            email: '',
            password: '',
            result: {}
        }
    },
    methods: {
        async login() {
            const email = this.email || '';
            const password = this.password || '';
            this.result = (await axios.post(`http://localhost:3000/users/login`, {
                "user": {
                    email,
                    password
                }
            })).data;
            axios.defaults.headers.common['Authorization'] = 'Token ' + this.result.user.token;
            console.log(this.result);
        }
    }
}