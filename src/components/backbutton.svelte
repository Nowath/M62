<script>
    import FaAngleLeft from "svelte-icons/fa/FaAngleLeft.svelte";
    let { backto } = $props();
</script>

<div class="flex">
    <a class="cursor-pointer" href={backto}>
        <div class=" rainbow z-999999 relative">
            <div class="w-10 h-10 bg-black rounded-full p-2">
                <FaAngleLeft />
            </div>
        </div>
    </a>
</div>

<style>
    @property --angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }
    .rainbow:hover {
        transform: scale(1.1, 1.1);
        transition: all 0.3s ease-in-out;
    }
    .rainbow::before,
    .rainbow::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        background-image: conic-gradient(
            from var(--angle),
            #9c4f96,
            #ff6355,
            #fba949,
            #fae442,
            #8bd448,
            #2aa8f2,
            #9c4f96,
            transparent 50%
        );
        border-radius: 50%;
        padding: 23px;
        z-index: -1;
        animation: 2s running linear infinite;
        background-position: left;
        background-size: 100%;
        transition: all 0.3s;
    }
    .rainbow:hover::before {
        background-size: 250%;
    }
    .rainbow::after {
        filter: blur(5px);
    }
    .rainbow:hover::after {
        filter: blur(10px);
    }

    @keyframes running {
        from {
            --angle: 360deg;
        }
        to {
            --angle: 0deg;
        }
    }
</style>
