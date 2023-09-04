<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
     <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
			
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pt-5 pb-2">
                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab as="template" v-for="category in navigationMenu.categories" :key="category.name" v-slot="{ selected }">
                      <button :class="[selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent', 'font-display flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-semibold']">{{ category.name }}</button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel v-for="category in navigationMenu.categories" :key="category.name" class="space-y-10 px-4 pt-10 pb-8">
                    <div class="space-y-4">
                      <div v-for="(item, itemIdx) in category.featured" :key="itemIdx" class="group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md bg-gray-100">
                        <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center group-hover:opacity-75" />
                        <div class="flex flex-col justify-end">
                          <div class="bg-white bg-opacity-60 p-4 text-base sm:text-sm">
                            <a :href="item.href" class="font-medium text-gray-900">
                              <span class="absolute inset-0" aria-hidden="true" />
                              {{ item.name }}
                            </a>
														<!--
                            <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
														-->
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-for="(column, columnIdx) in category.sections" :key="columnIdx" class="space-y-10">
                      <div v-for="section in column" :key="section.name">
                        <p :id="`${category.id}-${section.id}-heading-mobile`" class="font-medium text-gray-900">{{ section.name }}</p>
                        <ul role="list" :aria-labelledby="`${category.id}-${section.id}-heading-mobile`" class="mt-6 flex flex-col space-y-6">
                          <li v-for="item in section.items" :key="item.name" class="flow-root">
                            <a :href="item.href" class="-m-2 block p-2 text-gray-500">{{ item.name }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                <div v-for="page in navigationMenu.pages" :key="page.name" class="flow-root">
                  <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name }}</a>
                </div>
              </div>
							<!--
              <div class="border-t border-gray-200 py-6 px-4">
                <a href="#" class="-m-2 flex items-center p-2">
                  <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
                  <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
                  <span class="sr-only">, change currency</span>
                </a>
              </div>
							-->
            </DialogPanel>
          </TransitionChild>
        </div>
     </Dialog> 
		
    </TransitionRoot>
		 <!-- Mobile menu end -->

		 <!-- Desktop menu --> 
    <header class="relative 1bg-white z-20">
			<!-- martin: org: mx-auto max-w-7xl px-4 sm:px-6 lg:px-8-->
			<!-- chagneg px-4 to px-0-->
      <nav aria-label="Top" class="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
        <!-- border-b border-gray-200 -->
				<div class="1border-b border-gray-200 rounded-b-2xl bg-zinc-100 px-4 md:px-8 shadow-md">
          <div class="flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center lg:hidden">
              <button type="button" class="-ml-2 rounded-md p-2 text-gray-400" @click="open = true">
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>

              <a @click.prevent="isSearchModalOpen = !isSearchModalOpen" href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
								

              </a>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:block lg:flex-1 lg:self-stretch">
              <div class="flex h-full space-x-8">
								
                <Popover v-for="category in navigationMenu.categories" :key="category.name" class="flex" v-slot="{ open }">
                  <div class="relative flex">
                    <PopoverButton :class="[open ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out']">
                      {{ category.name }}
                      <span :class="[open ? 'bg-indigo-600' : '', 'absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform']" aria-hidden="true" />
                    </PopoverButton>
                  </div>

                  <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <!-- martin org: absolute inset-x-0 top-full-->
										<PopoverPanel class="absolute inset-x-0 top-full mt-8">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

											<!--- color of sliding panel: default white -->
                      <div class="relative bg-zinc-50">
                        <div class="mx-auto max-w-7xl px-8">
                          <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                            <div class="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                              <div v-for="(item, itemIdx) in category.featured" :key="item.name" :class="[itemIdx === 0 ? 'col-span-2 aspect-w-2' : '', 'group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden']">
                                <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center group-hover:opacity-75" />
                                <div class="flex flex-col justify-end">
                                  <div class="bg-white bg-opacity-60 p-4 text-sm">
                                    <a :href="item.href" class="font-bold text-gray-900">
                                      <span class="absolute inset-0 font-display" aria-hidden="true" />
                                      {{ item.name }}
                                    </a>
                                    <!-- <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">xxShopd now</p> -->
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="grid grid-cols-3 gap-y-10 gap-x-8 text-sm text-gray-500">
                              <div v-for="(column, columnIdx) in category.sections" :key="columnIdx" class="space-y-10">
                                <div v-for="section in column" :key="section.name">
                                  <p :id="`${category.id}-${section.id}-heading`" class="font-medium text-gray-900">{{ section.name }}</p>
                                  <ul role="list" :aria-labelledby="`${category.id}-${section.id}-heading`" class="mt-4 space-y-4">
                                    <li v-for="item in section.items" :key="item.name" class="flex">
                                      <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <a v-for="page in navigationMenu.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
              </div>
            </PopoverGroup>

            <!-- Logo -->
            <nuxt-link to="/" class="flex">
              <span class="sr-only">Human Design Zone</span>
              <img class="h-12 w-auto" src="/hd1.svg" alt="" />
            </nuxt-link>

            <div class="flex flex-1 items-center justify-end">
							<!--
              <a href="#" class="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
                <img src="https://tailwindui.com/img/flags/flag-united-states.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
                <span class="ml-3 block text-sm font-medium">USD</span>
                <span class="sr-only">, change currency</span>
              </a>
							-->
							<!-- <nuxt-link to="/pricing" class="mr-6 flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Pricing</nuxt-link> -->
							<!--
							<a href="/encyclopedia" class="hidden md:inline-flex group items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900">CTA button</a>
							-->
							<!--
							<a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="ml-6 flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
              -->
							<!-- Search -->
              <a @click.prevent="isSearchModalOpen = !isSearchModalOpen" href="#" class="ml-6 hidden p-2 text-gray-700 hover:text-gray-900 lg:block">
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
								
              </a>
							
              <!-- Account -->
              <a href="#" class="p-2 text-gray-700 hover:text-gray-900 lg:ml-4">
                <span class="sr-only">Account</span>
                <UserIcon class="h-6 w-6" aria-hidden="true" />
              </a>

              <!-- Cart -->
              <!--
							<div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
							-->
            </div>
          </div>
        </div>
      </nav>
    </header>
