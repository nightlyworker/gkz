<template>

<!-- hero with form -->
<div class="bg-white pb-8 sm:pb-12 lg:pb-12 1max-w-7xl mx-auto">
<!-- a -->
<section class="pt-24 pb-32 bg-white">
    <div class="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
        <div class="flex flex-col lg:flex-row">

            <!-- Left Content -->
            <div class="w-full lg:w-1/2 lg:pr-10">
                <div class="relative max-w-lg mx-auto leading-6 text-center text-gray-700 border-gray-200 lg:text-left">
									<h1 class="mx-auto max-w-4xl font-display text-5xl 1font-medium tracking-tight text-slate-900 sm:text-7xl  font-bold">
			<!-- --> <span class="relative whitespace-nowrap text-indigo-700">
				
				<svg aria-hidden="true" viewBox="0 0 418 42"
					class="absolute left-0 top-2/3 h-[0.58em] w-full fill-indigo-300/70" preserveAspectRatio="none">
					<path
						d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
					</path>
				</svg>
			
			
				<span class="relative">Bodygraph</span></span></h1>
                    <p class="mx-auto mt-12 max-w-2xl text-lg tracking-tight text-slate-700 italic">
											The bodygraph, also known as the Human Design chart
                    </p>
										
										<p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">Take the first step on your transformative Human Design journey by creating your own Bodygraph - your unique energetic blueprint. Experience a deep understanding and guidance as you explore your design. <br/><br/> Start the journey of self-discovery and alignment with your true nature. Create your BodyGraph now and unlock the keys to a more authentic, purposeful, and fulfilling life.</p>
		<div class="mt-10 flex justify-center gap-x-6">
				<button @click="isModalOpen=true"
				class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
				>Get Started</button><button @click="isModalOpen=true"
				class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
				href="https://www.youtube.com/watch?v=RhlQvbvMg-0"><svg aria-hidden="true"
					class="h-3 w-3 flex-none fill-indigo-600 group-active:fill-current">
					<path
						d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z">
					</path>
				</svg><span class="ml-3">See example</span></button></div>
				<!--s-->
                    
                    
                </div>
            </div>

            <!-- Right Image -->
            <div class="relative w-full mt-20 lg:w-1/2 lg:mt-0">
							
                <img src="/body3.png" class="1shadow-lg relative z-10 p-0 mt-10 transform 1shadow-2xl rounded-2xl lg:scale-110">

                <div class="absolute top-0 right-0 w-full h-full mt-4 -mr-5 transform scale-125 rotate-45">
                    <svg class="absolute top-0 w-full h-full transform fill-current lg:scale-x-150 text-purple-50 hidden" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.5,-76.5C55.9,-68.2,65.2,-55.6,71.9,-42.1C78.5,-28.6,82.7,-14.3,81.3,-0.8C79.8,12.7,72.8,25.3,64.7,36.3C56.5,47.2,47.2,56.3,36.2,63.3C25.2,70.2,12.6,75,-1.1,76.9C-14.8,78.9,-29.7,78,-43.7,72.8C-57.7,67.6,-70.9,58.1,-79.3,45.2C-87.7,32.4,-91.2,16.2,-90.7,0.3C-90.3,-15.7,-85.9,-31.4,-76.4,-42.3C-66.9,-53.1,-52.3,-59.2,-38.7,-66.9C-25.1,-74.5,-12.6,-83.7,1.5,-86.3C15.6,-88.8,31.1,-84.8,43.5,-76.5Z" transform="translate(100 100)"></path>
                    </svg>
                </div>
            </div>

        </div>
    </div>
</section>
<!-- b -->
<!-- form -->
<!--
<section>
	<div class="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
	<h3>Form</h3>
	</div>
</section>
-->
<!-- form end -->
<!-- explanation -->
<section class="flex">
	<div class="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16 items-center justify-center">
	
	<article class="prose prose-h1:text-center prose-h2:text-center">
		<h2>Your Bodygraph</h2>
		<!--
	<p>
					The bodygraph, also known as the Human Design chart, is calculated using two sets of data: the Personality calculation and the Design calculation. The Personality calculation is based on the moment of birth, while the Design calculation is based on a time approximately 88 days (or precisely 88 degrees of the sun) prior to the actual birth. These calculations take into account the date, place, and exact time of birth. The resulting chart consists of a triangle called the body graph, which visually represents the individual's unique energy configuration. The body graph includes nine centers, each responsible for carrying and managing a specific frequency of energy related to different themes in our lives. The chart also includes numbers and planetary symbols that indicate the positions of the planets and the hexagrams they occupy at the time of birth. The black numbers in the chart represent the conscious aspect, while the red numbers represent the unconscious aspect. By combining the conscious and unconscious neutrino streams, which have picked up the energies of the planets, the bodygraph provides valuable information about an individual's best strategy to navigate life, how they function, learn, and use their energy wisely, their purpose, what drives them, and their spiritual path. It is important to note that each person's chart is unique and perfect in its own way, and all the puzzle pieces are needed for a complete understanding.

				 </p>
				 -->
				 <p>
					The bodygraph, or Human Design chart, is calculated using two sets of data: the natal or Personality calculation and the pre-natal or Design calculation. The natal calculation is based on the moment of birth, while the pre-natal calculation is based on a time approximately 88 days prior to birth. These calculations take into account the energies of the planets and the hexagrams they occupy at the time of birth. The bodygraph is a visual representation of this unique energy configuration, providing valuable information about a person's strategy, function, learning style, purpose, energy management, drives, and spiritual path. It also reveals strengths and vulnerabilities. Each piece of the chart offers a different perspective, creating a deep understanding of oneself. The bodygraph is a perfect reflection of an individual's operating system, and through Human Design, we can unlock the wealth of information it holds to support personal growth and transformation.
				 </p>
				</article>
	</div>
