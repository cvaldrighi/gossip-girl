<template>
    <form @submit.prevent="register" class="auth-search-box">
        <input type="text" placeholder="your username" v-model="username" />
        <input type="text" placeholder="your email" v-model="email" />
        <input type="password" placeholder="your password" v-model="password" />
        <input type="submit" value="register" />
    </form>
</template>
<script src="./Register.js"></script>
<style lang="scss" src="../Form.scss">
</style>

