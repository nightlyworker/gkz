<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl 1lg:mx-0">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 1sm:text-4xl">Human Design Encyclopedia</h1>
        <p class="mt-2 text-lg  text-gray-600">Master Human Design with our hand-crafted resources <br/> Learn the essentials to truly understand and transform your life</p>
				<p class="mt-2 text-sm  text-gray-600">Today, You are invited to Human Design Encyclopedia. Over the span of countless moon phases, we've immersed ourselves in streams of knowledge, gathered pearls of wisdom, held dialogues with sages, and navigated the boundless universe of research to provide you with the richest insights from every earthly realm and the vast expanse of the digital cosmos. The gift is given, but the choice to receive it is yours alone.</p>
				
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between bg-gray-100 rounded-2xl p-8">
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
            <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <nuxt-link :to="post.href">
                <span class="absolute inset-0" />
                {{ post.title }}
              </nuxt-link>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a :href="post.author.href">
                  <span class="absolute inset-0" />
                  {{ post.author.name }}  <span aria-hidden="true" class="font-semibold text-gray-900"> &rarr;</span>
                </a>
              </p>
            <!--  <p class="text-gray-600">{{ post.author.role }}</p> -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>


definePageMeta({
  documentDriven: false,
	title: 'Human Design Encyclopedia',
	description: 'Free online Human Design Encyclopedia. Master Human Design with our packed encyclopedia resources. Learn the essentials to truly understand and transform your life.'
})

const posts = [
  {
    id: 10,
    title: 'Human Design Guides',
    href: '/guides',
    description:
      'Unlock Your Potential with Human Design: Discover Your Authentic Blueprint for Success and Fulfillment. Get Started Today!',
    date: '27 articles',
    datetime: '2020-03-16',
    category: { title: 'Beginner', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner / Advanced',
      href: '/guides',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1666805690051-134cd145fd24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
		
  },
	{
    id: 10,
    title: 'Human Design Bodychart',
    href: '/bodygraph',
    description:
      "Explore Your Human Design Bodychart and Uncover the Blueprint of Your Life's Purpose. Embrace Self-Awareness and Empowerment. Learn more about Bodychart Analysis",
    date: '46 articles',
    datetime: '2020-03-16',
    category: { title: 'Beginner / Advanced', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner',
      href: '/bodygraph',
      imageUrl:
        'https://images.unsplash.com/photo-1548318281-7da3085ce691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
		
  },
	
	{
    id: 20,
    title: 'Human Design Energy Types',
    href: '/type',
    description:
      'Human Design identifies five energy types: Manifestors, Generators, Manifesting Generators, Projectors, and Reflectors, each with distinct strategies and decision-making approaches.',
    date: '7 articles',
    datetime: '2020-03-16',
    category: { title: 'Beginner', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner',
      href: '/type',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1674641194554-34c42fd3b2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGdlb21ldHJpYyUyMGFic3RyYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
		
  },
	{
    id: 30,
    title: 'Human Design Authority',
    href: '/authority',
    description:
      'Human Design authority types guide decision-making: Emotional, Sacral, Splenic, Ego-Manifested, Ego-Projected, Self-Projected, Lunar Cycle, and None. Each offers unique insights.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Beginner', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner / Advanced',
      href: '/authority',
      imageUrl:
        'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxnZW9tZXRyaWMlMjBhYnN0cmFjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
		
  },
	/*
	{
    id: 30,
    title: 'Human Design Strategy',
    href: '#',
    description:
      "Master Your Life's Strategy: Unleash the Power of Human Design. Align Your Actions with Your Authentic Blueprint for Success. Uncover Your Unique Strategy and Thrive in Every Area of Your Life!",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner / Advanced',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1578589318274-02854f68813e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxnZW9tZXRyaWMlMjBhYnN0cmFjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
		
  },
	*/
	{
    id: 30,
    title: 'Human Design Centers',
    href: '/center',
    description:
      " Explore the 9 Centers in Human Design and Unleash Your Inner Potential. Decode the Blueprint of Your Authenticity and Ignite Transformation in Every Aspect of Your Life. ",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Beginner', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner / Advanced',
      href: '/center',
      imageUrl:
        'https://images.unsplash.com/photo-1648294358557-80d5aeb2e396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
		
  },
	{
    id: 40,
    title: 'Human Design Gates',
    href: '/gate',
    description:
      "Human Design gates represent 64 unique energies in one's chart, influenced by the I Ching, guiding behavior and life decisions.",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Beginner', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner / Advanced',
      href: '/gate',
      imageUrl:
        'https://images.unsplash.com/photo-1648294358557-80d5aeb2e396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
		
  },
	{
    id: 50,
    title: 'Human Design Profiles',
    href: '/profile',
    description:
      "Dive Deep into the 12 Profiles. Human Design profiles describe life strategies and roles, offering unique perspectives on personality",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Beginner', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner / Advanced',
      href: '/profile',
      imageUrl:
        'https://images.unsplash.com/photo-1648294358557-80d5aeb2e396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
		},
		{
    id: 50,
    title: 'Human Design Definitions',
    href: '/definition',
    description:
      "Human Design definitions depict how energy flows between centers, revealing communication styles, decision-making processes, and potential challenges.",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Beginner', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner / Advanced',
      href: '/definition',
      imageUrl:
        'https://images.unsplash.com/photo-1648294358557-80d5aeb2e396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
  },
	{
    id: 60,
    title: 'Human Design Lines',
    href: '/line',
    description:
      "Human Design lines, numbered 1-6, influence profile expression, adding depth to gates, affecting behavior, perspective, and interaction nuances.",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Beginner', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner / Advanced',
      href: '/line',
      imageUrl:
        'https://images.unsplash.com/photo-1648294358557-80d5aeb2e396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
  },
	{
    id: 70,
    title: 'Human Design Channels',
    href: '/channel',
    description:
      " Explore the 36 Channels. Human Design channels connect two gates, forming fixed energy flows, defining specific characteristics, talents, and life themes within individuals.",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Beginner', href: '#' },
    author: {
      name: 'Explore',
      role: 'Beginner / Advanced',
      href: '/channel',
      imageUrl:
        'https://images.unsplash.com/photo-1648294358557-80d5aeb2e396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
  },
  // More posts...

	// Beginner
	// Intermediate
	//Advanced
]
</script>