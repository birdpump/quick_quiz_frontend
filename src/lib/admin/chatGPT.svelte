<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
    export let topic = '';

    function change() {
        console.log("test")
        dispatch('change');
    }
</script>

<div id="parent">
    <div id="middle">
        <p id="title">QuickQuiz</p>
        <input bind:value={topic} id="topicInput" placeholder="Type any topic in here" type="text">
        <button id="enter" on:click={change}>Create Game</button>
    </div>
</div>

<style>
    /**
    #646cffaa blue
    #414855 grey
    #9c2424 red
    #249c2e green
    #86249c pruple
    filter: drop-shadow(0 0 6px #249c2e)
    */
    *{
        font-family: monospace;
    }
    p {
        margin: 0;
        padding: 0;
    }

    #enter {
        height: fit-content;
        width: 410px;
        border: none;
        margin-right: auto;
        margin-left:auto;
        margin-top: auto;
        margin-bottom: 30px;
        font-size: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        background: #545db3;
        border-radius: 5px;
        color: white;
    }
    #enter:hover{
        cursor: pointer;
        box-shadow: 0 0 5px 0px;
    }
    #parent {
        height: 100vh;
        display: grid;
        place-content: center;
    }

    #title {
        font-size: 50px;
        color: white;
        text-align: center;
        margin: auto;
    }

    #middle {
        margin: auto;
        padding: 3rem;
        border: 0.2rem white solid;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        border-radius: 10px;
        text-align: center;
        gap: 3rem;
    }

    #topicInput {
        width: 400px;
        height: fit-content;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 25px;
        text-align: center;
        margin: auto;
        border-radius: 5px;
        border: 3px white solid;
        background: #282c34;
        color: white;
    }
</style>