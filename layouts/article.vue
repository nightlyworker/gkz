<template>
  <div class="min-h-screen bg-white">
    


    <div class="py-8 px-6 lg:px-8">

			<!-- b -->
			<!--
<div class="max-w-7xl text-xs mx-auto">
  <ul class="flex items-center">
    <li class="flex items-center">
      <a href="">
        Human Design Guides
      </a>
    </li>
    
    <li class="flex items-center overflow-hidden">
      <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
      <a href="" class="truncate">Essential Oils and Human Design</a>
    </li>
		<li class="flex items-center overflow-hidden">
      <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
      <a href="" class="truncate">Essential Oils and Human Design</a>
    </li>
    
  </ul>
</div>
-->

<!-- b end -->
			<!-- original -->
			<!-- < class="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">-->
			<!-- original end -->
      <div class="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
				<!-- martin original layout - don't touch hidden lg:col-span-3 lg:block xl:col-span-2 -->
				<!-- martin fixed for screenshot and laptop 1366 screen-->
        <div class="hidden lg:col-span-1 lg:block xl:col-span-2">
          <nav aria-label="Sidebar" class="sticky top-6 divide-y divide-gray-300 justify-end content-end flex">
            <!-- Your content -->
						
						<!--
						<pre>{{ page.body.toc.links }}</pre>
						<pre>{{ navigation }}</pre>
						<Sidebar/>
						
						-->
						<Sidebar :navigation="navigation"/>
          </nav>
        </div>
        <main class="lg:col-span-9 xl:col-span-6">


          <!-- Your content -->
					<div class="mx-auto max-w-prose">
						<Podcast :title="page.title"/>
					<article class="pt-8 prose prose-h1:text-center">
					<slot> </slot>
				</article>
				</div>
        </main>
        <aside class="hidden xl:col-span-4 xl:block">
          <div class="sticky top-6 space-y-4">
            <!-- Your content -->
						
						<h2
          class="uppercase text-gray-700 font-h2 text-lg 1tracking-wider"
        >
				<nuxt-link :to="page._path">{{ page.title }}</nuxt-link>
        </h2>
				<p class="italic text-gray-400">
					{{  page.description }}
				</p>

				<ul>
					<!-- <pre>{{ page.body.toc }}</pre> -->
				<li v-for="link of page.body.toc.links" :key="link.id" class="text-gray-400 text-base">
					{{ link.text }}
				</li>
			</ul>
						<!-- end -->
          </div>
        </aside>
      </div>
    </div>
		<!-- prev next -->
		
		<div class="grid gap-6 sm:grid-cols-2 px-8">
	<nuxt-link :to="prev._path" v-if="prev" class="bg-zinc-100 block px-5 py-8  not-prose rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 group">
		<div
			class="inline-flex items-center rounded-full p-1.5 bg-gray-50 dark:bg-gray-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-400/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary-500/50 dark:group-hover:ring-primary-400/50">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>


		</div>
		<p class="text-gray-900 dark:text-gray-50 font-bold text-[15px] mb-1 font-display">{{ prev.title }}</p>
		<p class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ prev.description }}
		</p>
	</nuxt-link>
	
	<nuxt-link :to="next._path" v-if="next"
		class="bg-zinc-100 block px-5 py-8  not-prose rounded-lg  hover:bg-gray-50 dark:hover:bg-gray-800/50 group text-right">
		<div
			class="inline-flex items-center rounded-full p-1.5 bg-gray-50 dark:bg-gray-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-400/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary-500/50 dark:group-hover:ring-primary-400/50">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

		</div>
		<p class="text-gray-900 dark:text-gray-50 font-bold font-display text-[15px] mb-1">{{next.title}}</p>
		<p class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ next.description }}</p>
	</nuxt-link></div>
<Topics></Topics>
<More></More>

<!--- notify me start -->
<div class="bg-white py-16 sm:py-24">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<!--- bg -gray-900 -->
		<!-- https://images.unsplash.com/photo-1483206048520-2321c1a5fb36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80 -->
	<!--	https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80 -->
    <div class="relative isolate overflow-hidden bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
      <h5 class="font-display mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Can't wait for what's coming? </h5>
      <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">Follow us on Instagram or check back in a few days. We're not ready yet, but we're working hard!</p>
			<a href="https://www.instagram.com/humandesign.zone/" class="max-w-2xl justify-center mx-auto text-center flex border-1 rounded-md  px-3.5 py-2.5 text-xl font-bold text-white shadow-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">instagram.com/humandesign.zone</a>
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>
<!-- notify me end-->



		<!-- prev next end -->
		<Readingbar class="max-w-7xl mx-auto rounded-2xl"/>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import More from '../components/Article/More.vue';
import Topics from '../components/Article/Topics.vue';
import Readingbar from '../components/Article/Readingbar.vue';
import Sidebar from '../components/Article/Sidebar.vue'
import Podcast from '../components/Article/Podcast.vue';
const {prev,next, page, navigation} = useContent()
// https://github.com/nuxtlabs/ui/blob/278a1ea93c23226c9131982759751e361104ff6f/docs/components/docs/DocsPrevNextCard.vue
// https://github.com/miracleonyenma/mark-III/blob/main/components/Toc.vue
// prev / next cards
//const article = await this.$content('51').fetch();

let intervalId = false
console.log(page.value.question)
const question = page
console.log(question)
useSchemaOrg([
	defineQuestion({
    name: page.value.question,
    acceptedAnswer: page.value.answer,
  }),
	defineArticle({
		headline: page.value.title,
		description: page.value.description,
		//image: '/articles/article-title-image.jpg',
		datePublished: new Date().toISOString(),
		dateModified: new Date().toISOString(),
		// attaching an author when the identity is an organization
		author: {
			name: 'Gene Keys Zone',
			url: 'https://genekeys.zone',
		}
	})
])


onMounted(() => {
	intervalId = setInterval(() => {
    // ...
		umTrackEvent('_reading', {title: page._path})
		// console.log(2)
  }, 10000) // 10s
})

onUnmounted(() => {
	clearInterval(intervalId)
})


</script>