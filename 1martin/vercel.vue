<template>
	<main class="bg-red-600">

  <div class="flex flex-col w-full 1max-w-5xl 1py-24 stretch mx-auto bg-red-600">

		<ul class="1mt-16 1space-y-5 ">
			 <!-- Chat Bubble -->
			 <li :class="(message.role === 'user') ? 'bg-white' : 'bg-zinc-100'" class="1max-w-3xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4 " v-for="message in messages" :key="message.id">
				<div :class="(message.role === 'user') ? 'bg-white' : 'bg-zinc-100'" class="flex max-w-3xl w-full 1items-center mx-auto p-4" >

				<img v-if="message.role === 'user'" class="w-8 h-8 rounded-full mr-8" src="https://i.pravatar.cc/64?img=3" /> 
				<img v-if="message.role === 'assistant'" class="w-8 h-8 rounded-full mr-8" src="https://i.pravatar.cc/64?img=4" /> 
        

        <div class="grow mt-2 space-y-3">
              <p :class="(message.role === 'user') ? 'font-display font-semibold first-letter:uppercase' : ''" class="text-gray-800 dark:text-gray-200 whitespace-pre-line break-words">
                {{ message.content }}
              </p>
            </div>
					</div>
      </li>
      <!-- End Chat Bubble -->
			<!-- blank space -->
			<li id="bottomChat" ref="bottomChat" class="py-12 bg-zinc-100"></li>
		</ul>

<!--
    <div v-for="message in messages" :key="message.id" class="whitespace-pre-wrap">
      {{ message.role === 'user' ? 'User: ' : 'AI: ' }}
      {{ message.content }}
    </div>
-->

<!-- org submit 
    <form @submit="handleSubmit">
      <input
        v-model="input"
        class="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
        placeholder="Say something..."
        @change="handleInputChange"
      >
    </form>
	--> 
		<!-- org submit  end -->
 <!-- Search -->
 <footer class="sticky bottom-0 z-10 bg-slate-100 border-t border-gray-200 pt-2 pb-3 sm:pt-4 sm:pb-6 dark:bg-slate-900 dark:border-gray-700">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-3">
        <button type="button" class="inline-flex justify-center items-center gap-x-2 rounded-md font-medium text-gray-800 hover:text-blue-600 text-xs sm:text-sm dark:text-gray-200 dark:hover:text-blue-500">
					<svg class="w-3 h-3 text-green-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
          </svg>

          Karel, Bozp a potravinarska vyroba ({{ isLoading }})
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
				<form @submit.prevent="handleSubmit">
        <input @change="handleInputChange" v-model="input" class="p-4 pb-12 block  w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Zeptej se me..." />
			</form>
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
</main>
</template>


<script setup>
import { useChat } from 'ai/vue'
import {ref, watch } from 'vue'
const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat()

const bottomChat = ref(null)

function send() {
	console.log('send', input)
	append(input.value)

	
	
}

watch(isLoading, (newValue, oldValue) => {
	console.log('isLoading', newValue, oldValue)
	if (newValue === true) {
		scrollToBottom()
	}
  // do something with newValue and oldValue.
});

function scrollToBottom() {
	console.log('scrool')
    const el = bottomChat.value
		console.log(el)

    if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
      el.scrollIntoView({block: 'center', behavior: 'instant'});
    }
  }

</script>