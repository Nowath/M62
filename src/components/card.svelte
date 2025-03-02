<script>
    import Nano from "../image/student/Nano.png";
</script>

<div class="flex justify-center md:justify-start flex-wrap">
    <a href="#Teacher" class="card relative max-w-72">
        <img class="" src={Nano} alt="" />
        <div
            class=" absolute bg-gradient-to-tr from-[#ddd6f3] to-[#faaca8] rounded-2xl w-full h-full bottom-0 bgcard"
        ></div>
        <div
            class=" absolute bottom-10 h-10 items-center left-1/2 translate-x-[-50%] name flex w-full justify-center bg-[#5c95ff6e] backdrop-blur-2xl rounded-md"
        >
            <p class="text-2xl z-60">นาโน</p>
        </div>
    </a>
</div>

<style>
    .card {
        display: flex;
        width: auto;
        height: auto;
        transform-style: preserve-3d;
        transform: perspective(1000px);
        transition: all 0.3s;
    }
    .card > * {
        transition: all 0.3s;
    }
    .bgcard {
        z-index: -1;
    }
    .card:hover > .bgcard {
        transform: rotateX(20deg);
        height: 80%;
    }
    .card:hover > img {
        transform: translateZ(100px) translateY(-20px);
    }
    img {
        z-index: 100;
    }
    .card:hover > .name {
        transform: translateZ(210px);
        width: 85%;
    }
    .name {
        z-index: 1000000;
    }
</style>
