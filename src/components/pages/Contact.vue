<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import emailjs from '@emailjs/browser';

const fullname = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const isSending = ref(false);

const toast = useToast();

const sendMessage = async () => {
    if (isSending.value) return;
    isSending.value = true;

    try {
        const serviceID = 'service_x6gbtq8';
        const templateID = 'template_bwv7ioj';
        const publicKey = '1mwOD-7uaBGiiaQ3x';

        const templateParams = {
            fullname: fullname.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
            from_name: fullname.value,
            reply_to: email.value
        };

        await emailjs.send(serviceID, templateID, templateParams, publicKey);

        if (toast) {
            toast.success('Message sent successfully!');
        } else {
            alert('Message sent successfully!');
        }

        // Reset form fields
        fullname.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
    } catch (error) {
        console.error('EmailJS Error:', error);
        if (toast) {
            toast.error('Failed to send message. Please try again or email directly.');
        } else {
            alert('Failed to send message. Please try again.');
        }
    } finally {
        isSending.value = false;
    }
};
</script>

<template>
    <div class="container-xl py-14">
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                <!-- Left Column: Contact Header & Information -->
                <div class="lg:col-span-5 space-y-8">
                    <div>
                        <h1
                            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                            LET'S <span class="text-teal-700">CHAT</span>
                        </h1>
                        <p class="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
                            Have an upcoming project, a mobile app idea, or a position to discuss? Send me a message and
                            let's create something impactful together.
                        </p>
                    </div>

                    <!-- Direct Contact Card -->
                    <div
                        class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl text-slate-100 space-y-6">
                        <div class="flex items-center gap-4">
                            <div
                                class="p-3.5 bg-slate-800 text-teal-300 rounded-xl border border-slate-700/80 shrink-0">
                                <font-awesome-icon icon="fa-regular fa-envelope" class="size-6" />
                            </div>
                            <div>
                                <h2 class="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                                    Direct Email</h2>
                                <a href="mailto:bachicha.paolo@gmail.com"
                                    class="text-sm sm:text-base font-bold text-teal-300 hover:text-teal-200 transition-colors">
                                    bachicha.paolo@gmail.com
                                </a>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 border-t border-slate-800 pt-5">
                            <div
                                class="p-3.5 bg-slate-800 text-teal-300 rounded-xl border border-slate-700/80 shrink-0">
                                <font-awesome-icon icon="fa-solid fa-location-dot" class="size-6" />
                            </div>
                            <div>
                                <h2 class="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                                    Location</h2>
                                <p class="text-sm font-semibold text-slate-200">Philippines (Available for Remote Work)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Interactive Contact Form -->
                <div class="lg:col-span-7">
                    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
                        <h2 class="text-2xl font-bold text-slate-100 mb-2">
                            Send Me a Message 🚀
                        </h2>
                        <p class="text-slate-400 text-xs sm:text-sm font-mono mb-8">
                            Fill out the form below and I will get back to you promptly.
                        </p>

                        <form @submit.prevent="sendMessage" class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label for="fullname"
                                        class="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                        Full Name *
                                    </label>
                                    <input v-model="fullname" type="text" id="fullname" name="fullname"
                                        placeholder="John Doe"
                                        class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                                        required />
                                </div>

                                <div>
                                    <label for="email"
                                        class="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                        Email Address *
                                    </label>
                                    <input v-model="email" type="email" id="email" name="email"
                                        placeholder="john@example.com"
                                        class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                                        required />
                                </div>
                            </div>

                            <div>
                                <label for="subject"
                                    class="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                    Subject *
                                </label>
                                <input v-model="subject" type="text" id="subject" name="subject"
                                    placeholder="Project Inquiry / Job Opportunity"
                                    class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                                    required />
                            </div>

                            <div>
                                <label for="message"
                                    class="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                    Message *
                                </label>
                                <textarea v-model="message" id="message" name="message" rows="5"
                                    placeholder="Tell me more about your project goals or requirements..."
                                    class="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                                    required></textarea>
                            </div>

                            <button type="submit" :disabled="isSending"
                                class="w-full py-3.5 px-6 rounded-lg bg-teal-600 text-white font-bold text-sm tracking-wide hover:bg-teal-700 active:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-md flex items-center justify-center gap-2">
                                <svg v-if="isSending" class="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                <span>{{ isSending ? 'Sending Message...' : 'Send Message' }}</span>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<style scoped>
.container-xl {
    background-image: url('/assets/img/programmer-bg-2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-color: #f8fafc;
    padding: 4rem 0;
}
</style>