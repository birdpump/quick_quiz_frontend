<script>
    import LinearProgress from '@smui/linear-progress';
    import { blur } from 'svelte/transition';
    import "/node_modules/svelte-material-ui/bare.css";
</script>

<style>
    .mainCont {
        width: 100vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .msg{
        color: white;
        font-family: Roboto, sans-serif;
        font-size: 25px;
        margin-bottom: 10px;
    }

    .prog {
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*margin-left: auto;*/
        /*margin-right: auto;*/
        width: 50%;
    }

    @media screen and (max-width: 600px) {
        .prog {
            width: 80%;
        }
    }

    /*smui color config*/
    :root {
        --mdc-theme-primary: #a341e4;
    }
</style>

<div class="mainCont" in:blur="{{delay:100, amount: 4, duration: 500}}">
    <div class="msg">Waiting for users</div>
    <div class="prog">
        <LinearProgress indeterminate/>
    </div>
</div>


<!--<svelte:head>-->
<!--    <link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css"/>-->
<!--</svelte:head>-->