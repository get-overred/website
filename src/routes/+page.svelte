<script lang="ts">
    import chrome_img from "$lib/assets/chrome_logo.png?enhanced";
    import { onMount } from "svelte";

    onMount(() => {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
    });
</script>

<svelte:head>
    <title>OverRED - Create How-to Guides in Seconds</title>
    <meta
        name="description"
        content="Transform your browser interactions into beautiful how-to guides and videos with OverRED. The easiest way to create and share tutorials."
    />
</svelte:head>

<div
    class="min-h-screen bg-gradient-to-b from-white to-gray-50 w-full md:m-6 xl:m-12"
>
    <!-- Hero Section -->
    <section class="relative pt-20 pb-32 overflow-hidden">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center -mx-4">
                <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                    <h1
                        class="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
                    >
                        Create How-to Guides in <span class="text-overred-red"
                            >Seconds</span
                        >
                    </h1>
                    <p class="text-xl text-gray-600 mb-8">
                        Transform your browser interactions into beautiful
                        guides and videos. Perfect for documentation, tutorials,
                        and training.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a
                            href="https://chromewebstore.google.com/detail/mlomiejdfkolichcflejclcbmpeaniij"
                            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-overred-red hover:bg-red-700"
                        >
                            <enhanced:img
                                src={chrome_img}
                                class="h-6 w-auto object-contain mr-4"
                            />
                            Add to Chrome - It's Free
                        </a>
                        <a
                            href="/docs"
                            class="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            View Documentation
                        </a>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 px-4">
                    <div class="relative rounded-lg shadow-xl overflow-hidden">
                        <iframe
                            class="w-full aspect-video"
                            src="https://www.youtube.com/embed/mw8azdalTjY?autoplay=1&mute=1&loop=1&playlist=mw8azdalTjY&modestbranding=1&controls=0"
                            title="OverRED Demo"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16">
                Why Choose OverRED?
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-6 rounded-lg bg-gray-50">
                    <div
                        class="w-12 h-12 bg-overred-red rounded-lg flex items-center justify-center mb-4"
                    >
                        <svg
                            class="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">
                        Smart Click Tracking
                    </h3>
                    <p class="text-gray-600">
                        Our Chrome extension automatically captures your
                        interactions, making guide creation effortless.
                    </p>
                </div>
                <div class="p-6 rounded-lg bg-gray-50">
                    <div
                        class="w-12 h-12 bg-overred-red rounded-lg flex items-center justify-center mb-4"
                    >
                        <svg
                            class="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Intuitive Editor</h3>
                    <p class="text-gray-600">
                        Transform your captured interactions into beautiful,
                        step-by-step guides with our powerful web app.
                    </p>
                </div>
                <div class="p-6 rounded-lg bg-gray-50">
                    <div
                        class="w-12 h-12 bg-overred-red rounded-lg flex items-center justify-center mb-4"
                    >
                        <svg
                            class="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Video Generation</h3>
                    <p class="text-gray-600">
                        Automatically convert your guides into
                        professional-looking tutorial videos.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16">How It Works</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div
                        class="w-16 h-16 bg-overred-red rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <span class="text-white text-2xl font-bold">1</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">
                        Install Extension
                    </h3>
                    <p class="text-gray-600">
                        Add OverRED to Chrome and start capturing your
                        interactions.
                    </p>
                </div>
                <div class="text-center">
                    <div
                        class="w-16 h-16 bg-overred-red rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <span class="text-white text-2xl font-bold">2</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Create Guide</h3>
                    <p class="text-gray-600">
                        Use our web app to transform your captured interactions
                        into a guide.
                    </p>
                </div>
                <div class="text-center">
                    <div
                        class="w-16 h-16 bg-overred-red rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <span class="text-white text-2xl font-bold">3</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Share & Export</h3>
                    <p class="text-gray-600">
                        Share your guide or export it as a video for your
                        audience.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Image Slider Section -->
    <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <div class="w-full flex flex-col items-center justify-center">
                <h2 class="text-3xl font-bold text-center mb-8">
                    See OverRED in Action
                </h2>
                <div
                    class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg"
                >
                    <div
                        class="flex transition-transform duration-700"
                        style="transform: translateX(0);"
                    >
                        <img
                            src="/static/slider1.png"
                            alt="Screenshot 1"
                            class="w-full object-cover h-96"
                        />
                        <img
                            src="/static/slider2.png"
                            alt="Screenshot 2"
                            class="w-full object-cover h-96"
                        />
                        <img
                            src="/static/slider3.png"
                            alt="Screenshot 3"
                            class="w-full object-cover h-96"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-overred-red">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold text-white mb-8">
                Ready to Create Amazing Guides?
            </h2>
            <p class="text-xl text-white mb-8">
                Join thousands of users who are already creating beautiful
                guides with OverRED.
            </p>
            <div
                class="flex flex-col md:flex-row justify-center items-center gap-4"
            >
                <a
                    href="https://chromewebstore.google.com/detail/mlomiejdfkolichcflejclcbmpeaniij"
                    class="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-overred-red transition-colors"
                >
                    <enhanced:img src={chrome_img} class="w-6 h-6 mr-2" />
                    Get Started for Free
                </a>
                <a
                    href="https://app.overred.co/"
                    class="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-overred-red transition-colors"
                >
                    Login to Web App
                </a>
            </div>
        </div>
    </section>
</div>

<style>
    .container {
        max-width: 1280px;
    }
</style>
