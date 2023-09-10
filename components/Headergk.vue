<template>
	<header :class="{ 'bg-white dark:bg-black-400/10': open, 'bg-white dark:bg-black-950': !(open) }"
	class="transition bg-black-50 dark:bg-black-950" x-data="{ open: false }">
	<div class="flex items-center justify-between lg:max-w-7xl lg:px-8 max-w-2xl mx-auto px-4 py-4 sm:px-6 sm:py-6">
		<div class="flex"><a
				class="focus-visible:outline-black-950 dark:group-focus-visible:outline-black-200 rounded-md focus-visible:outline focus-visible:outline-2"
				href="/"><span class="sr-only">Gene Keys Zone</span> <img alt="Stone" class="h-12 w-auto grayscale" height="40" width="65"
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
					href="/course">
					<div
						class="flex items-center justify-between dark:group-focus-visible:outline-black-200 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-black-950 rounded-3xl flex-1">
						<div class="flex items-center gap-6"><span class="text-xs">02</span> <span
								class="group-hover:underline">Free Course</span></div><svg aria-hidden="true"
							class="h-6 w-6 dark:text-black-400 text-black-600 sm:h-8 sm:w-8" fill="currentColor"
							viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
							</path>
						</svg>
					</div>
				</a><a
					class="transition focus-visible:outline-none group py-6 dark:text-black-200 font-medium inline-flex sm:py-8 sm:text-4xl text-3xl text-black-950 tracking-tight"
					href="/gene-key">
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
					href="/guides/cheatsheet">
					<div
						class="flex items-center justify-between dark:group-focus-visible:outline-black-200 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-black-950 rounded-3xl flex-1">
						<div class="flex items-center gap-6"><span class="text-xs">04</span> <span
								class="group-hover:underline">Gene Keys Cheatsheet</span></div><svg aria-hidden="true"
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
</template>
<script setup>
const open = ref(false)
const isDark = ref(false)
</script>