

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { provide } from 'vue'
import { getAuth } from 'firebase/auth'
import { appDefault } from './firebase-services/apps/firebaseAppDefault'
import { initUser } from './composables/useFirebaseAuth'
import { createApiGateway } from './axios/apiGateway'

export default {
    setup() {
        initUser()

        const auth = getAuth(appDefault)
        provide('auth', auth)

        provide('apiGateway', createApiGateway())

    }
}
</script>

<template>
    <header>

    </header>

    <RouterView />
</template>

<style scoped></style>
