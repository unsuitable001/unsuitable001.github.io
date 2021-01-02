<template>
    <div class="w-screen mt-auto bg-blue-900 p-8">
        <p class="font-semibold text-2xl sm:text-3xl" align="center">some of my projects</p>
        <div class="flex flex-col sm:flex-row items-center justify-around pt-4 sm:pt-8">
            <a v-bind:href="project.pv" v-for="project in this.$frontmatter.featured" 
            class="transition duration-300 ease-in-out transform hover:shadow-2xl
             bg-gray-200 rounded-md cursor-pointer text-black my-4 w-80 sm:w-1/6"
             target="_blank" rel="noopener noreferrer" >
                <div>
                    <header class="font-semibold pt-2 px-2">{{project.name}}</header>
                    <p class="px-2">{{project.desc}}</p>
                    <div class="flex justify-between mt-2 p-1">
                        <span class="text-gray-500">{{project.lang}}</span>
                        <a v-bind:class="{ hidden: (project.repo == undefined) }" v-bind:href="project.repo" 
                        class="text-black hover:text-gray-700"
                        target="_blank" rel="noopener noreferrer" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-6 w-6 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>                            </svg>
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" v-bind:class="{ hidden: (project.repo != undefined) }" class="fill-current h-6 w-6 rounded-full" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </a>
        </div>
        <p class="mt-8 pt-10" align="center">
            <a href="https://github.com/unsuitable001?tab=repositories" 
            target="_blank" rel="noopener noreferrer"
            class="font-thin text-xl sm:text-lg border-gray-100 transition duration-500 ease-in-out transform hover:bg-blue-600 py-3 my-2 px-6 border-2 rounded-md">and more</a>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Projects',

}
</script>