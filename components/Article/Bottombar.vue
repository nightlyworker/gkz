<template>
	<div class="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
		<!-- rounded-t-2xl -->
		<div
		
			class="flex items-center gap-6 bg-white/90 px-4 py-4 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6 md:rounded-t-2xl">
			<div class="hidden md:block"><button type="button"
					class="group relative flex flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-slate-700 h-14 w-14 focus:ring-2 focus:ring-offset-2"
					aria-label="Pause">
					<div class="absolute -inset-3 md:hidden"></div><svg aria-hidden="true" viewBox="0 0 22 28"
						class="fill-white group-active:fill-white/80 h-5 w-5">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M1.5 0C0.671573 0 0 0.671572 0 1.5V26.5C0 27.3284 0.671573 28 1.5 28H4.5C5.32843 28 6 27.3284 6 26.5V1.5C6 0.671573 5.32843 0 4.5 0H1.5ZM17.5 0C16.6716 0 16 0.671572 16 1.5V26.5C16 27.3284 16.6716 28 17.5 28H20.5C21.3284 28 22 27.3284 22 26.5V1.5C22 0.671573 21.3284 0 20.5 0H17.5Z">
						</path>
					</svg>
				</button></div>
			<div class="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1">
				<nuxt-link :to="page._path" class="font-display truncate text-center text-sm font-bold leading-6 md:text-left" title="4: Shooter McGavin">{{ page.title }}</nuxt-link>

				<div class="flex justify-between gap-6">
					<div class="flex items-center md:hidden"><button type="button"
							class="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none"
							aria-label="Mute">
							<div class="absolute -inset-4 md:hidden"></div><svg aria-hidden="true" viewBox="0 0 24 24"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700">
								<path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path>
								<path d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17" fill="none"></path>
								<path d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5" fill="none"></path>
							</svg>
						</button></div>
					<div class="flex flex-none items-center gap-4"><button type="button"
							class="group relative rounded-full focus:outline-none" aria-label="Rewind 10 seconds">
							<div class="absolute -inset-4 -right-2 md:hidden"></div><svg aria-hidden="true" viewBox="0 0 24 24"
								fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
								class="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700">
								<path d="M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188">
								</path>
								<path d="M5 15V19"></path>
								<path
									d="M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z">
								</path>
							</svg>
						</button>
						<div class="md:hidden"><button type="button"
								class="group relative flex flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-slate-700 h-10 w-10 focus:ring-2 focus:ring-offset-2"
								aria-label="Pause">
								<div class="absolute -inset-3 md:hidden"></div><svg aria-hidden="true" viewBox="0 0 22 28"
									class="fill-white group-active:fill-white/80 h-4 w-4">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M1.5 0C0.671573 0 0 0.671572 0 1.5V26.5C0 27.3284 0.671573 28 1.5 28H4.5C5.32843 28 6 27.3284 6 26.5V1.5C6 0.671573 5.32843 0 4.5 0H1.5ZM17.5 0C16.6716 0 16 0.671572 16 1.5V26.5C16 27.3284 16.6716 28 17.5 28H20.5C21.3284 28 22 27.3284 22 26.5V1.5C22 0.671573 21.3284 0 20.5 0H17.5Z">
									</path>
								</svg>
							</button></div><button type="button" class="group relative rounded-full focus:outline-none"
							aria-label="Fast-forward 10 seconds">
							<div class="absolute -inset-4 -left-2 md:hidden"></div><svg aria-hidden="true" viewBox="0 0 24 24"
								fill="none" class="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700">
								<path d="M16 5L19 8M19 8L16 11M19 8H10.5C7.46243 8 5 10.4624 5 13.5C5 15.4826 5.85204 17.2202 7 18.188"
									stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M13 15V19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
								<path
									d="M16 18V16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H17C16.4477 19 16 18.5523 16 18Z"
									stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</button>
					</div>
					<div role="group" id="react-aria6449498279-1" aria-labelledby="react-aria6449498279-2"
						class="absolute inset-x-0 bottom-full flex flex-auto touch-none items-center gap-6 md:relative"><label
							class="sr-only" id="react-aria6449498279-2">Current time</label>
						<div class="relative w-full bg-slate-100 md:rounded-full" style="position: relative; touch-action: none;">
							<div class="h-2 md:rounded-l-xl md:rounded-r-md bg-slate-700" style="width: calc(17.1875% - 0.25rem);">
							</div>
							<div class="absolute top-1/2 -translate-x-1/2" style="left: 17.1875%;">
								<div class="h-4 rounded-full w-1 bg-slate-700"
									style="position: absolute; transform: translate(-50%, -50%); touch-action: none; left: 17.1875%;">
									<div
										style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: 0px -1px -1px 0px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;">
										<input tabindex="0" id="react-aria6449498279-2-0" aria-labelledby="react-aria6449498279-2"
											type="range" min="0" max="64" step="1" aria-orientation="horizontal"
											aria-valuetext="0 hours, 0 minutes, 11 seconds" value="11"></div>
								</div>
							</div>
						</div>
						<div class="hidden items-center gap-2 md:flex"><output for="react-aria6449498279-2-0" aria-live="off"
								class="hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 md:block text-slate-500">00:11</output><span
								class="text-sm leading-6 text-slate-300" aria-hidden="true">/</span><span
								class="hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 text-slate-500 md:block">01:04</span>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<div class="flex items-center"><button type="button"
								class="relative flex h-6 w-6 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
								aria-label="Playback rate">
								<div class="absolute -inset-4 md:hidden"></div><svg aria-hidden="true" viewBox="0 0 16 16" fill="none"
									stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
									<path
										d="M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z"
										fill="currentColor" stroke="currentColor" stroke-width="2"></path>
									<path d="M3.75 7.25L5.25 5.77539V11.25"></path>
									<path d="M8.75 7.75L11.25 10.25"></path>
									<path d="M11.25 7.75L8.75 10.25"></path>
								</svg>
							</button></div>
						<div class="hidden items-center md:flex"><button type="button"
								class="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none"
								aria-label="Mute">
								<div class="absolute -inset-4 md:hidden"></div><svg aria-hidden="true" viewBox="0 0 24 24"
									stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
									class="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700">
									<path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path>
									<path d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17" fill="none"></path>
									<path d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5" fill="none"></path>
								</svg>
							</button></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const {prev,next, page, navigation} = useContent()

</script>