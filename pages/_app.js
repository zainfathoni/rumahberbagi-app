import { Nav } from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-white'>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