<!-- search start -->
<ClientOnly>
<LazyUModal
    v-model="isSearchModalOpen"
    :ui="{
      padding: 'sm:p-4',
      rounded: 'sm:rounded-lg',
      width: 'sm:max-w-3xl',
      height: 'h-screen sm:h-[28rem]'
    }"
  >
	<!-- fuseOptions: { ignoreLocation: true, includeMatches: true, threshold: 0, keys: ['title', 'description', 'children.children.value', 'children.children.children.value'] }, -->
	<!-- <DelayHydration> -->
	<LazyUCommandPalette			
      ref="commandPaletteRef"
      :groups="groups"
      command-attribute="title"
      :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'ghost', size: 'sm', class: '-mr-1.5' }"
      :ui="{ input: { height: 'h-16 sm:h-12', icon: { size: 'h-5 w-5', padding: 'pl-11' } } }"
      :fuse="{
        fuseOptions: { ignoreLocation: true, includeMatches: true, threshold: 0, keys: ['title', 'description'] },
        resultLimit: 10
      }"
      @update:model-value="onSelect"
      @close="isSearchModalOpen = false"
    />
	<!-- </DelayHydration> -->
	</LazyUModal>
</ClientOnly>
<!-- search stop -->


  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline'
const isSearchModalOpen = ref(false)
const router = useRouter()
// make fuse index from docs
// https://github.com/nuxtlabs/ui/blob/dev/docs/components/docs/DocsSearch.vue


// make menu on hover
// https://github.com/tailwindlabs/headlessui/discussions/425
// mouseenter,levae,focus,blur

defineShortcuts({
  '/': () => isSearchModalOpen.value=!isSearchModalOpen.value
})

