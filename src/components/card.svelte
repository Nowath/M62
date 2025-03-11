<script>
    export const data = $props();
</script>

<div class="flex justify-center flex-wrap gap-x-4 gap-y-6 select-none">
    {#if data.data.length == 2}
        {#each data.data as datas}
            <a href={"/"} class="card cursor-default relative max-w-72">
                <img class="" src={datas.image} alt="" />
                <div
                    class=" absolute bg-gradient-to-tr from-[#ddd6f3] to-[#faaca8] rounded-2xl w-full h-full bottom-0 bgcard"
                ></div>
                <div
                    class=" absolute bottom-10 h-10 items-center left-1/2 translate-x-[-50%] name flex w-full justify-center bg-[#5c95ff6e] backdrop-blur-2xl rounded-md"
                >
                    <p class="text-[22px] z-60">{datas.nickname}</p>
                </div>
            </a>
        {/each}
    {:else}
        {#each data.data as datas}
            <a href={`/student/${datas.id}`} class="card relative max-w-72">
                <img
                    style={`view-transition-name: img-${datas.id}`}
                    class=""
                    src={datas.image}
                    alt=""
                />
                <div
                    class=" absolute bg-gradient-to-tr from-[#ddd6f3] to-[#faaca8] rounded-2xl w-full h-full bottom-0 bgcard"
                ></div>
                <div
                    class=" absolute bottom-10 h-10 items-center left-1/2 translate-x-[-50%] name flex w-full justify-center bg-[#5c95ff6e] backdrop-blur-2xl rounded-md"
                >
                    <p class="text-[22px] z-60">{datas.nickname}</p>
                </div>
            </a>
        {/each}
    {/if}
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
