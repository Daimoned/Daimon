<script>
    import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
    import MdClose from 'svelte-icons/md/MdClose.svelte';
    import Instances from '../components/Instances.svelte';
    import axios from 'axios';
    import { onMount } from 'svelte';

    onMount(getVersions);
    onMount(mount_upload)

    function showCreateInstance() {
        var dialog = document.getElementById("nam").show();
        dialog?.show();
    }
    function hideCreateInstance() {
        var dialog = document.getElementById("nam").close();
        dialog?.close();
    }
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
    function mount_upload() {
        let fileInput = document.getElementById('background');
    let label = document.getElementById('background-label');

    fileInput?.addEventListener('change', function() {
        if (fileInput?.textContent !== fileInput) {
            label.textContent = "You will upload:   " + fileInput.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1] + ", click to change";
            label.style.textAlign = 'center';
            label.style.fontSize = '0.70em';
            label.style.width = '250px';
        } else {
            label.textContent = 'Upload File';
        }
    });
    }
</script>
<main>
    <div class="inst">
        <div class="inst-title">
            <h1>Instance</h1>
        </div>
        <dialog id="nam" style="z-index: 3;">
            <div class="blur">

            </div>
            <div class="frm">
                <button class="close" on:click={() => hideCreateInstance()}><strong><MdClose /></strong></button>
                <h1>Create Instance</h1>
                <form>
                    <label for="name" class="lbl">Instance Name:</label>
                    <input type="text" placeholder="Instance Name" autocomplete="off" required/>
                    <label for="type" class="lbl">Type:</label>
                    <select	name="type" id="type" class="dropdown" required on:change={() => getVersions()} on:waiting={() => getVersions()} on:mount autocomplete="off">
                        <option value="vanilla">Vanilla</option>
                        <option value="optifine">Vanilla (Optifine)</option>
                        <option value="vanilla-sn">Vanilla (Snapshots)</option>
                        <option value="forge" disabled>Forge</option>
                        <option value="fabric">Fabric</option>
                    </select>
                    <label for="version" class="lbl">Version:</label>
                    <select name="version" id="version" class="dropdown" required>
                        {#each versionOptions as version}
                            <option value={version}>{version}</option>
                        {/each}
                    </select><br>
                    <label for="background" class="lbl">Background:</label>
                    <label for="background" id="background-label" class="lbl">Upload File</label>
                    <input type="file" name="background" id="background" accept="image/png, image/jpeg, image/jpg" required/><br>

                    <hr>
                    <label for="ram" class="lbl">RAM:</label>
                    <input type="number" name="ram" id="ram" placeholder="RAM" required/>
                    <p class="ram_c">GB</p>
                    <button type="submit" class="btn">Create</button>
                </form>
            </div>
        </dialog>
        <div class="inst-menu-items">
            <button class="new_instance" on:click={() => showCreateInstance()}>
                <IoIosAdd />
                <span>
                    New Instance
                </span>
            </button>
        </div>
    </div>
    <div class="instance">
        <Instances />
    </div>

</main>
<style>
    hr {
        display: none;
    }
    .ram_c {
        font-family: 'NotoSansJP-Black';
        transform: translate(105%, -250%);
    }
    #background {
        display: none;
    }
    .instance {
        z-index: l;
        width: 100%;
        background-color: #37373700;
    }
    #background-label {
        display: inline-block;
        padding: 10px 20px;
        background-color: #373737;
        color: white;
        cursor: pointer;
        border-radius: 5px;
    }
    .frm form .btn {
        background-color: rgb(42, 42, 42);
        border: none;
        border-radius: 10px;
        height: 35px;
        width: 300px;
        color: white;
        padding-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        transition: 500ms;
    }
    .frm form .btn:hover {
        background-color: rgb(65, 65, 65);
        transition: 500ms;
    }
    .lbl {
        font-family: 'NotoSansJP-Black';
        margin-left: auto;
        margin-right: auto;
    }
    .frm form {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .frm form .dropdown {
        background-color: rgb(42, 42, 42);
        border: none;
        border-radius: 10px;
        height: 35px;
        width: 300px;
        color: white;
        padding-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        transition: 500ms;
    }
    .frm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .frm form input {
        background-color: rgb(42, 42, 42);
        border: none;
        border-radius: 10px;
        height: 35px;
        width: 290px;
        color: white;
        padding-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        transition: 500ms;
    }
    .frm form input:focus {
        background-color: rgb(65, 65, 65);
        transition: 500ms;
    }
    .close {
        background-color: transparent;
        border: none;
        color: white;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 10px;
        margin-right: 10px;
        width: 55px;
        height: 55px;
        transition: 600ms;
    }
    .frm h1 {
        font-family: 'NotoSansJP-Black';
        transform: translate(0%, -50%);
        color: white;
    }
    .close:hover {
        color: red;
        transition: 600ms;
    }
    #nam {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        background-color: rgba(240, 248, 255, 0);
    }
    .blur {
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        z-index: 2;
        right: 0;
    }
    .frm {
        background-color: rgb(32, 32, 32);
        height: 90vh;
        width: 60vw;
        position: fixed;
        top: 5%;
        left: 20%;
        z-index: 3;
        border-radius: 10px;
    }
    .new_instance {
        height: 35px;
        width: 150px;
        margin-top: 7.5px;
        margin-left: 1rem;
        border: none;
        border-radius: 10px;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: rgb(42, 42, 42);
        transition: 500ms;
    }
    .new_instance:hover {
        background-color: white;
        color: black;
        transition: 500ms;
    }
    .new_instance span {
        transform: translate(-50%, 0%);
        margin-left: 10px;
    }
    .inst {
        display: flex;
        flex-direction: row;
        height: 50px;
        width: 100%;
        margin-left: 5rem;
        margin-right: 4rem;
    }
    .inst-menu-items {
        background-color: rgb(32, 32, 32);
        border-radius: 10px;
        text-align: center;
        width: 50%;
        margin-left: 5rem;

    }
    .inst-menu-items h1 {
        transform: translate(0%, -50%);
    }
    main {
        color: white;
    }
    .inst-title {
        background-color: rgb(32, 32, 32);
        border-radius: 10px;
        text-align: center;
        width: 25%;
    }
    .inst-title h1 {
        font-family: 'NotoSansJP-Black';
        transform: translate(0%, -50%);
    }
</style>