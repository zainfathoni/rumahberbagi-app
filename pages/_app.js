import { useEffect } from 'react'
import { Nav } from '../components/nav'
import '../styles/globals.css'
import { analytics } from '../utils/firebase'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics()
    }
  }, [])

  return (
    <div className='bg-white'>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
