<script>
    import {qData} from '../../../store.js';
    import Wait from './response/Wait.svelte'
    import MainResult from './response/MainResult.svelte'
    import Test from "./response/Test.svelte";

    import Result from "./response/Result.svelte";
    let selected = Result;
    //test
</script>

<style>
    .mainCont {
        width: 100vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="mainCont">
    <svelte:component this={selected}/>
</div>