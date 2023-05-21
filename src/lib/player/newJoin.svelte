<script>
    import {fly} from 'svelte/transition'
    import {onMount} from 'svelte';
    export let check = true;

    let errorVisible = false;
    let inputValue = '';
    onMount(()=>{
       if(!check){
        errorVisible = true;
       } 
    })
    function handleSubmit(){
        check = false;
        errorVisible = true;
        if(inputValue!=null&&inputValue!=''){
            console.log(inputValue)
        }
    }
    function handleKeydown(e){
        if(e.key=='Enter'){
            if(inputValue!=null&&inputValue!=''){
              handleSubmit();
            }
        }
    }
</script>
<div id="parentsOfAllParents">
    <div id="parent">
        <div id="main">
            <header id="title">QuickQuiz</header>
            <div id="center">
                {#if check}
                    <input on:keydown={handleKeydown} bind:value={inputValue} placeholder="Game Pin" type="number">
                {:else}
                    <input on:keydown={handleKeydown} style="border: 3px red solid;" bind:value={inputValue} placeholder="Game Pin" type="text">
                {/if}
                {#if inputValue==null || inputValue==''}
                    <button on:click={handleSubmit} style="pointer-events: none;border: 3px #c3c3c3 solid;background-color: #c3c3c3;" id="enter" tabindex="-1">Enter</button>
                {:else}
                    <button on:click={handleSubmit} style="background-color:rgb(65, 65, 65);border: 3px rgb(65, 65, 65) solid;" id="enter">Enter</button>
                {/if}
            </div>
        </div>
    </div>
    {#if errorVisible}
        <div transition:fly={{y:200,duration:1000}} id="error">The input is invalid please check and try again</div>
    {/if}
</div>

<style>
    #parentsOfAllParents{
        overflow-y: hidden;
    }
    #error{
        position: absolute;
        width: 100%;
        height: 30px;
        text-align: center;
        background-color: red;
        bottom:0px;
        color: white;
        font-size: 20px;
        font-family: monospace;
    }
    #parent{
        display: grid;
        height: 100vh;
        place-content: center;
    }
    #main{
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;

    }
    #center{
        margin: auto;
        background-color: white;
        height: 130px;
        width: 320px;
        border-radius: 5px;
        display: grid;
        grid-template-rows: 1fr 1fr;
        place-content: center;
    }
    #title{
        font-size: 54px;
        color: white;
        font-family: monospace;
        text-align: center;
        margin-top: auto;
        margin-bottom: 40px;
    }
    #center input{
        text-align: center;
        width: 270px;
        height: 38px;
        margin-bottom: auto;
        margin-top: 15px;
        font-size: 20px;
        font-family: monospace;
        border: 3px #c3c3c3 solid;
        border-radius: 3px;
        outline: none;
    }
    #enter{
        width: 280px;
        height: 41px;
        margin-top: auto;
        margin-bottom: 15px;
        border: 3px #c3c3c3 solid;
        background-color: #c3c3c3;
        font-size: 20px;
        font-family: monospace;
        color: white;
        border-radius: 3px;
    }
    #enter:active{
        background-color: black;
        border: 3px black solid;
    }
    #enter:hover,#enter:focus{
        height: 38px;
        cursor:pointer;
        background-color: rgb(65, 65, 65);
        border: 3px rgb(65, 65, 65) solid;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>