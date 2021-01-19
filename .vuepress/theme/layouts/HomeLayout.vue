<template>
    <div>
        <IntroBox/>
        <Projects/>
        <LearningBox/>
        <Latests/>
        
    </div>
</template>

<script>

import IntroBox from '../components/Home/IntroBox.vue';
import Projects from '../components/Home/Projects.vue';
import LearningBox from '../components/Home/LearningBox.vue';
import Latests from '../components/Home/Latests.vue';

export default {
    name: 'HomeLayout',
    components: {
        IntroBox,
        Projects,
        LearningBox,
        Latests
    },
}
</script>