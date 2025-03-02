<script>
    import Card from "../components/card.svelte";
</script>

<div>
    <section id="Teacher" class="min-h-screen">
        <h2
            class=" header relative text-3xl font-play mb-10 font-bold text-black"
        >
            Teacher
        </h2>
    </section>
    <section id="Student" class="min-h-screen">
        <h2
            class=" header relative text-3xl font-play mb-10 font-bold text-black"
        >
            Student
        </h2>
        <div class="">
            <Card />
        </div>
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
</style>
