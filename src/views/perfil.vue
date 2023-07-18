<template>
    <Navbar></Navbar>
    <div class="container mx-auto mt-10 mb-10">

        <div class=" flex flex-wrap ">
            <div class="border-r border-indigo-500 border-gray-900/10 w-full md:w-1/3 px-3">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Foto de perfil</h2>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="col-span-full">
                        <div class="mt-2 flex items-center gap-x-3">
                            <UserCircleIcon class=" text-gray-300" aria-hidden="true" />
                            <button type="button"
                                class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cambiar</button>
                        </div>
                        <button type="button"
                            class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Quitar</button>
                    </div>

                    <div class="col-span-full">
                        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div class="text-center">
                                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label for="file-upload"
                                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                        <span>Sube un archivo</span>
                                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                    </label>
                                    <p class="pl-1">o arrastralo</p>
                                </div>
                                <p class="text-xs leading-5 text-gray-600">PNG, JPG hasta 10MB</p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
                            <button
                                class="rounded-md fondo-lila-medio px-3 py-2 text-sm font-semibold text-white shadow-sm fondo-lila-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
                        </div>
                    </div>

                </div>
            </div>

            <div class=" border-gray-900/10 w-full md:w-2/3 px-3">
                <h2 class="text-base font-semibold leading-7 text-gray-900">Mis datos</h2>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">
                            Nombre completo</label>
                        <div class="mt-2">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">
                            Correo</label>
                        <div class="mt-2">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Nombre de
                            usuario</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">
                            Fecha de nacimiento</label>
                        <div class="mt-2">
                            <input type="date" name="last-name" id="last-name" autocomplete="family-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancelar</button>
                    <button
                        class="rounded-md fondo-lila-medio px-3 py-2 text-sm font-semibold text-white shadow-sm fondo-lila-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/useUser';
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import Navbar from '../components/Navbar.vue';
</script>

<script lang="ts">
export default {
    data() {
        return {
            profilePhoto: "https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png",
            user: useUserStore(),
            usuario: null,

            actualizando: false,
            errorCorreo: false,
            errorNombre: false,
            errorDesconocido: false,
        };
    },
    mounted() {

    },
    methods: {


        async actualizar() {
            this.actualizando = true
            this.errorCorreo = false
            this.errorNombre = false
            this.errorDesconocido = false

            /*
            const { $apiUsuario } = useNuxtApp()
            const user = currentUser()

            try {
                const token = await user.getIdToken()
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
                const body = {
                    usuarioActualizado: {
                        correo: this.correo !== this.usuario.correo ? this.correo : null,
                        nombreUsuario: this.nombreUsuario !== this.usuario.nombreUsuario ? this.nombreUsuario : null,
                        nombreCompleto: this.nombreCompleto !== this.usuario.nombreCompleto ? this.nombreCompleto : null,
                        fechaNacimiento: this.fechaNacimiento !== this.usuario.fechaNacimiento ? this.fechaNacimiento : null,
                    },
                }

                const response = await $apiUsuario.put(`/usuarios`, body, config)

                this.usuario['nombreUsuario'] = this.nombre
                this.usuario['correo'] = this.correo

                this.actualizando = false

            } catch (error) {
                console.log(error)
                if (error.response && error.response.data.mensajeCliente === "correo_en_uso") {
                    this.errorCorreo = true
                } else if (error.response && error.response.data.mensajeCliente === "nombreUsuario_en_uso") {
                    this.errorNombre = true
                } else {
                    this.errorDesconocido = true
                }
                this.actualizando = false
            }
            */
        },
    },
};
</script>
