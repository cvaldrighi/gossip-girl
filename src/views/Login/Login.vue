<template>
    <form @submit.prevent="login" class="search-box">
        <input type="text" placeholder="your email" v-model="email" />
        <input type="password" placeholder="your password" v-model="password" />
        <input type="submit" value="send" />
    </form>
    <div class="icon">
        <img src="@/assets/undraw_authentication_re_svpt.svg" />
    </div>
</template>
<script src="./Login.js"></script>
<style lang="scss">
.search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;

    input {
        display: block;
        appearance: none;
        border: none;
        outline: none;
        background: none;

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

.icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 300px;
    padding-left: 20%;
}
</style>