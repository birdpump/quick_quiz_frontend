<script>
    import view1 from "./player/view1.svelte";
    import Join from "./player/Join.svelte";
    import newJoin from "./player/newJoin.svelte";
    import Loading from "./player/Loading.svelte";

    import Waiting from "./admin/Waiting.svelte";
    import FinalPodium from "./admin/FinalPodium.svelte";

    let selected = newJoin;

    function switchVeiw(event) {
        // selected = Loading;
    }

</script>


<svelte:component on:waiting={switchVeiw} this={selected}/>

