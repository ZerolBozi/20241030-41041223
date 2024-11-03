document.addEventListener('DOMContentLoaded', function () {
    const navbar = `
    <nav class="bg-white px-4 mb-6 shadow-sm">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-center h-16">
                <a href="index.html" class="text-xl font-semibold text-gray-800">JS 套件介紹</a>
                
                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <button type="button" class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <!-- Desktop menu -->
                <div class="hidden md:flex md:items-center md:space-x-4">
                    <a href="thressjs.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">Three.js</a>
                    <a href="animejs.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">Anime.js</a>
                    <a href="tailwind.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">Tailwind CSS</a>
                    <a href="interactjs.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">Interact.js</a>
                    <a href="highlightjs.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">Highlight.js</a>
                    <a href="typedjs.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">Typed.js</a>
                    <a href="chart.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">Lightweight-Charts</a>
                    <a href="websocket.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">WebSocket</a>
                    <a href="cropperjs.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">Cropper.js</a>
                    <a href="plyr.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">Plyr</a>
                    <a href="tributejs.html" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm">Tribute.js</a>
                </div>
            </div>

            <!-- Mobile menu -->
            <div class="hidden md:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="thressjs.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">Three.js</a>
                    <a href="animejs.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">Anime.js</a>
                    <a href="tailwind.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">Tailwind CSS</a>
                    <a href="interactjs.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">Interact.js</a>
                    <a href="highlightjs.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">Highlight.js</a>
                    <a href="typedjs.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">Typed.js</a>
                    <a href="chart.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">Lightweight-Charts</a>
                    <a href="websocket.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">WebSocket</a>
                    <a href="cropperjs.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">Cropper.js</a>
                    <a href="plyr.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">Plyr</a>
                    <a href="tributejs.html" class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base">Tribute.js</a>
                </div>
            </div>
        </div>
    </nav>
    `;

    // 找到指定的 div 並插入導航欄
    const navbarContainer = document.querySelector('.navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
    }

    // 添加手機版選單切換功能
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});