<script>
    import { gameData } from '../../../store.js';
    import {tweened} from 'svelte/motion'
    import { blur } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { fly, fade } from 'svelte/transition';

    export let value = 0;
    export let user;

    //TODO may cause issues later if not sorted correctly
    let maxScore = $gameData[0].score;

    const scoreProg = tweened(0, {
        duration: 1500,
        easing: cubicOut
    });

    scoreProg.set(value);

    $: show = Math.round($scoreProg);

    let snum = window.innerWidth;

    let size = 50;

    if(snum < 600){
        size = 80;
    }

</script>
<style>
    .bar{
        display: flex;
        height: 25px;
        align-items: center;
        justify-content: left;
        /* 		border: 1px solid grey; */
    }

    .inner{
        border-radius: 5px;
        height: 18px;
        background: linear-gradient(to right, #a341e4 20%, blue);
        background-color: #a341e4;
        color: white;
    }
    .count{
        display:flex;
        align-items: center;
        margin-left: 5px;
        height: 18px;
        color: white;
        font-size: 20px;
        font-family: Roboto, sans-serif;

    }

    .cont{
        margin-bottom: 10px;
        color: white;
        /*width: 50vw;*/
        /*font-weight: bold;*/
    }

    .text{
        font-size: 16px;
        font-family: Roboto, sans-serif;

    }
</style>

<div class="cont"><div class="text" in:fade="{{delay: 550, duration: 400}}">{user}</div>
    <div class="bar">
        <div class="inner" style="width:{($scoreProg/maxScore)*size}vw"></div><div class="count">{show}</div>
    </div>
</div>