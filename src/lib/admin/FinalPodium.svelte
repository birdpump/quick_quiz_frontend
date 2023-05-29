<script>

</script>

<div id="container">
    <div id="first"></div>
    <div id="second"></div>
    <div id="third"></div>
</div>

<style>
    #container{
        display: flex;
        justify-content: center;
        align-items: end;
        height: 100vh;
    }
    #first{
        background-color: gold;
        height: 480px;
        width: 190px;
    }
    #second{
        order: -1;
        background-color: silver;
        height: 380px;
        width: 170px;
    }
    #third{
        background-color: brown;
        height: 280px;
        width: 150px;
    }
</style>