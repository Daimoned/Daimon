<script>
    import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte'
</script>
<main>
    <div class="inst">
        <div class="inst-title">
            <h1>Instance</h1>
        </div>
        <dialog>
            <h1>EH</h1>
        </dialog>
        <div class="inst-menu-items">
            <button class="new_instance">
                <IoIosAdd />
                <span>
                    New Instance
                </span>
            </button>
        </div>
    </div>
    <div class="instance">

    </div>
</main>
<style>
    .new_instance {
        height: 35px;
        width: 150px;
        border-radius: 10px;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: rgb(42, 42, 42);

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