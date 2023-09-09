<template>

<!-- body -->
<main>
	<!-- hero -->
	<section class="py-16 sm:py-20">
		<div class="mx-auto lg:px-8 lg:max-w-7xl px-4 sm:px-6 max-w-2xl">
			<div class="flex flex-col gap-16">
				<div class="flex flex-col items-start gap-8 sm:gap-10">
					<div class="flex flex-col gap-4 sm:gap-6 items-start max-w-xl">
						<h1 class="font- uppercase font-semibold tracking-tight lg:text-6xl sm:text-5xl text-4xl">Gene Keys Zone</h1>
						<p class="dark:text-primary-200/70 text-primary-950/70 text-lg sm:text-xl">Gene Keys: The Ultimate Guide to Self-Discovery and Transformation</p>
					</div><a
						class="font-display items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base bg-black border border-transparent dark:bg-primary-400 dark:focus-visible:outline-primary-400 dark:hover:bg-primary-300 dark:text-primary-950 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-medium hover:bg-primary-700 justify-center px-5 py-3 rounded-full text-white transition"
						href="#">Get started</a>
				</div><img alt="Hero picture" class="mx-auto h-2/3 w-2/3 grayscale rounded-3xl" src="https://genekeysdiary.files.wordpress.com/2014/08/gene-key-profile-template-version-2.jpg?w=1194" height="640" width="1280">
			</div>
		</div>
	</section>
	<!-- hero end-->
	<Deck/>
	<!-- benefits -->
	<section class="py-16 sm:py-20">
		<div class="mx-auto lg:px-8 lg:max-w-7xl px-4 sm:px-6 max-w-2xl">
			<div class="flex flex-col gap-12 sm:gap-16">
				<h2 class="font-medium tracking-tight sm:text-4xl text-3xl uppercase">Gene Keys</h2>
				<div class="grid lg:grid-cols-3 gap-8">
					<div class="flex flex-col gap-12 bg-zinc-100 dark:bg-primary-400/10 px-6 py-8 rounded-3xl">
						<p class="text-sm">01</p>
						<div class="flex flex-col gap-4">
							<h3 class="font-semibold text-xl">Embrace Your Shadows, Discover Your Gifts</h3>
							<p class="text-base dark:text-primary-200/70 text-gray-700 sm:text-lg">We all have both light and dark aspects within us. Gene Keys helps you understand your unique set of 'shadows,' turning them into stepping stones that lead to your innate 'gifts.' Your personal Gene Keys profile acts as a dynamic mirror—reflecting both your challenges and your potential back at you, empowering you to transform from the inside out.</p>
						</div>
					</div>
					<div class="flex flex-col gap-12 bg-zinc-100 dark:bg-primary-400/10 px-6 py-8 rounded-3xl">
						<p class="text-sm">02</p>
						<div class="flex flex-col gap-4">
							<h3 class="font-semibold text-xl">Navigate Your Life with Clarity and Wisdom</h3>
							<p class="text-base dark:text-primary-200/70 text-gray-700 sm:text-lg">Life often feels like a complex labyrinth. Gene Keys provides you with a compass—a guide that reveals the most direct route to fulfilling your destiny. Whether you're at a crossroads in your career, seeking deeper relationships, or yearning for spiritual enlightenment, your Gene Keys profile offers actionable insights that bring clarity to the chaos.</p>
						</div>
					</div>
					<div class="flex flex-col gap-12 bg-zinc-100 dark:bg-primary-400/10 px-6 py-8 rounded-3xl">
						<p class="text-sm">03</p>
						<div class="flex flex-col gap-4">
							<h3 class="font-semibold text-xl">A Lifelong Journey of Self-Discovery</h3>
							<p class="text-base dark:text-primary-200/70 text-gray-700 sm:text-lg">The Gene Keys system isn't a one-time read; it's a lifelong exploration. As you grow and evolve, so does your understanding of your Gene Keys. This is more than a system; it's a living, breathing guidebook designed to evolve with you, continually offering fresh insights and wisdom.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- benefits end -->
	<!-- cta -->
	<section class="py-16 sm:py-20">
		<div class="mx-auto lg:px-8 lg:max-w-7xl px-4 sm:px-6 max-w-2xl text-center">
			<div
				class="flex flex-col items-center bg-zinc-100 dark:bg-primary-100/10 gap-8 px-5 py-16 rounded-3xl sm:gap-10">
				<div class="flex flex-col gap-4 sm:gap-6">
					<h2 class="font-semibold tracking-tight sm:text-4xl text-3xl mx-auto max-w-sm">Are You curious about inner Transformation ?</h2>
					<p class="dark:text-primary-200/70 text-primary-950/70 text-lg max-w-2xl mx-auto">Your journey towards a more fulfilling, enriched life begins here. Dive deep into your DNA to unlock the secrets that have been waiting for you since birth. Take the first step to transform your life with Gene Keys today.</p>
				</div><a
					class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base bg-black border border-transparent dark:bg-primary-400 dark:focus-visible:outline-primary-400 dark:hover:bg-primary-300 dark:text-primary-950 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-medium hover:bg-primary-700 justify-center px-5 py-3 rounded-full text-white transition"
					href="/gene-key">Get started</a>
			</div>
		</div>
	</section>
	<!-- cta end -->
</main>
<!-- body end -->
</template>
<script setup>
import HPPromo from '../components/HP-promo.vue';
import Incetive from '../components/Incetive.vue'
import Categorycard from '../components/Categorycards.vue'
import Press from '../components/Press.vue'
import Packed from '../components/Packed.vue';
// import HpList from '../components/Hp-List.vue';

/*
Learning from our guides will provide you with a solid foundation and understanding of Human Design concepts, empowering your personal exploration and growth.
*/

definePageMeta({
  documentDriven: false,
	title: 'Gene Keys Zone',
	description: 'Discover the wonders of Gene Keys with Gene Keys Zone. Personal portal to Wisdom, Empowerment and Inner Alignment'
})

useSchemaOrg([
	defineOrganization({
			name: 'Gene Keys Zone',
			logo: '/apple-icon-144x144.png',
		}),
])

</script>