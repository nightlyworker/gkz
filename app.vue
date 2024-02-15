<template>
	<SeoKit />
			
		<Headergk/>
	
	<NuxtPage />
	

	<!--
	<Wip/>
	-->
	
	
	<Footergk/>
		
</template>
<script setup>
import Headergk from './components/Headergk.vue';
import Footergk from './components/Footergk.vue'
// import Wip from './components/Wip.vue' /// header

// overides preffered color scheme
// https://github.com/tailwindlabs/tailwindcss/discussions/2959
// has to be client only
// localstorage.set({theme:'light'})

/*
useSchemaOrg([
  defineWebPage({
    '@type': 'FAQPage',
  }),
  defineQuestion({
    name: 'How long is a piece of string?',
    acceptedAnswer: 'The length of a piece of string is the number of characters in the string.',
  }),
  defineQuestion({
    name: 'How big is a giraffe?',
    acceptedAnswer: 'A giraffe is 12 feet tall',
  }),
])
*/
</script>