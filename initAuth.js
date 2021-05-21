import { init } from 'next-firebase-auth'

const initAuth = () => {
    init({
        authPageURL: '/auth',
        appPageUrl: '/',
        loginAPIEndpoint: '/api/login',
        logoutAPIEndpoint: '/api/logout',
        firebaseAuthEmulatorHost: "localhost:9099",
        firebaseAdminInitConfig: {

        }
    })
}