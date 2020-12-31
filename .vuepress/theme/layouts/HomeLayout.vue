<template>
    <div>
        <!-- <h1 class="text-teal">Hey All </h1> -->
        <!-- <NavBar v-bind:NavItems="this.$site.themeConfig.nav"/> -->
        <IntroBox/>
    </div>
</template>

<script>

import IntroBox from '../components/Home/IntroBox.vue';

export default {
    name: 'HomeLayout',
    components: {
        IntroBox,
    },
}
</script>