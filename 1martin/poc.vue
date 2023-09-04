<template>
	<!-- Content -->
<div class="relative 1h-screen">
  <div class="py-10 lg:py-14">
    

    <ul class="mt-16 space-y-5">
      <!-- Chat Bubble -->
      <li class="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
        <svg class="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="6" fill="#2563EB"/>
          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" stroke-width="1.5"/>
          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" stroke-width="1.5"/>
          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
        </svg>

        <div class="space-y-3">
          <h2 class="font-medium text-gray-800 dark:text-white">
            How can we help?
          </h2>
          <div class="space-y-1.5">
            <p class="mb-1.5 text-sm text-gray-800 dark:text-white">
              You can ask questions like:
            </p>
            <ul class="list-disc list-outside space-y-1.5 pl-3.5">
              <li class="text-sm text-gray-800 dark:text-white">
                What's Preline UI?
              </li>

              <li class="text-sm text-gray-800 dark:text-white">
                How many Starter Pages & Examples are there?
              </li>

              <li class="text-sm text-gray-800 dark:text-white">
                Is there a PRO version?
              </li>
            </ul>
          </div>
        </div>
      </li>
      <!-- End Chat Bubble -->

      <!-- Chat Bubble -->
      <li class="py-2 sm:py-4">
        <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div class="max-w-2xl flex gap-x-2 sm:gap-x-4">
            <span class="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600">
              <span class="text-sm font-medium text-white leading-none">AZ</span>
            </span>

            <div class="grow mt-2 space-y-3">
              <p class="text-gray-800 dark:text-gray-200">
                what's preline ui?
              </p>
            </div>
          </div>
        </div>
      </li>
      <!-- End Chat Bubble -->






    </ul>
  </div>

  <!-- Search -->
  <footer class="sticky bottom-0 z-10 bg-slate-100 border-t border-gray-200 pt-2 pb-3 sm:pt-4 sm:pb-6 dark:bg-slate-900 dark:border-gray-700">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-3">
        <button type="button" class="inline-flex justify-center items-center gap-x-2 rounded-md font-medium text-gray-800 hover:text-blue-600 text-xs sm:text-sm dark:text-gray-200 dark:hover:text-blue-500">
          <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.47339 2 8.85714 2.38376 8.85714 2.85714V7.14286L13.1429 7.14286C13.6162 7.14286 14 7.52661 14 8C14 8.47339 13.6162 8.85714 13.1429 8.85714L8.85714 8.85715V13.1429C8.85714 13.6162 8.47339 14 8 14C7.52661 14 7.14286 13.6162 7.14286 13.1429V8.85715L2.85714 8.85715C2.38376 8.85715 2 8.4734 2 8.00001C2 7.52662 2.38376 7.14287 2.85714 7.14287L7.14286 7.14286V2.85714C7.14286 2.38376 7.52661 2 8 2Z" fill="currentColor"/>
          </svg>
          New chat
        </button>

        <button type="button" class="py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
          </svg>
          Stop generating
        </button>
      </div>

      <!-- Input -->
      <div class="relative ">
        <textarea class="p-4 pb-12 block  w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Ask me anything..."></textarea>

        <!-- Toolbar -->
        <div class="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-slate-900">
          <div class="flex justify-between items-center">
            <!-- Button Group -->
            <div class="flex items-center">
              <!-- Mic Button -->
              <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:hover:text-blue-500">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
              </button>
              <!-- End Mic Button -->

              <!-- Attach Button -->
              <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:hover:text-blue-500">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                </svg>
              </button>
              <!-- End Attach Button -->
            </div>
            <!-- End Button Group -->

            <!-- Button Group -->
            <div class="flex items-center gap-x-1">
              <!-- Mic Button -->
              <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:hover:text-blue-500">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
                </svg>
              </button>
              <!-- End Mic Button -->

              <!-- Send Button -->
              <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                <svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                </svg>
              </button>
              <!-- End Send Button -->
            </div>
            <!-- End Button Group -->
          </div>
        </div>
        <!-- End Toolbar -->
      </div>
      <!-- End Input -->
    </div>
  </footer>
  <!-- End Search -->
</div>
<!-- End Content -->
</template>
<script setup>
const messages = [
	{ role: 'user', text: 'hh', avatar: 'https://i.pravatar.cc/64?u=Afake@pravaDtar.com'},
	{ role: 'ai', text: 'hi', avatar: 'https://i.pravatar.cc/64?u=bfake@pravaDtar.com'}
]
</script>