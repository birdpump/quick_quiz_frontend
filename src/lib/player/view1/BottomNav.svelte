<script>
    //test
    import {gData} from '../../../store.js';

</script>

<style>
    .mainCont{
        height: 50px;
        background-color: #a341e4;
        display: flex;
        align-items: center;
        padding: 0 10px 0 10px;

    }

    .score {
        background-color: #21252B;
        margin-left: auto;
        padding: 0 5px 0 5px;
        height: 30px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .uName{
        color: white;
        font-size: 20px;
        font-family: Roboto, sans-serif;

    }

    .text{
        color: white;
        font-size: 20px;
        font-family: Roboto, sans-serif;
    }

    @media screen and (max-width: 600px) {
        .mainCont{
            height: 40px;
        }
    }

</style>
<div class="mainCont">
    <div class="uName">{$gData.username}</div>
    <div class="score"><div class="text">{$gData.currentScore}</div></div>
</div>