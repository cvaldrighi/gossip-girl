<template>
  <header>
    <router-link to="/">
      <h1>valdrigh dev</h1>
    </router-link>
    <Slide right noOverlay>
      <router-link to="/register">
        <p>Register</p>
      </router-link>
      <router-link to="/login">
        <p>Login</p>
      </router-link>
    </Slide>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { Slide } from 'vue3-burger-menu';
export default {
  components: {
    Slide
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Times New Roman', Times, serif;
}

body {
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  background-color: #4a00e0;
}

a {
  text-decoration: none;
}

header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgb(11, 2, 94);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color: #9a94e7;
    font-size: 28px;
  }

  p {
    color: #fff;
  }
}
</style>
