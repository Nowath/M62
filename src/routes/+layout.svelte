<script>
    let { children } = $props();
    import "../app.css";
    import Firstpage from "../page/Firstpage.svelte";
    import Navbar from "../components/Navbar.svelte";
</script>

<div
    class=" font-kanit background font-light text-white relative w-screen h-screen overflow-auto"
>
    <Firstpage />
    <Navbar />
    <div class=" px-6 md:px-20 mt-5">
        {@render children()}
    </div>
</div>

<style>
    .background {
        background-image: linear-gradient(to top, #ee9ca7, #ffdde1);
    }
</style>
