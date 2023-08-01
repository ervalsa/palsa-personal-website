<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';

const mobileMenuOpen = ref(false)

</script>

<template>
    <header>
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <RouterLink to="/">
                <h1 class="text-white font-poppins font-bold text-lg">PALSA</h1>
            </RouterLink>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-4">
                <RouterLink to="/" class="text-white font-poppins text-base px-4 py-2 hover:bg-smooth-grape rounded-full transition ease-in-out delay-75" active-class="bg-smooth-grape border border-1 border-gray-white">Home</RouterLink>
                <!-- <RouterLink to="/about" class="text-white font-poppins text-base px-4 py-2 hover:bg-smooth-grape rounded-full transition ease-in-out delay-75" active-class="bg-smooth-grape border border-1 border-gray-white">About</RouterLink>
                <RouterLink to="/projects" class="text-white font-poppins text-base px-4 py-2 hover:bg-smooth-grape rounded-full transition ease-in-out delay-75" active-class="bg-smooth-grape border border-1 border-gray-white">Projects</RouterLink>
                <RouterLink to="/articles" class="text-white font-poppins text-base px-4 py-2 hover:bg-smooth-grape rounded-full transition ease-in-out delay-75" active-class="bg-smooth-grape border border-1 border-gray-white">Articles</RouterLink> -->
            </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <RouterLink to="/">
                        <h1 class="text-white font-poppins font-bold text-lg">PALSA</h1>
                    </RouterLink>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root h-full">
                    <div class="-my-6">
                        <div class="space-y-2 py-6 flex flex-col gap-y-4 items-center">
                            <RouterLink to="/" class="text-white w-fit font-poppins text-base px-4 py-2 rounded-full hover:bg-smooth-grape transition ease-in-out delay-75" active-class="bg-smooth-grape border border-1 border-gray-white">Home</RouterLink>
                            <!-- <RouterLink to="/about" class="text-white w-fit font-poppins text-base px-4 py-2 rounded-full hover:bg-smooth-grape transition ease-in-out delay-75" active-class="bg-smooth-grape border border-1 border-gray-white">About</RouterLink>
                            <RouterLink to="/projects" class="text-white w-fit font-poppins text-base px-4 py-2 rounded-full hover:bg-smooth-grape transition ease-in-out delay-75" active-class="bg-smooth-grape border border-1 border-gray-white">Projects</RouterLink>
                            <RouterLink to="/articles" class="text-white w-fit font-poppins text-base px-4 py-2 rounded-full hover:bg-smooth-grape transition ease-in-out delay-75" active-class="bg-smooth-grape border border-1 border-gray-white">Articles</RouterLink> -->
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>