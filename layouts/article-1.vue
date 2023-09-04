<template>
		<!-- breadcrumbs -->

<nav class="pb-4 flex mx-auto" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3 mx-auto">
    <li class="inline-flex items-center">
      <nuxt-link to="/" class="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        
        Human Design Zone
      </nuxt-link>
    </li>
    <li>
      <div class="flex items-center">
        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <nuxt-link to="/encyclopedia" class="ml-1 text-sm font-medium text-gray-400 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Encyclopedia</nuxt-link>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-400">Profiles</span>
      </div>
    </li>
		<li aria-current="page">
      <div class="flex items-center">
        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-400">5/1 Profile</span>
      </div>
    </li>
  </ol>
</nav>

			<!-- breadcrumbs end-->			
	  <div class="mt-16 px-6 lg:px-8">
      <p class="line-through">TBD: Breadcrumbs and go back button</p>
			<p class="line-through">TBD: PREV / NEXT</p>
			<p>TBD: You might be interested in</p>
			<p>TBD: In this category - scrorable submenu ?</p>
			<p>TBD: Table of content</p>
			<div class="mx-auto max-w-prose">	
			
				<article class="prose prose-h1:text-center">
					<slot> </slot>
				</article>
			<div>
<!-- prev -->
<div class="grid gap-6 sm:grid-cols-2">
	<nuxt-link :to="prev._path" class="bg-gray-100 block px-5 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 group">
		<div
			class="inline-flex items-center rounded-full p-1.5 bg-gray-50 dark:bg-gray-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-400/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary-500/50 dark:group-hover:ring-primary-400/50">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>


		</div>
		<p class="text-gray-900 dark:text-gray-50 font-medium text-[15px] mb-1">{{ prev.title }}</p>
		<p class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ prev.description }}
		</p>
	</nuxt-link>
	
	<nuxt-link :to="next._path"
		class="bg-gray-100 block px-5 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 group text-right">
		<div
			class="inline-flex items-center rounded-full p-1.5 bg-gray-50 dark:bg-gray-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-400/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary-500/50 dark:group-hover:ring-primary-400/50">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

		</div>
		<p class="text-gray-900 dark:text-gray-50 font-medium text-[15px] mb-1">{{next.title}}</p>
		<p class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ next.description }}</p>
	</nuxt-link></div>
<!--prev end-->		


			</div>
			</div>
			</div>
			<Bottombar/>
</template>
<script setup>
import Bottombar from '../components/Article/Bottombar.vue';
const {prev,next} = useContent()
// https://github.com/nuxtlabs/ui/blob/278a1ea93c23226c9131982759751e361104ff6f/docs/components/docs/DocsPrevNextCard.vue
// prev / next cards
</script>