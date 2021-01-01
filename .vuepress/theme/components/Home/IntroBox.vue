<template>
    <div class="max-w-6xl mx-auto flex sm:justify-center flex-col sm:flex-row leading-normal mt-24 sm:mt-32 mb-16 sm:mb-24">
        <div class="flex flex-col flex-none sm:flex-1 items-center text-xl pb-6">
            <img class="object-contain md:object-scale-down h-24 w-24 pb-2" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">
            <div>
                <Content slot-key="intro" class="container pb-8 my-6" />
                <div class="text-white font-semibold">
                    <a href="https://docs.google.com/document/d/1A4wzLlYHKrB_dgTqVzdFH2rquqC1DwvRGKy_ZsiaBsQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button class="transition duration-500 ease-in-out transform bg-blue-600 hover:bg-blue-700 py-3 my-2 px-6 border-2 border-blue-600 rounded-md">Get Resume</button>
                    </a>
                    <a href="mailto:unsuitable001@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button class="transition duration-500 ease-in-out transform border-green-600 border-2 hover:bg-green-700 py-3 my-2 px-6 rounded-md">Contact</button>
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-col flex-none sm:flex-1 items-center pb-6">
            <img class="rounded-lg shadow-2xl h-48 w-48 md:h-72 md:w-72" src="https://github.com/unsuitable001.png?size=400">
            <SocialBox class="flex mx-auto w-80 justify-evenly m-4 p-8" :s="8" />
        </div>

        <!-- <Content/> -->
    </div>
</template>

<script>

import SocialBox from '../SocialBox.vue';

export default {
    name: 'IntroBox',
    components: {
        SocialBox
    }
}
</script>