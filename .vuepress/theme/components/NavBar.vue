<template>
    <nav class="w-full pt-8 px-6">
        <div v-bind:class="{'flex-col': isOpen}" class="max-w-6xl mx-auto flex sm:items-center justify-between">
            <a href='/' class="no-underline">
                <ul class="flex items-center">
                    <img class="rounded-full h-8 w-8 bg-gray-900 block" src="https://github.com/unsuitable001.png?size=40">
                    <span class="px-2 font-bold text-grey-100">Soumyadip</span>
                </ul>
            </a>
            <ul @click="toggleMobMenu" v-bind:class="{hidden: isOpen}" class="block sm:hidden rounded-full h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current hover:text-green-400" 
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 
                10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                clip-rule="evenodd" />
                </svg>
            </ul>
            <ul v-bind:class="{hidden: !isOpen, flex: isOpen}" class="sm:block flex-col my-3 sm:flex-row">
                <a v-bind:key="NavItem.link" v-bind:href="NavItem.link" v-for="NavItem in NavItems" 
                    class="no-underline py-2 px-2 text-gray-300 hover:text-purple-400 sul-g-b cursor-pointer" 
                    v-bind:class="$route.path == NavItem.link ? 'text-green-500' : '' ">
                        {{ NavItem.text }}
                </a>
                <a @click="toggleMobMenu" class="sm:hidden rounded-full h-10 w-10 no-underline py-4 px-2 text-red-300 sul-g-b cursor-pointer">
                    <svg  class="fill-current hover:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </a>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['NavItems'],
    data: function () { return {
        isOpen: false,
    }},
    methods: {
        toggleMobMenu: function () {
            this.isOpen = !this.isOpen
        }
    }
}
</script>
