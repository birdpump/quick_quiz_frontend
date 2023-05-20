<script>
    import "/node_modules/svelte-material-ui/bare.css";
    import {blur, fade} from 'svelte/transition';
    import {onMount} from 'svelte';



    import {qData} from '../../../../store.js';

    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function call(ids) {

        dispatch('message', {
            id: ids
        });
    }

    let status = false;

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
        justify-content: center;
        align-items: center;
    }

    .subCont {
        /*background-color: black;*/
        max-width: 50vw;
        /*height: 400px;*/
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .top {
        position: relative;
        bottom: 10px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex: 1;

    }

    .title {
        font-size: 20px;
        font-family: Roboto, sans-serif;
        color: white;
    }

    .mainDiv {
        bottom: 0;
        /*width: 100%;*/
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }


    .child {
        position: relative;
        aspect-ratio: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin: 0;
        border-radius: 10px;
        flex: 1;
        background-color: #414855;
        user-select: none;
        cursor: pointer;
        font-family: Roboto, sans-serif;
        color: white;
    }


    .text {
        font-size: 16px;
    }

    .num {
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;

        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        left: 6px;
        width: 24px;
        height: 24px;

        border-radius: 6px;
        background-color: #21252B;
        font-size: 16px;
    }

    .child:nth-child(1) {
        border: 4px solid #9c2424;
    }

    @media screen and (max-width: 600px) {

    }

</style>




<div class="mainCont">
    <div class="subCont">
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