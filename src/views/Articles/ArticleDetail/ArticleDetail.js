import axios from "axios";
export default {
    data() {
        return {
            results: {},
        }
    },
    mounted() {
        this.getArticle();
    },
    methods: {
        async getArticle() {
            this.results = (await axios.get(`http://localhost:3000/articles/${this.$route.params.id}`)).data;
            console.log(this.results);
            console.log(this.$route.params.id);
        },
    }
}