import axios from "axios";
export default {
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