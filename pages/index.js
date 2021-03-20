import Head from 'next/head'
import { CtaButton, CtaSection, CtaDescription, CtaTitle } from '../components/cta-section'
import { FaqAnswer, FaqQuestion, FaqSection } from '../components/faq-section'
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
        <FaqSection
          description={
            <>
              Tidak menemukan jawaban yang Anda cari? Hubungi kami{' '}
              <a href='#' class='font-medium text-indigo-600 hover:text-indigo-500'>
                di sini
              </a>
              .
            </>
          }
          title='FAQ (Tanya Jawab)'
        >
          <div>
            <FaqQuestion>Kelas ini untuk siapa?</FaqQuestion>
            <FaqAnswer>
              Kelas ini untuk para orang tua, khususnya untuk anak di bawah usia sekolah, tetapi tidak menutup
              kemungkinan orang tua dengan anak di usia sekolah masih membutuhkannya karena bisa jadi ada aspek yang
              terlewat dari fondasi yang harus dipersiapkan di usia prasekolah.
            </FaqAnswer>
          </div>
          <div>
            <FaqQuestion>Berapa lama kelas ini akan berlangsung?</FaqQuestion>
            <FaqAnswer>
              Setidaknya akan ada dua pertemuan yang terdiri dari pembahasan materi dan praktik pembuatan rencana
              pendidikan untuk anak prasekolah. Tidak menutup kemungkinan jumlah pertemuan akan ditambah sesuai dengan
              kebutuhan.
            </FaqAnswer>
          </div>
        </FaqSection>
        <CtaSection>
          <CtaTitle>Tahun Prasekolahku</CtaTitle>
          <CtaDescription>
            Kursus membangun pondasi pendidikan prasekolah PAUD dan TK dengan dasar-dasar filosofi Charlotte Mason
          </CtaDescription>
          <CtaButton>Daftar sekarang</CtaButton>
        </CtaSection>
      </main>
    </div>
  )
}
