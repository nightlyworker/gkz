<template>
<header :class="{ 'bg-white dark:bg-black-400/10': open, 'bg-white dark:bg-black-950': !(open) }"
	class="transition bg-black-50 dark:bg-black-950" x-data="{ open: false }">
	<div class="flex items-center justify-between lg:max-w-7xl lg:px-8 max-w-2xl mx-auto px-4 py-4 sm:px-6 sm:py-6">
		<div class="flex"><a
				class="focus-visible:outline-black-950 dark:group-focus-visible:outline-black-200 rounded-md focus-visible:outline focus-visible:outline-2"
				href="/"><span class="sr-only">Gene Keys Zone</span> <img alt="Stone" class="h-12 w-auto" height="40" width="65"
					:src="isDark ? '/gkz-logo.svg' : '/gkz-logo.svg'" src="/gkz-logo.svg"></a>
		</div>
		<div class="flex items-center -mr-2 sm:space-x-3 space-x-2"><button
				class="items-center inline-flex justify-center rounded-full transition dark:hover:bg-black-400/10 dark:text-black-200 focus-visible:ring-2 focus:outline-none h-14 hover:bg-black-500/10 ring-black-950 text-black-950 w-14"
				type="button" @click="$store.theme.toggle()" x-data=""><span class="sr-only">Toggle theme mode</span> <svg
					aria-hidden="true" class="h-6 w-6 hidden" fill="currentColor" viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg" :class="{ 'hidden': !(isDark) }">
					<path
						d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z">
					</path>
				</svg> <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg" :class="{ 'hidden': isDark }">
					<path
						d="M10 6C10 10.4183 13.5817 14 18 14C19.4386 14 20.7885 13.6203 21.9549 12.9556C21.4738 18.0302 17.2005 22 12 22C6.47715 22 2 17.5228 2 12C2 6.79948 5.9698 2.52616 11.0444 2.04507C10.3797 3.21152 10 4.56142 10 6ZM4 12C4 16.4183 7.58172 20 12 20C14.9654 20 17.5757 18.3788 18.9571 15.9546C18.6407 15.9848 18.3214 16 18 16C12.4772 16 8 11.5228 8 6C8 5.67863 8.01524 5.35933 8.04536 5.04293C5.62119 6.42426 4 9.03458 4 12ZM18.1642 2.29104L19 2.5V3.5L18.1642 3.70896C17.4476 3.8881 16.8881 4.4476 16.709 5.16417L16.5 6H15.5L15.291 5.16417C15.1119 4.4476 14.5524 3.8881 13.8358 3.70896L13 3.5V2.5L13.8358 2.29104C14.5524 2.1119 15.1119 1.5524 15.291 0.835829L15.5 0H16.5L16.709 0.835829C16.8881 1.5524 17.4476 2.1119 18.1642 2.29104ZM23.1642 7.29104L24 7.5V8.5L23.1642 8.70896C22.4476 8.8881 21.8881 9.4476 21.709 10.1642L21.5 11H20.5L20.291 10.1642C20.1119 9.4476 19.5524 8.8881 18.8358 8.70896L18 8.5V7.5L18.8358 7.29104C19.5524 7.1119 20.1119 6.5524 20.291 5.83583L20.5 5H21.5L21.709 5.83583C21.8881 6.5524 22.4476 7.1119 23.1642 7.29104Z">
					</path>
				</svg></button> <button
				class="items-center inline-flex justify-center rounded-full transition dark:hover:bg-black-400/10 dark:text-black-200 focus-visible:ring-2 focus:outline-none h-14 hover:bg-black-500/10 ring-black-950 text-black-950 w-14"
				type="button" aria-controls="website-menu" aria-expanded="false" :aria-expanded="open.toString()"
				@click="open = !open"><span class="sr-only">Toggle menu</span>
				<svg aria-hidden="true" class="h-8 w-8 block" fill="currentColor" viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg" v-if="!open">
					<path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z"></path>
				</svg> <svg aria-hidden="true" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg" v-if="open">
					<path
						d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z">
					</path>
				</svg></button></div>
	</div>
	<transition 
  enter-from-class="scale-y-[100%] opacity-0"
  enter-active-class="transition duration-700">
	<div v-if="open" class="mx-auto lg:px-8 lg:max-w-7xl px-4 sm:px-6 max-w-2xl bg-zinc-100 rounded-2xl" id="website-menu" x-collapse="" x-collapse.duration.500ms="" x-show="open" >
			<div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:pt-12 pb-24 pt-6">
			<div
				class="items-center rounded-3xl bg-gray-500/10 dark:bg-black-400/10 hidden justify-center lg:flex px-6 py-8">
				<p class="dark:text-black-200/70 text-black-950/70 italic leading-loose max-w-sm text-xl">Unlock the mysteries of your unique genetic blueprint through our comprehensive Gene Keys website, where science and spirituality converge to guide you on a transformative journey to self-discovery, purpose, and fulfillment.</p>
			</div>
			<nav class="flex flex-col dark:divide-black-300/10 divide-black-900/10 divide-y gap-1"><a
					class="transition focus-visible:outline-none group py-6 dark:text-black-200 font-medium inline-flex sm:py-8 sm:text-4xl text-3xl text-black-950 tracking-tight"
					href="/">
					<div
						class="flex items-center justify-between dark:group-focus-visible:outline-black-200 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-black-950 rounded-3xl flex-1">
						<div class="flex items-center gap-6"><span class="text-xs">01</span> <span
								class="group-hover:underline">Home</span></div><svg aria-hidden="true"
							class="h-6 w-6 dark:text-black-400 text-black-600 sm:h-8 sm:w-8" fill="currentColor"
							viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
							</path>
						</svg>
					</div>
				</a><a
					class="transition focus-visible:outline-none group py-6 dark:text-black-200 font-medium inline-flex sm:py-8 sm:text-4xl text-3xl text-black-950 tracking-tight"
					href="/about">
					<div
						class="flex items-center justify-between dark:group-focus-visible:outline-black-200 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-black-950 rounded-3xl flex-1">
						<div class="flex items-center gap-6"><span class="text-xs">02</span> <span
								class="group-hover:underline">About</span></div><svg aria-hidden="true"
							class="h-6 w-6 dark:text-black-400 text-black-600 sm:h-8 sm:w-8" fill="currentColor"
							viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
							</path>
						</svg>
					</div>
				</a><a
					class="transition focus-visible:outline-none group py-6 dark:text-black-200 font-medium inline-flex sm:py-8 sm:text-4xl text-3xl text-black-950 tracking-tight"
					href="/pricing">
					<div
						class="flex items-center justify-between dark:group-focus-visible:outline-black-200 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-black-950 rounded-3xl flex-1">
						<div class="flex items-center gap-6"><span class="text-xs">03</span> <span
								class="group-hover:underline">Gene Keys Deck</span></div><svg aria-hidden="true"
							class="h-6 w-6 dark:text-black-400 text-black-600 sm:h-8 sm:w-8" fill="currentColor"
							viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
							</path>
						</svg>
					</div>
				</a><a
					class="transition focus-visible:outline-none group py-6 dark:text-black-200 font-medium inline-flex sm:py-8 sm:text-4xl text-3xl text-black-950 tracking-tight"
					href="/contact">
					<div
						class="flex items-center justify-between dark:group-focus-visible:outline-black-200 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-black-950 rounded-3xl flex-1">
						<div class="flex items-center gap-6"><span class="text-xs">04</span> <span
								class="group-hover:underline">Contact</span></div><svg aria-hidden="true"
							class="h-6 w-6 dark:text-black-400 text-black-600 sm:h-8 sm:w-8" fill="currentColor"
							viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
							</path>
						</svg>
					</div>
				</a></nav>
		</div>

	</div>
