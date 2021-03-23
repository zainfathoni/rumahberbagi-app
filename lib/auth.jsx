import * as React from 'react'
import firebase from './firebase'
import { createUser } from './db'

// Create context with a default state.
const authContext = React.createContext({
  auth: null,
  loading: true,
  signInWithTwitter: async () => {},
  signOut: async () => {},
})

const formatAuthState = (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
  token: null,
})

function useProvideAuth() {
  const [auth, setAuth] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  /**
   * Callback function used for firebase.auth.onAuthStateChanged().
   * Takes the user object returned and formats it for my state.
   * We fetch the idToken and append it to my auth state and store it.
   */
  const handleAuthChange = async (authState) => {
    if (!authState) {
      return
    }

    // Formats response into my required state.
    const formattedAuth = formatAuthState(authState)
    // Fetch firebase auth ID Token.
    formattedAuth.token = await authState.getIdToken()
    // Stores auth into state.
    setAuth(formattedAuth)
    // Sets loading state to false.
    setLoading(false)
  }

  /**
   * Callback function used for response from firebase OAuth.
   * Store user object returned in firestore.
   * @param firebase User Credential
   */
  const signedIn = async (response) => {
    if (!response.user) {
      throw new Error('No User')
    }

    // Format user into my required state.
    const authedUser = formatAuthState(response.user)
    // firestore database function
    // createUser(authedUser.uid, authedUser)
    console.log(authedUser)
  }

  /**
   * Callback for when firebase signOut.
   * Sets auth state to null and loading to true.
   */
  const clear = () => {
    setAuth(null)
    setLoading(true)
  }

  /**
   * Triggers Firebase Anonymous Authentication and calls signIn when successful.
   * sets loading to true.
   */
  const signInAnonymously = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInAnonymously()
      .then(signedIn)
      .catch((error) => {
        console.log(error)
      })
  }

  /**
   * Calls firebase signOut and with clear callback to reset state.
   */
  const signOut = () => {
    return firebase.auth().signOut().then(clear)
  }

  /**
   * Watches for state change for firebase auth and calls the handleAuthChange callback
   * on every change.
   */
  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleAuthChange)
    return () => unsubscribe()
  }, [])

  // returns state values and callbacks for signIn and signOut.
  return {
    auth,
    loading,
    signInAnonymously,
    signOut,
  }
}

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Helper to easily get auth context within components
export const useAuth = () => React.useContext(authContext)
