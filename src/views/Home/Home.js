import axios from "axios";
export default {
    async created() {
        this.result = (await axios.get('http://localhost:3000/user', {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token')
            }
        })).data;

        this.user = this.result;
        console.log(this.user);
    },

    data() {
        return {
            search: '',
            user: {},
            result: {}
        }
    },
    mounted() {
        this.searchArticle();
    },
    methods: {
        async searchArticle() {
            const search = this.search || '';
            this.result = (await axios.get(`http://localhost:3000/articles/filter?tag=${search}`)).data;
            console.log(this.result);
        },


    }
}