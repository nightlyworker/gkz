<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div class="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Tvuj tym</h2>
        <nuxt-link to="/human-design-encyclopedia" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Pridat dalsi pracovniky $$
          <span aria-hidden="true"> &rarr;</span>
        </nuxt-link>
      </div>

      <div class="mt-4 flow-root">
        <div class="-my-2">
          <div class="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div class="min-w-screen-xl 1absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              <a v-for="category in categories" :key="category.name" :href="category.href" class="relative flex h-96 w-56 flex-col 1overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto bg-blue-100">
                <!-- absolute h-14 w-14 -left-4 -top-4 z-50 -->
								

								<span aria-hidden="true" class="absolute h-14 w-14 -left-4 -top-4 z-50">
										<img class="w-14 h-14 rounded-full" :src="category.imageSrc"/>
										</span>
								<h2 class="text-center font-bold text-gray-900 font-display text-small">
									{{ category.name }}</h2>
									
									<span aria-hidden="true" class="absolute inset-0">
                  <!-- <img :src="category.imageSrc" loading="lazy" alt="" class="h-full w-full object-cover object-center" /> -->
									<p class="text-sm p-4 mt-8 h-60 overflow-y-clip text-ellipsis">{{ category.say }} ...</p>
                </span>
               <!-- <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-300 opacity-50" /> -->
							 
                <span class="relative mt-auto text-center font-bold text-gray-900 1font-display text-base pt-2">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

									Pokračujme v konverzaci</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 px-4 sm:hidden">
        <nuxt-link to="/human-design-encyclopedia" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Human Design Encyclopedia
          <span aria-hidden="true"> &rarr;</span>
				</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
Career and Purpose
Relationships and Partnerships
Personal Growth and Self-Development
Health and Well-being
Finances and Abundance
Creativity and Self-Expression
Family and Home Life
Communication and Expression
Spirituality and Inner Connection
Education and Learning
*/
// https://pravatar.cc/
const categories = [
  {
    name: 'Grafik',
    href: '#',
    imageSrc: 'https://i.pravatar.cc/64?u=2fake@pravatar.com',
		say: `Pro vytvoření potravinářské etikety pro obal hamburger housky je důležité zohlednit několik klíčových aspektů. 

1. Název a logo: Začněte vytvořením atraktivního názvu pro vaši hamburger housku, který bude snadno zapamatovatelný a přitažlivý
   Nutricni specialist  rika ...
   Pro vytvoření potravinářské etikety na obal hamburger housky je důležité dodržet několik základních informací a předpisy:

2. Název výrobku: Uveďte přesný název hamburger housky, který bude jasně identifikovatelný pro spotřebitele.`
  },
  {
    name: 'Nutricni specialista',
    href: '#',
    imageSrc: 'https://i.pravatar.cc/64?u=Afake@pravatar.com',
		say: `Pro vytvoření potravinářské etikety na obal hamburger housky je důležité dodržet několik klíčových kroků:

1. Zjistěte přesné požadavky a předpisy týkající se potravinářských etiket v České republice. Zkontrolujte, zda jsou
   Vyjadreni pracovnika: Grafik se zamerenim Navrhne a vytvori etiketu pro obal hamburger housky
   Pro vytvoření potravinářské etikety pro obal hamburger housky je důležité zohlednit několik klíčových aspektů. 

2. Název a logo: Začněte vytvořením atraktivního názvu pro vaši hamburger housku, který bude snadno zapamatovatelný a přitažlivý

Vyjadreni pracovnika: Nutricni specialist se zamerenim Zajisti, aby informace na etikete byly presne a v souladu s prislusnymi predpisy
Pro vytvoření potravinářské etikety na obal hamburger housky je důležité dodržet několik základních informací a předpisy:

1. Název výrobku: Uveďte přesný název hamburger housky, který bude jasně identifikovatelný pro spotřebitele.`
  },
	{
    name: 'Kontrolor kvality',
    href: '#',
    imageSrc: 'https://i.pravatar.cc/64?u=Afake@pravaDtar.com',
		say: `Pro vytvoření potravinářské etikety na obal hamburger housky je důležité dodržet několik klíčových kroků:

1. Zjistěte přesné požadavky a předpisy týkající se potravinářských etiket v České republice. Zkontrolujte, zda jsou`
  },
	{ name: 'Ucetni', href: '#', imageSrc: 'https://i.pravatar.cc/64?u=AfakgfdseDD@pravaDtar.com' },
  {
    name: 'Pravnik',
    href: '#',
    imageSrc: 'https://i.pravatar.cc/64?u=AfakddddeDD@pravaDtaffr.com',
  },
  
  
]
</script>