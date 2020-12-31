<template>
    <div class="max-w-6xl mx-auto flex sm:justify-center flex-col sm:flex-row leading-normal mt-24 sm:mt-32 mb-16 sm:mb-24">
        <div class="flex flex-col flex-none sm:flex-1 items-center text-xl">
            <img class="object-contain md:object-scale-down h-24 w-24 pb-2" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">
            <div>
                <Content slot-key="intro" class="container py-4 pb-8 my-6" />
                <LearningBox />
            </div>
        </div>
        <div class="flex flex-col flex-none sm:flex-1 items-center">
            <img class="rounded-lg shadow-2xl h-48 w-48 md:h-72 md:w-72" src="https://github.com/unsuitable001.png?size=400">
        </div>

        <!-- <Content/> -->
    </div>
</template>

<script>

import LearningBox from 'LearningBox.vue';

export default {
    name: 'IntroBox',
    components: {
        LearningBox,
    }
}
</script>