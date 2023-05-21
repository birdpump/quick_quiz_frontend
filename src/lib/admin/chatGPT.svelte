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
        <p id="title">Make a Quiz with Chat GPT!</p>
        <input bind:value={topic} id="topicInput" placeholder="Type any topic in here" type="text">
        <button id="enter" on:click={change}>Create Game</button>
    </div>
</div>

<style>
    p {
        margin: 0;
        padding: 0;
    }

    #enter {
        height: fit-content;
        width: 410px;
        margin: auto;
        font-size: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
        background: #ffa5ff;
        border: 3px black solid;
        border-radius: 5px;
    }

    #parent {
        height: 100vh;
        display: grid;
        place-content: center;
    }

    #title {
        font-size: 35px;
        color: #77007e;
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
        place-content: center;
    }

    #topicInput {
        width: 400px;
        height: fit-content;
        padding-top: 7px;
        padding-bottom: 7px;
        font-size: 25px;
        text-align: center;
        margin: auto;
        border: 3px #5c4a5c solid;
        border-radius: 5px;
        background: #ffeafc;
    }
</style>