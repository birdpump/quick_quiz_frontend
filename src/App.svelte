<script>
    import Player from "./lib/Player.svelte";

    let selected;

    let visible = true;

    function create(){
        visible = false;
        // selected = Create;
    }

    function join(){
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

    .subcont{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    .join{
        width: 200px;
        height: 200px;
        background-color: green;
        border-radius: 12px;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .create{
        width: 200px;
        height: 200px;
        background-color: green;
        border-radius: 12px;
        margin-left: 20px;display: flex;
        justify-content: center;
        align-items: center;

    }
    .title{
        margin: 0 0 15px 0 ;
        color: black;
        font-family: sans-serif;
        font-size: 46px;
    }

    .text{
        color: black;
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

