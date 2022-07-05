import axios from "axios";
export default {

    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            this.result = (await axios.post('http://localhost:3000/users/login', {
                "user": {
                    email: this.email,
                    password: this.password
                }
            })).data;
            console.log(this.result);
            localStorage.setItem('token', this.result.user.token);
            this.$router.push('/');
        }
    }
}