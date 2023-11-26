<template>
    <div class="bg"></div>
    <div class="login">
        <div class="title">
            <h1>Daimon</h1>
            <div class="login-status">
            </div>
        </div>
        <!-- <div class="login-form">
            <form action="">
                <input type="text" placeholder="Username">
                <input type="password" placeholder="Password">
                <button type="submit" value="Login"> Login </button>
            </form>
        </div>
        <div class="links">
            <a href="forgot">Forgot Password?</a>
            <a href="signup">Create Account</a>
        </div> -->
    </div>
</template>
<style scoped>
    .login-status {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    .login-status p {
        font-size: 20px;
        font-family: "Poppins-Bold";
        color: white;
    }
    .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;  
    }
    .links a {
        font-size: 15px;
        font-family: "Poppins-Regular";
        color: white;
        text-decoration: none;
        transition: 500ms;
    }
    .links a:hover {
        color: rgb(255, 63, 63);
        transition: 500ms;
    }
    .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/images/login_bg.png");
        background-size: cover;
        background-position: center;
        filter: blur(10px);
        /* Make background image not repeatedly load */
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: rgb(19, 19, 19);
    }
    button {
        background-color: rgb(255, 134, 78);
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 20px;
        font-family: "Poppins-Bold";
        padding: 5px;
        transition: 500ms;

    }
    button:hover {
        background-color: rgb(255, 63, 63);
        transition: 500ms;
    }
    .login {
        background-color: rgba(0, 0, 0, 0.692);
        position: absolute;
        width: fit-content;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        padding: 20px;
    }
    .login .title h1 {
        font-size: 50px;
        font-family: "Noto-Black";
        color: white;
        text-align: center;
    }
    .login-form {
        flex-direction: row;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    .login-form form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .login-form form input {
        background-color: rgb(248, 102, 92);
        border: none;
        outline: none;
        border-radius: 10px;
        font-size: 20px;
        font-family: "Poppins-Regular";
        width: 200px;
        text-align: center;
        transition: 500ms;
        color: white;
    }
    .login-form form input:focus {
        background-color: rgb(255, 63, 63);
        transition: 500ms;
    }
    .login .title p {
        font-size:  20px;
        font-family: "Poppins-Regular";
        color: white;
        text-align: center;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
</style>