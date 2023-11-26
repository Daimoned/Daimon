<script setup>
    import 'assets/base.css'
</script>
<template>
    <div class="container">
        <div class="content">
            <div class="text">
                <h1 class="poppins-bold">Daimon</h1>
                <p>Welcome to Daimon, the better Minecraft Launcher.</p>
            </div>
            <div class="links">
                <a href="/login" class="login">Login</a>
                <a href="/register" class="signup">Register</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    
    .poppins-bold {
        font-family: "Noto-Black";
        font-size: 100px;
    }
    .text {
        text-align: center;
    }
    .container .content p {
        font-size: 25px;
        font-family: "Poppins-Regular";
    }
    .container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: fit-content;
    }
    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .links a {
        width: 150px;
        height: 50px;
        color: white;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        font-family: "Poppins-Bold";
        color: #000;
        text-decoration: none;
    }
    .links a.login {
        background-color: #fd6565;
        color: white;

        transition: 500ms;
    }
    .links a.signup {
        background-color: rgb(0, 188, 235);
        transition: 500ms;
        color: white;

    }
    .links a.login:hover {
        background-color: #ff0000;
    }
    .links a.signup:hover {
        background-color: rgb(0, 150, 200);
    }
</style>