<template>
  <header>
    <router-link to="/">
      <h1>valdrigh dev</h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Times New Roman', Times, serif;

  &::selection {
    background: transparentize($color: #e21593, $amount: 0.5);
  }
}

body {
  background-color: rgb(51, 38, 168);
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: rgb(11, 2, 94);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color: #9a94e7;
    font-size: 28px;
  }

}
</style>
