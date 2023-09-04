<template>
	<div class="clp-theme">
		<div class="prose-sm hidden md:prose-md lg:block">
			
		</div>
		<div id="header">
			<div
				class="fixed top-0 left-0 right-0 z-20 hidden h-20 border-b border-gray-300 bg-white px-10 transition-opacity duration-300 lg:block invisible opacity-0">
				<div class="flex h-full justify-between 2xl:mx-auto 2xl:max-w-360">
					<div class="flex items-center">
						<div class="prose-sm space-y-1 md:prose-md">
							<p class="b2">Prompt Engineering for LLMs</p>
							<div class="b4 flex items-center">
								<div class="b4 w-11 rounded-sm-md bg-gray-400 py-0.5 text-center uppercase text-gray-900">New</div><span
									class="mx-2">·</span>
								<div class="flex items-center hover:cursor-pointer">
									<p>2 Weeks</p><span class="mx-2">·</span>
								</div>
								<p>$800 USD</p>
							</div>
						</div>
					</div>
					<div class="flex items-center space-x-4">
						<div class="prose-sm inline-flex items-center md:prose-md"><span></span><span></span><span></span><a
								href="#overview">
								<div class="flex h-10 cursor-pointer items-center px-2.5 clp-text-gray-700 hover:clp-text-gray-900">
									<p class="b3">Overview</p>
								</div>
							</a><span></span><span></span><span></span><a href="#syllabus">
								<div class="flex h-10 cursor-pointer items-center px-2.5 clp-text-gray-700 hover:clp-text-gray-900">
									<p class="b3">Curriculum</p>
								</div>
							</a><span></span><a href="#schedule">
								<div class="flex h-10 cursor-pointer items-center px-2.5 clp-text-gray-700 hover:clp-text-gray-900">
									<p class="b3">Schedule</p>
								</div>
							</a><span></span><a href="#faqs">
								<div class="flex h-10 cursor-pointer items-center px-2.5 clp-text-gray-700 hover:clp-text-gray-900">
									<p class="b3">FAQs</p>
								</div>
							</a><span></span><span></span><span></span></div>
						<div class="flex space-x-3"></div>
					</div>
				</div>
			</div>
			<div
				class="prose-sm fixed top-0 left-0 right-0 z-20 transition-all duration-300 md:prose-md lg:hidden opacity-100">
				<nav
					class="relative px-4 h-15 flex items-center transition ease-in-out duration-300 md:h-18 w-full md:px-10 md:py-4 md:shadow-sm z-10 bg-white text-gray-900 border-b border-gray-300">
					<div class="flex w-full items-center justify-between 2xl:mx-auto 2xl:max-w-360">
						<div class="flex items-center space-x-8"><a href="/">
								<div class="flex items-center">
									<div class="mr-2"><svg width="24" height="24" viewBox="0 0 16 16" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M10 13L5 8L10 3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
												stroke-linejoin="round"></path>
										</svg></div><svg width="128" height="24" viewBox="0 0 192 36" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M36 0H0V0.9612H36V0Z" fill="currentColor"></path>
										<path d="M14.0004 1.9188H1.00081V2.88H14.0004V1.9188Z" fill="currentColor"></path>
										<path d="M34.9992 1.9188H21.9996V2.88H34.9992V1.9188Z" fill="currentColor"></path>
										<path d="M0 36H36V35.0388H0V36Z" fill="currentColor"></path>
										<path d="M0.997182 34.0812H2.95198V33.12H0.997182V34.0812Z" fill="currentColor"></path>
										<path
											d="M11.5201 4.7988H11.9737V3.8412H1.94045V4.7988H2.39405C2.543 4.7988 2.68584 4.85797 2.79116 4.96329C2.89648 5.06861 2.95565 5.21145 2.95565 5.3604V34.4808C2.95565 34.5544 2.9411 34.6272 2.91283 34.6952C2.88457 34.7631 2.84314 34.8248 2.79094 34.8766C2.73875 34.9285 2.67681 34.9695 2.60869 34.9974C2.54058 35.0252 2.46763 35.0393 2.39405 35.0388H1.94045V36H11.9665V35.0388H11.5201C11.4466 35.0393 11.3739 35.0252 11.306 34.9973C11.238 34.9694 11.1763 34.9283 11.1244 34.8764C11.0725 34.8245 11.0314 34.7628 11.0036 34.6949C10.9757 34.627 10.9616 34.5542 10.9621 34.4808V5.3604C10.9616 5.28682 10.9757 5.21387 11.0035 5.14576C11.0313 5.07764 11.0723 5.0157 11.1242 4.9635C11.1761 4.91131 11.2377 4.86988 11.3057 4.84162C11.3736 4.81335 11.4465 4.7988 11.5201 4.7988ZM5.15525 34.4808C5.15525 34.5544 5.1407 34.6272 5.11243 34.6952C5.08417 34.7631 5.04274 34.8248 4.99055 34.8766C4.93835 34.9285 4.87641 34.9695 4.80829 34.9974C4.74018 35.0252 4.66723 35.0393 4.59365 35.0388H4.51445C4.36708 35.0378 4.22608 34.9786 4.12221 34.8741C4.01834 34.7696 3.96005 34.6282 3.96005 34.4808V5.3604C3.96005 5.21145 4.01922 5.06861 4.12454 4.96329C4.22986 4.85797 4.3727 4.7988 4.52165 4.7988H4.60085C4.6746 4.7988 4.74763 4.81332 4.81577 4.84155C4.8839 4.86977 4.94581 4.91114 4.99796 4.96329C5.05011 5.01544 5.09148 5.07735 5.1197 5.14548C5.14792 5.21362 5.16245 5.28665 5.16245 5.3604L5.15525 34.4808ZM7.55285 34.4808C7.55333 34.5542 7.53922 34.627 7.51135 34.6949C7.48348 34.7628 7.44239 34.8245 7.39048 34.8764C7.33857 34.9283 7.27687 34.9694 7.20895 34.9973C7.14104 35.0252 7.06826 35.0393 6.99485 35.0388H6.91565C6.84207 35.0393 6.76912 35.0252 6.70101 34.9974C6.63289 34.9695 6.57095 34.9285 6.51876 34.8766C6.46656 34.8248 6.42513 34.7631 6.39687 34.6952C6.3686 34.6272 6.35405 34.5544 6.35405 34.4808V5.3604C6.35405 5.21145 6.41322 5.06861 6.51854 4.96329C6.62386 4.85797 6.76671 4.7988 6.91565 4.7988H6.99485C7.06904 4.79784 7.14267 4.81169 7.21144 4.83952C7.28021 4.86736 7.34274 4.90863 7.39537 4.96093C7.44799 5.01322 7.48967 5.07549 7.51794 5.14408C7.54622 5.21267 7.56054 5.28621 7.56005 5.3604L7.55285 34.4808ZM9.95405 34.4808C9.95405 34.5544 9.9395 34.6272 9.91123 34.6952C9.88297 34.7631 9.84154 34.8248 9.78935 34.8766C9.73715 34.9285 9.67521 34.9695 9.6071 34.9974C9.53898 35.0252 9.46603 35.0393 9.39245 35.0388H9.31325C9.23984 35.0393 9.16707 35.0252 9.09915 34.9973C9.03123 34.9694 8.96953 34.9283 8.91762 34.8764C8.86571 34.8245 8.82463 34.7628 8.79675 34.6949C8.76888 34.627 8.75477 34.5542 8.75525 34.4808V5.3604C8.75478 5.28682 8.76886 5.21387 8.79669 5.14576C8.82452 5.07764 8.86555 5.0157 8.91741 4.9635C8.96927 4.91131 9.03094 4.86988 9.09888 4.84162C9.16681 4.81335 9.23967 4.7988 9.31325 4.7988H9.39245C9.5414 4.7988 9.68424 4.85797 9.78956 4.96329C9.89488 5.06861 9.95405 5.21145 9.95405 5.3604V34.4808Z"
											fill="currentColor"></path>
										<path
											d="M22.5611 0.9612H23.0147V0H12.9851V0.9612H13.4387C13.5123 0.960725 13.5853 0.974808 13.6534 1.00264C13.7215 1.03047 13.7834 1.07149 13.8356 1.12336C13.8878 1.17522 13.9293 1.23689 13.9575 1.30483C13.9858 1.37276 14.0003 1.44562 14.0003 1.5192V30.6396C14.0003 30.7134 13.9858 30.7864 13.9576 30.8545C13.9294 30.9227 13.888 30.9846 13.8359 31.0367C13.7837 31.0889 13.7218 31.1302 13.6537 31.1585C13.5855 31.1867 13.5125 31.2012 13.4387 31.2012H12.9851V32.1588H23.0147V31.2012H22.5611C22.4874 31.2012 22.4144 31.1867 22.3462 31.1585C22.2781 31.1302 22.2162 31.0889 22.164 31.0367C22.1119 30.9846 22.0705 30.9227 22.0423 30.8545C22.0141 30.7864 21.9995 30.7134 21.9995 30.6396V1.5192C21.9995 1.44562 22.0141 1.37276 22.0424 1.30483C22.0706 1.23689 22.1121 1.17522 22.1642 1.12336C22.2164 1.07149 22.2784 1.03047 22.3465 1.00264C22.4146 0.974808 22.4876 0.960725 22.5611 0.9612ZM16.1999 30.6396C16.1999 30.7134 16.1854 30.7864 16.1572 30.8545C16.129 30.9227 16.0876 30.9846 16.0355 31.0367C15.9833 31.0889 15.9214 31.1302 15.8533 31.1585C15.7851 31.1867 15.7121 31.2012 15.6383 31.2012H15.5591C15.4856 31.2012 15.4127 31.1866 15.3448 31.1584C15.2768 31.1301 15.2152 31.0887 15.1633 31.0365C15.1114 30.9843 15.0704 30.9224 15.0426 30.8542C15.0147 30.7861 15.0007 30.7132 15.0011 30.6396V1.5192C15.0007 1.44579 15.0148 1.37301 15.0426 1.3051C15.0705 1.23718 15.1116 1.17548 15.1635 1.12357C15.2154 1.07166 15.2771 1.03057 15.345 1.0027C15.413 0.974828 15.4857 0.960722 15.5591 0.9612H15.6383C15.7119 0.960725 15.7849 0.974808 15.853 1.00264C15.9211 1.03047 15.983 1.07149 16.0352 1.12336C16.0874 1.17522 16.1289 1.23689 16.1571 1.30483C16.1854 1.37276 16.1999 1.44562 16.1999 1.5192V30.6396ZM18.6011 30.6396C18.6011 30.7134 18.5866 30.7864 18.5584 30.8545C18.5302 30.9227 18.4888 30.9846 18.4367 31.0367C18.3845 31.0889 18.3226 31.1302 18.2545 31.1585C18.1863 31.1867 18.1133 31.2012 18.0395 31.2012H17.9603C17.8866 31.2012 17.8136 31.1867 17.7454 31.1585C17.6773 31.1302 17.6154 31.0889 17.5632 31.0367C17.5111 30.9846 17.4697 30.9227 17.4415 30.8545C17.4133 30.7864 17.3987 30.7134 17.3987 30.6396V1.5192C17.3987 1.44562 17.4133 1.37276 17.4416 1.30483C17.4698 1.23689 17.5112 1.17522 17.5634 1.12336C17.6156 1.07149 17.6776 1.03047 17.7457 1.00264C17.8138 0.974808 17.8868 0.960725 17.9603 0.9612H18.0395C18.1131 0.960725 18.1861 0.974808 18.2542 1.00264C18.3223 1.03047 18.3842 1.07149 18.4364 1.12336C18.4886 1.17522 18.5301 1.23689 18.5583 1.30483C18.5866 1.37276 18.6011 1.44562 18.6011 1.5192V30.6396ZM20.9987 30.6396C20.9992 30.7132 20.9851 30.7861 20.9573 30.8542C20.9295 30.9224 20.8884 30.9843 20.8366 31.0365C20.7847 31.0887 20.723 31.1301 20.6551 31.1584C20.5872 31.1866 20.5143 31.2012 20.4407 31.2012H20.3615C20.2878 31.2012 20.2148 31.1867 20.1466 31.1585C20.0785 31.1302 20.0166 31.0889 19.9644 31.0367C19.9123 30.9846 19.8709 30.9227 19.8427 30.8545C19.8145 30.7864 19.7999 30.7134 19.7999 30.6396V1.5192C19.7999 1.44562 19.8145 1.37276 19.8428 1.30483C19.871 1.23689 19.9125 1.17522 19.9646 1.12336C20.0168 1.07149 20.0788 1.03047 20.1469 1.00264C20.215 0.974808 20.288 0.960725 20.3615 0.9612H20.4407C20.5142 0.960722 20.5869 0.974828 20.6548 1.0027C20.7228 1.03057 20.7845 1.07166 20.8364 1.12357C20.8883 1.17548 20.9294 1.23718 20.9572 1.3051C20.9851 1.37301 20.9992 1.44579 20.9987 1.5192V30.6396Z"
											fill="currentColor"></path>
										<path
											d="M33.606 4.7988H34.0596V3.8412H24.0336V4.7988H24.48C24.5536 4.7988 24.6264 4.81335 24.6944 4.84162C24.7623 4.86988 24.824 4.91131 24.8759 4.9635C24.9277 5.0157 24.9687 5.07764 24.9966 5.14576C25.0244 5.21387 25.0385 5.28682 25.038 5.3604V34.4808C25.0385 34.5542 25.0244 34.627 24.9965 34.6949C24.9686 34.7628 24.9276 34.8245 24.8756 34.8764C24.8237 34.9283 24.762 34.9694 24.6941 34.9973C24.6262 35.0252 24.5534 35.0393 24.48 35.0388H24.0336V36H34.0596V35.0388H33.606C33.5324 35.0393 33.4595 35.0252 33.3914 34.9974C33.3233 34.9695 33.2613 34.9285 33.2091 34.8766C33.1569 34.8248 33.1155 34.7631 33.0872 34.6952C33.059 34.6272 33.0444 34.5544 33.0444 34.4808V5.3604C33.0444 5.28665 33.0589 5.21362 33.0872 5.14548C33.1154 5.07735 33.1567 5.01544 33.2089 4.96329C33.2611 4.91114 33.323 4.86977 33.3911 4.84155C33.4592 4.81332 33.5323 4.7988 33.606 4.7988ZM27.2448 34.4808C27.2453 34.5542 27.2312 34.627 27.2033 34.6949C27.1754 34.7628 27.1343 34.8245 27.0824 34.8764C27.0305 34.9283 26.9688 34.9694 26.9009 34.9973C26.833 35.0252 26.7602 35.0393 26.6868 35.0388H26.604C26.456 35.0388 26.3141 34.98 26.2094 34.8754C26.1048 34.7707 26.046 34.6288 26.046 34.4808V5.3604C26.046 5.21208 26.1047 5.06977 26.2092 4.96456C26.3138 4.85934 26.4557 4.79975 26.604 4.7988H26.6868C26.7604 4.7988 26.8332 4.81335 26.9012 4.84162C26.9691 4.86988 27.0308 4.91131 27.0827 4.9635C27.1345 5.0157 27.1755 5.07764 27.2034 5.14576C27.2312 5.21387 27.2453 5.28682 27.2448 5.3604V34.4808ZM29.646 34.4808C29.646 34.5544 29.6315 34.6272 29.6032 34.6952C29.5749 34.7631 29.5335 34.8248 29.4813 34.8766C29.4291 34.9285 29.3672 34.9695 29.2991 34.9974C29.2309 35.0252 29.158 35.0393 29.0844 35.0388H29.0052C28.9312 35.0402 28.8576 35.0268 28.7889 34.9994C28.7201 34.972 28.6576 34.931 28.6049 34.879C28.5522 34.827 28.5105 34.765 28.4822 34.6966C28.4539 34.6282 28.4395 34.5548 28.44 34.4808V5.3604C28.4395 5.28682 28.4536 5.21387 28.4814 5.14576C28.5093 5.07764 28.5503 5.0157 28.6022 4.9635C28.654 4.91131 28.7157 4.86988 28.7836 4.84162C28.8516 4.81335 28.9244 4.7988 28.998 4.7988H29.0772C29.2262 4.7988 29.369 4.85797 29.4743 4.96329C29.5796 5.06861 29.6388 5.21145 29.6388 5.3604L29.646 34.4808ZM32.0472 34.4808C32.0472 34.5544 32.0327 34.6272 32.0044 34.6952C31.9761 34.7631 31.9347 34.8248 31.8825 34.8766C31.8303 34.9285 31.7684 34.9695 31.7003 34.9974C31.6321 35.0252 31.5592 35.0393 31.4856 35.0388H31.4064C31.3328 35.0393 31.2599 35.0252 31.1918 34.9974C31.1237 34.9695 31.0617 34.9285 31.0095 34.8766C30.9573 34.8248 30.9159 34.7631 30.8876 34.6952C30.8594 34.6272 30.8448 34.5544 30.8448 34.4808V5.3604C30.8448 5.28665 30.8593 5.21362 30.8876 5.14548C30.9158 5.07735 30.9571 5.01544 31.0093 4.96329C31.0614 4.91114 31.1234 4.86977 31.1915 4.84155C31.2596 4.81332 31.3327 4.7988 31.4064 4.7988H31.4856C31.6333 4.80069 31.7743 4.8607 31.8781 4.96581C31.9818 5.07093 32.04 5.21269 32.04 5.3604L32.0472 34.4808Z"
											fill="currentColor"></path>
										<path d="M33.048 34.0812H35.0028V33.12H33.048V34.0812Z" fill="currentColor"></path>
										<path d="M10.4833 34.0812H25.5205V33.12H10.4833V34.0812Z" fill="currentColor"></path>
										<path d="M48 7.3436V30.182H56.0172V5L48 7.3436Z" fill="currentColor"></path>
										<path
											d="M71.8032 11.0264C71.7676 10.6913 71.7136 10.3584 71.6413 10.0292C71.4371 8.90094 70.9049 7.85787 70.1113 7.0304C68.9425 5.8688 67.4221 5.288 65.5501 5.288C64.0148 5.33769 62.5087 5.72096 61.1365 6.4112C59.5957 7.1312 57.8893 8.3648 56.0173 10.112L55.7473 10.364L54.75 11.2568L55.3441 11.7968L56.0173 11.1812L56.2873 10.9328C56.87 10.3601 57.5519 9.89779 58.2997 9.5684C58.9722 9.29137 59.6927 9.14947 60.4201 9.1508C60.8986 9.1331 61.3752 9.22064 61.8162 9.40725C62.2573 9.59386 62.6519 9.87499 62.9724 10.2308C63.6096 10.9508 63.9301 11.9624 63.9301 13.2944V30.2144H71.8681V12.3368C71.8692 11.8992 71.8476 11.4618 71.8032 11.0264ZM86.6353 12.362C86.3665 9.962 85.6609 8.1848 84.5185 7.0304C83.9462 6.45366 83.2611 6.00122 82.506 5.70141C81.7509 5.4016 80.942 5.26086 80.1301 5.288C78.6321 5.31005 77.1661 5.72464 75.8785 6.4904C74.2951 7.44875 72.8664 8.64195 71.6413 10.0292L71.4361 10.256L70.5433 11.2568L71.1373 11.7968L71.8032 11.0264L71.9761 10.8248C72.4678 10.3345 73.0265 9.9163 73.6357 9.5828C74.1628 9.30049 74.7513 9.15213 75.3493 9.1508C75.7988 9.13037 76.2467 9.21773 76.6557 9.4056C77.0646 9.59347 77.4227 9.87641 77.7001 10.2308C78.2581 10.9508 78.6073 11.9624 78.7513 13.2944L80.5513 30.2144H88.7521L86.6353 12.362Z"
											fill="currentColor"></path>
										<path
											d="M111.529 7.2212C109.928 5.9132 107.528 5.2604 104.329 5.2628C101.862 5.2628 99.8005 5.5952 98.1445 6.26C96.4885 6.9248 95.2417 7.7528 94.4041 8.744C93.5689 9.7352 93.1513 10.7252 93.1513 11.714C93.1513 12.7028 93.4249 13.4552 93.9721 13.9712C94.5818 14.5009 95.3721 14.7755 96.1789 14.738C97.2891 14.786 98.3742 14.3984 99.2029 13.658C99.577 13.3223 99.8745 12.9099 100.075 12.449C100.276 11.9881 100.375 11.4894 100.366 10.9868V8.5028C100.363 8.18915 100.426 7.87844 100.55 7.59031C100.674 7.30217 100.856 7.04288 101.086 6.8288C101.37 6.57642 101.702 6.38285 102.061 6.25927C102.421 6.1357 102.801 6.08456 103.181 6.1088C103.561 6.09027 103.94 6.16181 104.287 6.31759C104.635 6.47336 104.94 6.70897 105.179 7.0052C105.695 7.71046 105.95 8.57347 105.899 9.446V27.3488L106.331 27.0788V27.4388C106.331 27.554 106.331 27.6656 106.349 27.7736C106.391 28.1745 106.517 28.5621 106.719 28.9112C106.92 29.2603 107.193 29.5633 107.519 29.8004C108.311 30.4244 109.535 30.7352 111.191 30.7328C112.129 30.7586 113.063 30.6072 113.945 30.2864V12.7148C113.938 10.3556 113.132 8.5244 111.529 7.2212ZM105.899 27.0968C105.12 27.7545 104.136 28.1199 103.116 28.13C102.653 28.142 102.193 28.0457 101.774 27.8488C101.355 27.6519 100.987 27.3599 100.7 26.996C100.079 26.24 99.7681 25.106 99.7681 23.594C99.7681 22.0292 100.092 20.8292 100.74 19.994C101.059 19.5779 101.473 19.2452 101.948 19.0245C102.424 18.8037 102.945 18.7016 103.469 18.7268C104.083 18.7208 104.695 18.7934 105.29 18.9428C105.496 18.996 105.699 19.0597 105.899 19.1336C106.241 19.2514 106.575 19.3946 106.896 19.562L107.274 18.9428C106.832 18.7021 106.373 18.4963 105.899 18.3272L105.398 18.1688C104.557 17.95 103.69 17.8494 102.821 17.87C99.0409 17.87 96.2593 18.4964 94.4761 19.7492C93.6375 20.2913 92.9517 21.0391 92.4841 21.9213C92.0165 22.8036 91.7827 23.7909 91.8049 24.7892C91.7866 25.6128 91.9598 26.4295 92.3109 27.1748C92.662 27.92 93.1814 28.5736 93.8281 29.084C95.1793 30.2 96.9169 30.758 99.0409 30.758C100.658 30.7689 102.257 30.4183 103.721 29.732C104.724 29.275 105.622 28.617 106.36 27.7988C106.642 27.4834 106.897 27.1451 107.123 26.7872L106.691 26.2472C106.466 26.5648 106.2 26.8505 105.899 27.0968Z"
											fill="currentColor"></path>
										<path
											d="M137.305 5.882L130.897 24.242L124.111 5.882H115.831L124.842 29.48C124.924 29.7164 125.079 29.9206 125.285 30.0632C125.485 30.1812 125.715 30.241 125.947 30.236H129.241C129.458 30.2396 129.672 30.1889 129.864 30.0884C130.06 29.97 130.204 29.7824 130.267 29.5628L138.659 5.882H137.305Z"
											fill="currentColor"></path>
										<path
											d="M189.156 11.9588C188.899 9.7436 188.278 8.078 187.291 6.962C186.305 5.846 184.909 5.288 183.105 5.288C181.905 5.288 180.577 5.6936 179.123 6.5048C177.39 7.53815 175.767 8.7443 174.277 10.1048L174.036 10.3208L173.007 11.2136L173.579 11.768L174.281 11.1812L174.58 10.9328C175.138 10.4021 175.771 9.95584 176.459 9.608C177.028 9.31917 177.657 9.16637 178.295 9.1616C178.681 9.13582 179.068 9.20312 179.422 9.35786C179.777 9.5126 180.089 9.75025 180.333 10.0508C180.791 10.646 181.102 11.5916 181.265 12.8876L183.025 30.1928H191.233L189.156 11.9588Z"
											fill="currentColor"></path>
										<path d="M166.26 7.3472V30.182H174.277V5.0252L166.26 7.3472Z" fill="currentColor"></path>
										<path
											d="M162.444 15.872C162.477 13.9751 162.021 12.1017 161.119 10.4324C160.25 8.85138 158.954 7.54654 157.379 6.66681C155.603 5.70816 153.607 5.2327 151.59 5.28801C149.239 5.22961 146.914 5.79344 144.851 6.92241C142.965 7.99662 141.437 9.60322 140.459 11.5412C139.393 13.7006 138.864 16.0853 138.918 18.4928C138.869 20.7395 139.408 22.9601 140.484 24.9332C141.492 26.7486 142.989 28.2452 144.804 29.2532C146.751 30.306 148.938 30.8356 151.151 30.7904C153.11 30.8241 155.049 30.3896 156.806 29.5232C158.405 28.7363 159.77 27.5448 160.766 26.0672C161.736 24.6164 162.279 22.9225 162.332 21.1784C162.336 21.1341 162.336 21.0895 162.332 21.0452H161.504C161.403 21.7793 161.153 22.4848 160.768 23.1182C160.384 23.7516 159.873 24.2995 159.269 24.728C157.926 25.6514 156.322 26.1196 154.693 26.0636C152.173 26.0636 150.133 25.1864 148.573 23.432C147.292 21.9776 146.542 19.8752 146.323 17.1248H162.426L162.444 15.872ZM154.477 16.1168H146.284C146.284 15.8504 146.284 15.5804 146.284 15.3068C146.24 13.5928 146.426 11.8807 146.838 10.2164C147.205 8.91321 147.714 7.95321 148.364 7.33641C148.653 7.04181 148.998 6.80764 149.378 6.64755C149.758 6.48747 150.166 6.40468 150.578 6.40401C151.658 6.40401 152.58 7.12401 153.343 8.56401C154.106 10.004 154.489 12.2936 154.492 15.4328L154.477 16.1168Z"
											fill="currentColor"></path>
									</svg>
								</div>
							</a>
							<div class="hidden md:block">
								<div class="relative flex items-center"><button class="b1 hover:text-primary ">
										<div class="flex items-center space-x-2"><span>Browse Courses</span><svg width="16" height="16"
												viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M13 6L8 11L3 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
													stroke-linejoin="round"></path>
											</svg></div>
									</button></div>
							</div>
							<div class="hidden md:block">
								<div class="md:w-60 lg:w-80 xl:w-115">
									<div
										class="flex w-full rounded-5xl border px-4 py-3 bg-black/5 border-black/5 focus-within:bg-white/95 focus-within:border-black/80 p3">
										<svg class="mr-3 text-gray-900" width="16" height="16" viewBox="0 0 16 16" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd"
												d="M2.5999 7.25C2.5999 4.68188 4.68177 2.6 7.2499 2.6C9.81802 2.6 11.8999 4.68188 11.8999 7.25C11.8999 8.53251 11.3807 9.69376 10.541 10.535C10.5399 10.5361 10.5388 10.5372 10.5377 10.5383C10.5366 10.5393 10.5356 10.5404 10.5345 10.5415C9.69328 11.381 8.5322 11.9 7.2499 11.9C4.68177 11.9 2.5999 9.81812 2.5999 7.25ZM10.9403 11.7894C9.93358 12.6088 8.64911 13.1 7.2499 13.1C4.01903 13.1 1.3999 10.4809 1.3999 7.25C1.3999 4.01914 4.01903 1.4 7.2499 1.4C10.4808 1.4 13.0999 4.01914 13.0999 7.25C13.0999 8.64944 12.6085 9.93412 11.7888 10.9409L14.4238 13.5758C14.6581 13.8101 14.6581 14.19 14.4238 14.4243C14.1895 14.6586 13.8096 14.6586 13.5752 14.4243L10.9403 11.7894Z"
												fill="currentColor"></path>
										</svg><input class="grow bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-700 "
											placeholder="What do you want to learn?" type="text" value=""></div>
								</div>
							</div>
						</div>
						<div>
							<div class="hidden lg:flex lg:items-center lg:space-x-8">
								<div class="flex items-center space-x-4">
									<div class=""><a href="/login?next=%2Fdair-ai%2Fprompt-engineering-llms"><button
												class="b2 hover:text-primary ">Login</button></a></div>
									<div class="md:hidden"><a href="/signup?next=%2Fdair-ai%2Fprompt-engineering-llms">
											<div class="prose-product-sm sm:prose-product-lg"><button data-cy=""
													class=" justify-center items-center flex shadow-sm hover:shadow-md disabled:shadow-none ease-out duration-200 font-medium disabled:cursor-default h-9 px-4 b2 rounded-lg border border-gray-300 bg-white box hover:border-gray-500 hover:bg-gray-100 disabled:bg-gray-300"
													type="button">Sign up</button></div>
										</a></div>
									<div class="hidden md:block"><a href="/signup?next=%2Fdair-ai%2Fprompt-engineering-llms">
											<div class="prose-product-sm sm:prose-product-lg"><button data-cy=""
													class=" justify-center items-center flex shadow-sm hover:shadow-md disabled:shadow-none ease-out duration-200 font-medium disabled:cursor-default h-10 px-4 b2 rounded-lg border border-gray-300 bg-white box hover:border-gray-500 hover:bg-gray-100 disabled:bg-gray-300"
													type="button">Sign up</button></div>
										</a></div>
								</div>
							</div>
							<div class="flex items-center space-x-2 md:hidden">
								<div class="md:hidden"><a href="/signup?next=%2Fdair-ai%2Fprompt-engineering-llms">
										<div class="prose-product-sm sm:prose-product-lg"><button data-cy=""
												class=" justify-center items-center flex shadow-sm hover:shadow-md disabled:shadow-none ease-out duration-200 font-medium disabled:cursor-default h-9 px-4 b2 rounded-lg border border-gray-300 bg-white box hover:border-gray-500 hover:bg-gray-100 disabled:bg-gray-300"
												type="button">Sign up</button></div>
									</a></div>
								<div class="hidden md:block"><a href="/signup?next=%2Fdair-ai%2Fprompt-engineering-llms">
										<div class="prose-product-sm sm:prose-product-lg"><button data-cy=""
												class=" justify-center items-center flex shadow-sm hover:shadow-md disabled:shadow-none ease-out duration-200 font-medium disabled:cursor-default h-10 px-4 b2 rounded-lg border border-gray-300 bg-white box hover:border-gray-500 hover:bg-gray-100 disabled:bg-gray-300"
												type="button">Sign up</button></div>
									</a></div><button class="flex h-9 w-9 items-center justify-center"><svg class="" width="24"
										height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd"
											d="M2.5999 7.25C2.5999 4.68188 4.68177 2.6 7.2499 2.6C9.81802 2.6 11.8999 4.68188 11.8999 7.25C11.8999 8.53251 11.3807 9.69376 10.541 10.535C10.5399 10.5361 10.5388 10.5372 10.5377 10.5383C10.5366 10.5393 10.5356 10.5404 10.5345 10.5415C9.69328 11.381 8.5322 11.9 7.2499 11.9C4.68177 11.9 2.5999 9.81812 2.5999 7.25ZM10.9403 11.7894C9.93358 12.6088 8.64911 13.1 7.2499 13.1C4.01903 13.1 1.3999 10.4809 1.3999 7.25C1.3999 4.01914 4.01903 1.4 7.2499 1.4C10.4808 1.4 13.0999 4.01914 13.0999 7.25C13.0999 8.64944 12.6085 9.93412 11.7888 10.9409L14.4238 13.5758C14.6581 13.8101 14.6581 14.19 14.4238 14.4243C14.1895 14.6586 13.8096 14.6586 13.5752 14.4243L10.9403 11.7894Z"
											fill="currentColor"></path>
									</svg></button><button class="flex h-9 w-9 items-center justify-center"><svg width="24" height="24"
										viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd"
											d="M2 4C2 3.66863 2.35039 3.4 2.78261 3.4H13.2174C13.6496 3.4 14 3.66863 14 4C14 4.33137 13.6496 4.6 13.2174 4.6H2.78261C2.35039 4.6 2 4.33137 2 4ZM2 8C2 7.66863 2.35039 7.4 2.78261 7.4H13.2174C13.6496 7.4 14 7.66863 14 8C14 8.33137 13.6496 8.6 13.2174 8.6H2.78261C2.35039 8.6 2 8.33137 2 8ZM2.78261 11.4C2.35039 11.4 2 11.6686 2 12C2 12.3314 2.35039 12.6 2.78261 12.6H13.2174C13.6496 12.6 14 12.3314 14 12C14 11.6686 13.6496 11.4 13.2174 11.4H2.78261Z"
											fill="currentColor"></path>
									</svg></button>
							</div>
						</div>
					</div>
				</nav>
			</div>
			<div
				class="fixed top-0 left-0 right-0 z-20 flex h-15 items-center border-b border-gray-300 bg-white px-4 transition-all duration-300 lg:hidden invisible opacity-0">
				<p class="b1">Prompt Engineering for LLMs</p>
			</div>
		</div>
		<div id="hero">
			<div class="clp-bg-white prose-sm w-full md:prose-md">
				<div class="md:px-10 xl:px-20 ">
					<div class="2xl:mx-auto 2xl:max-w-320">
						<div class="block pt-15 md:hidden">
							<div class="relative h-auto w-full overflow-hidden pt-[75%]  pt-[56.25%]"><span
									style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
										alt="Hero image"
										sizes="100vw, (max-width: 1024px) 400px, (max-width: 1280px) 440px, (min-width: 1536px) 576px"
										
										src="https://maven.com/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FyzkdgaPQNuY5KLXuXLch_Copy%20of%20Course%20Image%20-%20Light%20Template%201.png&w=1536&q=75"
										decoding="async" data-nimg="fill"
										style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"></span>
							</div>
							<div class="space-y-4 px-4 py-8 sm:px-6">
								<h1>Prompt Engineering for LLMs</h1>
								<div class="l1 flex flex-wrap items-center gap-y-2">
									<div class="b4 w-11 rounded-sm-md bg-gray-400 py-0.5 text-center uppercase text-gray-900">New</div>
									<span class="mx-2">·</span>
									<div class="flex items-center hover:cursor-pointer">
										<p>2 Weeks</p><span class="mx-2">·</span>
									</div>
									<p class="l1">Cohort-based Course</p>
								</div>
								<p class="p0 whitespace-pre-wrap">Use the latest prompt engineering techniques and tools to improve the
									capabilities, performance, and reliability of LLMs. </p>
							</div>
						</div>
						<div class="hidden pb-8 pt-32 md:block lg:pt-16">
							<div class="flex justify-between">
								<div class="w-full space-y-6 pr-6">
									<h1>Prompt Engineering for LLMs</h1>
									<div class="l1 flex flex-wrap items-center gap-y-2">
										<div class="b4 w-11 rounded-sm-md bg-gray-400 py-0.5 text-center uppercase text-gray-900">New</div>
										<span class="mx-2">·</span>
										<div class="flex items-center hover:cursor-pointer">
											<p>2 Weeks</p><span class="mx-2">·</span>
										</div>
										<p class="l1">Cohort-based Course</p>
									</div>
									<p class="p0 whitespace-pre-wrap">Use the latest prompt engineering techniques and tools to improve
										the capabilities, performance, and reliability of LLMs. </p>
									<div>
										<div>
											<div class="w-fit"><a href="/dair-ai/prompt-engineering-llms/2/join">
													<div class="prose-product-sm sm:prose-product-lg"><button data-cy=""
															class="mt-6 clp-text-white clp-bg-primary hover:opacity-90 hover:clp-bg-primary justify-center items-center flex shadow-sm hover:shadow-md disabled:shadow-none ease-out duration-200 font-medium disabled:cursor-default h-14 px-6 b1 rounded-.5xl bg-gray-900 text-white hover:bg-black disabled:bg-gray-500"
															type="button">Enroll today</button></div>
												</a></div>
										</div>
									</div>
								</div>
								<div class="mt-4 w-9/20 shrink-0 ">
									<div class="relative h-auto w-full overflow-hidden pt-[75%] rounded-2xl pt-[56.25%]"><span
											style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
												alt="Hero image"
												sizes="100vw, (max-width: 1024px) 400px, (max-width: 1280px) 440px, (min-width: 1536px) 576px"
												srcset="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F0fez4MakTpKnyq34qnzj_Screenshot%202023-05-29%20at%2014.38.19.png&amp;w=415&amp;q=75 415w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F0fez4MakTpKnyq34qnzj_Screenshot%202023-05-29%20at%2014.38.19.png&amp;w=768&amp;q=75 768w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F0fez4MakTpKnyq34qnzj_Screenshot%202023-05-29%20at%2014.38.19.png&amp;w=1024&amp;q=75 1024w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F0fez4MakTpKnyq34qnzj_Screenshot%202023-05-29%20at%2014.38.19.png&amp;w=1280&amp;q=75 1280w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F0fez4MakTpKnyq34qnzj_Screenshot%202023-05-29%20at%2014.38.19.png&amp;w=1536&amp;q=75 1536w"
												src="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F0fez4MakTpKnyq34qnzj_Screenshot%202023-05-29%20at%2014.38.19.png&amp;w=1536&amp;q=75"
												decoding="async" data-nimg="fill"
												style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="instructor-intro">
			<div class="clp-bg-white prose-sm w-full md:prose-md">
				<div class="px-4 sm:px-6 md:px-10 xl:px-20 ">
					<div class="2xl:mx-auto 2xl:max-w-320">
						<div class="w-full lg:w-11/20">
							<p class="l1 pb-4 text-gray-700">Hosted by</p>
							<div class="mr-6 hidden md:block">
								<div class="flex items-center text-gray-900">
									<div class="flex">
										<div class="-ml-2 first:ml-0">
											<div
												class="border border-accent1 relative h-18 w-18 rounded-5xl bg-white p-0.5 md:h-22 md:w-22 md:p-1">
												<span
													style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative"><span
														style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:100%"></span><img
														src="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1536&amp;q=75"
														decoding="async" data-nimg="responsive"
														class="rounded-4xl object-cover duration-300 ease-in-out"
														style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
														sizes="100vw"
														srcset="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=415&amp;q=75 415w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=768&amp;q=75 768w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1024&amp;q=75 1024w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1280&amp;q=75 1280w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1536&amp;q=75 1536w"></span>
											</div>
										</div>
									</div>
									<div class="ml-3">
										<p class="b1 mb-1.5">Elvis Saravia</p>
										<p class="p2">Founder &amp; Lead AI Scientist @ DAIR.AI, Prev: Meta AI, Galactica LLM, Elastic</p>
									</div>
								</div>
							</div>
							<div class="block md:hidden">
								<div class="flex flex-col space-y-3">
									<div class="flex">
										<div class="-ml-2 first:ml-0">
											<div
												class="border border-primary relative h-18 w-18 rounded-5xl bg-white p-0.5 md:h-22 md:w-22 md:p-1">
												<span
													style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative"><span
														style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:100%"></span><img
														src="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1536&amp;q=75"
														decoding="async" data-nimg="responsive"
														class="rounded-4xl object-cover duration-300 ease-in-out"
														style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
														sizes="100vw"
														srcset="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=415&amp;q=75 415w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=768&amp;q=75 768w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1024&amp;q=75 1024w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1280&amp;q=75 1280w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1536&amp;q=75 1536w"></span>
											</div>
										</div>
									</div>
									<div class="flex flex-col justify-center text-gray-900">
										<p class="b1 mb-1.5">Elvis Saravia</p>
										<p class="p2">Founder &amp; Lead AI Scientist @ DAIR.AI, Prev: Meta AI, Galactica LLM, Elastic</p>
									</div>
								</div>
							</div>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
		<div id="overview">
			<div class="clp-bg-white prose-sm w-full md:prose-md">
				<div class="px-4 sm:px-6 md:px-10 xl:px-20 ">
					<div class="2xl:mx-auto 2xl:max-w-320">
						<div class="block lg:hidden">
							<div class="bg-white border-gray-300 border-t border-b py-6">
								<div class="prose-sm flex items-start space-x-4 md:prose-md"><svg width="32" height="32"
										viewBox="0 0 32 32" class="pt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M19.2501 16.9347C19.2501 16.8647 19.2301 16.8047 19.2301 16.7348C19.2301 15.5851 20.2001 15.0953 20.2601 15.0653C26.7001 11.7463 29.7001 7.87753 29.9801 2.52921L30.0101 1.99937L28.0101 0H2.58008L2.61008 0.529833C2.75008 3.21899 3.59008 5.52827 5.20008 7.58762H5.18008C5.18008 7.58762 5.23008 7.64761 5.32008 7.74758C5.39008 7.83755 5.46008 7.91752 5.54008 8.00749C5.82008 8.33739 6.26008 8.85722 6.83008 9.48702C7.48008 10.2068 8.69008 11.2265 8.69008 11.2265C9.93008 12.3961 11.4701 13.4858 13.3401 14.5255C13.3401 14.5954 13.3601 14.6554 13.3601 14.7254C13.3601 15.875 12.3901 16.3649 12.3301 16.3949C5.89008 19.7138 2.89008 23.5826 2.61008 28.9309L2.58008 29.4608L4.58008 31.4602H30.0001L29.9701 30.9303C29.8701 28.9409 29.3801 27.1715 28.4801 25.542C28.0201 24.7123 25.6701 20.4536 19.2401 16.9347H19.2501Z"
											fill="#255815"></path>
										<path
											d="M17.7901 17.2846C17.7401 17.2646 16.2201 16.5148 16.2201 14.7354C16.2201 12.9559 17.7401 12.2062 17.8001 12.1762C23.7401 9.11714 26.5101 5.74819 26.9301 1.00967H3.64014C4.06014 5.74819 6.83014 9.11714 12.7801 12.1762C12.8301 12.1962 14.3501 12.9459 14.3501 14.7254C14.3501 16.5048 12.8301 17.2546 12.7701 17.2846C6.83014 20.3436 4.06014 23.7126 3.64014 28.4511H26.9401C26.5201 23.7126 23.7501 20.3436 17.8001 17.2846H17.7901ZM13.2001 11.2665C8.42014 8.80723 5.53014 6.27803 4.78014 2.00936H25.8001C25.0501 6.27803 22.1501 8.81723 17.3401 11.2865C16.6801 11.6064 15.5701 12.5261 15.2901 14.0256C15.0101 12.5261 13.9001 11.6064 13.2001 11.2665ZM4.78014 27.4514C5.53014 23.1827 8.43014 20.6435 13.2401 18.1643C13.9001 17.8544 15.0101 16.9347 15.2901 15.4252C15.5701 16.9247 16.6801 17.8444 17.3801 18.1843C22.1601 20.6435 25.0501 23.1727 25.8001 27.4414H4.78014V27.4514Z"
											fill="white"></path>
										<path
											d="M17.3803 18.1943C16.6803 17.8644 15.5703 16.9447 15.2903 15.4352C15.0103 16.9347 13.9003 17.8544 13.2403 18.1743C8.43027 20.6535 5.53027 23.1827 4.78027 27.4614H25.8003C25.0503 23.1927 22.1603 20.6635 17.3803 18.2043V18.1943Z"
											fill="#A7D067"></path>
										<path
											d="M17.3403 11.2865C22.1503 8.80724 25.0503 6.27803 25.8003 2.00937H4.78027C5.53027 6.27803 8.43027 8.80724 13.2003 11.2665C13.9003 11.5964 15.0103 12.5161 15.2903 14.0256C15.5703 12.5261 16.6803 11.6064 17.3403 11.2865Z"
											fill="#A7D067"></path>
									</svg>
									<div class="space-y-2">
										<p class="b2 text-gray-800">Last chance to enroll</p>
										<div class="p2 flex items-center space-x-1">
											<p class="p1 font-bold">6</p>
											<p class="p2">days</p>
											<p class="p1 font-bold">14</p>
											<p class="p2">hours</p>
											<p class="p1 font-bold">11</p>
											<p class="p2">mins</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex justify-between lg:pb-20">
							<div class="w-full lg:w-3/5">
								<div id="course-overview" class="border-b border-solid border-gray-300 last:border-b-0">
									<div class="clp-bg-white prose-sm w-full md:prose-md">
										<div class=" py-12">
											<div class="2xl:mx-auto 2xl:max-w-320">
												<p class="l1 mb-8 uppercase text-gray-700">Course overview</p>
												<div class="space-y-6">
													<h3>Effectively building and exploring with LLMs</h3>
													<div class="md:h-full md:overflow-visible overflow-hidden h-80">
														<div class="clp-section p2">
															<div class="sanitized-html">
																<p>LLMs (Large Language Models) show powerful capabilities, but not knowing how to
																	effectively and efficiently use them often leads to unexpected behaviors.&nbsp;Prompt
																	engineering helps to&nbsp;reduce failure cases and computing costs related to building
																	with LLMs.</p>
																<p><br></p>
																<p>This hands-on prompt engineering course covers:</p>
																<p><br></p>
																<p>- how to design, test and optimize prompts</p>
																<p>- prompt engineering techniques and tactics to help build efficient, reliable,
																	useful, and safe systems with LLMs</p>
																<p>- advanced prompt engineering techniques (e.g., few-shot learning, ReAct,
																	chain-of-thought, RAG) that enable applications and capabilities like emotion
																	analysis, information extraction, chatting with your data, and connecting LLMs with
																	external tools and data sources</p>
																<p>- prompt engineering tools like LangChain, DUST, OpenAI Python client, and many more
																</p>
																<p>- exercises, demos, use cases, applications, and the latest papers related to prompt
																	engineering</p>
																<p><br></p>
																<p>Network and join a community building and exploring with LLMs.</p>
																<p><br></p>
																<p>Elvis, the instructor for this course, has vast experience doing research and
																	building with LLMs. He is a co-creator of the Galactica LLM and author of the popular
																	Prompt Engineering Guide. He has taught experts in companies like LinkedIn, Amazon,
																	Coinbase, Inuit, JPMorgan Chase &amp; Co, and many others. He has worked with
																	world-class teams like Papers with Code, PyTorch, FAIR, Meta AI, Elastic, and many
																	other AI startups.</p>
															</div>
														</div>
													</div>
													<div class="prose-product-sm sm:prose-product-lg"><button data-cy=""
															class="md:hidden false justify-center items-center flex shadow-sm hover:shadow-md disabled:shadow-none ease-out duration-200 font-medium disabled:cursor-default h-12 px-6 b2 rounded-lg border border-gray-300 bg-white box hover:border-gray-500 hover:bg-gray-100 disabled:bg-gray-300"
															type="button">Read more<svg class="ml-2" width="16" height="16" viewBox="0 0 16 16"
																fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M13 6L8 11L3 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
																	stroke-linejoin="round"></path>
															</svg></button></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div id="target-audience" class="border-b border-solid border-gray-300 last:border-b-0">
									<div class="clp-bg-white prose-sm w-full md:prose-md">
										<div class=" py-12">
											<div class="2xl:mx-auto 2xl:max-w-320">
												<div class="space-y-6">
													<div class="flex justify-between">
														<h3>Who is this course for</h3>
													</div>
													<div class="-mx-0.5 hidden sm:block md:-mx-1">
														<div class="w-full">
															<div class="slick-slider slick-initialized">
																<div class="slick-list">
																	<div class="slick-track" style="width: 753px; left: 0px; opacity: 1;">
																		<div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1"
																			aria-hidden="false" style="outline: none; width: 251px;">
																			<div>
																				<div class="h-full px-1 md:px-2" tabindex="-1"
																					style="width:100%;display:inline-block">
																					<div
																						class="h-full space-y-3 rounded-3xl border border-solid p-4 clp-bg-white clp-border-gray-300 lg:space-y-4 lg:p-6">
																						<div class="relative h-12 w-12">
																							<div class="h-full w-full rounded-full opacity-5 clp-bg-primary"></div>
																							<p
																								class="b1 absolute top-0 flex h-full w-full items-center justify-center overflow-hidden text-center clp-text-primary">
																								01</p>
																						</div>
																						<div class="clp-section p2 inline min-w-0 break-words md:block">
																							<div class="sanitized-html">
																								<p><strong>ML engineers </strong>or <strong>software engineers
																									</strong>building applications on top of LLMs</p>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div data-index="1" class="slick-slide slick-active" tabindex="-1"
																			aria-hidden="false" style="outline: none; width: 251px;">
																			<div>
																				<div class="h-full px-1 md:px-2" tabindex="-1"
																					style="width:100%;display:inline-block">
																					<div
																						class="h-full space-y-3 rounded-3xl border border-solid p-4 clp-bg-white clp-border-gray-300 lg:space-y-4 lg:p-6">
																						<div class="relative h-12 w-12">
																							<div class="h-full w-full rounded-full opacity-5 clp-bg-primary"></div>
																							<p
																								class="b1 absolute top-0 flex h-full w-full items-center justify-center overflow-hidden text-center clp-text-primary">
																								02</p>
																						</div>
																						<div class="clp-section p2 inline min-w-0 break-words md:block">
																							<div class="sanitized-html">
																								<p><strong>AI Researchers</strong>, <strong>ML Engineers</strong>, and
																									<strong>Data Scientists</strong> wanting to reduce LLM failure cases
																									and computing costs using prompt engineering</p>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div data-index="2" class="slick-slide slick-active" tabindex="-1"
																			aria-hidden="false" style="outline: none; width: 251px;">
																			<div>
																				<div class="h-full px-1 md:px-2" tabindex="-1"
																					style="width:100%;display:inline-block">
																					<div
																						class="h-full space-y-3 rounded-3xl border border-solid p-4 clp-bg-white clp-border-gray-300 lg:space-y-4 lg:p-6">
																						<div class="relative h-12 w-12">
																							<div class="h-full w-full rounded-full opacity-5 clp-bg-primary"></div>
																							<p
																								class="b1 absolute top-0 flex h-full w-full items-center justify-center overflow-hidden text-center clp-text-primary">
																								03</p>
																						</div>
																						<div class="clp-section p2 inline min-w-0 break-words md:block">
																							<div class="sanitized-html">
																								<p>Anyone (<strong>technical</strong> or <strong>non-technical)</strong>
																									interested in testing and improving the capabilities of LLMs</p>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="flex space-x-2 overflow-x-auto sm:hidden">
														<div class="w-40 shrink-0">
															<div
																class="h-full space-y-3 rounded-3xl border border-solid p-4 clp-bg-white clp-border-gray-300 lg:space-y-4 lg:p-6">
																<div class="relative h-12 w-12">
																	<div class="h-full w-full rounded-full opacity-5 clp-bg-primary"></div>
																	<p
																		class="b1 absolute top-0 flex h-full w-full items-center justify-center overflow-hidden text-center clp-text-primary">
																		01</p>
																</div>
																<div class="clp-section p2 inline min-w-0 break-words md:block">
																	<div class="sanitized-html">
																		<p><strong>ML engineers </strong>or <strong>software engineers </strong>building
																			applications on top of LLMs</p>
																	</div>
																</div>
															</div>
														</div>
														<div class="w-40 shrink-0">
															<div
																class="h-full space-y-3 rounded-3xl border border-solid p-4 clp-bg-white clp-border-gray-300 lg:space-y-4 lg:p-6">
																<div class="relative h-12 w-12">
																	<div class="h-full w-full rounded-full opacity-5 clp-bg-primary"></div>
																	<p
																		class="b1 absolute top-0 flex h-full w-full items-center justify-center overflow-hidden text-center clp-text-primary">
																		02</p>
																</div>
																<div class="clp-section p2 inline min-w-0 break-words md:block">
																	<div class="sanitized-html">
																		<p><strong>AI Researchers</strong>, <strong>ML Engineers</strong>, and <strong>Data
																				Scientists</strong> wanting to reduce LLM failure cases and computing costs
																			using prompt engineering</p>
																	</div>
																</div>
															</div>
														</div>
														<div class="w-40 shrink-0">
															<div
																class="h-full space-y-3 rounded-3xl border border-solid p-4 clp-bg-white clp-border-gray-300 lg:space-y-4 lg:p-6">
																<div class="relative h-12 w-12">
																	<div class="h-full w-full rounded-full opacity-5 clp-bg-primary"></div>
																	<p
																		class="b1 absolute top-0 flex h-full w-full items-center justify-center overflow-hidden text-center clp-text-primary">
																		03</p>
																</div>
																<div class="clp-section p2 inline min-w-0 break-words md:block">
																	<div class="sanitized-html">
																		<p>Anyone (<strong>technical</strong> or <strong>non-technical)</strong> interested
																			in testing and improving the capabilities of LLMs</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div id="topics" class="border-b border-solid border-gray-300 last:border-b-0">
									<div class="clp-bg-white prose-sm w-full md:prose-md">
										<div class=" py-12">
											<div class="2xl:mx-auto 2xl:max-w-320">
												<div class="mx-auto space-y-6">
													<h3 class="clp-text-900 text-left">What you’ll get out of this course</h3>
													<div class="space-y-8">
														<div class="flex space-x-4"><svg class="w-6 shrink-0" width="24" height="24"
																viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="12" cy="12" r="12" fill="#009E3D"></circle>
																<path fill-rule="evenodd" clip-rule="evenodd"
																	d="M18.7897 7.21029C19.0701 7.49068 19.0701 7.94526 18.7897 8.22563L10.4136 16.6013C10.1333 16.8817 9.67871 16.8817 9.39834 16.6013L5.2103 12.4137C4.92992 12.1333 4.9299 11.6787 5.21026 11.3983C5.49062 11.118 5.9452 11.1179 6.22559 11.3983L9.90597 15.0783L17.7744 7.21027C18.0548 6.9299 18.5094 6.92991 18.7897 7.21029Z"
																	fill="white" stroke="white"></path>
															</svg>
															<div class="space-y-2">
																<h5>Design and optimize prompts</h5>
																<div class="clp-section p2 clp-text-gray-700">
																	<div class="sanitized-html">
																		<ul>
																			<li>Learn key elements and tactics for designing effective prompts </li>
																			<li>Design, test, and optimize prompts to improve model performance and
																				reliability for different tasks such as text summarization and information
																				extraction</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
														<div class="flex space-x-4"><svg class="w-6 shrink-0" width="24" height="24"
																viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="12" cy="12" r="12" fill="#009E3D"></circle>
																<path fill-rule="evenodd" clip-rule="evenodd"
																	d="M18.7897 7.21029C19.0701 7.49068 19.0701 7.94526 18.7897 8.22563L10.4136 16.6013C10.1333 16.8817 9.67871 16.8817 9.39834 16.6013L5.2103 12.4137C4.92992 12.1333 4.9299 11.6787 5.21026 11.3983C5.49062 11.118 5.9452 11.1179 6.22559 11.3983L9.90597 15.0783L17.7744 7.21027C18.0548 6.9299 18.5094 6.92991 18.7897 7.21029Z"
																	fill="white" stroke="white"></path>
															</svg>
															<div class="space-y-2">
																<h5>Apply advanced prompt engineering techniques</h5>
																<div class="clp-section p2 clp-text-gray-700">
																	<div class="sanitized-html">
																		<ul>
																			<li>Review and apply the latest and most advanced prompt engineering techniques
																			</li>
																			<li>Design a robust framework for evaluating and measuring the quality, diversity,
																				safeness, and robustness of LLMs</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
														<div class="flex space-x-4"><svg class="w-6 shrink-0" width="24" height="24"
																viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="12" cy="12" r="12" fill="#009E3D"></circle>
																<path fill-rule="evenodd" clip-rule="evenodd"
																	d="M18.7897 7.21029C19.0701 7.49068 19.0701 7.94526 18.7897 8.22563L10.4136 16.6013C10.1333 16.8817 9.67871 16.8817 9.39834 16.6013L5.2103 12.4137C4.92992 12.1333 4.9299 11.6787 5.21026 11.3983C5.49062 11.118 5.9452 11.1179 6.22559 11.3983L9.90597 15.0783L17.7744 7.21027C18.0548 6.9299 18.5094 6.92991 18.7897 7.21029Z"
																	fill="white" stroke="white"></path>
															</svg>
															<div class="space-y-2">
																<h5>Study use cases and applications</h5>
																<div class="clp-section p2 clp-text-gray-700">
																	<div class="sanitized-html">
																		<ul>
																			<li>Apply prompting techniques with LLMs for a series of common use cases and
																				applications</li>
																			<li>Cover advanced use cases such as combining knowledge with conversational
																				assistants and using LLMs with external tools</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
														<div class="flex space-x-4"><svg class="w-6 shrink-0" width="24" height="24"
																viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<circle cx="12" cy="12" r="12" fill="#009E3D"></circle>
																<path fill-rule="evenodd" clip-rule="evenodd"
																	d="M18.7897 7.21029C19.0701 7.49068 19.0701 7.94526 18.7897 8.22563L10.4136 16.6013C10.1333 16.8817 9.67871 16.8817 9.39834 16.6013L5.2103 12.4137C4.92992 12.1333 4.9299 11.6787 5.21026 11.3983C5.49062 11.118 5.9452 11.1179 6.22559 11.3983L9.90597 15.0783L17.7744 7.21027C18.0548 6.9299 18.5094 6.92991 18.7897 7.21029Z"
																	fill="white" stroke="white"></path>
															</svg>
															<div class="space-y-2">
																<h5>Learn prompt engineering tools</h5>
																<div class="clp-section p2 clp-text-gray-700">
																	<div class="sanitized-html">
																		<ul>
																			<li>Review the latest prompt engineering tools such as LangChain, DUST, Scale AI's
																				Spellbook, and many more</li>
																			<li>Discuss current trends and future directions in prompt engineering</li>
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<aside class="hidden lg:block -mt-28 relative w-1/3 pb-4">
								<div class="sticky top-28 space-y-8">
									<div class="space-y-8 bg-white md:shadow-lg md:rounded-lg md:border md:border-gray-300 md:p-6">
										<div>
											<div class="flex items-center justify-between">
												<div class="p1 font-semibold">
													<p>$800 USD</p>
												</div>
												<div class="l1 flex items-center">
													<div class="b4 w-11 rounded-sm-md bg-gray-400 py-0.5 text-center uppercase text-gray-900">New
													</div>
												</div>
											</div>
											<div class="mt-2"><a target="_blank"
													href="/expense?school=dair-ai&amp;course=prompt-engineering-llms">
													<p class="b3 text-black underline">Get reimbursed by your employer</p>
												</a></div>
										</div>
										<div class="space-y-4 md:space-y-8">
											<div class="space-y-4 md:space-y-6">
												<p class="l1 text-gray-700">Upcoming cohort</p>
												<div>
													<p class="p3 font-semibold">Cohort 2</p>
													<p class="p3">July 10 - 19, 2023</p>
													<p class="p3 mt-4">Last day to enroll: July 9, 2023</p>
												</div>
												<div class="prose-product-sm sm:prose-product-lg"><button data-cy=""
														class="clp-bg-primary hover:opacity-90 hover:clp-bg-primary justify-center items-center flex shadow-sm hover:shadow-md disabled:shadow-none ease-out duration-200 font-medium disabled:cursor-default w-full h-12 px-6 b2 rounded-.5xl bg-primary text-white hover:bg-primary-200 disabled:bg-gray-500"
														type="button">Enroll
														<!-- -->
														<!-- --> today</button></div>
											</div>
											<div class="space-y-2">
												<p class="l1 text-gray-700">Can't join this time?</p>
												<p class="p3 text-gray-900">Stay in the loop about future cohorts</p><input type="text"
													class="hidden" value="">
												<div class=" h-14 w-full sm:max-w-100">
													<div
														class="flex bg-white border shadow-sm hover:shadow-md rounded-2xl p-1 font-graphik transition ease-out duration-200 h-full items-center border-gray-300 focus-within:border-gray-900 hover:border-gray-400">
														<input type="email"
															class="disabled:bg-white border-none w-full shrink grow-0 text-gray-600 placeholder-gray-600 focus:text-gray-900 focus:outline-none p3 px-1 sm:p2 sm:px-2"
															value="" placeholder="Your email" style="line-height:1.125rem"><button aria-label="submit"
															class="clp-bg-primary shrink-0 rounded-xl text-white h-10"><span
																class="flex items-center px-6"><svg class="shrink-0" width="16" height="16"
																	viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path fill-rule="evenodd" clip-rule="evenodd"
																		d="M7.67155 1.33333L14.6667 8L7.67155 14.6667L6.93842 13.9206L12.606 8.5191H1.33333V7.48089H12.606L6.93842 2.07939L7.67155 1.33333Z"
																		fill="currentColor"></path>
																</svg></span></button></div>
												</div>
											</div>
										</div>
									</div>
									<div class="bg-white border-gray-300 border rounded-lg p-6">
										<div class="prose-sm flex items-start space-x-4 md:prose-md"><svg width="32" height="32"
												viewBox="0 0 32 32" class="pt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M19.2501 16.9347C19.2501 16.8647 19.2301 16.8047 19.2301 16.7348C19.2301 15.5851 20.2001 15.0953 20.2601 15.0653C26.7001 11.7463 29.7001 7.87753 29.9801 2.52921L30.0101 1.99937L28.0101 0H2.58008L2.61008 0.529833C2.75008 3.21899 3.59008 5.52827 5.20008 7.58762H5.18008C5.18008 7.58762 5.23008 7.64761 5.32008 7.74758C5.39008 7.83755 5.46008 7.91752 5.54008 8.00749C5.82008 8.33739 6.26008 8.85722 6.83008 9.48702C7.48008 10.2068 8.69008 11.2265 8.69008 11.2265C9.93008 12.3961 11.4701 13.4858 13.3401 14.5255C13.3401 14.5954 13.3601 14.6554 13.3601 14.7254C13.3601 15.875 12.3901 16.3649 12.3301 16.3949C5.89008 19.7138 2.89008 23.5826 2.61008 28.9309L2.58008 29.4608L4.58008 31.4602H30.0001L29.9701 30.9303C29.8701 28.9409 29.3801 27.1715 28.4801 25.542C28.0201 24.7123 25.6701 20.4536 19.2401 16.9347H19.2501Z"
													fill="#255815"></path>
												<path
													d="M17.7901 17.2846C17.7401 17.2646 16.2201 16.5148 16.2201 14.7354C16.2201 12.9559 17.7401 12.2062 17.8001 12.1762C23.7401 9.11714 26.5101 5.74819 26.9301 1.00967H3.64014C4.06014 5.74819 6.83014 9.11714 12.7801 12.1762C12.8301 12.1962 14.3501 12.9459 14.3501 14.7254C14.3501 16.5048 12.8301 17.2546 12.7701 17.2846C6.83014 20.3436 4.06014 23.7126 3.64014 28.4511H26.9401C26.5201 23.7126 23.7501 20.3436 17.8001 17.2846H17.7901ZM13.2001 11.2665C8.42014 8.80723 5.53014 6.27803 4.78014 2.00936H25.8001C25.0501 6.27803 22.1501 8.81723 17.3401 11.2865C16.6801 11.6064 15.5701 12.5261 15.2901 14.0256C15.0101 12.5261 13.9001 11.6064 13.2001 11.2665ZM4.78014 27.4514C5.53014 23.1827 8.43014 20.6435 13.2401 18.1643C13.9001 17.8544 15.0101 16.9347 15.2901 15.4252C15.5701 16.9247 16.6801 17.8444 17.3801 18.1843C22.1601 20.6435 25.0501 23.1727 25.8001 27.4414H4.78014V27.4514Z"
													fill="white"></path>
												<path
													d="M17.3803 18.1943C16.6803 17.8644 15.5703 16.9447 15.2903 15.4352C15.0103 16.9347 13.9003 17.8544 13.2403 18.1743C8.43027 20.6535 5.53027 23.1827 4.78027 27.4614H25.8003C25.0503 23.1927 22.1603 20.6635 17.3803 18.2043V18.1943Z"
													fill="#A7D067"></path>
												<path
													d="M17.3403 11.2865C22.1503 8.80724 25.0503 6.27803 25.8003 2.00937H4.78027C5.53027 6.27803 8.43027 8.80724 13.2003 11.2665C13.9003 11.5964 15.0103 12.5161 15.2903 14.0256C15.5703 12.5261 16.6803 11.6064 17.3403 11.2865Z"
													fill="#A7D067"></path>
											</svg>
											<div class="space-y-2">
												<p class="b2 text-gray-800">Last chance to enroll</p>
												<div class="p2 flex items-center space-x-1">
													<p class="p1 font-bold">6</p>
													<p class="p2">days</p>
													<p class="p1 font-bold">14</p>
													<p class="p2">hours</p>
													<p class="p1 font-bold">11</p>
													<p class="p2">mins</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</div>
		</div><span></span>
		<div id="bio">
			<div class="clp-bg-white prose-sm w-full md:prose-md">
				<div class="px-4 sm:px-6 md:px-10 xl:px-20 py-12 sm:py-20">
					<div class="2xl:mx-auto 2xl:max-w-320">
						<div class="mx-auto max-w-3xl">
							<h2 class="mb-4 max-w-200 text-left clp-text-gray-800 sm:mb-8 sm:text-center">Meet your instructor</h2>
							<div class="flex flex-col py-4 sm:flex-row sm:py-8">
								<div
									class="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl sm:h-50 sm:w-50 sm:rounded-7xl md:h-70 md:w-70">
									<span
										style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
											alt="Elvis Saravia"
											src="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1536&amp;q=75"
											decoding="async" data-nimg="fill"
											style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"
											sizes="(max-width: 415px) 80px, (max-width: 768px) 200px, 280px"
											srcset="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=415&amp;q=75 415w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=768&amp;q=75 768w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1024&amp;q=75 1024w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1280&amp;q=75 1280w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Faiqs5MXtTaSesdkf6jdF_DSCN9026.JPG&amp;w=1536&amp;q=75 1536w"></span>
								</div>
								<div class="mt-6 sm:mt-0 sm:ml-8">
									<h4 class="clp-text-gray-800">Elvis Saravia</h4>
									<div class="clp-section p2-tall mt-2 clp-text-gray-800 sm:mt-4">
										<div class="sanitized-html">
											<p>Elvis is a co-founder of DAIR.AI, where he leads all AI research, education, and engineering
												efforts. His primary interests are training and evaluating large language models and developing
												applications on top of them. He is the co-creator of the Galactica LLM and was a technical
												product marketing manager at Meta AI where he supported and advised world-class teams like FAIR,
												PyTorch, and Papers with Code. Prior to this, he was an education architect at Elastic where he
												developed technical curriculum and courses.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="cta">
			<div class="h-3 md:h-5 clp-bg-gradient-r-dark-fit"></div>
			<div class="clp-bg-dark relative overflow-hidden prose-sm w-full md:prose-md">
				<div class="px-4 sm:px-6 md:px-10 xl:px-20 py-12 sm:py-20">
					<div class="absolute inset-0 z-0"><span
							style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
								alt="A pattern of wavy dots"
								src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async"
								data-nimg="fill" class="h-full w-full object-cover opacity-5 mix-blend-multiply"
								style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img
									alt="A pattern of wavy dots" sizes="100vw"
									srcSet="/_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=415&amp;q=75 415w, /_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=768&amp;q=75 768w, /_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=1024&amp;q=75 1024w, /_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=1280&amp;q=75 1280w, /_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=1536&amp;q=75 1536w"
									src="/_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=1536&amp;q=75" decoding="async" data-nimg="fill"
									style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
									class="h-full w-full object-cover opacity-5 mix-blend-multiply" loading="lazy" /></noscript></span>
					</div>
					<div class="2xl:mx-auto 2xl:max-w-320">
						<h6 class="relative z-10 mb-3 text-center clp-text-secondary">Join an upcoming cohort</h6>
						<h2 class="relative z-10 mb-12 text-center clp-text-white sm:mb-8">Prompt Engineering for LLMs</h2>
						<div class="relative z-10 mb-8">
							<div
								class="mx-auto mt-4 hidden max-w-200 flex-col items-center justify-around rounded-3xl border border-white/20 p-8 clp-text-white clp-bg-dark first:mt-0 md:flex">
								<div class="w-full flex-row items-center justify-around md:flex">
									<div class="flex flex-col items-center">
										<p class="l1 pb-2">Cost</p>
										<p class="b1">$800 USD</p>
									</div>
									<div class="flex flex-col items-center">
										<p class="l1 pb-2">Upcoming</p>
										<p class="b1">Cohort 2</p>
									</div>
									<div class="flex flex-col items-center">
										<p class="l1 pb-2">Dates</p>
										<p class="b1">July 10 - 19, 2023</p>
									</div>
									<div class="flex flex-col items-center">
										<p class="l1 pb-2">Payment Deadline</p>
										<p class="b1">July 9, 2023</p>
									</div>
								</div>
								<p class="mt-4 font-graphik text-sm font-bold clp-text-secondary">Don't miss out!&nbsp;<span
										class="font-normal clp-text-white">Enrollment closes in 7 days</span></p>
							</div>
							<div class="mx-auto mt-4 max-w-xl rounded-3xl border border-white/10 clp-bg-dark first:mt-0 md:hidden">
								<div class="flex flex-row justify-between rounded-t-3xl bg-white/5 px-6 py-2 text-white">
									<p class="b1">Cohort 2</p>
									<p class="b1">$800 USD</p>
								</div>
								<div class="px-6 py-2">
									<div class="flex flex-row justify-between py-2">
										<p class="b1 clp-text-white">Dates</p>
										<p class="b1 clp-text-white">July 10 - 19, 2023</p>
									</div>
									<div class="flex flex-row justify-between py-2">
										<p class="b1 clp-text-white">Payment Deadline</p>
										<p class="b1 clp-text-white">July 9, 2023</p>
									</div>
									<div class="flex flex-row justify-center py-2">
										<p class="mt-4 text-center font-graphik text-sm font-bold clp-text-secondary">Don't miss
											out!&nbsp;<span class="font-normal clp-text-white">Enrollment closes in 7 days</span></p>
									</div>
								</div>
							</div>
						</div>
						<div class="relative z-10 mb-8 text-center"><a target="_blank"
								href="/expense?school=dair-ai&amp;course=prompt-engineering-llms">
								<p class="b2 text-white underline">Get reimbursed by your employer</p>
							</a></div>
						<div class="relative z-10 mb-8">
							<div><a href="/dair-ai/prompt-engineering-llms/2/join">
									<div class="prose-product-sm sm:prose-product-lg"><button data-cy=""
											class="mx-auto hidden w-60 max-w-button clp-bg-primary hover:opacity-90 hover:clp-bg-primary sm:block justify-center items-center flex shadow-sm hover:shadow-md disabled:shadow-none ease-out duration-200 font-medium disabled:cursor-default h-14 px-6 b1 rounded-.5xl bg-gray-900 text-white hover:bg-black disabled:bg-gray-500"
											type="button">Enroll today</button></div>
								</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="syllabus">
			<div class="clp-bg-white prose-sm w-full md:prose-md">
				<div class="px-4 sm:px-6 md:px-10 xl:px-20 py-12 sm:py-20">
					<div class="2xl:mx-auto 2xl:max-w-320">
						<div class="mx-auto max-w-xl">
							<h2 class="mb-4 max-w-200 text-left clp-text-gray-800 sm:text-center md:mb-8">Course syllabus</h2>
							<div class="flex flex-row items-start border-b-2 border-dotted py-8 clp-border-gray-500 last:border-b-0">
								<p class="prose-website-lg b1 mr-4 clp-text-gray-600">01</p>
								<div>
									<p class="p1 font-semibold clp-text-gray-800">Structuring Effective Prompts</p>
									<div class="clp-section p2-tall clp-text-gray-700">
										<div class="sanitized-html">
											<ul>
												<li>Discuss the key elements of designing an effective prompt&nbsp;</li>
												<li>Format prompts for common tasks using a taxonomy of prompting techniques like in-context
													learning and chain-of-thought prompting</li>
												<li>Use prompt engineering tools such as LangChain and OpenAI Python client to test prompt
													engineering techniques and tactics</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row items-start border-b-2 border-dotted py-8 clp-border-gray-500 last:border-b-0">
								<p class="prose-website-lg b1 mr-4 clp-text-gray-600">02</p>
								<div>
									<p class="p1 font-semibold clp-text-gray-800">Advanced Prompting Techniques &amp; LLM Reliability</p>
									<div class="clp-section p2-tall clp-text-gray-700">
										<div class="sanitized-html">
											<ul>
												<li>Apply advanced prompting techniques like PAL and ReAct to improve the performance of
													LLMs&nbsp;</li>
												<li>Improve model reliability and enhance LLM performance</li>
												<li>Learn from a case study about a data-augmented question-answering tool</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row items-start border-b-2 border-dotted py-8 clp-border-gray-500 last:border-b-0">
								<p class="prose-website-lg b1 mr-4 clp-text-gray-600">03</p>
								<div>
									<p class="p1 font-semibold clp-text-gray-800">AI Safety &amp; Prompt Engineering vs. Finetuning</p>
									<div class="clp-section p2-tall clp-text-gray-700">
										<div class="sanitized-html">
											<ul>
												<li>Discuss prompting techniques and approaches for assessing model safety, toxicity analysis,
													mitigating bias, reducing hallucination, and testing prompt injections</li>
												<li>Analyze, evaluate, and compare prompt engineering techniques with fine-tuned models</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="flex flex-row items-start border-b-2 border-dotted py-8 clp-border-gray-500 last:border-b-0">
								<p class="prose-website-lg b1 mr-4 clp-text-gray-600">04</p>
								<div>
									<p class="p1 font-semibold clp-text-gray-800">Prompting Tools, Advanced Use Cases, &amp; Applications
									</p>
									<div class="clp-section p2-tall clp-text-gray-700">
										<div class="sanitized-html">
											<ul>
												<li>Review the latest tools and best practices for prompt engineering to effectively build with
													language models</li>
												<li>Discuss end-to-end, real-world use cases and applications, such as combining knowledge with
													conversational bots and using LLM with external tools</li>
												<li>Discuss current trends, recommendations, and future directions</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="testimonials-2">
			<div class="clp-bg-white prose-sm w-full md:prose-md">
				<div class="px-4 sm:px-6 md:px-10 xl:px-20 py-12 sm:py-20">
					<div class="2xl:mx-auto 2xl:max-w-320">
						<div class="mx-auto max-w-6xl"><span class="l1 mx-auto mb-6 flex sm:justify-center"></span>
							<h2 class="mx-auto max-w-200 pb-8 text-left clp-text-gray-800 sm:pb-16 sm:text-center">What people are
								saying</h2>
							<div class="prose-sm flex flex-row flex-wrap justify-between md:prose-md">
								<div class="mb-16 w-full px-3 md:mb-20 md:w-1/2 lg:mb-25 lg:px-8">
									<div class="mb-4 md:mb-6">
										<div class="p1-tall relative">
											<div class="absolute">
												<div class="rounded-full clp-bg-secondary w-6 h-6 flex justify-center items-center"><svg
														width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M2.99584 5.43634H2.64632C2.08044 5.43634 1.89736 5.16777 1.89736 4.63064C1.89736 3.46686 2.81276 2.15984 4.3939 1.51528C5.02635 1.26462 5.22607 0.942343 5.14286 0.548446C5.05964 0.100837 4.69348 -0.114016 4.06103 0.065028C1.93065 0.673777 0 2.85811 0 6.20623C0 8.82026 1.16505 10.002 2.76283 10.002C4.1276 10.002 5.22607 9.01721 5.22607 7.60277C5.22607 6.31365 4.44383 5.43634 2.99584 5.43634ZM9.76976 5.43634H9.42025C8.85437 5.43634 8.67129 5.16777 8.67129 4.63064C8.67129 3.46686 9.58668 2.15984 11.1678 1.51528C11.8003 1.26462 12 0.942343 11.9168 0.548446C11.8336 0.100837 11.4674 -0.114016 10.835 0.065028C8.70458 0.673777 6.77392 2.85811 6.77392 6.20623C6.77392 8.82026 7.93897 10.002 9.53676 10.002C10.9015 10.002 12 9.01721 12 7.60277C12 6.31365 11.2011 5.43634 9.76976 5.43634Z"
															fill="#1F1F1E"></path>
													</svg></div>
											</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<!-- -->In a rapidly evolving LLM landscape, the live nature of the course enables Elvis to
											expertly tie in the latest developments when answering questions, provide pointers to foremost
											resources and share his experience working with many of the tools and frameworks out there. You
											will not want to miss this course!
										</div>
									</div>
									<div class="flex">
										<div class="shrink-0">
											<div class="relative overflow-hidden rounded-2xl  w-14 h-14 md:w-20 md:h-20"><span
													style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
														alt="Yevgeniy S. Meyer, Ph.D."
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														decoding="async" data-nimg="fill" class=""
														style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"><noscript><img
															alt="Yevgeniy S. Meyer, Ph.D." sizes="(max-width: 768px) 56px, 80px"
															srcSet="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=415&amp;q=75 415w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=768&amp;q=75 768w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=1024&amp;q=75 1024w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=1280&amp;q=75 1280w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=1536&amp;q=75 1536w"
															src="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2FGJk7U31RTOOzaVUOxt6b_1658333404120.jpeg&amp;w=1536&amp;q=75"
															decoding="async" data-nimg="fill"
															style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"
															class="" loading="lazy" /></noscript></span></div>
										</div>
										<div class="pl-3 md:pl-6">
											<p class="p0 mb-1 font-semibold">Yevgeniy S. Meyer, Ph.D.</p>
											<div class="p2 clp-text-gray-700">Director, Data Science at Guru</div>
										</div>
									</div>
								</div>
								<div class="mb-16 w-full px-3 md:mb-20 md:w-1/2 lg:mb-25 lg:px-8">
									<div class="mb-4 md:mb-6">
										<div class="p1-tall relative">
											<div class="absolute">
												<div class="rounded-full clp-bg-secondary w-6 h-6 flex justify-center items-center"><svg
														width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M2.99584 5.43634H2.64632C2.08044 5.43634 1.89736 5.16777 1.89736 4.63064C1.89736 3.46686 2.81276 2.15984 4.3939 1.51528C5.02635 1.26462 5.22607 0.942343 5.14286 0.548446C5.05964 0.100837 4.69348 -0.114016 4.06103 0.065028C1.93065 0.673777 0 2.85811 0 6.20623C0 8.82026 1.16505 10.002 2.76283 10.002C4.1276 10.002 5.22607 9.01721 5.22607 7.60277C5.22607 6.31365 4.44383 5.43634 2.99584 5.43634ZM9.76976 5.43634H9.42025C8.85437 5.43634 8.67129 5.16777 8.67129 4.63064C8.67129 3.46686 9.58668 2.15984 11.1678 1.51528C11.8003 1.26462 12 0.942343 11.9168 0.548446C11.8336 0.100837 11.4674 -0.114016 10.835 0.065028C8.70458 0.673777 6.77392 2.85811 6.77392 6.20623C6.77392 8.82026 7.93897 10.002 9.53676 10.002C10.9015 10.002 12 9.01721 12 7.60277C12 6.31365 11.2011 5.43634 9.76976 5.43634Z"
															fill="#1F1F1E"></path>
													</svg></div>
											</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<!-- -->Elvis did a great job of exploring lots of different Prompt Engineering topics, showcased
											numerous use cases. He also provided us with comprehensive notebooks filled with various examples.
											The teaching style was really approachable and relaxed, which made for some great live
											discussions. All in all, it was a pretty solid experience.
										</div>
									</div>
									<div class="flex">
										<div class="shrink-0">
											<div class="relative overflow-hidden rounded-2xl  w-14 h-14 md:w-20 md:h-20"><span
													style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
														alt="Miguel Won"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														decoding="async" data-nimg="fill" class=""
														style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"><noscript><img
															alt="Miguel Won" sizes="(max-width: 768px) 56px, 80px"
															srcSet="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=415&amp;q=75 415w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=768&amp;q=75 768w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=1024&amp;q=75 1024w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=1280&amp;q=75 1280w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=1536&amp;q=75 1536w"
															src="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F4MyGQuloT1uyN0Kxyn3B_1516782301569.jpeg&amp;w=1536&amp;q=75"
															decoding="async" data-nimg="fill"
															style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"
															class="" loading="lazy" /></noscript></span></div>
										</div>
										<div class="pl-3 md:pl-6">
											<p class="p0 mb-1 font-semibold">Miguel Won</p>
											<div class="p2 clp-text-gray-700">NLP Data Scientist at Axions Portugal</div>
										</div>
									</div>
								</div>
								<div class="mb-16 w-full px-3 md:mb-20 md:w-1/2 lg:mb-25 lg:px-8">
									<div class="mb-4 md:mb-6">
										<div class="p1-tall relative">
											<div class="absolute">
												<div class="rounded-full clp-bg-secondary w-6 h-6 flex justify-center items-center"><svg
														width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M2.99584 5.43634H2.64632C2.08044 5.43634 1.89736 5.16777 1.89736 4.63064C1.89736 3.46686 2.81276 2.15984 4.3939 1.51528C5.02635 1.26462 5.22607 0.942343 5.14286 0.548446C5.05964 0.100837 4.69348 -0.114016 4.06103 0.065028C1.93065 0.673777 0 2.85811 0 6.20623C0 8.82026 1.16505 10.002 2.76283 10.002C4.1276 10.002 5.22607 9.01721 5.22607 7.60277C5.22607 6.31365 4.44383 5.43634 2.99584 5.43634ZM9.76976 5.43634H9.42025C8.85437 5.43634 8.67129 5.16777 8.67129 4.63064C8.67129 3.46686 9.58668 2.15984 11.1678 1.51528C11.8003 1.26462 12 0.942343 11.9168 0.548446C11.8336 0.100837 11.4674 -0.114016 10.835 0.065028C8.70458 0.673777 6.77392 2.85811 6.77392 6.20623C6.77392 8.82026 7.93897 10.002 9.53676 10.002C10.9015 10.002 12 9.01721 12 7.60277C12 6.31365 11.2011 5.43634 9.76976 5.43634Z"
															fill="#1F1F1E"></path>
													</svg></div>
											</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<!-- -->The course's focus on practical applications, combined with the theoretical underpinnings,
											makes it a valuable resource for both beginners and experienced data scientists/software
											engineers.
										</div>
									</div>
									<div class="flex">
										<div class="shrink-0">
											<div class="relative overflow-hidden rounded-2xl  w-14 h-14 md:w-20 md:h-20"><span
													style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
														alt="Yashwanth (Sai) Reddy"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														decoding="async" data-nimg="fill" class=""
														style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"><noscript><img
															alt="Yashwanth (Sai) Reddy" sizes="(max-width: 768px) 56px, 80px"
															srcSet="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=415&amp;q=75 415w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=768&amp;q=75 768w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=1024&amp;q=75 1024w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=1280&amp;q=75 1280w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=1536&amp;q=75 1536w"
															src="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2Fz32wM7AySPyLVRm0YGpS_1641915896129.jpeg&amp;w=1536&amp;q=75"
															decoding="async" data-nimg="fill"
															style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"
															class="" loading="lazy" /></noscript></span></div>
										</div>
										<div class="pl-3 md:pl-6">
											<p class="p0 mb-1 font-semibold">Yashwanth (Sai) Reddy</p>
											<div class="p2 clp-text-gray-700">Director, Data Science at Fidelity Investments</div>
										</div>
									</div>
								</div>
								<div class="mb-16 w-full px-3 md:mb-20 md:w-1/2 lg:mb-25 lg:px-8">
									<div class="mb-4 md:mb-6">
										<div class="p1-tall relative">
											<div class="absolute">
												<div class="rounded-full clp-bg-secondary w-6 h-6 flex justify-center items-center"><svg
														width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path
															d="M2.99584 5.43634H2.64632C2.08044 5.43634 1.89736 5.16777 1.89736 4.63064C1.89736 3.46686 2.81276 2.15984 4.3939 1.51528C5.02635 1.26462 5.22607 0.942343 5.14286 0.548446C5.05964 0.100837 4.69348 -0.114016 4.06103 0.065028C1.93065 0.673777 0 2.85811 0 6.20623C0 8.82026 1.16505 10.002 2.76283 10.002C4.1276 10.002 5.22607 9.01721 5.22607 7.60277C5.22607 6.31365 4.44383 5.43634 2.99584 5.43634ZM9.76976 5.43634H9.42025C8.85437 5.43634 8.67129 5.16777 8.67129 4.63064C8.67129 3.46686 9.58668 2.15984 11.1678 1.51528C11.8003 1.26462 12 0.942343 11.9168 0.548446C11.8336 0.100837 11.4674 -0.114016 10.835 0.065028C8.70458 0.673777 6.77392 2.85811 6.77392 6.20623C6.77392 8.82026 7.93897 10.002 9.53676 10.002C10.9015 10.002 12 9.01721 12 7.60277C12 6.31365 11.2011 5.43634 9.76976 5.43634Z"
															fill="#1F1F1E"></path>
													</svg></div>
											</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<!-- -->I had a fantastic experience taking Elvis’ Prompt Engineering Class. He is incredibly
											knowledge and has the ability to distill the latest research on prompt engineering to make it
											accessible to almost anyone.
										</div>
									</div>
									<div class="flex">
										<div class="shrink-0">
											<div class="relative overflow-hidden rounded-2xl  w-14 h-14 md:w-20 md:h-20"><span
													style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
														alt="Lawrence Wu&nbsp;"
														src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
														decoding="async" data-nimg="fill" class=""
														style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"><noscript><img
															alt="Lawrence Wu " sizes="(max-width: 768px) 56px, 80px"
															srcSet="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=415&amp;q=75 415w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=768&amp;q=75 768w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=1024&amp;q=75 1024w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=1280&amp;q=75 1280w, /_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=1536&amp;q=75 1536w"
															src="/_next/image?url=https%3A%2F%2Fd2426xcxuh3ht5.cloudfront.net%2F08S9Qw1SXasa9LchHmW0_1517710549173.jpeg&amp;w=1536&amp;q=75"
															decoding="async" data-nimg="fill"
															style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"
															class="" loading="lazy" /></noscript></span></div>
										</div>
										<div class="pl-3 md:pl-6">
											<p class="p0 mb-1 font-semibold">Lawrence Wu&nbsp;</p>
											<div class="p2 clp-text-gray-700">Principal Data Scientist at UKG</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="schedule">
			<div class="clp-bg-white prose-sm w-full md:prose-md">
				<div class="px-4 sm:px-6 md:px-10 xl:px-20 py-12 sm:py-20">
					<div class="2xl:mx-auto 2xl:max-w-320">
						<div class="mx-auto max-w-xl lg:max-w-2xl">
							<header class="mb-12 flex flex-col sm:mb-16">
								<h2 class="mb-4 clp-text-gray-800 sm:text-center">Course schedule</h2>
								<div
									class="flex items-end self-start rounded-full border py-2 px-5 sm:self-center sm:py-3 clp-bg-gray-100 clp-border-gray-200">
									<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M8 14.5C11.0376 14.5 13.5 12.0376 13.5 9C13.5 5.96243 11.0376 3.5 8 3.5C4.96243 3.5 2.5 5.96243 2.5 9C2.5 12.0376 4.96243 14.5 8 14.5Z"
											stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10"></path>
										<path d="M8 9L10.4749 6.52513" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
											stroke-linejoin="round"></path>
										<path d="M6.5 1.5H9.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
											stroke-linejoin="round"></path>
									</svg>
									<h6 class="b1 ml-2 clp-text-gray-800 sm:ml-3">4-6 hours per week</h6>
								</div>
							</header>
							<ul class="border-l-2 border-dashed clp-border-gray-500">
								<li class="flex flex-col px-4 pb-8 last:pb-0 sm:px-8">
									<h4 class="mb-1 clp-text-gray-900">Cohort 1: Mondays &amp; Thursdays</h4>
									<p class="clp-text-200 p1 mb-3 font-semibold clp-text-primary">6/26, 6/29, 7/3, 7/6 - 1:00-3:30 PM PST
									</p>
									<div class="clp-section p1-tall clp-text-gray-700">
										<div class="sanitized-html">
											<p>4-day hands-on course on prompt engineering with LLMs, including in-class demos, discussions,
												exercises, and projects</p>
										</div>
									</div>
								</li>
								<li class="flex flex-col px-4 pb-8 last:pb-0 sm:px-8">
									<h4 class="mb-1 clp-text-gray-900">Cohort 2: Mondays &amp; Wednesdays</h4>
									<p class="clp-text-200 p1 mb-3 font-semibold clp-text-primary">July 10, 12, 17, 19 - 12:00-2:30 PM PST
									</p>
									<div class="clp-section p1-tall clp-text-gray-700">
										<div class="sanitized-html">
											<p>4-day hands-on course on prompt engineering with LLMs, including in-class demos, discussions,
												exercises, and projects</p>
										</div>
									</div>
								</li>
								<li class="flex flex-col px-4 pb-8 last:pb-0 sm:px-8">
									<h4 class="mb-1 clp-text-gray-900">Live Office Hours</h4>
									<p class="clp-text-200 p1 mb-3 font-semibold clp-text-primary">1 hour</p>
									<div class="clp-section p1-tall clp-text-gray-700">
										<div class="sanitized-html">
											<p>Optional office hours to ask questions and receive guidance related to the course topics</p>
										</div>
									</div>
								</li>
								<li class="flex flex-col px-4 pb-8 last:pb-0 sm:px-8">
									<h4 class="mb-1 clp-text-gray-900">Bonus content</h4>
									<p class="clp-text-200 p1 mb-3 font-semibold clp-text-primary">2 hours per week</p>
									<div class="clp-section p1-tall clp-text-gray-700">
										<div class="sanitized-html">
											<p>Includes additional readings and self-paced tutorials + bonus exercises to practice prompt
												engineering techniques and tools for different use cases and applications</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="features">
			<div class="clp-bg-white prose-sm w-full md:prose-md">
				<div class="px-4 sm:px-6 md:px-10 xl:px-20 py-12 sm:py-20">
					<div class="2xl:mx-auto 2xl:max-w-320">
						<div class="m-auto max-w-6xl">
							<h2 class="mx-auto mb-8 max-w-200 text-left clp-text-gray-800 sm:mb-16 sm:text-center">Learning is better
								with cohorts</h2>
							<div class="flex flex-col items-center lg:flex-row lg:items-start">
								<div class="relative mb-8 h-auto w-full overflow-hidden rounded-5xl pt-[75%] lg:mb-0 lg:pt-[47%]"><span
										style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
											alt="Learning is better with cohorts"
											src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
											decoding="async" data-nimg="fill" class="rounded-5xl"
											style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"><noscript><img
												alt="Learning is better with cohorts"
												sizes="100vw, (max-width: 1024px) 500px, (max-width: 1280px) 554px"
												srcSet="/_next/image?url=https%3A%2F%2Fd3fe4umbwqdrlj.cloudfront.net%2Fadmin-dashboard%2Ffeatures-placeholder.png&amp;w=415&amp;q=75 415w, /_next/image?url=https%3A%2F%2Fd3fe4umbwqdrlj.cloudfront.net%2Fadmin-dashboard%2Ffeatures-placeholder.png&amp;w=768&amp;q=75 768w, /_next/image?url=https%3A%2F%2Fd3fe4umbwqdrlj.cloudfront.net%2Fadmin-dashboard%2Ffeatures-placeholder.png&amp;w=1024&amp;q=75 1024w, /_next/image?url=https%3A%2F%2Fd3fe4umbwqdrlj.cloudfront.net%2Fadmin-dashboard%2Ffeatures-placeholder.png&amp;w=1280&amp;q=75 1280w, /_next/image?url=https%3A%2F%2Fd3fe4umbwqdrlj.cloudfront.net%2Fadmin-dashboard%2Ffeatures-placeholder.png&amp;w=1536&amp;q=75 1536w"
												src="/_next/image?url=https%3A%2F%2Fd3fe4umbwqdrlj.cloudfront.net%2Fadmin-dashboard%2Ffeatures-placeholder.png&amp;w=1536&amp;q=75"
												decoding="async" data-nimg="fill"
												style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover"
												class="rounded-5xl" loading="lazy" /></noscript></span></div>
								<div class="w-full lg:ml-12 lg:w-1/2">
									<div class="border-b-2 border-dotted border-gray-500 py-6 first:pt-0 last:border-b-0 last:pb-0">
										<p class="p1 font-semibold clp-text-primary">Active hands-on learning</p>
										<div class="clp-section p1-tall pt-2 clp-text-gray-700">
											<div class="sanitized-html">
												<p>This course builds on live workshops and hands-on projects</p>
											</div>
										</div>
									</div>
									<div class="border-b-2 border-dotted border-gray-500 py-6 first:pt-0 last:border-b-0 last:pb-0">
										<p class="p1 font-semibold clp-text-primary">Interactive and project-based</p>
										<div class="clp-section p1-tall pt-2 clp-text-gray-700">
											<div class="sanitized-html">
												<p>You’ll be interacting with other learners through breakout rooms and project teams</p>
											</div>
										</div>
									</div>
									<div class="border-b-2 border-dotted border-gray-500 py-6 first:pt-0 last:border-b-0 last:pb-0">
										<p class="p1 font-semibold clp-text-primary">Learn with a cohort of peers</p>
										<div class="clp-section p1-tall pt-2 clp-text-gray-700">
											<div class="sanitized-html">
												<p>Join a community of like-minded people who want to learn and grow alongside you</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="faqs">
			<div class="clp-bg-white prose-sm w-full md:prose-md">
				<div class="px-4 sm:px-6 md:px-10 xl:px-20 py-12 sm:py-20">
					<div class="2xl:mx-auto 2xl:max-w-320">
						<h2 class="mx-auto mb-8 max-w-200 text-left clp-text-gray-800 sm:mb-16 sm:text-center">Frequently Asked
							Questions</h2>
						<div class="mx-auto max-w-130">
							<div
								class="relative mb-4 cursor-pointer rounded-2xl border border-solid border-gray-300 p-4 shadow-sm transition duration-200 ease-out hover:border-gray-400 hover:bg-gray-100 sm:p-6">
								<div class="flex flex-row items-center justify-between">
									<h6 class="pr-6 clp-text-gray-800">What happens if I can’t make a live session?</h6><svg
										class="h-6 w-6 shrink-0 false transition-transform duration-200 ease-out" width="32" height="32"
										viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 3L11 8L6 13" stroke="#858582" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</div>
								<div class="clp-section p3 whitespace-pre-line pt-4 clp-text-gray-700 hidden">
									<div class="sanitized-html">
										<p>All the sessions will be recorded in case you can't make it to the live sessions.</p>
									</div>
								</div>
							</div>
							<div
								class="relative mb-4 cursor-pointer rounded-2xl border border-solid border-gray-300 p-4 shadow-sm transition duration-200 ease-out hover:border-gray-400 hover:bg-gray-100 sm:p-6">
								<div class="flex flex-row items-center justify-between">
									<h6 class="pr-6 clp-text-gray-800">I work full-time, what is the expected time commitment?</h6><svg
										class="h-6 w-6 shrink-0 false transition-transform duration-200 ease-out" width="32" height="32"
										viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 3L11 8L6 13" stroke="#858582" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</div>
								<div class="clp-section p3 whitespace-pre-line pt-4 clp-text-gray-700 hidden">
									<div class="sanitized-html">
										<p>This course runs for a total of 4 days. The sessions will be delivered two days a week for two
											consecutive weeks. The expected time commitment per week is 4-6 hours.</p>
									</div>
								</div>
							</div>
							<div
								class="relative mb-4 cursor-pointer rounded-2xl border border-solid border-gray-300 p-4 shadow-sm transition duration-200 ease-out hover:border-gray-400 hover:bg-gray-100 sm:p-6">
								<div class="flex flex-row items-center justify-between">
									<h6 class="pr-6 clp-text-gray-800">What’s the refund policy?</h6><svg
										class="h-6 w-6 shrink-0 false transition-transform duration-200 ease-out" width="32" height="32"
										viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 3L11 8L6 13" stroke="#858582" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</div>
								<div class="clp-section p3 whitespace-pre-line pt-4 clp-text-gray-700 hidden">
									<div class="sanitized-html">
										<p>You can request a refund up until the day before the course begins, June 25, 2023.</p>
									</div>
								</div>
							</div>
							<div
								class="relative mb-4 cursor-pointer rounded-2xl border border-solid border-gray-300 p-4 shadow-sm transition duration-200 ease-out hover:border-gray-400 hover:bg-gray-100 sm:p-6">
								<div class="flex flex-row items-center justify-between">
									<h6 class="pr-6 clp-text-gray-800">What are the prerequisites for this course? </h6><svg
										class="h-6 w-6 shrink-0 false transition-transform duration-200 ease-out" width="32" height="32"
										viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 3L11 8L6 13" stroke="#858582" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</div>
								<div class="clp-section p3 whitespace-pre-line pt-4 clp-text-gray-700 hidden">
									<div class="sanitized-html">
										<p>You will be using a mixture of both coding and no-code tools for this course. Basic knowledge of
											Python and a high-level understanding of LLMs will be beneficial. I will also provide a few
											supplementary materials before the course begins. </p>
									</div>
								</div>
							</div>
							<div
								class="relative mb-4 cursor-pointer rounded-2xl border border-solid border-gray-300 p-4 shadow-sm transition duration-200 ease-out hover:border-gray-400 hover:bg-gray-100 sm:p-6">
								<div class="flex flex-row items-center justify-between">
									<h6 class="pr-6 clp-text-gray-800">What tools will we use for the course?</h6><svg
										class="h-6 w-6 shrink-0 false transition-transform duration-200 ease-out" width="32" height="32"
										viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6 3L11 8L6 13" stroke="#858582" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg>
								</div>
								<div class="clp-section p3 whitespace-pre-line pt-4 clp-text-gray-700 hidden">
									<div class="sanitized-html">
										<p>We will use various tools ranging from LangChain to no-code tools. It's required to have access
											to an OpenAI paid account as we will primarily be using their APIs.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div><span></span>
		<div id="cta-2">
			<div class="h-3 md:h-5 clp-bg-gradient-r-dark-fit"></div>
			<div class="clp-bg-dark relative overflow-hidden prose-sm w-full md:prose-md">
				<div class="px-4 sm:px-6 md:px-10 xl:px-20 py-12 sm:py-20">
					<div class="absolute inset-0 z-0"><span
							style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
								alt="A pattern of wavy dots"
								src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async"
								data-nimg="fill" class="h-full w-full object-cover opacity-5 mix-blend-multiply"
								style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img
									alt="A pattern of wavy dots" sizes="100vw"
									srcSet="/_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=415&amp;q=75 415w, /_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=768&amp;q=75 768w, /_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=1024&amp;q=75 1024w, /_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=1280&amp;q=75 1280w, /_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=1536&amp;q=75 1536w"
									src="/_next/image?url=%2Fimages%2Fdots-bg.png&amp;w=1536&amp;q=75" decoding="async" data-nimg="fill"
									style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
									class="h-full w-full object-cover opacity-5 mix-blend-multiply" loading="lazy" /></noscript></span>
					</div>
					<div class="2xl:mx-auto 2xl:max-w-320">
						<h6 class="relative z-10 mb-3 text-center clp-text-secondary">Join an upcoming cohort</h6>
						<h2 class="relative z-10 mb-12 text-center clp-text-white sm:mb-8">Prompt Engineering for LLMs</h2>
						<div class="relative z-10 mb-8">
							<div
								class="mx-auto mt-4 hidden max-w-200 flex-col items-center justify-around rounded-3xl border border-white/20 p-8 clp-text-white clp-bg-dark first:mt-0 md:flex">
								<div class="w-full flex-row items-center justify-around md:flex">
									<div class="flex flex-col items-center">
										<p class="l1 pb-2">Cost</p>
										<p class="b1">$800 USD</p>
									</div>
									<div class="flex flex-col items-center">
										<p class="l1 pb-2">Upcoming</p>
										<p class="b1">Cohort 2</p>
									</div>
									<div class="flex flex-col items-center">
										<p class="l1 pb-2">Dates</p>
										<p class="b1">July 10 - 19, 2023</p>
									</div>
									<div class="flex flex-col items-center">
										<p class="l1 pb-2">Payment Deadline</p>
										<p class="b1">July 9, 2023</p>
									</div>
								</div>
								<p class="mt-4 font-graphik text-sm font-bold clp-text-secondary">Don't miss out!&nbsp;<span
										class="font-normal clp-text-white">Enrollment closes in 7 days</span></p>
							</div>
							<div class="mx-auto mt-4 max-w-xl rounded-3xl border border-white/10 clp-bg-dark first:mt-0 md:hidden">
								<div class="flex flex-row justify-between rounded-t-3xl bg-white/5 px-6 py-2 text-white">
									<p class="b1">Cohort 2</p>
									<p class="b1">$800 USD</p>
								</div>
								<div class="px-6 py-2">
									<div class="flex flex-row justify-between py-2">
										<p class="b1 clp-text-white">Dates</p>
										<p class="b1 clp-text-white">July 10 - 19, 2023</p>
									</div>
									<div class="flex flex-row justify-between py-2">
										<p class="b1 clp-text-white">Payment Deadline</p>
										<p class="b1 clp-text-white">July 9, 2023</p>
									</div>
									<div class="flex flex-row justify-center py-2">
										<p class="mt-4 text-center font-graphik text-sm font-bold clp-text-secondary">Don't miss
											out!&nbsp;<span class="font-normal clp-text-white">Enrollment closes in 7 days</span></p>
									</div>
								</div>
							</div>
						</div>
						<div class="relative z-10 mb-8 text-center"><a target="_blank"
								href="/expense?school=dair-ai&amp;course=prompt-engineering-llms">
								<p class="b2 text-white underline">Get reimbursed by your employer</p>
							</a></div>
						<div class="relative z-10 mb-8">
							<div><a href="/dair-ai/prompt-engineering-llms/2/join">
									<div class="prose-product-sm sm:prose-product-lg"><button data-cy=""
											class="mx-auto hidden w-60 max-w-button clp-bg-primary hover:opacity-90 hover:clp-bg-primary sm:block justify-center items-center flex shadow-sm hover:shadow-md disabled:shadow-none ease-out duration-200 font-medium disabled:cursor-default h-14 px-6 b1 rounded-.5xl bg-gray-900 text-white hover:bg-black disabled:bg-gray-500"
											type="button">Enroll today</button></div>
								</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="cta-bar">
			<div class="prose-sm fixed bottom-0 left-0 right-0 z-10 clp-bg-primary md:prose-md lg:hidden">
				<div class="flex h-18 items-center justify-between border-t border-gray-300 bg-white px-6">
					<div><span class="p1 font-semibold">
							<p>$800 USD</p>
						</span><span class="b4 flex items-center space-x-2">
							<div class="b4 w-11 rounded-sm-md bg-gray-400 py-0.5 text-center uppercase text-gray-900">New</div><span
								class="mx-2">·</span>
							<div class="flex items-center ">
								<p>2 Weeks</p>
							</div>
						</span></div><a href="/dair-ai/prompt-engineering-llms/2/join">
						<div class="prose-product-sm sm:prose-product-lg"><button data-cy=""
								class="clp-text-white clp-bg-primary hover:opacity-90 hover:clp-bg-primary justify-center items-center flex shadow-sm hover:shadow-md disabled:shadow-none ease-out duration-200 font-medium disabled:cursor-default h-12 px-6 b2 rounded-lg bg-gray-900 text-white hover:bg-black disabled:bg-gray-500"
								type="button">Enroll today</button></div>
					</a>
				</div>
			</div>
		</div>
		<div class="prose-sm flex justify-center md:prose-md"><a class="flex items-center pb-32 pt-8 md:z-20 lg:pb-8"
				target="_blank" href="/"><svg width="24" height="24" viewBox="0 0 36 36" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M36 0H0V0.9612H36V0Z" fill="currentColor"></path>
					<path d="M14.0004 1.9188H1.00081V2.88H14.0004V1.9188Z" fill="currentColor"></path>
					<path d="M34.9992 1.9188H21.9995V2.88H34.9992V1.9188Z" fill="currentColor"></path>
					<path d="M0 36H36V35.0388H0V36Z" fill="currentColor"></path>
					<path d="M0.997182 34.0812H2.95198V33.12H0.997182V34.0812Z" fill="currentColor"></path>
					<path
						d="M11.52 4.7988H11.9736V3.8412H1.94045V4.7988H2.39405C2.54299 4.7988 2.68584 4.85797 2.79116 4.96329C2.89648 5.06861 2.95565 5.21145 2.95565 5.3604V34.4808C2.95565 34.5544 2.9411 34.6272 2.91283 34.6952C2.88457 34.7631 2.84314 34.8248 2.79094 34.8766C2.73875 34.9285 2.67681 34.9695 2.60869 34.9974C2.54058 35.0252 2.46763 35.0393 2.39405 35.0388H1.94045V36H11.9664V35.0388H11.52C11.4466 35.0393 11.3739 35.0252 11.3059 34.9973C11.238 34.9694 11.1763 34.9283 11.1244 34.8764C11.0725 34.8245 11.0314 34.7628 11.0036 34.6949C10.9757 34.627 10.9616 34.5542 10.962 34.4808V5.3604C10.9616 5.28682 10.9757 5.21387 11.0035 5.14576C11.0313 5.07764 11.0723 5.0157 11.1242 4.9635C11.1761 4.91131 11.2377 4.86988 11.3057 4.84162C11.3736 4.81335 11.4465 4.7988 11.52 4.7988ZM5.15525 34.4808C5.15525 34.5544 5.1407 34.6272 5.11243 34.6952C5.08417 34.7631 5.04274 34.8248 4.99054 34.8766C4.93835 34.9285 4.87641 34.9695 4.80829 34.9974C4.74018 35.0252 4.66723 35.0393 4.59365 35.0388H4.51445C4.36708 35.0378 4.22608 34.9786 4.12221 34.8741C4.01834 34.7696 3.96005 34.6282 3.96005 34.4808V5.3604C3.96005 5.21145 4.01922 5.06861 4.12454 4.96329C4.22986 4.85797 4.3727 4.7988 4.52165 4.7988H4.60085C4.6746 4.7988 4.74763 4.81333 4.81576 4.84155C4.8839 4.86977 4.94581 4.91114 4.99796 4.96329C5.05011 5.01544 5.09148 5.07735 5.1197 5.14548C5.14792 5.21362 5.16245 5.28665 5.16245 5.3604L5.15525 34.4808ZM7.55285 34.4808C7.55333 34.5542 7.53922 34.627 7.51135 34.6949C7.48348 34.7628 7.44239 34.8245 7.39048 34.8764C7.33857 34.9283 7.27687 34.9694 7.20895 34.9973C7.14104 35.0252 7.06826 35.0393 6.99485 35.0388H6.91565C6.84207 35.0393 6.76912 35.0252 6.70101 34.9974C6.63289 34.9695 6.57095 34.9285 6.51875 34.8766C6.46656 34.8248 6.42513 34.7631 6.39687 34.6952C6.3686 34.6272 6.35405 34.5544 6.35405 34.4808V5.3604C6.35405 5.21145 6.41322 5.06861 6.51854 4.96329C6.62386 4.85797 6.7667 4.7988 6.91565 4.7988H6.99485C7.06904 4.79784 7.14267 4.81169 7.21144 4.83952C7.28021 4.86736 7.34274 4.90864 7.39536 4.96093C7.44799 5.01322 7.48967 5.07549 7.51794 5.14408C7.54622 5.21267 7.56053 5.28621 7.56005 5.3604L7.55285 34.4808ZM9.95405 34.4808C9.95405 34.5544 9.9395 34.6272 9.91123 34.6952C9.88297 34.7631 9.84154 34.8248 9.78934 34.8766C9.73715 34.9285 9.67521 34.9695 9.60709 34.9974C9.53898 35.0252 9.46603 35.0393 9.39245 35.0388H9.31325C9.23984 35.0393 9.16706 35.0252 9.09915 34.9973C9.03123 34.9694 8.96953 34.9283 8.91762 34.8764C8.86571 34.8245 8.82462 34.7628 8.79675 34.6949C8.76888 34.627 8.75477 34.5542 8.75525 34.4808V5.3604C8.75478 5.28682 8.76886 5.21387 8.79669 5.14576C8.82452 5.07764 8.86554 5.0157 8.91741 4.9635C8.96927 4.91131 9.03094 4.86988 9.09888 4.84162C9.16681 4.81335 9.23967 4.7988 9.31325 4.7988H9.39245C9.5414 4.7988 9.68424 4.85797 9.78956 4.96329C9.89488 5.06861 9.95405 5.21145 9.95405 5.3604V34.4808Z"
						fill="currentColor"></path>
					<path
						d="M22.5611 0.9612H23.0147V0H12.9851V0.9612H13.4387C13.5123 0.960725 13.5853 0.974808 13.6534 1.00264C13.7215 1.03047 13.7834 1.07149 13.8356 1.12336C13.8878 1.17522 13.9293 1.23689 13.9575 1.30483C13.9858 1.37276 14.0003 1.44562 14.0003 1.5192V30.6396C14.0003 30.7134 13.9858 30.7864 13.9576 30.8545C13.9294 30.9227 13.888 30.9846 13.8358 31.0367C13.7837 31.0889 13.7218 31.1302 13.6537 31.1585C13.5855 31.1867 13.5125 31.2012 13.4387 31.2012H12.9851V32.1588H23.0147V31.2012H22.5611C22.4874 31.2012 22.4144 31.1867 22.3462 31.1585C22.2781 31.1302 22.2162 31.0889 22.164 31.0367C22.1119 30.9846 22.0705 30.9227 22.0423 30.8545C22.0141 30.7864 21.9995 30.7134 21.9995 30.6396V1.5192C21.9995 1.44562 22.0141 1.37276 22.0424 1.30483C22.0706 1.23689 22.112 1.17522 22.1642 1.12336C22.2164 1.07149 22.2784 1.03047 22.3465 1.00264C22.4146 0.974808 22.4876 0.960725 22.5611 0.9612ZM16.1999 30.6396C16.1999 30.7134 16.1854 30.7864 16.1572 30.8545C16.129 30.9227 16.0876 30.9846 16.0354 31.0367C15.9833 31.0889 15.9214 31.1302 15.8533 31.1585C15.7851 31.1867 15.7121 31.2012 15.6383 31.2012H15.5591C15.4856 31.2012 15.4127 31.1866 15.3448 31.1584C15.2768 31.1301 15.2152 31.0887 15.1633 31.0365C15.1114 30.9843 15.0704 30.9224 15.0426 30.8542C15.0147 30.7861 15.0007 30.7132 15.0011 30.6396V1.5192C15.0007 1.44579 15.0148 1.37301 15.0426 1.3051C15.0705 1.23718 15.1116 1.17548 15.1635 1.12357C15.2154 1.07166 15.2771 1.03057 15.345 1.0027C15.4129 0.974828 15.4857 0.960722 15.5591 0.9612H15.6383C15.7119 0.960725 15.7849 0.974808 15.853 1.00264C15.9211 1.03047 15.983 1.07149 16.0352 1.12336C16.0874 1.17522 16.1289 1.23689 16.1571 1.30483C16.1854 1.37276 16.1999 1.44562 16.1999 1.5192V30.6396ZM18.6011 30.6396C18.6011 30.7134 18.5866 30.7864 18.5584 30.8545C18.5302 30.9227 18.4888 30.9846 18.4366 31.0367C18.3845 31.0889 18.3226 31.1302 18.2545 31.1585C18.1863 31.1867 18.1133 31.2012 18.0395 31.2012H17.9603C17.8866 31.2012 17.8136 31.1867 17.7454 31.1585C17.6773 31.1302 17.6154 31.0889 17.5632 31.0367C17.5111 30.9846 17.4697 30.9227 17.4415 30.8545C17.4133 30.7864 17.3987 30.7134 17.3987 30.6396V1.5192C17.3987 1.44562 17.4133 1.37276 17.4416 1.30483C17.4698 1.23689 17.5112 1.17522 17.5634 1.12336C17.6156 1.07149 17.6776 1.03047 17.7457 1.00264C17.8138 0.974808 17.8868 0.960725 17.9603 0.9612H18.0395C18.1131 0.960725 18.1861 0.974808 18.2542 1.00264C18.3223 1.03047 18.3842 1.07149 18.4364 1.12336C18.4886 1.17522 18.5301 1.23689 18.5583 1.30483C18.5866 1.37276 18.6011 1.44562 18.6011 1.5192V30.6396ZM20.9987 30.6396C20.9992 30.7132 20.9851 30.7861 20.9573 30.8542C20.9295 30.9224 20.8884 30.9843 20.8366 31.0365C20.7847 31.0887 20.723 31.1301 20.6551 31.1584C20.5872 31.1866 20.5143 31.2012 20.4407 31.2012H20.3615C20.2878 31.2012 20.2148 31.1867 20.1466 31.1585C20.0785 31.1302 20.0166 31.0889 19.9644 31.0367C19.9123 30.9846 19.8709 30.9227 19.8427 30.8545C19.8145 30.7864 19.7999 30.7134 19.7999 30.6396V1.5192C19.7999 1.44562 19.8145 1.37276 19.8428 1.30483C19.871 1.23689 19.9124 1.17522 19.9646 1.12336C20.0168 1.07149 20.0788 1.03047 20.1469 1.00264C20.215 0.974808 20.288 0.960725 20.3615 0.9612H20.4407C20.5141 0.960722 20.5869 0.974828 20.6548 1.0027C20.7228 1.03057 20.7845 1.07166 20.8364 1.12357C20.8883 1.17548 20.9294 1.23718 20.9572 1.3051C20.9851 1.37301 20.9992 1.44579 20.9987 1.5192V30.6396Z"
						fill="currentColor"></path>
					<path
						d="M33.606 4.7988H34.0596V3.8412H24.0336V4.7988H24.48C24.5536 4.7988 24.6264 4.81335 24.6944 4.84162C24.7623 4.86988 24.824 4.91131 24.8758 4.9635C24.9277 5.0157 24.9687 5.07764 24.9966 5.14576C25.0244 5.21387 25.0385 5.28682 25.038 5.3604V34.4808C25.0385 34.5542 25.0244 34.627 24.9965 34.6949C24.9686 34.7628 24.9275 34.8245 24.8756 34.8764C24.8237 34.9283 24.762 34.9694 24.6941 34.9973C24.6262 35.0252 24.5534 35.0393 24.48 35.0388H24.0336V36H34.0596V35.0388H33.606C33.5324 35.0393 33.4595 35.0252 33.3914 34.9974C33.3232 34.9695 33.2613 34.9285 33.2091 34.8766C33.1569 34.8248 33.1155 34.7631 33.0872 34.6952C33.059 34.6272 33.0444 34.5544 33.0444 34.4808V5.3604C33.0444 5.28665 33.0589 5.21362 33.0872 5.14548C33.1154 5.07735 33.1567 5.01544 33.2089 4.96329C33.261 4.91114 33.3229 4.86977 33.3911 4.84155C33.4592 4.81333 33.5323 4.7988 33.606 4.7988ZM27.2448 34.4808C27.2453 34.5542 27.2312 34.627 27.2033 34.6949C27.1754 34.7628 27.1343 34.8245 27.0824 34.8764C27.0305 34.9283 26.9688 34.9694 26.9009 34.9973C26.833 35.0252 26.7602 35.0393 26.6868 35.0388H26.604C26.456 35.0388 26.3141 34.98 26.2094 34.8754C26.1048 34.7707 26.046 34.6288 26.046 34.4808V5.3604C26.046 5.21208 26.1047 5.06977 26.2092 4.96456C26.3138 4.85934 26.4557 4.79975 26.604 4.7988H26.6868C26.7604 4.7988 26.8332 4.81335 26.9012 4.84162C26.9691 4.86988 27.0308 4.91131 27.0826 4.9635C27.1345 5.0157 27.1755 5.07764 27.2034 5.14576C27.2312 5.21387 27.2453 5.28682 27.2448 5.3604V34.4808ZM29.646 34.4808C29.646 34.5544 29.6315 34.6272 29.6032 34.6952C29.5749 34.7631 29.5335 34.8248 29.4813 34.8766C29.4291 34.9285 29.3672 34.9695 29.299 34.9974C29.2309 35.0252 29.158 35.0393 29.0844 35.0388H29.0052C28.9312 35.0402 28.8576 35.0268 28.7889 34.9994C28.7201 34.972 28.6576 34.931 28.6049 34.879C28.5522 34.827 28.5105 34.765 28.4822 34.6966C28.4538 34.6282 28.4395 34.5548 28.44 34.4808V5.3604C28.4395 5.28682 28.4536 5.21387 28.4814 5.14576C28.5093 5.07764 28.5503 5.0157 28.6022 4.9635C28.654 4.91131 28.7157 4.86988 28.7836 4.84162C28.8516 4.81335 28.9244 4.7988 28.998 4.7988H29.0772C29.2261 4.7988 29.369 4.85797 29.4743 4.96329C29.5796 5.06861 29.6388 5.21145 29.6388 5.3604L29.646 34.4808ZM32.0472 34.4808C32.0472 34.5544 32.0326 34.6272 32.0044 34.6952C31.9761 34.7631 31.9347 34.8248 31.8825 34.8766C31.8303 34.9285 31.7684 34.9695 31.7002 34.9974C31.6321 35.0252 31.5592 35.0393 31.4856 35.0388H31.4064C31.3328 35.0393 31.2599 35.0252 31.1918 34.9974C31.1236 34.9695 31.0617 34.9285 31.0095 34.8766C30.9573 34.8248 30.9159 34.7631 30.8876 34.6952C30.8594 34.6272 30.8448 34.5544 30.8448 34.4808V5.3604C30.8448 5.28665 30.8593 5.21362 30.8875 5.14548C30.9158 5.07735 30.9571 5.01544 31.0093 4.96329C31.0614 4.91114 31.1234 4.86977 31.1915 4.84155C31.2596 4.81333 31.3327 4.7988 31.4064 4.7988H31.4856C31.6333 4.80069 31.7743 4.8607 31.8781 4.96581C31.9818 5.07093 32.04 5.21269 32.04 5.3604L32.0472 34.4808Z"
						fill="currentColor"></path>
					<path d="M33.048 34.0812H35.0028V33.12H33.048V34.0812Z" fill="currentColor"></path>
					<path d="M10.4833 34.0812H25.5204V33.12H10.4833V34.0812Z" fill="currentColor"></path>
				</svg>
				<p class="p2 pl-2 pt-0.5 font-semibold">Powered by Maven</p>
			</a></div>
	</div>
</template>