<script lang="ts">
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";

    let formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    let submitted = false;
    let error = "";

    async function handleSubmit(event: Event) {
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            // Here you would typically send the form data to your backend
            // For now, we'll just simulate a successful submission
            submitted = true;
            error = "";

            // Reset form
            form.reset();
        } catch (e) {
            error = "There was an error submitting the form. Please try again.";
            submitted = false;
        }
    }
</script>

<svelte:head>
    <title>Contact Us - OverRED</title>
    <meta
        name="description"
        content="Get in touch with the OverRED team. We're here to help with any questions or support you need."
    />
</svelte:head>

<div
    class="min-h-screen bg-gray-50 w-full flex flex-col items-center justify-center"
>
    <h1 class="text-4xl font-bold text-gray-900 mb-12 w-full text-center">
        Contact Us
    </h1>

    <div class="w-full flex justify-center px-4 lg:px-8">
        <!-- Contact Form -->
        <div class="w-full max-w-3xl">
            {#if submitted}
                <div
                    class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
                >
                    <p class="text-green-800">
                        Thank you for your message! We'll get back to you as
                        soon as possible.
                    </p>
                </div>
            {/if}

            {#if error}
                <div
                    class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                >
                    <p class="text-red-800">
                        {error}
                    </p>
                </div>
            {/if}

            <form
                on:submit|preventDefault={handleSubmit}
                class="space-y-6 w-full"
            >
                <div>
                    <label
                        for="name"
                        class="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        bind:value={formData.name}
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-overred-red focus:border-overred-red"
                    />
                </div>

                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        bind:value={formData.email}
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-overred-red focus:border-overred-red"
                    />
                </div>

                <div>
                    <label
                        for="subject"
                        class="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        bind:value={formData.subject}
                        required
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-overred-red focus:border-overred-red"
                    />
                </div>

                <div>
                    <label
                        for="message"
                        class="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        bind:value={formData.message}
                        required
                        rows="4"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-overred-red focus:border-overred-red"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    class="w-full px-6 py-3 bg-overred-red text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-overred-red"
                >
                    Send Message
                </button>
            </form>
        </div>
    </div>
</div>
