<script>
    import { each } from "svelte/internal";

    export let users = ['wwwwwwwwwwwwwww','wwwwwwwwwwwwwww','wwwwwwwwwwwwwww','wwwwwwwwwwwwwww'];
    export let playerCount = 0;
    export let musicOn = true;

    let gridValue = '';
    if(users.length<=4){
        for(let i=0;i<users.length;i++){
            gridValue+='1fr '
        }
    }else{
        gridValue = '1fr 1fr 1fr 1fr'
    }
    function handleSound(){
        musicOn = !musicOn;
    }
</script>

<div id="parent">
    <header id="topHeader">
        <p id="gameId">223566</p>
        <img id="qrCode" src="/image/qrCode.png" alt="qr code">
    </header>
    <header id="top2Header">
        <div></div>
        <p id="title">QuickQuiz</p>
        <button id="startButton">Start</button>
    </header>
    <main id="mainPage" style="grid-template-columns: {gridValue};">
        {#each users as user}
            <div class="user">{user}</div>
        {/each}
    </main>
    <div></div>
    <header id="bottomHeader">
        <p id="title2">QuickQuiz</p>
        <div></div>
        <div id="playerCount">
            <img id="icon" src="/image/person.svg" alt="Player Count:">
            <p id="count">{playerCount}</p>
        </div>
        {#if musicOn}
            <button id="soundButton" on:click={handleSound}>
                <img id="icon" src="/image/on.svg" alt="Player Count:">
            </button>
        {:else}            
            <button id="soundButton" on:click={handleSound}>
                <img id="icon" src="/image/off.svg" alt="Player Count:">
            </button>
        {/if}
    </header>
</div>

<style>
    p{
        margin: 0;
        padding: 0;
    }
    #parent{
        height: 100vh;
        display: grid;
        grid-template-rows: 1fr 1fr 6fr 1fr 1fr;
    }
    #mainPage{
        display: grid;
        place-content: center;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        place-content: center;
    }
    .user{
        height: fit-content;
        width: fit-content;
        background-color: purple;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 12px;
        padding-left: 12px;
        color: white;
        font-size: 26px;
        margin: auto;
        border: 3px white solid;
        border-radius: 5px;
    }
    #topHeader{
        display: grid;
        grid-template-columns: fit-content(366px) fit-content(10000px);
        place-content: center;
        margin-top: 30px;
    }
    #qrCode{
        height: 150px;
        width: 150px;
        background-color: white;
    }
    #gameId{
        background-color: white;
        font-size: 113px;
        color: black;
        height: fit-content;
        padding: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        width: fit-content;
        border-radius: 10px;
        text-align: center;
        margin-right: 20px;
    }
    #qrCode{
        height: 150px;
        width: 150px;
        background-color: white;
    }
    #top2Header{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    #startButton{
        height: fit-content;
        width: fit-content;
        font-size: 30px;
        margin: auto;
        margin-left: auto;
        margin-right: 10px;
        background-color: #ffe8fe;
        border: 3px #b700ff solid;
        border-radius: 4px;
        padding: 14px;
        padding-top: 8px;
        padding-bottom: 8px;
        font-family: monospace;
        color: black;
    }
    #startButton:hover{
        background-color: #fedeff;
        cursor: pointer;
    }
    #startButton:active{
        background-color: #fdcaff;
        cursor: auto;
    }
    #title{
        margin: auto;
        color: white;
        font-size: 50px;
        font-family: monospace;
    }
    #title2{
        margin: auto;
        color: rgb(190, 190, 190);
        font-size: 20px;
        font-family: monospace;
    }
    #playerCount{
        width: fit-content;
        height: fit-content;
        background-color: white;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-content: center;
        border-radius: 5px;
        margin: auto;
    }
    #icon{
        height: 50px;
        width: 50px;
        margin: auto;
    }
    #count{
        font-size: 40px;
        margin: auto;
    }
    #soundButton{
        height: fit-content;
        width: fit-content;
        background-color: white;
        outline: none;
        border: none;
        border-radius: 5px;
        margin: auto;
    }
    #bottomHeader{
        display: grid;
        grid-template-columns: 1fr 8fr 1fr 1fr;
        place-content: center;
    }
</style>