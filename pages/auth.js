import { withAuthUser, AuthAction } from 'next-firebase-auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseAuthConfig = {
  signInFlow: 'popup',
  signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/',
  callbacks: {
    signInSuccessWithAuthResult: () =>
      false,
  },
}

const styles = {
  content: {
    padding: `8px 32px`,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: 16,
  },
}

const Auth = () => (
  <div style={styles.content}>
    <h3>Sign in</h3>
    <div style={styles.textContainer}>
      <p>
        This auth page is <b>static</b>. It will redirect on the client side if
        the user is already authenticated.
      </p>
    </div>
    <div>
        <StyledFirebaseAuth
            uiConfig={firebaseAuthConfig}
            firebaseAuth={firebase.auth()}
        />
    </div>
  </div>
)

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
    whenUnauthedAfterInit: AuthAction.RENDER,
})(Auth)

//withAuthUser is for authUser context (like connect) so yo can use useAuthUser. However, you also use it if you want to redirect the user