import axios from "axios";
export default {

    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async register() {
            this.result = (await axios.post('http://localhost:3000/users', {
                "user": {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
            })).data;
            console.log(this.result);
            this.$router.push('/login');
        }
    }
}