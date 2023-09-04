<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div class="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Human Design by topic</h2>
       
      </div>

      <div class="mt-4 flow-root">
        <div class="-my-2">
          <div class="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div class="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-8 xl:gap-x-2 xl:space-x-0 xl:px-0">
              <nuxt-link v-for="category in categories" :key="category.name" :to="category.href" class="bg-zinc-100 relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto items-center">
                
								<!--
								<span aria-hidden="true" class="absolute inset-0">
                  <img :src="category.imageSrc" loading="lazy" alt="" class="h-full w-full object-cover object-center" />
                </span>
								-->
                <!-- <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-300 to-gray-600 opacity-50" /> -->
                <span class="my-auto relative mt-auto text-center font-bold text-gray-900 font-display text-xl">{{ category.name }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script setup>
/*
Career and Purpose
Relationships and Partnerships
Personal Growth and Self-Development
Health and Well-being
Finances and Abundance
Creativity and Self-Expression
Family and Home Life
Communication and Expression
Spirituality and Inner Connection
Education and Learning
*/

const categories = [
  {
    name: 'Types',
    href: '/type',
    imageSrc: '/hp-themes/5.svg',
  },
	
	{
    name: 'Profiles',
    href: '/profile',
    imageSrc: '/hp-themes/7.svg',
  },
	{
    name: 'Strategies',
    href: '/guides/human-design-strategy',
    imageSrc: '/hp-themes/7.svg',
  },
	
  {
    name: 'Definitions',
    href: '/definition',
    imageSrc: '/hp-themes/9.svg',
  },
	{
    name: 'Centers',
    href: '/center',
    imageSrc: '/hp-themes/9.svg',
  },
	{
    name: 'Channels',
    href: '/channel',
    imageSrc: '/hp-themes/6.svg',
  },
	/*
  {
    name: 'Lines',
    href: '/line',
    imageSrc: '/hp-themes/6.svg',
  },
	*/
	{
    name: 'Authorities',
    href: '/authority',
    imageSrc: '/hp-themes/6.svg',
  },
	{
    name: 'Gates',
    href: '/gate',
    imageSrc: '/hp-themes/6.svg',
  },
	
  
  
]
</script>