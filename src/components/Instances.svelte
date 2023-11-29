<br><br>
<main>
    <div class="instance">
        <button class="instance-card">
                <h1 class="instance-title">Daimon</h1>
                <p class="instance-message">I have midterms, will update soon.</p>
        </button>
        <button class="instance-card">
            <h1 class="instance-title">Daimon</h1>
            <p class="instance-message">I have midterms, will update soon.</p>
        </button>
        <button class="instance-card">
            <h1 class="instance-title">Daimon</h1>
            <p class="instance-message">I have midterms, will update soon.</p>
        </button>
        <button class="instance-card">
            <h1 class="instance-title">Daimon</h1>
            <p class="instance-message">I have midterms, will update soon.</p>
        </button>
        <button class="instance-card">
            <h1 class="instance-title">Daimon</h1>
            <p class="instance-message">I have midterms, will update soon.</p>
        </button>
    </div>
</main>
<style>
    button {
        background-color: #5a000000;
        border: none;
        color: white;
    }
    .instance {
        position: absolute;
        display: inline-grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: repeat(4, minmax(300px, 1rem));
        gap: 1rem;
        row-gap: 3rem;
        transform: translateX(-15%);
    }
    .instance-card {
        background-color: #fff;
        background-color: rgb(32, 32, 32);
        image-rendering: crisp-edges;
        background-image: url(/images/background.webp);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 10px;
        text-align: center;
        padding: 1rem;
        width: fit-content;
        background-blend-mode: luminosity;
        transition: 0.5s;
        user-select: none;
        transform: scale(1.2);
    }
    .instance-card:hover {
        transform: scale(1.3);

    }
</style>