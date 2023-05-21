<script>
    //veiw1 handles all game play elements for player users
    import {gameData, gData, qData} from '../../store.js';

    import BottomNav from "./view1/BottomNav.svelte";
    import Question from './view1/Questions.svelte';
    import Response from './view1/Response.svelte';
    import {onMount} from "svelte";


    let selected = Question;


    //audio player
    let currentAudio = 'MainQuestionMusic.wav';
    let audio;


    // let socket = io();

    // socket.on("send_data", (data) => {
    //     // console.log(data.qData)
    //     let test = JSON.stringify(data.qData);
    //     console.log(test);
    //     gData.update(n => test);
    // });


    function handleMessage(newMessage) {
        console.log(newMessage.detail.id)
        selected = Response;
        // currentAudio = 'public/walterWhite.mp3';
        audio.pause();
    }

    //testing

    //testing
    // let data = {
    //     "total": 5,
    //     "current": 2
    // }


    let quiz = {
        "question": "What is the name of the first widely used programming language?",
        "answers": [
            {"answer": "FORTRAN", "id": 1},
            {"answer": "BASIC", "id": 2},
            {"answer": "Pascal", "id": 3},
            {"answer": "Java", "id": 4}
        ]

    }

    let data ={
        "username": "Test ",
        "currentScore": 500
    }

    let gdata = [
        {username: "bob1", score: 800},
        {username: "bob2", score: 720},
        {username: "bob3", score: 698},
        {username: "bob4", score: 621},
        {username: "bob5", score: 542}
    ];

    gameData.update(n => gdata);

    qData.update(n => quiz);
    gData.update(n => data);




    //more audio
    $: if (audio && audio.src !== currentAudio) {
        audio.src = currentAudio;
        audio.play();
    }

    onMount(() => {
        audio.play();
        audio.addEventListener('ended', () => {
            audio.currentTime = 0;
            audio.play();
        });
    });


</script>

<style>

    .flextest {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        align-items: center;

    }

    .main {
        width: 100vw;
        flex: 1;
    }

    .botNav {
        bottom: 0;
        width: 100vw;
    }


</style>

<audio src={currentAudio} bind:this={audio}></audio>

<div class="flextest">
    <div class="main">
        <svelte:component this={selected} on:message={handleMessage} />
    </div>
    <div class="botNav">
        <BottomNav/>
    </div>
</div>

