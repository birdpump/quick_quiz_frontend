<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


    import { socket } from '../../store.js'
    let pincode;
    let checked = false;

    let inval = '';
    let intext = 'Enter Code';
    let inelement;

    $: if(inval !== ''){
        inelement.style.borderColor = "grey";
    }

    function submit(){
        //if pin incorrect
        if(checked){
            console.log(pincode)
            socket.emit("join", {"username":inval, "gameID":pincode});
        }else{
            socket.emit("checkID", {"gameID":inval});
            pincode = inval;
        }

    }

    socket.on("good", (data) => {
        console.log(data.exists)
        if(data.exists){
            console.log("good")
            intext = 'Enter Nickname';
            inval = '';
            inelement.focus();
            checked = true;

        }else{
            inelement.style.borderColor = "red";
            inval = '';
            intext = 'Invalid Game Pin'
            inelement.focus();
        }
    });

    socket.on("joinStatus", (data) => {
        if(data.stats){
            console.log("msg");
            dispatch('waiting');

        }else{

            inelement.style.borderColor = "red";
            inval = '';
            intext = 'Username Taken'
            inelement.focus();
        }
    });

    function handleKeydown(event){
        if(event.code == "Enter"){
            submit();
        }
    }
</script>

<style>
    .main{
        height: 100vh;
        width: 100vw;
        background-color: #282C34;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    }

    .sub{
        padding: 10px;
        background-color: white;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .title{
        margin: 0 0 15px 0 ;
        color: white;
        font-family: sans-serif;
        font-size: 46px;
    }

    .input{
        width: 350px;
        height: 60px;
        text-align: center;
        border: 3px solid grey;
        border-radius: 5px;
        margin-bottom: 10px;
        font-family: sans-serif;
        font-size: 24px;
    }

    .input:focus{
        outline: none;
        border: 3px solid black;
    }

    .btn{
        background-color: #a341e4;
        height: 60px;
        width: 360px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        font-size: 20px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        margin: 0;
        color: black;
    }

    .btn:hover{
        background-color: black;
        color: white;
    }
</style>

<svelte:window on:keydown={handleKeydown}/>

<div class="main">
    <div class="title">QuickQuiz</div>
    <div class="sub">
        <input id="input" type="text" class="input" placeholder={intext} bind:this={inelement} bind:value={inval}/>
        <div class="btn" tabindex="0" on:click={submit}>Join</div>
    </div>
</div>