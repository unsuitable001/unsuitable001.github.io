<template>
    <div class="w-screen mt-auto p-10">
        <p class="font-semibold text-2xl sm:text-3xl" align="center">in my briefcase</p>
        <div class="flex my-10 flex-wrap justify-around">
            <img class="h-10 w-10 mx-4 my-2" v-bind:src="`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${lang}/${lang}.png`" v-bind:alt="lang" v-for="lang in this.$frontmatter.langs">
        </div>
    </div>
</template>

<script>

export default {
    name: 'LearningBox',
}
</script>