<template>
    <nav class="bg-white shadow">
        <div class="mx-auto container px-6 py-2 xl:py-0">
            <div class="flex items-center justify-between">
                <!--- Responsive -->
                <div class="inset-y-0 left-0 flex items-center xl:hidden">
                    <div
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 cursor-pointer focus:outline-none transition duration-150 ease-in-out">
                        <div class="visible xl:hidden">
                            <ul class="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                                <li
                                    class="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid"
                                            width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                            <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                            <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                            <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                        </svg>
                                        <span class="ml-2 font-bold">Dashboard</span>
                                    </div>
                                </li>
                                <li class="xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                                    @click="dropdownHandler($event)">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle"
                                            width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1">
                                            </path>
                                        </svg>
                                        <span class="ml-2 font-bold">Products</span>
                                    </div>
                                </li>
                                <li
                                    class="xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                        <circle cx="12" cy="12" r="9"></circle>
                                    </svg>
                                    <span class="ml-2 font-bold">Performance</span>
                                </li>
                                <li
                                    class="border-b border-gray-300 xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="7 8 3 12 7 16"></polyline>
                                        <polyline points="17 8 21 12 17 16"></polyline>
                                        <line x1="14" y1="4" x2="10" y2="20"></line>
                                    </svg>
                                    <span class="ml-2 font-bold">Deliverables</span>
                                </li>
                                <li v-if="user.uid"
                                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-1 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <div class="flex items-center">
                                        <div
                                            class="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                            <img class="rounded h-10 w-10 object-cover" :src="profilePhoto" alt="logo" />
                                        </div>
                                        <p class="text-sm ml-2 cursor-pointer">Jane Doe</p>
                                        <div class="sm:ml-2 text-white relative">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20"
                                                height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li v-if="user.uid" @click="irPerfil()"
                                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-1 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user"
                                            width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="12" cy="7" r="4" />
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        </svg>
                                        <span class="ml-2">Mi perfil</span>
                                    </div>
                                </li>
                                <li v-if="user.uid"
                                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-1 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx="12" cy="12" r="9" />
                                        <line x1="12" y1="17" x2="12" y2="17.01" />
                                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                    </svg>
                                    <span class="ml-2">Centro de ayuda</span>
                                </li>
                                <li @click="cerrarSesion()" v-if="user.uid"
                                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-1 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke-width="1.5" width="20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 12-4-4m4 4-4 4m4-4H9m5 9a9 9 0 1 1 0-18" />
                                    </svg>
                                    <span class="ml-2">Cerrar sesión</span>
                                </li>
                                <li v-if="!user.uid"
                                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-1 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <router-link :to="{ name: 'inicio-sesion' }"
                                        class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group fondo-lila-claro-hover">
                                        <span class="relative px-5 py-1.5 rounded-md">
                                            Inicio sesión
                                        </span>
                                    </router-link>

                                </li>
                                <li v-if="!user.uid"
                                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-1 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <router-link :to="'/registro'"
                                        class="relative inline-flex group-hover:text-white items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group fondo-lila-medio hover:text-white">
                                        <span
                                            class="text-lila group-hover:text-white relative px-5 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                            Registrarse
                                        </span>
                                    </router-link>
                                </li>
                            </ul>
                            <svg @click="MenuHandler($event, true)" aria-haspopup="true" aria-label="Main Menu"
                                xmlns="http://www.w3.org/2000/svg" class="show-m-menu icon icon-tabler icon-tabler-menu"
                                width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <line x1="4" y1="8" x2="20" y2="8"></line>
                                <line x1="4" y1="16" x2="20" y2="16"></line>
                            </svg>
                            <div class="hidden close-m-menu text-gray-700" @click="MenuHandler($event, false)">
                                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!--- Navbar -->
                <div class="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                    <div class="flex items-center">
                        <img class="block h-12 w-auto" src="../assets/image/2.png" alt="Your Company" />
                    </div>
                </div>
                <div class="flex">
                    <div class="hidden xl:flex md:mr-6 xl:mr-16">
                        <a href="javascript: void(0)"
                            class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 fondo-lila-claro-hover focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20"
                                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                </svg>
                            </span>
                            Dashboard
                        </a>
                        <a href="javascript: void(0)"
                            class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 fondo-lila-claro-hover focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle"
                                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1">
                                    </path>
                                </svg>
                            </span>
                            Products
                        </a>
                        <a href="javascript: void(0)"
                            class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 fondo-lila-claro-hover focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass"
                                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                    <circle cx="12" cy="12" r="9"></circle>
                                </svg>
                            </span>
                            Performance
                        </a>
                        <a href="javascript: void(0)"
                            class="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 fondo-lila-claro-hover focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                            <span class="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20"
                                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <polyline points="7 8 3 12 7 16"></polyline>
                                    <polyline points="17 8 21 12 17 16"></polyline>
                                    <line x1="14" y1="4" x2="10" y2="20"></line>
                                </svg>
                            </span>
                            Deliverables
                        </a>
                    </div>
                    <div class="hidden xl:flex items-center" v-if="user.uid">
                        <div class="ml-6 relative">
                            <div class="flex items-center relative" @click="dropdownHandler($event)">
                                <ul class="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 hidden">
                                    <li @click="irPerfil()"
                                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <div class="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-user" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="7" r="4" />
                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                            </svg>
                                            <span class="ml-2">Mi perfil</span>
                                        </div>
                                    </li>
                                    <li
                                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help"
                                            width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx="12" cy="12" r="9" />
                                            <line x1="12" y1="17" x2="12" y2="17.01" />
                                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                        </svg>
                                        <span class="ml-2">Centro de ayuda</span>
                                    </li>
                                    <li @click="cerrarSesion()"
                                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke-width="1.5" width="20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m19 12-4-4m4 4-4 4m4-4H9m5 9a9 9 0 1 1 0-18" />
                                        </svg>
                                        <span class="ml-2">Cerrar sesión</span>
                                    </li>
                                </ul>
                                <div
                                    class="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                    <img class="rounded-full h-10 w-10 object-cover" :src="profilePhoto" alt="logo" />
                                </div>
                                <div class="ml-2 text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20"
                                        height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden xl:flex items-center mt-2" v-else>
                        <router-link :to="'/inicio-sesion'"
                            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-900 rounded-lg group fondo-lila-claro-hover">
                            <span class="relative px-5 py-2.5 rounded-md">
                                Inicio sesión
                            </span>
                        </router-link>
                        <router-link :to="'/registro'"
                            class="relative inline-flex group-hover:text-white items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-900 rounded-lg group fondo-lila-medio hover:text-white">
                            <span
                                class="text-lila group-hover:text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                Registrarse
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { useUserStore } from '@/store/useUser';
import { useRouter } from 'vue-router';

export default {
    name: "Navbar",
    data() {
        return {
            profilePhoto: "https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png",
            user: useUserStore(),
            router: useRouter()
        };
    },
    methods: {
        dropdownHandler(event: any) {
            let single = event.currentTarget.getElementsByTagName("ul")[0];
            single.classList.toggle("hidden");
        },
        MenuHandler(el: any, val: any) {
            let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0];
            let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
            let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
            if (val) {
                MainList.classList.remove("hidden");
                el.currentTarget.classList.add("hidden");
                closeIcon.classList.remove("hidden");
            } else {
                showIcon.classList.remove("hidden");
                MainList.classList.add("hidden");
                el.currentTarget.classList.add("hidden");
            }
        },
        async cerrarSesion() {
            await this.user.logout()
            this.router.push('/inicio-sesion')
        },
        irPerfil() {
            this.router.push("/perfil")
        }
        
    },
};
</script>