// search start
// only works in document driven, homepage is not documenet drien
// const {navigation} = useContent()
const commandPaletteRef = ref() //ref<HTMLElement & { query: Ref<string>, results: { item: Command }[] }>()
// fetch navigation outside of document driven, https://content.nuxtjs.org/api/composables/fetch-content-navigation
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const { data: files } = await useLazyAsyncData('search', () => queryContent().where({ _type: 'markdown' }).find(), { default: () => [] })
// console.log('files', files)
// console.log(navigation.value)


const defaultGroups = computed(() => navigation.value.map(item => ({
  key: item._path,
  label: item.title,
  commands: files.value.filter(file => file._path.startsWith(item._path)).map(file => ({
    id: file._id,
    title: file.navigation?.title || file.title,
    to: file._path,
    suffix: file.description,
    icon: file.icon
  }))
})))

const queryGroups = computed(() => navigation.value.map(item => ({
  key: item._path,
  label: item.title,
  commands: files.value.filter(file => file._path.startsWith(item._path)).flatMap((file) => {
    return [{
      id: file._id,
      title: file.navigation?.title || file.title,
      to: file._path,
      description: file.description,
      icon: file.icon
    },
    // @ts-ignore
    ...Object.entries(groupByHeading(file.body.children)).map(([hash, { title, children }]) => ({
      id: `${file._path}${hash}`,
      title,
      prefix: `${file.navigation?.title || file.title} ->`,
      prefixClass: 'text-gray-700 dark:text-gray-200',
      to: `${file._path}${hash}`,
      children: concatChildren(children),
      icon: file.icon
    }))]
  })
})))

const groups = computed(() => commandPaletteRef.value?.query ? queryGroups.value : defaultGroups.value)
// Methods

function remapChildren (children) {
  return children?.map((grandChild) => {
    if (['code-inline', 'em', 'a', 'strong'].includes(grandChild.tag)) {
      return { type: 'text', value: grandChild.children.find(child => child.type === 'text')?.value || '' }
    }

    return grandChild
  })
}

function concatChildren (children) {
  return children.map((child) => {
    if (['alert'].includes(child.tag)) {
      child.children = concatChildren(child.children)
    }
    if (child.tag === 'p') {
      child.children = remapChildren(child.children)

      child.children = child.children?.reduce((acc, grandChild) => {
        if (grandChild.type === 'text') {
          if (acc.length && acc[acc.length - 1].type === 'text') {
            acc[acc.length - 1].value += grandChild.value
          } else {
            acc.push(grandChild)
          }
        } else {
          acc.push(grandChild)
        }
        return acc
      }, [])
    }
    if (['style'].includes(child.tag)) {
      return null
    }

    return child
  })
}

function groupByHeading (children) {
  const groups = {} // grouped by path
  let hash = '' // file.page with potential `#anchor` concat
  let title = ''
  for (const node of children) {
    // if heading found, udpate current path
    if (['h2', 'h3'].includes(node.tag)) {
      // find heading text value
      title = node.children?.find(child => child.type === 'text')?.value
      if (title) {
        hash = `#${node.props.id}`
      }
    }
    // push to existing/new group based on path
    if (groups[hash]) {
      groups[hash].children.push(node)
    } else {
      groups[hash] = { children: [node], title }
    }
  }
  return groups
}

function onSelect (option) {
  isSearchModalOpen.value = false

  if (option.click) {
    option.click()
  } else if (option.to) {
    router.push(option.to)
  } else if (option.href) {
    window.open(option.href, '_blank')
  }
}
// search end

// fotos menu
// https://stock.adobe.com/search?creator_id=210804032&filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Binclude_stock_enterprise%5D=0&filters%5Bis_editorial%5D=0&filters%5Bfetch_excluded_assets%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&limit=100&search_page=3&search_type=pagination&get_facets=0&asset_id=481596064
// galih

