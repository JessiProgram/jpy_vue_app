import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth'
import { appDefault } from '../firebase-services/apps/firebaseAppDefault'
import { useUserStore } from '@/store/useUser'
import { useCookie } from './useCookie'

export const initUser = async () => {
    const auth = getAuth(appDefault)

    const userCookie = useCookie('__session')
    const user = useUserStore()

    onAuthStateChanged(auth, async (snapshot) => {
        let token = ''
        let userValue = null

        if (snapshot) {
            token = await snapshot.getIdToken()
            userValue = { uid: snapshot.uid, email: snapshot.email }
        }

        userCookie.setCookie(token)
        user.uid = userValue ? userValue.uid : ''
        user.email = userValue?.email ?? ''

    })
}

export const currentUser = () => {
    const auth = getAuth(appDefault)
    return auth.currentUser
}

export const recuperarContrasenha = async (email: string) => {
    const auth = getAuth(appDefault)
    const result = await sendPasswordResetEmail(auth, email)
    return result
}

export const getToken = async (email: string) => {
    const user = currentUser()
    if(user){
        return user.getIdToken()
    } else {
        const userCookie = useCookie('__session')
        return userCookie.getCookie()
    }
}
