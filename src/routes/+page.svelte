<script>
    import Card from "../components/card.svelte";
    import data from "../data.json";
    const teacher = $state(data.teacher);
    const student = $state(data.student);
    const gallery = $state(data.Gallery);
    import { Motion } from "svelte-motion";
</script>

<div class="my-10 flex flex-col gap-10">
    <section id="Teacher" class="">
        <h2
            class=" header relative text-3xl font-play mb-10 font-bold text-black"
        >
            Teacher
        </h2>
        <div class="">
            <Card data={teacher} />
        </div>
    </section>
    <section id="Student" class="min-h-screen">
        <h2
            class=" header relative text-3xl font-play mb-10 font-bold text-black"
        >
            Student
        </h2>
        <div class="">
            <Card data={student} />
        </div>
    </section>
    <section id="Gallery" class="">
        <h2
            class=" header relative text-3xl font-play mb-10 font-bold text-black"
        >
            Gallery
        </h2>
        <div class="flex justify-center h-screen overflow-hidden md:h-[200vh]">
            <div class="flex fade relative gap-3">
                <div class=" flex flex-col gap-3">
                    {#each gallery.slice(0, 10) as items}
                        <img
                            class=" object-cover max-w-96"
                            src={items}
                            alt=""
                        />
                    {/each}
                </div>
                <div class=" flex flex-col gap-3">
                    {#each gallery.slice(11, 20) as items}
                        <img
                            class=" object-cover max-w-96"
                            src={items}
                            alt=""
                        />
                    {/each}
                </div>
                <div class=" flex flex-col gap-3">
                    {#each gallery.slice(21, 30) as items}
                        <img
                            class=" object-cover max-w-96"
                            src={items}
                            alt=""
                        />
                    {/each}
                </div>
            </div>
        </div>
        <Motion
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            let:motion
        >
            <div class="flex justify-center mt-5">
                <a
                    class=" bg-pink-500 px-5 py-2 rounded-md"
                    use:motion
                    href="/gallery">More</a
                >
            </div>
        </Motion>
    </section>
</div>

<style>
    section > .header::before,
    section > .header::after {
        content: "";
        position: absolute;
        width: 150px;
        height: 3px;
        background-image: linear-gradient(to left, #eecda3, #fc67fa);
        bottom: -5px;
        left: 0;
    }
    section > .header::after {
        width: 100px;
        bottom: -15px;
    }
    .fade::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 40%;
        bottom: 0;
        z-index: 49;
        background-image: linear-gradient(to top, #f1a5b0 20%, transparent);
    }
</style>
