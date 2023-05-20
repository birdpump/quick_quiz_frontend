<script>
    import "/node_modules/svelte-material-ui/bare.css";
    import {blur, fade} from 'svelte/transition';
    import {onMount} from 'svelte';



    import {qData} from '../../store.js';

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
        max-width: 1200px;
        /*height: 400px;*/
        display: flex;
        flex: 1;
        flex-direction: column;
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

    .mainDiv {
        bottom: 0;
        /*width: 100%;*/
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        padding: 4px;
        /* 		max-width: 900px; */
    }


    .child {
        position: relative;
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin: 4px;
        border-radius: 10px;
        flex: 1;
        background-color: #414855;
        user-select: none;
        cursor: pointer;
        font-family: Roboto, sans-serif;
        color: white;
        /* 		box-sizing: border-box; */
        transition: filter 0.05s;
    }

    .child:hover {
        filter: drop-shadow(0 0 6px #646cffaa);

    }


    .text {
        font-size: 16px;
    }

    .num {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        top: 6px;
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

    .child:nth-child(1):hover {
        filter: drop-shadow(0 0 6px #9c2424);

    }

    .child:nth-child(2) {
        border: 4px solid #249c2e;
    }

    .child:nth-child(2):hover {
        filter: drop-shadow(0 0 6px #249c2e);

    }

    .child:nth-child(3) {
        border: 4px solid #243a9c;
    }

    .child:nth-child(3):hover {
        filter: drop-shadow(0 0 6px #243a9c);

    }


    .child:nth-child(4) {
        border: 4px solid #86249c;
    }

    .child:nth-child(4):hover {
        filter: drop-shadow(0 0 6px #86249c);

    }

    @media screen and (max-width: 600px) {
        .top {
            flex: 1;

        }

        .mainCont {
            height: 100%;
            width: 100%;
        }

        .subCont {

            height: 100%;
            width: 100%;
        }

        .mainDiv {
            height: 80vh;
            flex-direction: column;
        }


        .child {
            aspect-ratio: 0;

        }

        .num {
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
        }
    }
</style>



<!--<main>-->

<!--    <div class="main" in={{}} out:blur="{{delay: 450, amount: 4, duration: 250 }}">-->
<!--        &lt;!&ndash;        <div class="qStatcont">&ndash;&gt;-->
<!--        &lt;!&ndash;            {#each Array($gData.total) as _, i}&ndash;&gt;-->

<!--        &lt;!&ndash;                {#if i < $gData.current}&ndash;&gt;-->
<!--        &lt;!&ndash;                    <div class="qStat" style="background-color: #222525;"></div>&ndash;&gt;-->
<!--        &lt;!&ndash;                {:else}&ndash;&gt;-->
<!--        &lt;!&ndash;                    <div class="qStat" ></div>&ndash;&gt;-->
<!--        &lt;!&ndash;                {/if}&ndash;&gt;-->
<!--        &lt;!&ndash;            {/each}&ndash;&gt;-->
<!--        &lt;!&ndash;        </div>&ndash;&gt;-->


<!--        <div class="qText">{$qData.question}</div>-->
<!--        <div class="qCont">-->

<!--            {#if visible}-->
<!--                {#each $qData.answers as t, i}-->

<!--                    <div class="answerOp" on:click={call(t.id)} transition:blur="{{amount: 4, duration: 150 + i*150}}">-->
<!--                        <div class="opText">{t.answer}</div>-->
<!--                    </div>-->
<!--                {/each}-->
<!--            {/if}-->
<!--        </div>-->
<!--    </div>-->
<!--</main>-->


<div class="mainCont">
    <div class="subCont">
        <div class="top">
            <div class="title">{$qData.question}</div>
        </div>
        {#if visible}
            <div class="mainDiv">
                {#each $qData.answers as t, i}
                    <div class="child" on:click={call(t.id)} in:blur="{{amount: 4, duration: 150 + i*150}}">
                        <div class="num">{i + 1}</div>
                        <div class="text">{t.answer}</div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>