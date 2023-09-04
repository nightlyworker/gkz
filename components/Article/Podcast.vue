<template>
	<div class="flex gap-2 p-3 bg-zinc-100 rounded-xl">
      <div class="min-h-max w-1/2 h-1/2 shrink-1 rounded-lg bg-slate-200 flex">
        <img :src="imageUrl" alt="" class="1h-1/2 rounded-2xl object-fit 1w-full bg-slate-300">
      </div>
      <div class="flex flex-col gap-2 my-auto">
        <h2 class="line-clamp-2 font-medium text-black">{{ title }}</h2>
        <p class="text-sm text-slate-500">Spoken Edition | 37:29 mins</p>
        <div class="flex items-center gap-3">
					<!-- bg-[#9610ff] -->
          <button @click="isModalOpen=true" class="flex items-center rounded-full  bg-black px-3 py-1 text-sm font-medium text-white">
            <svg class="h-5 w-5 fill-slate-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M7.75194 5.43872L18.2596 11.5682C18.4981 11.7073 18.5787 12.0135 18.4396 12.252C18.3961 12.3265 18.3341 12.3885 18.2596 12.432L7.75194 18.5615C7.51341 18.7006 7.20725 18.62 7.06811 18.3815C7.0235 18.305 7 18.2181 7 18.1296V5.87061C7 5.59446 7.22386 5.37061 7.5 5.37061C7.58853 5.37061 7.67547 5.39411 7.75194 5.43872Z"></path>
            </svg>
            Play
          </button>
          <svg @click="isModalOpen=true" class="cursor-pointer h-5 w-5 fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2 18H12V20H2V18ZM2 11H22V13H2V11ZM2 4H22V6H2V4ZM18 18V15H20V18H23V20H20V23H18V20H15V18H18Z"></path>
          </svg>
          <svg @click="isModalOpen=true" class="cursor-pointer ml-auto h-5 w-5 fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
          </svg>
        </div>
      </div>
    </div>
<!-- search start -->
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
	<Tracker/>
	<!-- cta start -->
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
<!-- search stop -->


</template>
<script setup>
import { ref, onMounted } from 'vue'
import Tracker from '../Tracker.vue';

const props = defineProps({
  title: String
});

const isModalOpen = ref(false)

const imageUrl = ref('')

onMounted(() => {
	const screenWidth = ref(screen.width)
	const screenHeight = ref(screen.height)

	if (screenWidth.value < 600) {
		imageUrl.value = 'https://source.unsplash.com/random/300x300/?mystical&orientation=landscape'
	} else {
		imageUrl.value = 'https://source.unsplash.com/random/300x150/?mystical&orientation=landscape'
	}
})


// https://codepen.io/daddasoft/pen/WNYMyOp

// get screen size
// desktop
// https://source.unsplash.com/random/300x150/?mystical&orientation=landscape

// mobile
// https://source.unsplash.com/random/300x300/?mystical&orientation=landscape

</script>