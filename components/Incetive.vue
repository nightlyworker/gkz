<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 1py-24 sm:px-6 lg:px-8">
      <div class="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
        <div class="mx-auto max-w-xl lg:max-w-none">
          <div class="text-center">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Human Design Zone</h2>
					
          </div>
          <div class="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
            <div v-for="incentive in incentives" :key="incentive.name" class="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div class="sm:flex-shrink-0">
                <div class="flow-root">
                  <img class="mx-auto w-16 h-16" :src="incentive.imageSrc" alt="" />
                </div>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 class="text-xl font-bold text-gray-900 hover:underline"><nuxt-link :to="incentive.href" :alt="incentive.name" :title="incentive.name">{{ incentive.name }}</nuxt-link></h3>
                <p class="mt-2 text-base text-slate-700">{{ incentive.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const incentives = [
  {
    name: 'Bodygraph',
		href: '/bodygraph',
    imageSrc: '/1.svg',
    description: "Creating a bodygraph marks the beginning of your Human Design journey by unveiling your energetic blueprint / design.",
  },
  {
    name: 'Guidance',
    imageSrc: '/2.svg',
		href: '/guides',
		// from our guides
    description: "Learning from our guides will provide you with a solid foundation and understanding of Human Design concepts, empowering your personal exploration and growth.",
  },
  {
    name: 'Encyclopedia',
		href: '/human-design-encyclopedia',
    imageSrc: '/3.svg',
    description:
      "Delve into the depths of Human Design by reading our Human Design encyclopedia, where you will discover intricate details and gain  profound insights that fuel personal evolution.",
  },
]
</script>