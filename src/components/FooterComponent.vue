<template>
  <footer class="m-0 overflow-x-hidden min-w-screen px-2 sm:px-8 lg:px-4 pb-9 pt-12 lg:pt-9">
    <div class="flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-between" aria-label="Footer">
        <div class="w-full ml-4 lg:ml-12">
            <ol role="list" class="flex items-center">
                <li v-for="page in pages" :key="page.name">
                    <div class="flex items-center">
                        <a :href="page.href" 
                           :target="page.href.startsWith('http') ? '_blank' : '_self'"
                           :rel="page.href.startsWith('http') ? 'noopener noreferrer' : ''"
                           class="text-xs md:text-sm transition-all duration-300 hover:text-[#A21A08] hover:underline decoration-1 underline-offset-4">{{ page.name }}</a>
                        <p class="mx-2">/</p>
                    </div>
                </li>
            </ol>
        </div>
        <div class="w-full mr-12">
            <ol role="list" class="ml-4 lg:ml-0 flex items-center justify-start lg:justify-end">
                <li v-for="media in medias" :key="media.name">
                    <div class="flex items-center">
                        <a :href="media.href" 
                           target="_blank"
                           rel="noopener noreferrer"
                           class="text-xs md:text-sm transition-all duration-300 hover:text-[#A21A08] hover:underline decoration-1 underline-offset-4">{{ media.name }}</a>
                        <p class="mx-2">/</p>
                    </div>
                </li>
            </ol>
        </div>
    </div>
    <small class="text-xs ml-4 lg:ml-12">© 2025 MANIFESTO SPACE. All rights reserved.</small>
  </footer>
</template>

<script setup>
const pages = [
    { name: 'HOME', href: '/' },
    { name: 'EXHIBITION', href: '/exhibitions' },
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'AACT', href: 'https://aact.community/' },
    { name: 'DONATE', href: 'https://pages.donately.com/asianartsandculturetrust/form/frm_0f49dac5877d' }
]
const medias = [
    { name: 'INSTAGRAM', href: 'https://www.instagram.com/aact.community/' },
    { name: 'FACEBOOK', href: 'https://www.facebook.com/aact.community/' },
    { name: 'LINKEDIN', href: 'https://www.linkedin.com/company/asian-arts-and-culture-trust/' },
    { name: 'EMAIL', href: 'mailto:aact.canada@gmail.com' },
]
</script>