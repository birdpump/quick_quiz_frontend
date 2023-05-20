<script>
    import view1 from "./lib/player/view1.svelte";
    import Join from "./lib/player/Join.svelte";
    let selected = view1;

</script>


<style>

</style>



<svelte:component this={selected}/>

