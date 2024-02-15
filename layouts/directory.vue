<template>
<!--	
	<div>
		Folder layout
		<article class="prose mx-auto text-center">
		<slot> </slot>
	</article>
		<ContentList path="/profile/" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>

</div>
-->

<div class="max-w-4xl mx-auto p-8 bg-white">
	<article class="prose 1prose-lg prose-h1:text-center mx-auto">
		<slot> </slot>
	</article>
    
<ul class="mt-6 max-w-md mx-auto">
	<ContentList :path="route.path" v-slot="{ list }">
      
			<li class="1pb-3 1sm:pb-4 bg-gray-100 rounded-2xl 1divide-y-4 px-4 1space-y-8 mb-4" v-for="article in list" :key="article._path">
				<nuxt-link v-if="((article._path != route.path))" :to="{path: article._path}">
      <div class="flex items-center space-x-4">
         <div class="flex-shrink-0 text-gray-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>
  </div>
         <div class="flex-1 items-center justify-center min-w-0 p-2">
					<div class="1flex-1 ">
            <h3 class="font-bold text-gray-900 truncate">
							{{ article.title }}
            </h3>
            <p class="text-sm text-gray-500 truncate">
							{{ article.description }}
						
            </p>
					</div>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
			
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
		
         </div>
      </div>
		</nuxt-link>
   </li>
    </ContentList>

</ul>
</div>

</template>
<script setup>
const route = useRoute()
const { page } = useContent()


useSchemaOrg([
	defineArticle({
		headline: page.title,
		description: page.description,
		//image: '/articles/article-title-image.jpg',
		datePublished: new Date().toISOString(),
		dateModified: new Date().toISOString(),
		// attaching an author when the identity is an organization
		author: {
			name: 'Human Design Zone',
			url: 'https://humandesign.zone',
		}
	})
])

defineOgImageComponent('Custom', {
  title: page.title,
  description: 'Gene Keys Zone',
  theme: '#ff0000',
})

/*
const { navigation } = useContent()
const {
  navBottomLink,
  navDirFromPath,
  navPageFromPath,
  navKeyFromPath
} = useContentHelpers()
*/
/*
useContentHead(false)
useSeoMeta({
  title: page.title //`${page.title} | Human Design Zone`,
})
*/


</script>