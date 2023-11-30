<script>
    import { json } from '@sveltejs/kit';
    import axios from 'axios'
    import { onMount } from "svelte";
    onMount(getVersions);
    var loadFile = function(event) {
        var p = document.getElementById('preview');
        p.src = URL.createObjectURL(event.target.files[0]);
        p.onload = URL.revokeObjectURL(p.src)
    };
    let versionOptions = []
    function getVersions() {
        var type = document.getElementById("type").value;
        if (type === 'forge') {
            axios.get('https://meta.multimc.org/v1/net.minecraftforge/versions').then((response) => {
                const data = response.data;
                versionOptions = []
                data.forEach((version = String) => {
                    if (version.stable === true) {
                        versionOptions.push(version.version)
                    }
                })
            })
            versionOptions = versionOptions.reverse()
        } else if (type === 'fabric') {
            axios.get('https://meta.fabricmc.net/v2/versions/game').then((response) => {
                const data = response.data;
                versionOptions = []
                data.forEach((version = String) => {
                    if (version.stable === true) {
                        versionOptions.push(version.version)
                    }
                })
            })
            versionOptions = versionOptions.reverse()
        } else if (type === 'optifine') {
            versionOptions = ['1.20.1','1.19.3','1.19.2','1.19.1','1.19','1.18.2','1.18.1','1.18','1.17.1','1.17','1.16.5','1.16.4','1.16.3','1.16.2','1.16.1','1.15.2','1.14.3','1.14.2','1.13.2','1.13.1','1.13','1.12.2','1.12.1','1.12','1.11.2','1.11','1.10.2','1.10','1.9.4','1.9.2','1.9.0','1.8.9','1.8.0','1.7.10','1.7.2']

        } else if (type === 'vanilla') {
            axios.get("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json").then((response) => {
                const data = response.data;
                versionOptions = []
                data.versions.forEach((version = String) => {
                    if (version.type === 'release') {
                        versionOptions.push(version.id)
                    }
                })
            })
        } else if (type === "custom"){
            axios.get("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json").then((response) => {
                const data = response.data;
                versionOptions = []
                data.versions.forEach((version = String) => {
                    if (version.type === 'release') {
                        versionOptions.push(version.id)
                    }
                })
            })

        } else {
            axios.get("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json").then((response) => {
                const data = response.data;
                versionOptions = []
                data.versions.forEach((version = String) => {
                    if (version.type === 'snapshot') {
                        versionOptions.push(version.id)
                    }
                })
            })
        }
    }
    async function hoddleSubmission(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const img = formData.get('image');

        const r = new FileReader();

        r.onloadend = async function() {
            try {
                const c = await axios.request({
            method: 'POST',
            url: `/api/create_instance`,
            data: {
                name: formData.get('name'),
                description: formData.get('description'),
                type: formData.get('type'),
                version: formData.get('version'),
                image: r.result,
            },
            });
            } catch (err) {

            }
        };
        r.readAsDataURL(img);
    }
</script>
<main>
    <form class="container" method="post" on:submit={hoddleSubmission}>
        <div class="i-left">
            <h2>Instance Background Image: </h2>
            <img id="preview" src="/images/instances/default.webp" alt="Instance Background" width="350px" height="200px">
            <input type="file" id="image" name="image" accept="image/*" on:change={loadFile} autocomplete="off">
        </div>
        <div class="i-right">
            <label for="name">Instance Name</label>
            <input type="text" id="name" name="name" placeholder="Instance Name">
            <label for="description">Instance Description</label>
            <input type="text" id="description" name="description" placeholder="Instance Description">
            <label for="type">Instance Framework</label>
            <select id="type" name="type" on:change={getVersions}>
                <option value="vanilla">Vanilla</option>
                <option value="forge">Forge</option>
                <option value="fabric">Fabric</option>
                <option value="optifine">Optifine</option>
                <option value="custom">Custom</option>
            </select>
            <label for="version">Instance Version</label>
            <select id="version" name="version">
                {#each versionOptions as version}
                    <option value={version}>{version}</option>
                {/each}
            </select>
            <button type="submit">Create Instance</button>
        </div>
    </form>
</main>
<style>
    h2 {
        font-family: 'NotoSansJP-Black';
    }
    img {
        filter: grayscale(100%);
        border-radius: 15px;
    }
    .i-left {
        background-color: #fff;
        background-color: rgb(32, 32, 32);
        image-rendering: crisp-edges;
        border-radius: 10px;
        text-align: center;
        padding: 1rem;
        max-width: 500px;
        max-height: 400px;
        margin: 20px;
    }
    .i-right {
        background-color: #fff;
        background-color: rgb(32, 32, 32);
        border-radius: 10px;
        text-align: center;
        padding: 1rem;
        max-width: 500px;
        max-height: 400px;
        margin: 20px;
    }
    .i-right input {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border-radius: 10px;
        border: none;
        background-color: #4c4c4c;
        color: white;
    }
    .i-right select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border-radius: 10px;
        border: none;
        background-color: #4c4c4c;
        color: white;
    }
    .i-right label {
        font-family: 'NotoSansJP-Black';
    }
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>