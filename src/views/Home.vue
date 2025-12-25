<template>
    <div class="columns is-mobile is-centered is-vcentered">
        <div class="column is-narrow">
            <img
                class="image__oruga"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Logo Oruga Theme Tailwind" />
        </div>
        <h1 class="text-center">Oruga Tailwind Theme Demo</h1>
        <!-- Navbar -->
        <nav class="bg-white border-b shadow-sm">
            <div
                class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <span class="text-2xl font-bold text-indigo-700">Logo</span>
                <ul class="hidden md:flex space-x-6 text-gray-700">
                    <li><a href="#" class="hover:text-indigo-600">Home</a></li>
                    <li><a href="#" class="hover:text-indigo-600">About</a></li>
                    <li>
                        <a href="#" class="hover:text-indigo-600">Contact</a>
                    </li>
                </ul>
                <button class="md:hidden text-gray-700 focus:outline-none">
                    <!-- Hamburger icon -->
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
        <!-- Alert message -->
        <div
            class="flex items-center bg-yellow-100 text-yellow-800 px-4 py-3 my-3 rounded-lg space-x-2">
            <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
            <span>This is a warning message.</span>
        </div>
        <!-- Form component -->
        <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
            >
            <input
                id="email"
                type="email"
                name="email"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <!-- Card component -->
        <section class="flex">
            <div
                class="max-w-sm bg-white rounded-2xl shadow-lg p-6 my-3 mr-3 space-y-4">
                <img
                    class="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    alt="Card Image" />
                <h3 class="text-xl font-semibold">Card Title</h3>
                <p class="text-gray-600">
                    This is a simple card component using Tailwind CSS. Easy to
                    reuse and responsive.
                </p>
                <button
                    class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Read More
                </button>
            </div>
            <div
                class="max-w-sm bg-white rounded-2xl shadow-lg p-6 my-3 mr-3 space-y-4">
                <img
                    class="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    alt="Card Image" />
                <h3 class="text-xl font-semibold">Card Title</h3>
                <p class="text-gray-600">
                    This is a simple card component using Tailwind CSS. Easy to
                    reuse and responsive.
                </p>
                <button
                    class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Read More
                </button>
            </div>
        </section>
        <!-- Table Component -->
         <div class="table-wrapper" data-oruga="table">
            <div style="display: none;">
                <span data-oruga="table-column" data-id="1">
                    ID <!---->
                </span>
                <span data-oruga="table-column" data-id="2">
                    First Name <!---->
                </span>
                <span data-oruga="table-column" data-id="3">
                    Last Name <!---->
                </span>
                <span data-oruga="table-column" data-id="4">
                    Date <!---->
                </span>
                <span data-oruga="table-column" data-id="5">
                    Gender <!---->
                </span>
            </div>
            <!----><!---->
            <div class="table-inner rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <table class="table min-w-full divide-y divide-gray-200">
                    <!---->
                    <thead class="bg-gray-50">
                        <tr>
                        <!----><!---->
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider is-sortable is-unselectable" draggable="false" style="width: 40px;">
                            <div class="flex items-center space-x-1 cursor-pointer hover:text-gray-700">
                                <span>ID</span>
                                <span class="th-wrap sort-icon">
                                    <span class="icon inline-flex justify-center items-center text-xs" data-oruga="icon">
                                    <i class="fas fa-arrow-up fa-sm"></i>
                                    </span>
                                </span>
                            </div>
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider is-sortable is-unselectable" draggable="false">
                            <div class="flex items-center space-x-1 cursor-pointer hover:text-gray-700">
                                <span>First Name</span>
                                <span class="th-wrap sort-icon">
                                    <span class="icon inline-flex justify-center items-center text-xs" data-oruga="icon">
                                    <i class="fas fa-arrow-up fa-sm"></i>
                                    </span>
                                </span>
                            </div>
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider is-sortable is-unselectable" draggable="false">
                            <div class="flex items-center space-x-1 cursor-pointer hover:text-gray-700">
                                <span>Last Name</span>
                                <span class="th-wrap sort-icon">
                                    <span class="icon inline-flex justify-center items-center text-xs" data-oruga="icon">
                                    <i class="fas fa-arrow-up fa-sm"></i>
                                    </span>
                                </span>
                            </div>
                        </th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider is-sortable is-unselectable is-centered" draggable="false">
                            <div class="flex items-center justify-center space-x-1 cursor-pointer hover:text-gray-700">
                                <span>Date</span>
                                <span class="th-wrap sort-icon">
                                    <span class="icon inline-flex justify-center items-center text-xs" data-oruga="icon">
                                    <i class="fas fa-arrow-up fa-sm"></i>
                                    </span>
                                </span>
                            </div>
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider is-sortable is-unselectable" draggable="false">
                            <div class="flex items-center space-x-1 cursor-pointer hover:text-gray-700">
                                <span>Gender</span>
                                <span class="th-wrap sort-icon">
                                    <span class="icon inline-flex justify-center items-center text-xs" data-oruga="icon">
                                    <i class="fas fa-arrow-up fa-sm"></i>
                                    </span>
                                </span>
                            </div>
                        </th>
                        <!---->
                        </tr>
                        <!----><!---->
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr class="hover:bg-gray-50 transition-colors duration-150" draggable="false">
                        <!----><!---->
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" data-label="ID" style="width: 40px;">1</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="First Name">Jesse</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="Last Name">Simmons</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center" data-label="Date">10/15/2016</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="Gender">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Male
                            </span>
                        </td>
                        <!---->
                        </tr>
                        <!---->
                        <tr class="hover:bg-gray-50 transition-colors duration-150" draggable="false">
                        <!----><!---->
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" data-label="ID" style="width: 40px;">2</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="First Name">John</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="Last Name">Jacobs</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center" data-label="Date">12/15/2016</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="Gender">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Male
                            </span>
                        </td>
                        <!---->
                        </tr>
                        <!---->
                        <tr class="hover:bg-gray-50 transition-colors duration-150" draggable="false">
                        <!----><!---->
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" data-label="ID" style="width: 40px;">3</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="First Name">Tina</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="Last Name">Gilbert</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center" data-label="Date">4/26/2016</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="Gender">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                                Female
                            </span>
                        </td>
                        <!---->
                        </tr>
                        <!---->
                        <tr class="hover:bg-gray-50 transition-colors duration-150" draggable="false">
                        <!----><!---->
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" data-label="ID" style="width: 40px;">4</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="First Name">Clarence</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="Last Name">Flores</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center" data-label="Date">4/10/2016</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="Gender">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Male
                            </span>
                        </td>
                        <!---->
                        </tr>
                        <!---->
                        <tr class="hover:bg-gray-50 transition-colors duration-150" draggable="false">
                        <!----><!---->
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" data-label="ID" style="width: 40px;">5</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="First Name">Anne</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="Last Name">Lee</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center" data-label="Date">12/6/2016</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800" data-label="Gender">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                                Female
                            </span>
                        </td>
                        <!---->
                        </tr>
                        <!----><!---->
                    </tbody>
                    <!---->
                </table>
                <!---->
            </div>
            <!---->
            </div>
    </div>
</template>

<style scoped>
.image__oruga {
    height: 128px;
}
</style>
