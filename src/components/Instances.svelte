<script>
    import axios from "axios";
    import { onMount } from "svelte";
    async function get_instances() {
        const instances = await axios.get("/api/get_instances")
        return instances
    }
    let instances = []
    onMount(async () => {
        instances = await get_instances()
        instances = instances.data
    })
</script>
<br><br>
<main class="main">
    <div class="instance">
        {#if instances && instances.length > 0}
            {#each instances as instance}
                <button class="instance-card" on:click={() => navigate(`/instances/${instance.id}`)}>
                    <div class="instance-image" style='background-image: url("{instance.image}");'><h1>e</h1></div>
                    <div>
                        <h1 class="instance-title">{instance.name}</h1>
                        <p class="instance-message">{instance.description}</p>
                    </div>
                </button>
            {/each}
        {:else}
            <button class="instance-card">
                <h1 class="instance-title">No instances found</h1>
                <p class="instance-message">Create one by clicking the create instance button</p>
            </button>
        {/if}
    </div>
</main>
<style>
    .instance-image {
        filter: blur(10px);
        background-size: cover;
        background-position: center;
        z-index: 0;
    }
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    button {
        background-color: #5a000000;
        border: none;
        color: white;
    }
    .instance {
        display: grid;
        grid-template-columns: repeat(3, minmax(300px, 1rem));
        grid-gap: 3rem;
        margin-left: auto;
    }
    @media only screen and (max-width: 1500px) {
        .instance {
            grid-template-columns: repeat(1, minmax(300px, 1rem));
            margin-right:auto;
        }
    }
    .instance-card {
        background-color: #fff;
        background-color: rgb(32, 32, 32);
        image-rendering: crisp-edges;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 10px;
        text-align: center;
        padding: 1rem;
        max-width: 250px;
        max-height: 200px;
        min-width: 200px;
        min-height: 150px; 
        cursor:progress;
        transition: 0.5s;
        user-select: none;
        transform: scale(1.2);
    }
    .instance-card:hover {
        transform: scale(1.3);

    }
</style>