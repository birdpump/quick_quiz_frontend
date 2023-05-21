<script>
    import chatGPT from "./admin/chatGPT.svelte";
    import Waiting from "./admin/Waiting.svelte";
    let selected = chatGPT;

    function tests(event) {
        selected = Waiting;
    }

</script>




<svelte:component on:change={tests} this={selected}/>

