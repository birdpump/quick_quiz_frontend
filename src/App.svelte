<script>
    import Player from "./lib/Player.svelte";
    import chatGPT from "./lib/admin/chatGPT.svelte";

    let selected;

    let visible = true;

    function create() {
        visible = false;
        selected = chatGPT;
    }

    function join() {
        visible = false;
        selected = Player
    }


</script>

<style>
    .mainCont {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .subcont {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 2rem;
    }

    .join {
        padding: 2rem 4rem;
        background-color: green;
        border-radius: 12px;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(94, 76, 223);
    }

    .join:hover{
        background-color: rgb(65, 52, 159) !important;
        cursor: pointer;
    }

    .create {
        padding: 2rem 4rem;
        background-color: rgb(94, 76, 223);
        border-radius: 12px;
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .create:hover{
        background-color: rgb(65, 52, 159) !important;
        cursor: pointer;
    }

    .title {
        margin: 0 0 15px 0;
        color: white;
        font-family: "Comic Sans MS", "Comic Sans", cursive;
        font-size: 5rem;
        padding-bottom: 5rem;
    }

    .text {
        color: white;
        font-family: sans-serif;
        font-size: 24px;
    }

</style>

{#if visible}
    <div class="mainCont">
        <div class="title">QuickQuiz</div>
        <div class="subcont">
            <div class="join" on:click={join}>
                <div class="text">Join Game</div>
            </div>
            <div class="create" on:click={create}>
                <div class="text">Create Game</div>
            </div>
        </div>
    </div>
{/if}

<svelte:component this={selected}/>

