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
              <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
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
          <div>
            <FaqQuestion>Berapa biaya kelas ini? Kapan saya harus membayarnya?</FaqQuestion>
            <FaqAnswer>
              Biaya kelas ini Rp 100.000,- yang dapat dibayarkan setelah Anda mendapatkan konfirmasi dari kami bahwa
              Anda mendapatkan slot untuk bergabung di kelas ini.
            </FaqAnswer>
          </div>
          <div>
            <FaqQuestion>Mengapa jumlah peserta hanya dibatasi sebanyak 20 orang?</FaqQuestion>
            <FaqAnswer>
              Supaya proses belajar bisa lebih fokus dan aktivitas tanya jawab bisa dilakukan secara lebih intensif.
            </FaqAnswer>
          </div>
          <div>
            <FaqQuestion>
              Saya gagal mendapatkan slot di kelas ini. Lantas bagaimana saya bisa mengikuti kelas ini?
            </FaqQuestion>
            <FaqAnswer>
              Pertama-tama, pastikan dulu bahwa Anda telah terdaftar ke dalam daftar antrian calon peserta. Apabila
              kelas untuk angkatan berikutnya telah kami buka, kami akan kirimkan email kepada Anda berdasarkan urutan
              antrian Anda.
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
