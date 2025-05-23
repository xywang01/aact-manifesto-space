<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import NavDropdown from '@/components/NavDropdown.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import { team } from '@/data/team.js';
import { useScrollObserver } from '@/useScrollObserver.js'
import { ref, onMounted } from "vue"
import SmoothScroll from 'smooth-scroll'
/* eslint-disable no-unused-vars */
const navbar = ref(null);
const activeIndex = ref(-1);
const { startObserving } = useScrollObserver();
const contentOpacity = ref(0);

onMounted(() => {
    const aboutSection = document.getElementById("about");
    const teamSection = document.getElementById("team");
    startObserving(aboutSection, 0, onIntersection);
    startObserving(teamSection, 1, onIntersection);

    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        easing: 'easeInOutCubic',
    });

    // Add fade in effect
    setTimeout(() => {
        contentOpacity.value = 1;
    }, 300);
});

function onIntersection(entry, index) {
    if (entry.isIntersecting) {
        activeIndex.value = index;
        console.log(activeIndex.value)
    }
}
</script>
<template>
     <div class="min-h-screen bg-ivory max-h-full">
        <div class="sticky z-50 top-0 bg-ivory pt-4 sm:pt-6 lg:pt-4 px-6 sm:px-12 lg:px-16">
            <div class="flex justify-start lg:justify-center items-center lg:border-b lg:border-stone-400/50 pb-2 md:pb-4">
                <a href="/" class="logo-container relative group">
                    <img src="@/assets/manifesto-logo-black.svg" class="h-6 lg:h-8 opacity-90 lg:ml-4 transition-all duration-300 group-hover:opacity-0" alt="Website Dark Logo" />
                    <img src="@/assets/manifesto-logo-red.svg" class="h-6 lg:h-8 opacity-0 lg:ml-4 transition-all duration-300 absolute top-0 left-0 group-hover:opacity-100" alt="Website Hover Logo" />
                </a>
                <div class="absolute right-0 sm:right-7 lg:right-10 text-stone-600/80 hover:text-stone-800/50 z-40">
                    <NavDropdown />
                </div>
            </div>
            <div class="pt-3.5 hidden lg:flex lg:justify-start lg:items-center lg:border-b lg:border-stone-400/50 pb-6 lg:pb-3">
                <BreadCrumbs :main-page="true" />
                <span class="ml-3 text-sm text-stone-500/80">
                    About Us
                </span>
            </div>
            <!-- navigation -->
            <div class="lg:hidden">
                <p class="text-sm text-stone-500">
                    About Us
                </p>
            </div>
            <ul class="lg:hidden bg-ivory t-0 border-b border-stone-600 flex space-x-5 overflow-x-auto max-w-screen text-sm scrollbar-hide">
                <li><a href="#about" class="nav-item inline-block whitespace-nowrap text-stone-600" :class="{'font-bold text-stone-800': activeIndex == 0, 'text-stone-500': activeIndex != 0 }">Manifesto Space</a></li>
                <li><a href="#team" class="nav-item inline-block whitespace-nowrap" :class="{ 'font-bold text-stone-800': activeIndex == 1, 'text-stone-500': activeIndex != 1 }">Team</a></li>
            </ul>
        </div>
        <div class="flex flex-col items-center justify-center min-h-screen" 
             :style="{ opacity: contentOpacity, transition: 'opacity 300ms ease-out' }">
            <div id="about" class="min-h-full lg:max-h-[calc(100vh-36px)] col-span-1 pt-40 -mt-40 px-6 md:px-12 lg:px-16">
                <div class="flex flex-col mx-auto leading-6 text-left text-base pb-12 ">
                    <h1 class="my-6 lg:my-10 text-2xl lg:text-3xl lg:font-medium font-bold text-left">Manifesto Space</h1>
                    <p class="font-normal">
                        Manifesto Space is an online think tank that is dedicated to challenging the hegemony within the contemporary art world. Leveraging the digital space, we aim to provide an open platform to showcase diverse mediums of artwork, celebrate emerging artists, and initiate conversations that are often overlooked in the mainstream discourse. The digital format allows us to collaborate with artists, academics, and organizations to share artistic and scholarly works with creative freedom.
                    </p>
                    <p class="mt-6 font-normal">
                        Manifesto Space is affiliated with <a class="font-medium text-bitten/80 hover:text-bitten" href="https://www.aact.community/" target="_blank" rel="noopener noreferrer">Asian Arts and Culture Trust (AACT)</a>, an artist-centric volunteer run federal not-for-profit organization. AACT provides public programming to increase empathy, appreciation, and representation of Asian heritage, arts, and culture in Canada. AACT was founded in Toronto during the peak of the Anti-Asian hate crimes experienced by Asian Canadians during the COVID-19 pandemic. Led by artists, writers, designers, architects, and researchers, who believe in the power of art to bring people together to initiate dialogue and increase understanding. Through arts programming, we bring people together, foster understanding and empathy, and promote social justice and diversity in Canadian society.
                    </p>
                </div>
            </div>
            <div id="team" class="pt-28 -mt-28 lg:pt-0 lg:mt-0 px-6 md:px-12 lg:px-16 pb-32">
                <div class="mx-auto">
                    <div class="mx-auto lg:mx-0">
                        <h2 class="mb-4 lg:mb-10 text-2xl lg:text-3xl lg:font-medium font-bold text-left">Team</h2>
                    </div>
                    <ul role="list" class="mx-auto grid grid-cols-1 md:gap-x-12 lg:gap-x-16 gap-y-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <li v-for="member in team" :key="member.name">
                            <h3 class="mt-4 lg:mt-6 lg:text-2xl font-bold text-gray-900">{{ member.name }}</h3>
                            <p class="lg:leading-7 lg:mt-1 text-base text-gray-600">{{ member.role }}</p>
                            <p class="text-base mt-3 leading-6">{{ member.bio }}</p>
                            <div class="text-base mt-3 leading-6" v-html="member.social"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <FooterComponent class="text-stone-800/60 bg-ivory lg:border-t lg:border-stone-400/50" />
    </div>
</template>