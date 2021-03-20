import Head from 'next/head'
import { CtaButton, CtaContainer, CtaDescription, CtaTitle } from '../components/cta-section'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kelas Rumah Berbagi</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <main>
        <CtaContainer>
          <CtaTitle>Tahun Prasekolahku</CtaTitle>
          <CtaDescription>
            Kursus membangun pondasi pendidikan prasekolah PAUD dan TK dengan dasar-dasar filosofi Charlotte Mason
          </CtaDescription>
          <CtaButton>Daftar sekarang</CtaButton>
        </CtaContainer>
      </main>
    </div>
  )
}
