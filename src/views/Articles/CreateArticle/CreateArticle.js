import axios from "axios";
export default {

    data() {
        return {
            title: '',
            description: '',
            body: '',
            image: '',
            tagList: []
        }
    },
    methods: {
        async createArticle() {
            this.result = (await axios.post('http://localhost:3000/articles', {
                "article": {
                    title: this.title,
                    description: this.description,
                    body: this.body,
                    image: this.image,
                    tagList: this.tagList
                }
            }, {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            })).data;
            console.log(this.result);
            this.$router.push('/');
        }
    }
}