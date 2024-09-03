<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import programming from '/assets/img/programming-photo-2.png';
import profileImg2 from '/assets/img/paolo-pic.jpg';

// Reactive data
const typeValue = ref('');
const typeStatus = ref(false);
const displayTextArray = ref(["PAOLO BACHICHA", "A WEB DEVELOPER", "A FREELANCER", "A DESIGNER"]);
const typingSpeed = 100;
const erasingSpeed = 100;
const newTextDelay = 2000;
const displayTextArrayIndex = ref(0);
const charIndex = ref(0);

// Methods
const typeText = () => {
    if (charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value += displayTextArray.value[displayTextArrayIndex.value].charAt(charIndex.value);
        charIndex.value += 1;
        setTimeout(typeText, typingSpeed);
    } else {
        typeStatus.value = false;
        setTimeout(eraseText, newTextDelay);
    }
};

const eraseText = () => {
    if (charIndex.value > 0) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value = displayTextArray.value[displayTextArrayIndex.value].substring(0, charIndex.value - 1);
        charIndex.value -= 1;
        setTimeout(eraseText, erasingSpeed);
    } else {
        typeStatus.value = false;
        displayTextArrayIndex.value += 1;
        if (displayTextArrayIndex.value >= displayTextArray.value.length) displayTextArrayIndex.value = 0;
        setTimeout(typeText, typingSpeed + 1000);
    }
};

// Initialize typing effect on mounted
onMounted(() => {
    setTimeout(typeText, newTextDelay + 200);
});
</script>


<template>
    <section class="container-xl bg-neutral-100 py-14">
        <div
            class="max-w-5xl mx-8 px-4 mt-10 sm:px-6 lg:px-8 lg:py-10 flex flex-col-reverse md:flex-row items-center xl:max-w-7xl xl:mx-auto">
            <!-- Text Section -->
            <div class="md:w-1/2 text-center md:text-left md:pr-0 mb-12 md:mb-0">
                <h1 class="text-lg md:text-2xl font-bold  text-dark-600 mb-4 drop-shadow">— HELLO <span
                        class="animate-pulse">👋🏻</span></h1>
                <h1 class="text-2xl md:text-4xl  text-dark-600 mb-4 drop-shadow typewriter">I’M
                    <span class="typed-text"> {{ typeValue }}</span>
                    <span class="blinking-cursor">|</span>
                    <span class="cursor">&nbsp;</span>
                </h1>
                <p class="text-base md:text-lg  text-dark-600 drop-shadow-lg">
                    I’m a web developer in training, eager to learn and grow. I’m dedicated to improving my skills and
                    delivering quality work and contribute effectively to a team.
                </p>

                <div class="sm:hidden md:w-1/2 flex justify-center items-center py-6">
                    <img class="sm:hidden h-auto w-9/12 object-center" :src="programming" alt="Paolo Bachicha" />
                </div>

                <RouterLink to="/about"
                    class="inline-block bg-red-600 text-white font-semibold my-5 py-2 px-4 rounded-md shadow-md hover:bg-red-700 transition-colors duration-300">
                    About Me
                </RouterLink>
            </div>
            <!-- Profile Image Section -->
            <div class="md:w-1/2 flex justify-center items-center">
                <img class="hidden md:block h-auto w-9/12 object-center" :src="programming" alt="Paolo Bachicha" />
            </div>
        </div>

        <div
            class="max-w-5xl mx-10 mt-48 px-4 sm:px-6 lg:px-8 lg:py-10 grid grid-cols-12 gap-4 xl:max-w-7xl xl:mx-auto">
            <!-- Column -->
            <div class="col-span-12 md:col-span-8">
                <h1 class="text-2xl md:text-4xl  text-dark-600 text-center xl:mb-10 drop-shadow-lg">A LITTLE BIT ABOUT <span
                        class="text-red-600">ME</span>
                </h1>
                <div class="sm:hidden md:w-1/2 flex justify-center items-center py-6">
                    <img class="sm:hidden h-auto w-7/12 object-center rounded-full shadow-lg" :src="profileImg2"
                        alt="Paolo Bachicha" />
                </div>

                <div class=" text-dark-600">
                    <p class="mb-5 text-base md:text-lg drop-shadow-lg">
                        I fell in love with web development, and I’m constantly learning and growing in the field.
                    </p>

                    <p class="mb-5 text-base md:text-lg drop-shadow-lg">
                        I have a good grasp of HTML, CSS, JavaScript, and PHP, and I'm always exploring new ways to
                        improve my skills.
                    </p>

                    <p class="mb-5 text-base md:text-lg drop-shadow-lg">
                        My interests include building responsive websites and enhancing user experiences.
                    </p>

                    <p class="mb-5 text-base md:text-lg drop-shadow-lg">
                        Whenever possible, I like to try things with Laravel, Bootstrap, and other modern web
                        technologies to create impactful projects.
                    </p>
                </div>



            </div>

            <!-- Column -->
            <div class="col-span-12 md:col-span-4">

                <div class="flex justify-center items-center my-5">
                    <img class="hidden md:block h-auto w-4/5 object-center rounded-full shadow-lg" :src="profileImg2"
                        alt="Paolo Bachicha" />
                </div>
            </div>
        </div>

        <div class="text-center my-20 drop-shadow-lg">
            <h1 class="text-4xl md:text-4xl  text-dark-600 text-center my-2">CHECK MY <span
                    class="text-red-700 font-medium">SOCIALS</span></h1>
            <p class="text-base mb-5 md:text-lg">Feel free to connect with me</p>

            <div class="flex justify-center gap-7 items-center">
                <a href="https://www.facebook.com/bachichapaoloo" target="_blank"
                    class=" bg-slate-900 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg lg:p-3"><font-awesome-icon
                        icon="fa-brands fa-facebook" size="xl" /></a>
                <a href="https://www.instagram.com/paoloo0o/" target="_blank"
                    class=" bg-slate-900 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg lg:p-3"><font-awesome-icon
                        icon="fa-brands fa-instagram" size="xl" /></a>
                <a href="https://www.linkedin.com/in/paolo-bachicha/" target="_blank"
                    class=" bg-slate-900 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg lg:p-3"><font-awesome-icon
                        icon="fa-brands fa-linkedin" size="xl" /></a>
                <a href="https://github.com/starpatricknot" target="_blank"
                    class=" bg-slate-900 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg lg:p-3"><font-awesome-icon
                        icon="fa-brands fa-github" size="xl" /></a>
            </div>
        </div>
    </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.typewriter {
    font-weight: normal;

    span.typed-text {
        color: #e43434;
    }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
    font-size: 2.5rem;
    color: #e43434;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
}

@keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-moz-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-webkit-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-ms-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

@-o-keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #2c3e50;
    }
}

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
