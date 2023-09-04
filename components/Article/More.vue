<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div class="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Explore more Human Design by theme</h2>
        <nuxt-link to="/human-design-encyclopedia" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Human Design Encyclopedia 
          <span aria-hidden="true"> &rarr;</span>
        </nuxt-link>
      </div>

      <div class="mt-4 flow-root">
        <div class="-my-2">
          <div class="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div class="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              <a v-for="category in categories" :key="category.name" :href="category.href" class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img :src="category.imageSrc" loading="lazy" alt="" class="h-full w-full object-cover object-center" />
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-300 opacity-50" />
                <span class="relative mt-auto text-center font-bold text-gray-900 font-display">{{ category.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 px-4 sm:hidden">
        <nuxt-link to="/human-design-encyclopedia" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Human Design Encyclopedia
          <span aria-hidden="true"> &rarr;</span>
				</nuxt-link>
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
    name: 'Personal Growth & Self-Development',
    href: '/guides/personal-growth-self-development',
    imageSrc: '/hp-themes/5.svg',
  },
	
	{
    name: 'Relationships & Partnerships',
    href: '/guides/human-design-relationships',
    imageSrc: '/hp-themes/7.svg',
  },
	{ name: 'Career & Purpose', href: '/guides/career-purpose', imageSrc: '/hp-themes/16.svg' },
  {
    name: 'Finances & Abundance',
    href: '/guides/finances-abundance',
    imageSrc: '/hp-themes/9.svg',
  },
	
  {
    name: 'Health & Well-being',
    href: '#',
    imageSrc: '/hp-themes/6.svg',
  },
	
  
  
]
</script>