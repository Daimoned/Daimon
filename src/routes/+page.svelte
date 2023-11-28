<head>
    <title>Daimon</title>
</head>
<main>
    <div class='bg'>
    </div>
    <div class="service-title">
        <h1>Daimon</h1>
        <div class="pill">
            <p>INDEV</p>
        </div>
        <p class="message">I have midterms, will update soon.</p>
    </div>
    
</main>
<style>
    .pill {
        border-radius: 15px;
        width: 50px;
        text-align: center;
        padding-left: 5px;
        padding-right: 5px;
        font-size: small;
    }
    .service-title .pill {
        background-color: #5a0000;

        transform: translateX(325%);
        margin-top: -6rem;
    }
    .bg {
        background-image: url(/images/background.webp);
        background-size: cover;
        background-position: center;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        filter: blur(5px);
    }
    main {
        color: #fff;
    }
    .service-title {
        font-family: 'NotoSansJP-Black';
        font-size: 1.5rem;
        margin-left: 5rem;
    }
    .service-title .message {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 15px;
        margin-top: 2.5rem;
        margin-left: 0.2rem;
    }
</style>