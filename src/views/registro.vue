<template>
    <Navbar></Navbar>
    <!-- component -->
    <section class="flex flex-col md:flex-row items-center">

        <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3" style="height: 50%;">
            <img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover" >
        </div>

        <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12
      flex items-center justify-center pb-10">

            <div class="w-full h-100">


                <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Crea una cuenta</h1>

                <AlertaError v-if="errorInicio" class="mt-3" :mensaje="'El correo o contraseña son incorrectos'">
                </AlertaError>

                <form class="mt-6" action="#" method="POST">
                    <div>
                        <label class="block text-gray-700">Correo<span class="text-red-500 ml-1">* </span></label>
                        <input type="email" name="" id="registro-correo" placeholder="ejemplo@gmail.com" v-model="correo"
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-indigo-700 focus:bg-white focus:outline-none"
                            autofocus required>
                        <label v-if="!esCorreo(correo) && correo"
                            class="block tracking-wide text-red-500 text-xs rounded mt-1 px-1" for="grid-last-name">
                            Debe ser un correo válido
                        </label>
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700">Nombre de usuario<span class="text-red-500 ml-1">* </span></label>
                        <input type="text" name="" id="registro-nombre" required
                                 placeholder="nombreUsuario" v-model="nombreUsuario"
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-indigo-700 focus:bg-white focus:outline-none"
                            autofocus>
                        <label v-if="!esNombreUsuario(nombreUsuario) && nombreUsuario"
                            class="block tracking-wide text-red-500 text-xs rounded mt-1 px-1" for="grid-last-name">
                            El nombre de usuario es un código, solo puede tener letras mayúsculas, minúsculas, números y guines bajos(_) sin acento.
                        </label>
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700">Nombre completo</label>
                        <input type="text" name="" id="registro-nombre-c" placeholder="Nombre Completo"
                            v-model="nombreCompleto"
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-indigo-700 focus:bg-white focus:outline-none"
                            autofocus>
                            <label v-if="!esNombreCompleto(nombreCompleto) && nombreCompleto"
                            class="block tracking-wide text-red-500 text-xs rounded mt-1 px-1" for="grid-last-name">
                            El nombre completo debe ser menor o igual a 100 caracteres
                        </label>
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700">Fecha de nacimiento</label>
                        <input type="date" name="" id="registro-fecha" placeholder="01/01/2000" v-model="fechaNacimiento"
                            class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-indigo-700 focus:bg-white focus:outline-none"
                            autofocus>
                            <label v-if="!esFechaNacimiento(fechaNacimiento) && fechaNacimiento"
                            class="block tracking-wide text-red-500 text-xs rounded mt-1 px-1" for="grid-last-name">
                            No puedes poner una fecha superior a hoy
                        </label>
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700">Contraseña<span class="text-red-500 ml-1">* </span></label>
                        <input type="password" v-model="contrasenha" name="" id="registro-pass"
                            placeholder="Ingresa tu Contraseña" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-indigo-700
              focus:bg-white focus:outline-none" required>
                        <label v-if="!esContrasenha(contrasenha) && contrasenha"
                            class="block tracking-wide text-red-500 text-xs rounded mt-1 px-1" for="grid-last-name">
                            La Contraseña debe tener mínimo 6 caracteres
                        </label>
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700">Repetir contraseña<span class="text-red-500 ml-1">* </span></label>
                        <input type="password" v-model="repetirContrasenha" name="" id="registro-rep-pass"
                            placeholder="Repite tu Contraseña" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-indigo-700
              focus:bg-white focus:outline-none" required>
                        <label v-if="!esConfirmacion(repetirContrasenha) && repetirContrasenha"
                            class="block tracking-wide text-red-500 text-xs rounded mt-1 px-1" for="grid-last-name">
                            Debe ser igual a la contraseña
                        </label>
                    </div>
                    <div class="flex items-center text-sm mt-3">
                        <span>Los campos con </span>
                        <span class="text-red-500 ml-1">* </span>
                        <span class=" ml-1"> son obligatorios</span>
                    </div>

                </form>
                <button 
                :class="[cargando || !sePuedeRegistrar() ? 'fondo-lila-medio' : 'fondo-lila fondo-lila-medio-hover', 'w-full block text-white font-semibold rounded-lg items-center justify-end px-4 py-3 mt-6']"
 @click="registro" :disabled="cargando || !sePuedeRegistrar()">
                    <div v-if="cargando">
                        <CargandoBoton></CargandoBoton>
                    </div>
                    <div v-else>
                        Registrarme
                    </div>
                </button>

                <hr class="my-6 border-gray-300 w-full">

                <button type="button"
                    class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                    <div class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6"
                            viewBox="0 0 48 48">
                            <defs>
                                <path id="a"
                                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                            </defs>
                            <clipPath id="b">
                                <use xlink:href="#a" overflow="visible" />
                            </clipPath>
                            <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                            <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                            <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                            <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                        </svg>
                        <span class="ml-4">
                            Inicia sesión con Google</span>
                    </div>
                </button>

                <p class="mt-8">Ya tienes una cuenta? <router-link :to="'/inicio-sesion'"
                        class="text-indigo-500 hover:text-indigo-700 font-semibold">Inicia sesión</router-link>
                </p>


            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import Navbar from '../components/Navbar.vue'