</section>
<!-- explanation -->

<!-- soon -->
<ClientOnly>
<UModal
    v-model="isModalOpen"
		
    :ui="{
      //padding: 'sm:p-4',
      //rounded: 'sm:rounded-lg',
			//container: 'bg-transparent p-16',
			//base: 'bg-red-500',
			//inner: 'bg-red-500',
      width: 'max-w-5xl', //sm:max-w-3xl
      height: 'my-0 md:h-full sm:h-[28rem]' //  sm:h-[28rem]
    }"
  >
	<!-- cta start -->
	<Tracker/>
	<div class="1my-10 mx-auto flex max-w-xl flex-col rounded-xl 1border bg-white py-10 px-4 text-center sm:px-10 lg:max-w-screen-lg lg:flex-row lg:text-left">
  <div class="mx-auto w-[15rem] max-w-full lg:mx-0 lg:w-[40rem]">
    <img class="h-full w-full object-contain rounded-2xl" src="/hdz-soon.jpg" alt="" />
  </div>
  <div class="lg:pl-10">
    <h1 class="mt-8 text-4xl font-bold text-black md:text-5xl md:leading-snug">
      Coming soon!<br class="hidden sm:block" />
      Stay updated
    </h1>
    <p class="mt-4 text-xl text-black">We're not there yet, but we're so close we can almost touch the rainbow! Don't miss out! Subscribe to our newsletter 💌 and be the first to know when the magic happens! XOXO</p>
    <div class="mt-8 flex flex-col rounded-md 1border bg-white sm:flex-row">
			<iframe src="https://embeds.beehiiv.com/48750872-fc97-424a-b613-ea984217cf08?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" scrolling="no" style="margin: 0; border-radius: 0px !important; background-color: transparent;"></iframe>
			<!--
      <input class="m-2 h-12 rounded-md px-4 text-gray-500 focus:outline-none focus:ring focus:ring-black sm:w-full" placeholder="Enter your email" type="email" name="email" />
      <button class="m-2 shrink-0 rounded-md bg-black px-8 py-3 font-medium text-white hover:bg-black focus:bg-black focus:outline-none">GET UPDATES</button>
			-->
    </div>
  </div>
</div>


	<!-- cta end-->
	</UModal>
</ClientOnly>
<!-- soon end -->

</div>
<!-- hero with form -->
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)


definePageMeta({
  documentDriven: false,
	title: 'Bodygraph - Free online Human Design chart',
	description: 'Create your personal Bodygraph - Human Design chart today and unveil the secrets to a more authentic and purposeful existence. Start your journey of self-discovery and align with your true nature for a fulfilling life.'
})

useSchemaOrg([
  defineWebPage({
    '@type': 'FAQPage',
  }),
  defineQuestion({
    name: 'What is a Bodygraph in Human Design ?',
    acceptedAnswer: 'Bodygraph in Human Design is your unique energetic blueprint. By understanding it, you can gain deep insights into your natural strengths, challenges, and life purpose. It iss a tool for self-discovery that can guide you to live a more authentic, fulfilling life.',
  }),
  defineQuestion({
    name: 'How can a Bodygraph impact my day-to-day decisions ?',
    acceptedAnswer: 'Your Bodygraph offers a personalized decision-making strategy based on your Authority. This can make you more confident and efficient in your decisions, leading to greater alignment with your true self and less resistance in life.',
  }),
	defineArticle({
		headline: 'Bodygraph - Free instant HD chart | Human Design Zone',
		description: 'Create your personal Bodygraph - Human Design chart today and unveil the secrets to a more authentic and purposeful existence. Start your journey of self-discovery and align with your true nature for a fulfilling life.',
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
// META
// Unlock your potential with your unique Human Design Bodygraph. 
// Start your journey of self-discovery and align with your true nature for a fulfilling life. 
// Create your personal Bodygraph - Human Design chart today and unveil the secrets to a more authentic and purposeful existence.



</script>
