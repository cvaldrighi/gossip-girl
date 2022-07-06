<template>
  <div class="home">
    <!--<h1 v-if="user">hello</h1>-->
    <div class="feature-card">
      <router-link to="/articles/zzz-sdmngj">
        <img src="https://p4.wallpaperbetter.com/wallpaper/403/236/853/vinyl-music-wallpaper-preview.jpg" alt=""
          class="featured-img" />
        <div class="detail">
          <h3>Vinyl</h3>
          <p>
            Why vinyl sounds different?
          </p>
        </div>
      </router-link>
    </div>
    <div>
      <router-link to="/create-article">
        <button class="btn-primary">create article</button>
      </router-link>

    </div>
    <form @submit.prevent="searchArticle" class="filter-search-box">
      <input type="text" placeholder="Filter by tag" v-model="search">
      <input type="submit" value="Search" />
    </form>

    <div class="articles-feed">
      <div class="article-card" v-for="article of result.articles" :key="article.slug">
        <router-link :to="{ name: 'article', params: { id: article.slug } }">
          <div class="product-image">
            <img :src="article.image" alt="article img" />
          </div>
          <div class="detail">
            <h3 class="title">{{ article.title }}</h3>
            <p class="desc">{{ article.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>

<style lang="scss">
.home {

  .feature-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;

      h3 {
        color: #fff;
        margin-bottom: 16px;
      }

      p {
        color: #fff;
      }
    }
  }

  .btn-primary {
    width: 30%;
    max-width: 400px;
    background-color: #9a94e7;
    border-radius: 8px;
    border: none;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    transition: 0.4s;
    margin-left: 35%;
    margin-top: 1rem;

    &:active {
      background-color: #6b62e6;
    }
  }

  .filter-search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: #fff;
        background-color: #9a94e7;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 70%;
        max-width: 300px;
        background-color: #9a94e7;
        padding: 12px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #6b62e6;
        }
      }
    }
  }

  .articles-feed {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .article-card {
      margin: 4px;

      .product-image {
        position: relative;
        display: flex;


        img {
          display: block;
          width: 100%;
          height: 275px;
          object-fit: cover;
          border-radius: 8px 8px 0px 0px;
        }
      }

      .detail {
        background-color: #5248e2;
        padding: 16px 8px;
        flex: 1 1 100%;
        border-radius: 0px 0px 8px 8px;

        h3,
        p {
          color: #fff;
        }
      }
    }

  }
}
</style>