import CargandoBoton from '@/components/CargandoBoton.vue';
import AlertaError from '@/components/AlertaError.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/useUser';
import { createApiGateway } from '@/axios/apiGateway';

const path = ref('')

const email = ref('')
const password = ref('')

const errorInicio = ref(false)
const cargando = ref(false)

const nombreUsuario = ref('')
const correo = ref('')
const nombreCompleto = ref('')
const fechaNacimiento = ref('')
const contrasenha = ref('')
const repetirContrasenha = ref('')

const router = useRouter()

const user = useUserStore()

const apiGateway = inject('apiGateway', createApiGateway())

const esNombreUsuario = (username: string) => /^[a-zA-Z0-9_]+$/.test(username)
const esNombreCompleto = (username: string) => username.length < 101
const esContrasenha = (password: string) => password.length > 5
const esFechaNacimiento = (fecha: string) => new Date(fecha) < new Date()
const esConfirmacion = (confirmPassword: string) => confirmPassword === contrasenha.value
const esCorreo = (email: string) => email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)


const registro = async () => {

    try {
        cargando.value = true
        

        const body = {
            usuarioNuevo: {
                nombreUsuario: nombreUsuario.value,
                correo: correo.value,
                nombreCompleto: nombreCompleto.value,
                fechaNacimiento: fechaNacimiento.value,
            },
            contrasena: contrasenha.value,
            confirmacionContrasena: repetirContrasenha.value,
        }

        const response = await apiGateway.post(`/service_usuario/usuarios`, body)

        errorInicio.value = false
        await user.login(email.value, contrasenha.value)

        cargando.value = false
        if (user)
            router.push( "/equipos" )
        else {
            errorInicio.value = true
        }
    } catch (error) {
        cargando.value = false
        errorInicio.value = true
        console.log("err", error)
    }

}

const sePuedeRegistrar = () => {
    if(!correo.value || !nombreUsuario.value || !contrasenha.value || !repetirContrasenha.value){
        return false
    }

    if(!esCorreo(correo.value) || !esNombreUsuario(nombreUsuario.value) || !esContrasenha(contrasenha.value) || !esConfirmacion(repetirContrasenha.value)){
        return false
    }

    if(fechaNacimiento.value && !esFechaNacimiento(fechaNacimiento.value)){
        return false
    }

    if(nombreCompleto.value && !esNombreCompleto(nombreCompleto.value)){
        return false
    }

    return true
}

</script>


<style scoped></style>

