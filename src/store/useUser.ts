import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { defineStore } from 'pinia'
import { appDefault } from '../firebase-services/apps/firebaseAppDefault'
import { useCookie } from '@/composables/useCookie'

/**
 * Simulate a login
 */
function apiLogin(a: string, p: string) {
    if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true })
    if (p === 'ed') return Promise.resolve({ isAdmin: false })
    return Promise.reject(new Error('invalid credentials'))
}

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        uid: '',
        email: '',
    }),

    actions: {
        async logout() {
            this.$patch({
                uid: '',
                email: ''
            })

            const auth = getAuth(appDefault)
            const result = await auth.signOut()

            const userCookie = useCookie('__session')
            userCookie.removeCookie()

            return result
        },

        /**
         * Attempt to login a user
         */
        async login(email: string, password: string) {
            const auth = getAuth(appDefault)
            try {
                const credentials = await signInWithEmailAndPassword(auth, email, password)
                
                this.$patch({
                    uid: credentials.user.uid,
                    email: email
                })

                return credentials

            } catch (error) {
                console.log(error)
            }

            
        }
    }
})
