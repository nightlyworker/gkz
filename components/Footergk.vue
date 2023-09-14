<template>
	<!-- foter -->
<footer aria-labelledby="footer-heading" class="py-16 bg-gray-500/10 dark:bg-primary-400/10 lg:mt-20 lg:py-20 mt-16">
	<h2 class="sr-only" id="footer-heading">Footer</h2>
	<div class="mx-auto lg:px-8 lg:max-w-7xl px-4 sm:px-6 max-w-2xl">
		<div class="flex flex-col gap-12 sm:gap-16 justify-between lg:flex-row">
			<div class="flex flex-col items-start gap-6 max-w-sm sm:gap-8"><img alt="Stone" class="h-8 w-auto" height="40"
					width="65" :src="isDark ? '/gkz-logo.svg' : '/gkz-logo.svg'"
					src="/gkz-logo.svg">
				<p class="text-base dark:text-primary-200/70 text-primary-950/70">Unlock the mysteries of your unique genetic blueprint through our comprehensive <a href="/">Gene Keys Zone</a>, where science and spirituality converge to guide you on a transformative journey to self-discovery, purpose, and fulfillment. <a href="/sitemap">Sitemap</a></p>
				<p class="dark:text-primary-200/70 text-primary-950/70 text-sm">© 2023 <a href="/">Gene Keys Zone</a> - proudly brought to you by a vessel of the divine life force</p>
			</div>
			<div class="grid gap-8 flex-1 grid-cols-1 max-w-xl sm:grid-cols-3">
				<div class="flex flex-col gap-4">
					<p class="text-2xl font-medium">☵</p>
							<!-- b start -->
							<Breadcrumbs>
    <template #breadcrumb="{ to, title }">
      <NuxtLink :to="to" class="text-base text-gray-600">
        {{ title }}
      </NuxtLink>
    </template>
  </Breadcrumbs>
					<!-- b end -->
					<!--
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
					-->
				</div>
				<div class="flex flex-col gap-4">
					<p class="text-2xl font-medium">☲</p>
					<ul class="flex flex-col gap-3" role="list">
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/gene-key">Gene Keys Deck</a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/course">Free Course</a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/guides/cheatsheet">Gene Keys Cheatsheet</a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="#">Contact</a></li>
					</ul>
				</div>
				<div class="flex flex-col gap-4">
					<p class="text-2xl font-medium">☳</p>
					<p>More coming soon</p>

					<!--
					<ul class="flex flex-col gap-3" role="list">
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="https://humandesign.zone">Human Design Zone</a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="https://humandesign.zone/human-design-encyclopedia">Human Design Encyclopedia</a></li>
						<li><a
								class="items-center inline-flex focus-visible:outline focus-visible:outline-2 text-base dark:focus-visible:outline-primary-200 focus-visible:outline-primary-950 gap-1 hover:underline rounded-md"
								href="/gene-key/gene-key-1">Gene Key 1</a></li>
					</ul>
					-->
				</div>
			</div>
		</div>
	</div>
</footer>
<!-- foter end -->
</template>
<script setup>
const isDark = ref(false)
</script>