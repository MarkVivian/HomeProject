import Main_layout from '@/components/Main_layout/Main_layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
        <Main_layout>
      
          <Component {...pageProps} />
      
        </Main_layout>
     )
}
