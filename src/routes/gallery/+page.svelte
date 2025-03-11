<script>
    import data from "../../data.json";
    import Back from "../../components/backbutton.svelte";
    const datas = data.Gallery;
</script>

<Back backto="/#Gallery" />
<div class="flex justify-center mt-5">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative gap-3">
        <div class=" flex flex-col gap-3">
            {#each datas.slice(1, 8) as items}
                <img class=" object-cover max-w-96" src={items} alt="" />
            {/each}
        </div>
        <div class=" flex flex-col gap-3">
            {#each datas.slice(9, 15) as items}
                <img class=" object-cover max-w-96" src={items} alt="" />
            {/each}
        </div>
        <div class=" flex flex-col gap-3">
            {#each datas.slice(16, 23) as items}
                <img class=" object-cover max-w-96" src={items} alt="" />
            {/each}
        </div>
        <div class=" flex flex-col gap-3">
            {#each datas.slice(24, 29) as items}
                <img class=" object-cover max-w-96" src={items} alt="" />
            {/each}
        </div>
    </div>
</div>
