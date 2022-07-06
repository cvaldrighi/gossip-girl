<template>
    <form @submit.prevent="createArticle" class="form-box">
        <input type="text" placeholder="title" v-model="title" />
        <input type="text" placeholder="description" v-model="description" />
        <textarea rows="5" cols="20" placeholder="body" v-model="body" class="textarea"></textarea>
        <input type="text" placeholder="image url" v-model="image" />
        <input type="text" placeholder="tags" v-model="tagList" />
        <input type="submit" value="create" />
    </form>
</template>
<script src="./CreateArticle.js"></script>
<style lang="scss">
.form-box {
    margin-top: 2rem !important;
}
</style>