const navigationMenu = {
  categories: [
    {
      id: 'women',
      name: 'Human Design',
      featured: [
        {
          name: 'Human Design Encyclopedia',
          href: '/human-design-encyclopedia',
          // imageSrc: 'https://images.unsplash.com/photo-1491841651911-c44c30c34548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
					imageSrc: '/menu/240_F_481592363_x4wk5bOTVxtvMJbcy0vNyQ2g2QEoOFek.jpg',
          imageAlt: 'Human Design Encyclopedia',
        },
				
        {
          name: 'Intro course to Human Design',
          href: '/crash-course',
          imageSrc: '/menu/240_F_481600971_kmsL9mRFRWAecGNF6eg2DNgSlaoKwQXf.jpg',
          imageAlt: '',
        },
				
        {
          name: 'Your journey',
          href: '/guides/your-journey',
          imageSrc: '/menu/240_F_481600800_IkwR4zwMXdAQRnlkCoLomRuYEw1uSPNY.jpg',
          imageAlt: '',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Human Design',
            items: [
              { name: 'Human Design Types', href: '/type' },
              { name: 'Human Design Profiles', href: '/profile' },
              { name: 'Human Design Lines', href: '/line' },
              { name: 'Human Design Centers', href: '/center' },
              { name: 'Human Design Channels', href: '/channel' },
              { name: 'Human Design Definitions', href: '/definition' },
							{ name: 'Human Design Gates', href: '/gate' },
              { name: 'Human Design Authorities', href: '/authority' },
            ],
          },
					/*
          {
            id: 'collection',
            name: '_',
            items: [
              { name: 'Human Design Gates', href: '/gate' },
              { name: 'Human Design Authorities', href: '/authority' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
              { name: 'Accessories', href: '#' },
            ],
          },
					*/
        ],
        [
          {
            id: 'clothing',
            name: 'Human Design by Theme',
            items: [
						
							{ name: 'The Ultimate Guide to Personal Growth and Self-Development Through Human Design', href: '/guides/personal-growth-self-development' },
              { name: 'Human Design Relationships - It Takes Two to Dance Tango', href: '/guides/human-design-relationships' },
              { name: 'Finding Your Career Path Through Human Design', href: '/guides/career-purpose' },
              { name: 'Finances & Abundance Through the Lens of Human Design', href: '/guides/finances-abundance' },
							/*
              { name: 'Bottoms', href: '#' },
              { name: 'Swimwear', href: '#' },
              { name: 'Underwear', href: '#' },
							*/
            ],
          },
					/*
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
					*/
        ],
        [
          {
            id: 'brands',
            name: 'Highlights',
            items: [
              { name: 'Unmasking Your Authenticity', href: '/guides/unmasking-your-authenticity' },
							/*
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
							*/
            ],
          },
        ],
      ],
    },
    {
      id: 'men',
      name: 'Guides',
      featured: [
        {
          name: 'Unmasking Your Authenticity',
          href: '/guides/unmasking-your-authenticity',
          imageSrc: '/menu/360_F_481601999_ERBgY0gCAy7whgLF4VeB9wbh00fH64wZ.jpg',
          imageAlt:
            '',
        },
        {
          name: 'You and the other (TBD)',
          href: '#',
          imageSrc: '/menu/1000_F_481597856_ezpXUovPHGmDYb4JZOJ4YbmaWb5fg9Q0.jpg',
          imageAlt: '',
        },
        {
          name: 'Parenting',
          href: '/guides/parenting',
          imageSrc: '/menu/1000_F_481596064_EwFD4aFDFDw6Q71KPwhMkrOUelRTPtb0.jpg',
          imageAlt:
            '',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Basics',
            items: [
              { name: 'Understanding Human Design and Mindfulness', href: '/guides/understanding-human-design-and-mindfulness' },
              { name: 'The Impact of Human Design on Society', href: '/guides/impact-of-human-design-on-society' },
              { name: 'Essential Oils and Human Design', href: '/guides/essential-oils-and-human-design' },
              { name: 'Reading the Bodygraph', href: '/guides/navigating-bodygraph' },
            ],
          },
					/*
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
            ],
          },
					*/
        ],
					
        [
					/*
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Hoodies', href: '#' },
              { name: 'Swimsuits', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
					*/
        ],
        [
					/*
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
					*/
        ],
				
      ],
    },
  ],
  pages: [
    { name: 'Bodygraph', href: '/bodygraph' },
    //{ name: 'Ask Amauta', href: '#' },
		//{ name: 'Reading', href: '#' },
  ],
}

const open = ref(false)
</script>