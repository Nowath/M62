<script>
    import { Hamburger } from "svelte-hamburgers";
    let open = false;
    import { goto } from "$app/navigation";
    // @ts-ignore
    function navigateToSection(id) {
        goto("/").then(() => {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        });
    }
</script>

<nav class=" h-18 w-full p-3 sticky top-0 z-50">
    <div
        class="w-full h-full bg-[#ffffffa9] border-pink-300 border-2 text-black relative backdrop-blur-lg rounded-2xl px-10 md:px-16 flex items-center justify-between"
    >
        <div class="logo">
            <span class="text-2xl font-play font-bold">M.6/2</span>
        </div>
        <ul class="gap-5 hidden md:flex">
            <li>
                <button
                    class="cursor-pointer"
                    on:click={() => navigateToSection("Teacher")}
                    >ครูประจำชั้น</button
                >
            </li>
            <li>
                <button
                    class="cursor-pointer"
                    on:click={() => navigateToSection("Student")}
                    >นักเรียน</button
                >
            </li>
            <li><a href="/">รูปรวมความทรงจำ</a></li>
            <li><a href="/">Graduation</a></li>
        </ul>
        <div class={`md:hidden`}>
            <Hamburger bind:open />
        </div>
        <div
            class={`${open ? `h-60` : `h-0`} overflow-hidden transition-all duration-1000 flex flex-col w-full left-0 absolute top-14`}
        >
            <ul
                class="w-full gap-5 drop text-white border-pink-300 border-2 rounded-2xl"
            >
                <li class="px-2 py-4 flex justify-center">
                    <a
                        class="w-full text-center"
                        href="#Teacher"
                        on:click={() => (open = !open)}>ครูประจำชั้น</a
                    >
                </li>
                <hr />
                <li class="px-2 py-4 flex justify-center">
                    <a
                        href="#Student"
                        class="w-full text-center"
                        on:click={() => (open = !open)}>นักเรียน</a
                    >
                </li>
                <hr />
                <li class="px-2 py-4 flex justify-center">
                    <a
                        href="/"
                        class="w-full text-center"
                        on:click={() => (open = !open)}>รูปรวมความทรงจำ</a
                    >
                </li>
                <hr />
                <li class="px-2 py-4 flex justify-center">
                    <a
                        href="/"
                        class="w-full text-center"
                        on:click={() => (open = !open)}>Graduation</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>

<style>
    hr {
        color: pink;
    }
    .drop {
        background-image: linear-gradient(to bottom, #654ea3, #e986af);
    }
</style>
