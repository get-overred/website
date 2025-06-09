<script lang="ts">
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>Terms of Service - OverRED</title>
    <meta
        name="description"
        content="Terms of Service for OverRED - Learn about the terms and conditions for using our services."
    />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4 max-w-4xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div class="prose prose-lg max-w-none">
            <p class="text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
            </p>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    1. Acceptance of Terms
                </h2>
                <p class="text-gray-600 mb-4">
                    By accessing and using OverRED's Chrome extension and web
                    application, you agree to be bound by these Terms of Service
                    and all applicable laws and regulations. If you do not agree
                    with any of these terms, you are prohibited from using or
                    accessing our services.
                </p>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    2. Use License
                </h2>
                <p class="text-gray-600 mb-4">
                    Permission is granted to temporarily use OverRED for
                    personal, non-commercial purposes. This license does not
                    include:
                </p>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>Modifying or copying the materials</li>
                    <li>Using the materials for commercial purposes</li>
                    <li>Attempting to reverse engineer any software</li>
                    <li>Removing any copyright or proprietary notations</li>
                </ul>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    3. User Responsibilities
                </h2>
                <p class="text-gray-600 mb-4">
                    As a user of OverRED, you agree to:
                </p>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>Provide accurate account information</li>
                    <li>Maintain the security of your account</li>
                    <li>Not use the service for illegal purposes</li>
                    <li>
                        Not interfere with the proper functioning of the service
                    </li>
                    <li>Not attempt to gain unauthorized access</li>
                </ul>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    4. Content Guidelines
                </h2>
                <p class="text-gray-600 mb-4">
                    When creating guides and videos with OverRED, you must:
                </p>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>Respect copyright and intellectual property rights</li>
                    <li>
                        Not create content that is illegal, harmful, or
                        offensive
                    </li>
                    <li>Not infringe on others' privacy rights</li>
                    <li>
                        Not create content that promotes discrimination or
                        harassment
                    </li>
                </ul>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    5. Service Modifications
                </h2>
                <p class="text-gray-600 mb-4">OverRED reserves the right to:</p>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>Modify or discontinue the service at any time</li>
                    <li>Update these terms at any time</li>
                    <li>Change pricing with notice to users</li>
                    <li>Limit access to certain features</li>
                </ul>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    6. Disclaimer
                </h2>
                <p class="text-gray-600 mb-4">
                    OverRED is provided "as is" without any warranties,
                    expressed or implied. We do not warrant that:
                </p>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>The service will be uninterrupted or error-free</li>
                    <li>The results obtained will be accurate or reliable</li>
                    <li>
                        The quality of any products or services will meet your
                        expectations
                    </li>
                </ul>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    7. Limitation of Liability
                </h2>
                <p class="text-gray-600 mb-4">
                    In no event shall OverRED be liable for any damages arising
                    out of the use or inability to use our services, including
                    but not limited to:
                </p>
                <ul class="list-disc pl-6 text-gray-600 mb-4">
                    <li>
                        Direct, indirect, incidental, or consequential damages
                    </li>
                    <li>Loss of data or profits</li>
                    <li>Business interruption</li>
                </ul>
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">
                    8. Contact Information
                </h2>
                <p class="text-gray-600 mb-4">
                    If you have any questions about these Terms of Service,
                    please contact us at:
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
