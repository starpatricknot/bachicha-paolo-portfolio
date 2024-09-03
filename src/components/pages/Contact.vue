<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import emailjs from 'emailjs-com';

const fullname = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

const toast = useToast();

const sendMessage = async () => {
    try {
        // Replace with your EmailJS service ID, template ID, and user ID
        const serviceID = 'service_x6gbtq8';
        const templateID = 'template_bwv7ioj';
        const publicKey = '1mwOD-7uaBGiiaQ3x';

        const templateParams = {
            fullname: fullname.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        };

        await emailjs.send(serviceID, templateID, templateParams, publicKey);

        toast.success('Message Sent!');

        // Reset the form fields
        fullname.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
    } catch (error) {
        console.error(error);
        toast.error('Failed to send message!');
    }
};
</script>


<template>

    <section class="container-xl bg-neutral-100 py-14">
        <div
            class="max-w-5xl mx-8 px-4 my-3 sm:px-6 lg:px-8 lg:py-10 flex flex-col md:flex-row items-center xl:max-w-7xl xl:mx-auto gap-10">
            <!-- Text Section -->
            <div class="md:w-1/2 text-justify  md:text-left md:pr-0 mb-12 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-semibold text-dark-600 mb-2 drop-shadow pt-6">
                    Let's Chat.
                </h1>
                <h1 class="text-4xl md:text-5xl font-semibold text-dark-600 mb-4 drop-shadow">
                    Tell me about your project
                </h1>
                <p class="text-lg md:text-xl  text-dark-600 drop-shadow-sm mt-10">
                    Let's create something amazing together
                </p>
                <div class="mt-5 md:ms-2 md:w-2/3">
                    <div class="flex flex-row gap-5 bg-white p-4 rounded-xl drop-shadow-sm">
                        <div class="py-2 px-3 bg-gray-200 rounded-bl-2xl rounded-tl-2xl rounded-br-2xl">
                            <font-awesome-icon icon="fa-regular fa-envelope" class="size-6 text-dark-600 pt-1" />
                        </div>
                        <div class="font-bold">
                            <h1 class=" text-dark-600">Mail me at</h1>
                            <h1 class=" text-dark-500 -mt-1">bachicha.paolo@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact Me Form -->
            <div class="md:w-1/2 text-justify md:text-left md:pr-0 mb-12 md:mb-0 md:mx-20">
                <div class="bg-white px-10 pt-10 pb-14 rounded-2xl drop-shadow-md border">
                    <h1 class="text-xl md:text-3xl text-dark-600 font-bold">Send me a message 🚀</h1>
                    <form @submit.prevent="sendMessage" class="mt-8 grid grid-cols-6 gap-6">
                        <div class="col-span-6">
                            <label for="fullname" class="block text-sm font-medium text-gray-700"> Full Name </label>
                            <input v-model="fullname" type="text" id="fullname" name="fullname"
                                class="mt-1 w-full p-2 rounded-md border-gray-200 bg-slate-50 text-sm text-gray-700 shadow-sm border"
                                required />
                        </div>
                        <div class="col-span-6">
                            <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
                            <input v-model="email" type="email" id="email" name="email"
                                class="mt-1 w-full p-2 rounded-md border-gray-200 bg-slate-50 text-sm text-gray-700 shadow-sm border"
                                required />
                        </div>
                        <div class="col-span-6">
                            <label for="subject" class="block text-sm font-medium text-gray-700"> Subject </label>
                            <input v-model="subject" type="text" id="subject" name="subject"
                                class="mt-1 w-full p-2 rounded-md border-gray-200 bg-slate-50 text-sm text-gray-700 shadow-sm border"
                                required />
                        </div>
                        <div class="col-span-6">
                            <label for="message" class="block text-sm font-bold text-gray-700">
                                Tell me more about your project *
                            </label>
                            <textarea v-model="message" id="message" name="message" rows="5"
                                class="mt-1 w-full p-2 rounded-md border-gray-200 bg-slate-50 text-sm text-gray-700 shadow-sm border resize-none"
                                required></textarea>
                        </div>
                        <div class="col-span-6 flex justify-center items-center">
                            <button type="submit"
                                class="inline-block shrink-0 rounded-md border border-dark-400 bg-slate-900 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-dark-600 focus:outline-none focus:ring active:text-blue-500">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>


<style>
.container-xl {
    background-image: url('/assets/img/programmer-bg-2.jpg');
    /* Replace with your texture image path */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    /* Keeps background fixed during scroll */
    padding: 4rem 0;
    /* Ensure padding fits the new background */
}
</style>
