<template>
	<section>
		<div class="flex">
		<h2 class="mx-auto flex font-medium tracking-tight sm:text-4xl text-3xl uppercase py-16">Gene Keys Activation Deck</h2>
	</div>
	<div class="grid grid-cols-8 gap-4">
  <div class="bg-zinc-100 w-48 h-48 justify-center my-auto items-center content-center flex rounded-2xl hover:text-white hover:bg-black" v-for="(item,index) of deck" :key="index">
		<a :href="item._path" class="content-center 1flex" :title="item.title">
			<h2 class="text-5xl font-bold">{{ index+1 }}</h2><span class="text-sm">Gene Key</span>
		</a>
		</div>

		

	
</div>
</section>
</template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const nav = JSON.parse(JSON.stringify(navigation.value))

//console.log(nav)
const deck = ref([])
for (let item of nav) {
	//console.log(item._path)
	if (item._path === '/gene-key') {
		for (let iitem of item.children) {
			if (iitem.layout === 'article') {
				deck.value.push(iitem)
			}
			
		}
	} 
}
// const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())


</script>