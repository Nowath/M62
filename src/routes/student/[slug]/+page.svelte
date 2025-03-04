<script>
    export let data;
    import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
    import FaFacebook from "svelte-icons/fa/FaFacebook.svelte";
    import Back from "../../../components/backbutton.svelte";
    import { Motion } from "svelte-motion";
</script>

<Back />
<div class="flex items-center flex-col w-full gap-5 my-5 relative">
    <div
        class="bg-[#000000c5] px-5 md:px-20 rounded-2xl py-10 flex flex-col gap-8 relative"
    >
        <Motion whileHover={{ scale: 1.1 }} let:motion>
            <img
                src={data.person.image}
                alt={data.person.nickname}
                class="w-96 select-none z-10"
                use:motion
            />
            <div class=" flex flex-col items-center z-20">
                <h1 class="text text-2xl">{data.person.name}</h1>
                <h2 class="text text-2xl">{data.person.nickname}</h2>

                <div class="flex justify-center items-center gap-2">
                    <div class="w-5">
                        <FaInstagram />
                    </div>
                    <p class="text-xl">{data.person.IG}</p>
                </div>
                <div class="flex justify-center items-center gap-2">
                    <div class="w-5">
                        <FaFacebook />
                    </div>
                    <p class="text-xl">{data.person.facebook}</p>
                </div>
                {#if data.person.university != "-"}
                    <div class=" flex flex-col items-center z-20 mt-5">
                        <h1 class="text text-xl">{data.person.university}</h1>
                        <h1 class="text text-xl">{data.person.group}</h1>
                        <h2 class="text text-xl">{data.person.branch}</h2>
                    </div>
                {/if}
            </div>
        </Motion>
        {#if data.person.university != "-"}
            <div class="absolute right-0 top-2">
                <img
                    src={data.person.university_image}
                    alt={data.person.nickname}
                    class="w-30 select-none z-10"
                />
            </div>
        {/if}
    </div>
</div>

<style>
    .text {
        text-shadow: #ff57f1 1px 0 10px;
    }
</style>
