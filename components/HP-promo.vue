<template>
  <div class="relative overflow-hidden bg-white">
    <!-- Decorative background image and gradient -->
    <div aria-hidden="true" class="absolute inset-0">
      <div class="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8 bg-slate-100">
        <!-- <img src="/hp-themes/level1.png" alt="" class="h-full w-full object-cover object-center" /> -->
      </div>
      <div class="absolute inset-0 bg-white bg-opacity-75" />
      <div class="absolute inset-0 bg-gradient-to-t from-white via-white" />
    </div>

    <!-- Callout -->
    <section aria-labelledby="sale-heading" class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 id="sale-heading" class="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"> <span class="text-indigo-600">Level UP</span> your life</h2>
        <p class="mx-auto mt-4 max-w-xl text-lg text-slate-700 tracking-tight">Master your unique strengths, be aware of challenges and navigate life with clarity and purpose</p>
        <a href="/crash-course" title="Human Design Free Crash Course" alt="Human Design Free Crash Course" class="mt-6 inline-block w-full rounded-full text-sm border border-transparent bg-gray-900 py-3 px-8 font-bold text-white hover:bg-gray-800 sm:w-auto">Have that "A-ha" moment</a>
      </div>
    </section>

    <!-- Testimonials -->
    <section aria-labelledby="testimonial-heading" class="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 id="testimonial-heading" class="text-2xl font-bold tracking-tight text-gray-900">What are people saying?</h2>

        <div class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          <blockquote v-for="testimonial in testimonials" :key="testimonial.id" class="sm:flex lg:block">
            <svg width="24" height="18" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="flex-shrink-0 text-gray-600">
              <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
            </svg>
            <div class="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
							<!-- first-letter:text-2xl first-letter:font-bold first-letter:font-display -->
              <p class="text-base text-gray-900">{{ testimonial.quote }}</p>
              <cite class="mt-4 block 1font-semibold not-italic text-gray-900">{{ testimonial.attribution }}</cite>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    quote:
      'Human Design has been a game-changer for me. It provided insights and clarity that helped me understand myself on a whole new level.',
    attribution: '- Sarah M., Los Angeles, USA',
  },
  {
    id: 2,
    quote:
      "Discovering Human Design has been a transformative experience. It's like having a personalized roadmap for life, guiding me towards my true potential.",
    attribution: '- David D., London, UK',
  },
  {
    id: 3,
    quote:
     "Human Design has provided me with valuable insights and practical tools to align with my purpose and create a life that resonates with who I truly am.",
    attribution: '- Samantha T., New York, USA',
  },
]
</script>