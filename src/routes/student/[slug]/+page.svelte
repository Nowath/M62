<script>
    export let data;
    import Back from "../../../components/backbutton.svelte";
    import { Motion } from "svelte-motion";
    import IoLogoInstagram from "svelte-icons/io/IoLogoInstagram.svelte";
    import IoLogoFacebook from "svelte-icons/io/IoLogoFacebook.svelte";
    import { onMount } from "svelte";
    onMount(() => {
        let linkFacebook = data.person.facebook
            .toLowerCase()
            .split(" ")
            .join(".");
        console.log(linkFacebook);
    });
</script>

<div class=" absolute">
    <Back backto={`/#Student`} />
</div>

<div class="flex items-center flex-col w-full gap-5 my-5 relative">
    <div
        class="bg-[#000000c5] px-5 md:px-20 rounded-2xl py-10 flex flex-col gap-8 relative"
    >
        <Motion whileHover={{ scale: 1.1 }} let:motion>
            <img
                style={`view-transition-name: img-${data.person.id}`}
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
                        <IoLogoInstagram />
                    </div>
                    <a
                        href={`https://www.instagram.com/${data.person.IG}/`}
                        class="text-xl hover:text-pink-300"
                        target="_blank"
                        >{data.person.IG}
                    </a>
                </div>
                <div class="flex justify-center items-center gap-2">
                    <div class="w-5">
                        <IoLogoFacebook />
                    </div>
                    {#if data.person.facebook_link}
                        <a
                            href={`https://www.facebook.com/${data.person.facebook_link}`}
                            class="text-xl hover:text-pink-300"
                            target="_blank"
                            >{data.person.facebook}
                        </a>
                    {:else}
                        <a
                            href={`https://www.facebook.com/${data.person.facebook.toLowerCase().split(" ").join(".")}`}
                            class="text-xl hover:text-pink-300"
                            target="_blank"
                            >{data.person.facebook}
                        </a>
                    {/if}
                </div>
                {#if data.person.university != "-"}
                    <div class=" flex flex-col items-center z-20 mt-5">
                        <h1 class="text text-xl">{data.person.university}</h1>
                        {#if data.person.group != "-"}
                            <h1 class="text text-xl">
                                {data.person.group}
                            </h1>
                            <h2 class="text text-xl">{data.person.branch}</h2>
                        {/if}
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
