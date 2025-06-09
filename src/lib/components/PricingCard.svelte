<script lang="ts">
    export let title: string;
    export let descrb: string;
    export let button_text: string;
    export let button_link: string;
    export let feature_list: Array<string>;
</script>

<div
    id="pricing-card"
    class="w-[27rem] h-[50rem] bg-background shadow-centered-2xl flex flex-col p-12 justify-between rounded-2xl bg-opacity-75"
>
    <div class="w-full h-full">
        <div class="w-full space-y-5">
            <p
                class="text-left text-3xl font-extrabold text-overred-variant-blue"
            >
                {title}
            </p>
            <p
                class="text-left text-xl font-extrabold text-overred-variant-blue h-[5rem] overflow-scroll line-clamp-2"
            >
                {descrb}
            </p>
        </div>

        <a
            href={button_link}
            class="mx-[5%] my-10 rounded-3xl py-3 px-4 text-center flex justify-center items-center bg-overred-variant-blue text-white font-bold hover:bg-overred-accent-blue transition-colors duration-1000"
            >{button_text}</a
        >

        <div
            class="w-full space-y-5 my-20 flex flex-col justify-center items-center"
        >
            {#each feature_list as featr}
                <div class="flex flex-row space-x-5 w-[80%]">
                    <i
                        class="fa-solid fa-circle-check text-2xl text-green-400 bg-opacity-80 pt-[0.1rem]"
                    ></i>
                    <p class="font-extrabold text-xl text-overred-variant-blue">
                        {featr}
                    </p>
                </div>
            {/each}
        </div>
    </div>

    <a href="/pricing#features"
        ><span
            ><div
                class="flex flex-row space-x-3 justify-center items-center hover:underline"
            >
                <p class="font-bold text-xl text-overred-variant-blue">
                    See all Features
                </p>
                <i
                    class="fa-solid fa-arrow-right text-xl text-overred-variant-blue pt-1"
                ></i>
            </div></span
        ></a
    >
</div>

<style>
    #pricing-card {
        box-shadow:
            0px 0px 16px 16px rgb(252, 225, 83, 0.2),
            2px 2px 8px 8px rgb(254, 148, 70, 0.5),
            -2px -2px 8px 8px rgb(179, 45, 246, 0.5);
    }
</style>
