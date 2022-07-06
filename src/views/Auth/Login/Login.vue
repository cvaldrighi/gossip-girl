<template>
    <form @submit.prevent="login" class="form-box">
        <input type="text" placeholder="your email" v-model="email" />
        <input type="password" placeholder="your password" v-model="password" />
        <input type="submit" value="login" />
    </form>
</template>
<script src="./Login.js"></script>
<style lang="scss" src="../Form.scss">
</style>

