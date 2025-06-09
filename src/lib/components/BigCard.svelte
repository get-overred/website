<!-- Items:

- super easy to capture + availabilty at chrome firefox and safari (coming)
- many export options
- Customizability
- Free for Individuals  -->

<script lang="ts">
    import BigCardImage from "$lib/assets/big_card_image.svelte";

    interface myData {
        title: string;
        description: string;
        image: any;
    }

    const my_data: Array<myData> = [
        {
            title: "Easy to Capture, anywhere",
            description:
                "Glue AI knows about your threads and groups. It can look into documents and cross-reference with the current thread to answer questions.",
            image: "",
        },
        {
            title: "Export it like you want it",
            description:
                "Glue AI knows about your threads and groups. It can look into documents and cross-reference with the current thread to answer questions.",
            image: "",
        },
        {
            title: "Customizable to your wish",
            description:
                "Glue AI knows about your threads and groups. It can look into documents and cross-reference with the current thread to answer questions.",
            image: "",
        },
        {
            title: "Free FOREVER for Individuals ",
            description:
                "Glue AI knows about your threads and groups. It can look into documents and cross-reference with the current thread to answer questions.",
            image: "",
        },
    ];
</script>

<div
    class="relative w-full h-[40rem] flex flex-row justify-end items-end my-96 rounded-3xl shadow-big-card"
>
    <div
        class="rounded-l-2xl w-[50%] h-full flex flex-col p-12 space-y-10 jusitfy-center items-start"
    >
        <h2 class="text-left font-bold text-blue-950 text-4xl">
            {my_data[0].title}
        </h2>
        <p class="text-left font-medium text-slate-500 text-2xl flex flex-grow">
            {my_data[0].description}
        </p>

        <a
            class=" text-white bg-overred-variant-blue py-3 px-12 rounded-3xl font-semibold text-xl hover:bg-overred-text-blue transition-all duration-500"
            href={"https://chrome.com"}>{"Download"}</a
        >
    </div>
    <div
        class="w-[50%] h-full bg-gradient-to-tr from-overred-shadow-yellow via-overred-shadow-orange to-overred-shadow-pink opacity-25 blur-md"
    ></div>
    <div class="absolute w-[50%] h-full bg-transparent p-12">
        <!-- <img class="flex justify-center items-center object-contain p-12" alt="my_image"/> -->
        <BigCardImage
            class_data="flex justify-center items-center object-contain"
        />
    </div>
</div>

<style>
    .shadow-big-card {
        box-shadow:
            10px 10px 50px 50px rgb(252, 225, 83, 0.15),
            -10px 10px 50px 50px rgb(254, 148, 70, 0.15),
            -20px -20px 50px 50px rgb(179, 45, 246, 0.15);
    }
</style>
