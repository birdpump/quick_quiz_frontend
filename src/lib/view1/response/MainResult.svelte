<script>
    import {gameData, qData} from '../../../store.js';

    import {tweened} from 'svelte/motion';
    import {cubicOut} from 'svelte/easing';
    import {blur} from 'svelte/transition';

    import Bars from "./Bars.svelte";
    import "/node_modules/svelte-material-ui/bare.css";
    import {onMount} from "svelte";

    let visible = false;

    onMount(() => {
        visible = true;
    });

    let num = 2;
</script>

<style>
    .mainCont {
        width: 100vw;
        height: 100%;
        display: flex;
        /*justify-content: center;*/
        align-items: center;
        flex-direction: column;
    }

    .bars {
        /*width: 50vw;*/
        /*background-color: #343941;*/
        border: 3px solid grey;
        border-radius: 10px;
        padding: 10px 10px 0 10px;
        box-sizing: border-box;
    }




    .quest{
        /*height: 300px;*/
        /*width: 100vw;*/
    }




    .top {
        position: relative;
        bottom: 0;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

    }

    .title {
        font-size: 20px;
        font-family: Roboto, sans-serif;
        color: white;
    }


    .child {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        height: 40px;
        border-radius: 10px;
        flex: 1;
        background-color: #414855;
        user-select: none;
        cursor: pointer;
        font-family: Roboto, sans-serif;
        color: white;
        transition: filter 0.05s;
    }



    .text {
        font-size: 16px;
    }

    .num {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        top: 0;
        bottom: 0;
        left: 4px;
        margin-top: auto;
        margin-bottom: auto;

        width: 24px;
        height: 24px;

        border-radius: 6px;
        background-color: #21252B;
        font-size: 16px;
    }

</style>


<div class="mainCont">
    <div class="bars">

        {#each $gameData as data}
            <Bars value={data.score} user={data.username}/>
        {/each}

    </div>

    <div class="quest">

        <div class="top">
            <div class="title">{$qData.question}</div>
        </div>

            <div class="mainDiv">
                    <div class="child">
                        <div class="num">{num}</div>
                        <div class="text">{$qData.answers[num].answer}</div>
                    </div>
            </div>
    </div>
</div>