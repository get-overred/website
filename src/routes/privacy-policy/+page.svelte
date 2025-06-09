<script lang="ts">
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>Privacy Policy - OverRED</title>
    <meta
        name="description"
        content="Privacy Policy for OverRED - Learn how we handle your data and protect your privacy."
    />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4 max-w-4xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div class="prose prose-lg max-w-none">
            <p class="text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
            </p>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    Introduction
                </h2>
                <p class="text-gray-600 mb-4">
                    At OverRED, we take your privacy seriously. This Privacy
                    Policy explains how we collect, use, disclose, and safeguard
                    your information when you use our Chrome extension and web
                    application.
                </p>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    Information We Collect
                </h2>
                <h3 class="text-xl font-medium text-gray-900 mb-2">
                    Chrome Extension Data
                </h3>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>
                        Browser interactions (clicks, form inputs, page
                        navigation)
                    </li>
                    <li>URLs of visited pages</li>
                    <li>Timestamps of interactions</li>
                    <li>Element selectors for UI interactions</li>
                </ul>

                <h3 class="text-xl font-medium text-gray-900 mb-2">
                    Web Application Data
                </h3>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>Account information (email, name)</li>
                    <li>Created guides and videos</li>
                    <li>Usage statistics</li>
                    <li>Browser type and version</li>
                </ul>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    How We Use Your Information
                </h2>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>To provide and maintain our service</li>
                    <li>To create and manage your guides and videos</li>
                    <li>To improve our products and services</li>
                    <li>To communicate with you about updates and support</li>
                    <li>To detect and prevent technical issues</li>
                </ul>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    Data Storage and Security
                </h2>
                <p class="text-gray-600 mb-4">
                    We implement appropriate security measures to protect your
                    personal information. Your data is stored securely on our
                    servers and is encrypted during transmission.
                </p>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    Third-Party Services
                </h2>
                <p class="text-gray-600 mb-4">
                    We may use third-party services to:
                </p>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>Host our application</li>
                    <li>Process payments</li>
                    <li>Analyze usage patterns</li>
                    <li>Provide customer support</li>
                </ul>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    Your Rights
                </h2>
                <p class="text-gray-600 mb-4">You have the right to:</p>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Export your data</li>
                    <li>Opt-out of marketing communications</li>
                </ul>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    Contact Us
                </h2>
                <p class="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy, please
                    contact us at:
                </p>
                <a href="/contact" class="text-overred-red hover:text-red-700"
                    >Contact Form</a
                >
            </section>
        </div>
    </div>
</div>

<style>
    .container {
        max-width: 1280px;
    }
</style>
