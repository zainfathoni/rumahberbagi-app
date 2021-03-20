import Head from 'next/head'
import { CtaButton, CtaContainer, CtaDescription, CtaTitle } from '../components/cta-section'
import { FaqSection, FaqTitle } from '../components/faq-section'
import { HeroSection } from '../components/hero-section'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kelas Rumah Berbagi</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap' rel='stylesheet' />
      </Head>

      <main>
        <HeroSection
          cta={['Daftar', '#']}
          menu={{
            Kelas: '#',
            Benefit: '#',
            FAQ: '#',
          }}
        />
        <FaqSection title='FAQ (Tanya Jawab)'></FaqSection>
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
