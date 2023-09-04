<template>
<!-- Hero -->
<div class="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('../svg/component/polygon.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('../svg/component/polygon-dark.svg')]">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    <!-- Announcement Banner -->
    <div class="flex justify-center">
      <a class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200" href="#">
				Dej svůj úkol do rukou profesionálů a sleduj, jak se stává skutečností
        <span class="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      </a>
    </div>
    <!-- End Announcement Banner -->

    <!-- Title -->
    <div class="mt-5 max-w-2xl text-center mx-auto">
      <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
        Nikdy
        <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Nepracuj</span>
				<span class="text-sm"> sám</span>
      </h1>
    </div>
    <!-- End Title -->

    <div class="mt-5 max-w-3xl text-center mx-auto">
      <p class="text-lg text-gray-600 dark:text-gray-400">1) Zadej úkol 2) Získej tým profesionálů 3) Získej řešení úkolu</p>
    </div>

     <!-- Search -->
		 <div class="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <input value="Vytvorit potravinarskou etiketu na obal hamburger housky se vsemi nalezitostmi" type="text" class="border-solid border-2 border-indigo-600 rounded-full p-4 block w-full  text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Ask me anything...">
        <div class="absolute top-1/2 right-2 -translate-y-1/2">
          <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-10 w-10 rounded-full text-gray-500 hover:text-gray-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all dark:hover:text-gray-200 dark:focus:ring-slate-600">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
              <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
            </svg>
          </button>
          <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-10 w-10 bg-gray-100 rounded-full text-gray-500 hover:text-gray-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all dark:bg-slate-800 dark:hover:text-gray-200 dark:focus:ring-slate-600">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
              <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- End Search -->

    <div class="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
      <span class="text-sm text-gray-600 dark:text-gray-400">Never work</span>
      <span class="text-sm font-bold text-gray-900 dark:text-white">v0.1</span>
      <svg class="h-5 w-5 text-gray-300 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"/>
      </svg>
      <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="#">
        Získejte řešení vašeho úkolu s pomocí našeho týmu profesionálů.
        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </a>
    </div>
  </div>
</div>
<!-- End Hero -->
<Team/>
<Solution/>
</template>
<script setup>
import Team from '../components/Nwrk/Team.vue';
import Solution from '../components/Nwrk/Solution.vue';
// who you are
// as father
// as small business owner
// as business analytic

// background / situation

// what you want to achieve



// thinking / working for you
</script>