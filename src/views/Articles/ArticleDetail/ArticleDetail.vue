<template>
    <div v-if="results.article" class="article-detail">
        <h2>{{ results.article.title }}</h2>
        <p>{{ $route.params.id }}</p>
        <img :src="results.article.image" class="featured-img" />
        <p class="body">{{ results.article.body }}</p>
    </div>

</template>
<script src="./ArticleDetail.js"></script>


<style lang="scss">
.article-detail {
    padding: 16px;

    h2 {
        color: #fff;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .featured-img {
        display: block;
        max-width: 350px;
        margin-bottom: 16px;
    }

    p {
        color: #fff;
        font-size: 18px;
        line-height: 1.4;
    }
}
</style>