<script lang="ts">
    import allStudent from "../image/allStudent.jpg";
    import { register } from "swiper/element/bundle";
    import "swiper/swiper-bundle.css";
    import allStudent2 from "../image/allStudent2.jpg";
    import allStudent3 from "../image/allStudent3.jpg";
    import SWKlogo from "../image/SWKlogo.png";

    $effect(() => {
        register();
    });
</script>

<div class="max-h-[92vh] relative overflow-hidden">
    <div class=" absolute z-50 h-full w-full flex justify-center items-center">
        <div
            class="w-full bg-gradient-to-tr from-[#fef085a1] to-[#7bf1a7a1] flex justify-evenly items-center backdrop-blur-md text-center"
        >
            <p
                class="text-[100px] lg:text-[200px] text [text-shadow:_#FC0_1px_0_10px;]"
            >
                6/2
            </p>
            <div class="hidden md:flex justify-center items-center w-2/11">
                <img class=" mix-blend-overlay" src={SWKlogo} alt="SWKlogo" />
            </div>
            <p
                class="hidden md:flex text-[100px] lg:text-[200px] text [text-shadow:_#FC0_1px_0_10px;]"
            >
                115
            </p>
        </div>
    </div>
    <div class="h-[92vh] flex relative justify-center fade">
        <swiper-container
            slides-per-view="1"
            speed="500"
            loop="true"
            css-mode="true"
            class="w-full h-full"
            autoplay-delay="5000"
            autoplay-disable-on-interaction="false"
        >
            <swiper-slide class="max-h-[92vh] overflow-hidden">
                <div class="h-[92vh]">
                    <img
                        src={allStudent}
                        class="w-full h-full object-cover"
                        alt="allStudent"
                    />
                </div>
            </swiper-slide>
            <swiper-slide class="max-h-[92vh] overflow-hidden">
                <div class="h-[92vh]">
                    <img
                        src={allStudent2}
                        class="w-full h-full object-cover"
                        alt="allStudent"
                    />
                </div>
            </swiper-slide>
            <swiper-slide class="max-h-[92vh] overflow-hidden">
                <div class="h-[92vh]">
                    <img
                        src={allStudent3}
                        class="w-full h-full object-cover"
                        alt="allStudent"
                    />
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</div>

<style>
    .fade::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 40%;
        bottom: 0;
        z-index: 49;
        background-image: linear-gradient(to top, #efa0ab 20%, transparent);
    }
</style>
