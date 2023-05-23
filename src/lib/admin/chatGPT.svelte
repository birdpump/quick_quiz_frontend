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
        margin-right: auto;
        margin-left:auto;
        margin-top: auto;
        margin-bottom: 30px;
        font-size: 30px;
        padding-top: 5px;
        padding-bottom: 7px;
        background: #646cffaa;
        border: 3px black solid;
        filter: drop-shadow(0 0 4px black);
        border-radius: 5px;
        color: white;
    }
    #enter:hover{
        cursor: pointer;
        filter: drop-shadow(0 0 6px black);
        padding-bottom: 5px;
    }
    #parent {
        height: 100vh;
        display: grid;
        place-content: center;
    }

    #title {
        font-size: 40px;
        color: black;
        text-align: center;
        margin: auto;
    }

    #middle {
        margin: auto;
        height: 340px;
        width: 500px;
        background-color: white;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        border-radius: 10px;
        text-align: center;
    }

    #topicInput {
        width: 400px;
        height: fit-content;
        padding-top: 7px;
        padding-bottom: 7px;
        font-size: 25px;
        text-align: center;
        margin: auto;
        border: 3px rgb(11, 0, 170) solid;
        border-radius: 5px;
        background: #c9ccffaa;
    }
</style>