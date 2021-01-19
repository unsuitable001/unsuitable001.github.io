<template>
    <div class="w-screen pb-10 px-10">
        <p class="font-semibold text-2xl sm:text-3xl pb-10" align="center">latests from me</p>
        <iframe src="https://open.spotify.com/embed-podcast/show/0J5pVBznwRq6mAnvVRcAf2" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <div class="grid sm:grid-cols-2 mt-10">
            <div class="relative" style="padding-bottom: 56.25%">
                <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/videoseries?list=UUuNZt3eGVpmbuS6UB4xggoA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="sm:px-10">
                <div class="pt-6">
                    <p class="font-semibold text-xl sm:text-3xl pb-10" align="center">About Channel</p>
                    <Content slot-key="channel" class="container" />
                    <a href="https://www.youtube.com/channel/UCuNZt3eGVpmbuS6UB4xggoA?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                        <button class="transition duration-500 ease-in-out transform bg-red-600 hover:bg-red-700 py-3 my-2 px-6 border-2 border-red-600 rounded-md inline-flex items-center mt-4 sm:mt-10">
                            <svg class="fill-current text-white h-6 w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"/></svg>
                            <span class="pl-2">Visit Channel</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Latests',

}
</script>