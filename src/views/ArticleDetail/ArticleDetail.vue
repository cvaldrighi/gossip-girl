<template>
    <div class="article-detail">
        <h2>Vinyl</h2>
        <p>{{ $route.params.id }}</p>
        <img src="https://p4.wallpaperbetter.com/wallpaper/403/236/853/vinyl-music-wallpaper-preview.jpg" alt=""
            class="featured-img" />
        <p class="body">
            Diferente das gravações digitais, as gravações analógicas preservam as frequências sonoras mais altas e
            baixas, mantendo harmônicos, ecos, a naturalidade e espacialidade do som. Essa diferença depende de uma
            série de fatores para que seja perceptível, como a qualidade da agulha, qualidade dos alto-falantes, bem
            como a maturidade auditiva do ouvinte.
        </p>


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