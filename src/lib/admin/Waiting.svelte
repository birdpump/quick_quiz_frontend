<script>
    import { onMount, afterUpdate } from 'svelte';   
    //players in the game
    export let users = ['wwwwwwwwwwwwwww','wwwwwwwwwwwwwww','wwwwwwwwwwwwwww','wwwwwwwwwwwwwww','wwwwwwwwwwwwwww','wwwwwwwwwwwwwww','wwwwwwwwwwwwwww'];
    //status of music on or off
    export let musicOn = true;
    //the game id to join the game
    export let gameid = 123456;

    let playerCount = users.length;
    let part1 = gameid.toString().slice(0,3);
    let part2 = gameid.toString().slice(3);
    let deviceWidth = window.innerWidth;

    const updateDeviceWidth = () => {
    deviceWidth = window.innerWidth;
    };
    onMount(() => {
    window.addEventListener('resize', updateDeviceWidth);
    });
    afterUpdate(() => {
    return () => {
        window.removeEventListener('resize', updateDeviceWidth);
    };
    });

    function handleSound(){
        musicOn = !musicOn;
    }
</script>

<div id="parent">
    <header id="topHeader">
        {#if deviceWidth>800}
            <img id="qrCode" src="/qrCode.png" alt="qr code">
        {/if}  
        <div id="mainContent">
            <p id="gameId">
                {#if deviceWidth>600}
                    <span>Pin:</span>
                {/if}
                <span>{part1}</span><span class="gameIdPart">{part2}</span>
            </p>  
        </div>
        <button id="startButton">Start</button>
    </header>
    <main id="mainPage">
        {#each users as user}
            <div class="user">{user}</div>
        {/each}
    </main>
    <header id="bottomHeader">
        {#if deviceWidth>800}
            <p id="title">Dinasours ruling the world</p>
        {/if}
        <div id="iconParent">
            <div id="playerCount">
                <img id="icon" src="/person.png" alt="Player Count:">
                <p id="count">{playerCount}</p>
            </div>
            {#if musicOn}
                <button id="soundButton" on:click={handleSound}>
                    <img id="icon" src="/on.svg" alt="Player Count:">
                </button>
            {:else}            
                <button id="soundButton" on:click={handleSound}>
                    <img id="icon" src="/off.svg" alt="Player Count:">
                </button>
            {/if}

        </div>
    </header>
</div>

<style>
    *{
        font-family: monospace;
    }
    p{
        margin: 0;
        padding: 0;
    }
    #parent{
        height: 100vh;
        display: grid;
        grid-template-rows: fit-content(100%) 1fr fit-content(100%);
    }
    #mainPage{
        display: flex;
        place-content: center;
        flex-wrap: wrap;
    }

    .user{
        height: fit-content;
        width: fit-content;
        background-color: #414855;
        padding: 15px;
        font-size: 30px;
        color: white;
        border: 3px #86249c solid;
        border-radius: 5px;
        margin: 14px;
    }
    #topHeader{
        display: grid;
        grid-template-columns: 1fr fit-content(100%) 1fr;
        place-content: center;
        margin-top: 3vh;
        margin-bottom: 3vh;
    }
    .gameIdPart{
        margin-left: 15px;
    }
    #mainContent{
        display: grid;
        width: fit-content;
    }
    #qrCode{
        height: 150px;
        width: 150px;
        background-color: white;
        margin: auto;
        border: 5px #243a9c solid;
        filter: drop-shadow(0 0 8px #243a9c);
    }
    #gameId{
        background-color: #414855;
        color: white;
        font-size: 60px;
        height: fit-content;
        padding: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        width: fit-content;
        border: 5px #249c2e solid;
        border-radius: 10px;
        text-align: center;
        filter: drop-shadow(0 0 8px #249c2e);
        margin: auto;
    }
    #qrCode{
        height: 115px;
        width: 115px;
        background-color: white;
    }
    
    #iconParent{
        display: grid;
        grid-template-columns: fit-content(100%) fit-content(100%);
        place-content: center;
        float: right;
    }
    #startButton{
        height: fit-content;
        width: fit-content;
        font-size: 40px;
        margin: auto;
        padding: 5px;
        padding-right: 10px;
        padding-left: 10px;
        border: 5px #b63434 solid;
        filter: drop-shadow(0 0 5px #b63434);
        background-color: #414855;
        color: white;
        border-radius: 5px;
        
    }
    #startButton:hover{
        filter: drop-shadow(0 0 10px #b63434);
        cursor: pointer;
    }
    #startButton:active{
        cursor: auto;
    }
    #title{
        background-color: white;
        padding: 5px;
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 5px;
        font-size: 30px;
        margin-left: 3vw;
        border: 3px #86249c solid;
        filter: drop-shadow(0 0 8px #86249c);
    }
    #playerCount{
        width: fit-content;
        height: fit-content;
        background-color: white;
        display: flex;
        place-content: center;
        border-radius: 5px;
        padding-right: 8px;
        margin: 15px;
        border: 3px #86249c solid;
        filter: drop-shadow(0 0 5px #86249c);
    }
    #icon{
        height: 42px;
        width: 42px;
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
        margin: 15px;
        margin-left: 0px;
        border: 3px #86249c solid;
        filter: drop-shadow(0 0 5px #86249c);
    }
    #soundButton:hover{
        cursor: pointer;
        filter: drop-shadow(0 0 10px #86249c);
    }
    #soundButton:active{
        cursor:auto;
        filter: drop-shadow(0 0 8px #86249c);    
    }
    #bottomHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media (max-width:800px){
        #topHeader{
            display: flex;
            place-content: center;
        }
        #mainContent{
            margin: auto;
        }
        #gameId{
            font-size: 40px;
        }
        #startButton{
            padding: 8px;
            padding-right: 16px;
            padding-left: 16px;
        }
        .user{
            padding: 10px;
            font-size: 24px;
        }
    }
    @media (max-width:510px){
        #gameId{
            font-size: 30px;
        }
        #startButton{
            font-size: 30px;
        }
        .user{
            padding: 8px;
            font-size: 20px;
        }
    }
</style>