<script>
    import view1 from "./player/view1.svelte";
    import Join from "./player/Join.svelte";
    import Loading from "./player/Loading.svelte";

    let selected = Join;

    function switchVeiw(event) {
        selected = Loading;
    }

</script>




<svelte:component on:waiting={switchVeiw} this={selected}/>