</transition>
</header>

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
						href="/pricing">Get started</a>
				</div><img alt="Hero picture" class="mx-auto h-2/3 w-2/3 grayscale rounded-3xl" src="https://genekeysdiary.files.wordpress.com/2014/08/gene-key-profile-template-version-2.jpg?w=1194" height="640" width="1280">
			</div>
		</div>
	</section>
	<!-- hero end-->
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
					href="/contact">Get started</a>
			</div>
		</div>
	</section>
	<!-- cta end -->
</main>
<!-- body end -->
<!-- foter -->
<footer aria-labelledby="footer-heading" class="py-16 bg-gray-500/10 dark:bg-primary-400/10 lg:mt-20 lg:py-20 mt-16">
	<h2 class="sr-only" id="footer-heading">Footer</h2>
	<div class="mx-auto lg:px-8 lg:max-w-7xl px-4 sm:px-6 max-w-2xl">
		<div class="flex flex-col gap-12 sm:gap-16 justify-between lg:flex-row">
			<div class="flex flex-col items-start gap-6 max-w-sm sm:gap-8"><img alt="Stone" class="h-8 w-auto" height="40"
					width="65" :src="isDark ? '/gkz-logo.svg' : '/gkz-logo.svg'"
					src="/gkz-logo.svg">
				<p class="text-base dark:text-primary-200/70 text-primary-950/70">Unlock the mysteries of your unique genetic blueprint through our comprehensive Gene Keys website, where science and spirituality converge to guide you on a transformative journey to self-discovery, purpose, and fulfillment.</p>
				<p class="dark:text-primary-200/70 text-primary-950/70 text-sm">© 2023 Gene Keys Zone</p>
			</div>
			<div class="grid gap-8 flex-1 grid-cols-1 max-w-xl sm:grid-cols-3">
				<div class="flex flex-col gap-4">
					<p class="text-base font-medium">Social</p>
					<ul class="flex flex-col gap-3" role="list">
						
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="https://twitter.com/" rel="noopener" target="_blank">Twitter <svg aria-hidden="true"
									class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z">
									</path>
								</svg></a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="https://instagram.com/" rel="noopener" target="_blank">Instagram <svg aria-hidden="true"
									class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z">
									</path>
								</svg></a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="https://facebook.com/" rel="noopener" target="_blank">Facebook <svg aria-hidden="true"
									class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z">
									</path>
								</svg></a></li>
					</ul>
				</div>
				<div class="flex flex-col gap-4">
					<p class="text-base font-medium">Company</p>
					<ul class="flex flex-col gap-3" role="list">
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/">Home</a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/about">About</a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/pricing">Pricing</a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/contact">Contact</a></li>
					</ul>
				</div>
				<div class="flex flex-col gap-4">
					<p class="text-base font-medium">Legal</p>
					<ul class="flex flex-col gap-3" role="list">
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/privacy">Privacy</a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/404">404</a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/styleguide">Styleguide</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</footer>
<!-- foter end -->
</template>
<script setup>
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
const open = ref(false)
const isDark = ref(false)
</script>
<style>
.slide-enter-active {
  animation: menu-slide .5s;
}
.slide-leave-active {
  animation: menu-slide .5s reverse;
}
@keyframes menu-slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>