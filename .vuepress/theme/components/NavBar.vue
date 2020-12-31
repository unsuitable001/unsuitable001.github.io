<template>
    <nav class="w-full pt-8">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
            <a href='/' class="no-underline">
                <ul class="flex items-center">
                    <img class="rounded-full h-8 w-8 bg-gray-900 block" src="https://github.com/unsuitable001.png?size=40">
                    <span class="px-2 font-bold text-grey-100">Soumyadip</span>
                </ul>
            </a>
            <ul class="block sm:hidden rounded-full h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current hover:text-green-400" 
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 
                10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                clip-rule="evenodd" />
                </svg>
            </ul>
            <ul class="hidden sm:flex">
                <a v-bind:key="NavItem.link" v-bind:href="NavItem.link" v-for="NavItem in NavItems" 
                    class="no-underline px-2 text-gray-300 hover:text-purple-400 sul-g-b cursor-pointer" 
                    v-bind:class="$route.path == NavItem.link ? 'text-green-500' : '' ">
                        {{ NavItem.text }}
                </a>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['NavItems'],
}
</script>
