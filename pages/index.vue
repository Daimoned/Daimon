<script setup>
    import 'assets/base.css'
</script>
<template>
    <div class="container">
        <div class="content">
            <div class="logo">
                <img src="~/assets/logo.png" alt="Daimon Logo" />
            </div>
            <div class="text">
                <h1 class="poppins-bold">Daimon</h1>
                <p>Welcome to Daimon, the better Minecraft Launcher.</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    
    .poppins-bold {
        font-family: "Noto-Black";
        font-size: 100px;
    }
    .container .content p {
        font-size: 25px;
        font-family: "NotoSansJP-Regular";
    }
    .container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: fit-content;
    }
</style>