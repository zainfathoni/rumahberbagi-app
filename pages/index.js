import Head from 'next/head'
import {
  BenefitBottomContainer,
  BenefitContainerImage,
  BenefitDescription,
  BenefitItem,
  BenefitSection,
  BenefitTopContainer,
} from '../components/benefit-section'
import { CtaButton, CtaSection, CtaDescription, CtaTitle } from '../components/cta-section'
import { FaqAnswer, FaqDescription, FaqContent, FaqQuestion, FaqSection } from '../components/faq-section'
import { HeroSection } from '../components/hero-section'
import { FileInvoiceIcon } from '../components/icons/file-invoice'
import { FileSignatureIcon } from '../components/icons/file-signature'

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
          cta={['Daftar', '#daftar']}
          menu={{
            Benefit: '#benefit',
            FAQ: '#faq',
          }}
        />
        <BenefitSection title='Didik anak usia prasekolah Anda secara lembut dan terarah'>
          <BenefitDescription>
            Setiap orang tua pasti ingin memberikan pendidikan terbaik bagi anaknya. Di kelas Tahun Prasekolahku ini
            Anda akan diarahkan untuk mendidik anak Anda di usia prasekolah. Berikut benefit yang akan Anda dapatkan
            sebagai peserta kelas ini.
          </BenefitDescription>
          <BenefitBottomContainer
            title='Interaksi dua arah'
            description='Kelas interaktif dengan umpan balik langsung dari saya'
            image={<BenefitContainerImage src='https://tailwindui.com/img/features/feature-example-2.png' alt='' />}
          >
            <BenefitItem icon={<FileInvoiceIcon />} title='Intensif'>
              Sketch Note yang nyaman dibaca untuk dirujuk kembali di kemudian hari.
            </BenefitItem>
            <BenefitItem icon={<FileInvoiceIcon />} title='Praktik'>
              Sketch Note yang nyaman dibaca untuk dirujuk kembali di kemudian hari.
            </BenefitItem>
          </BenefitBottomContainer>
          <BenefitTopContainer
            title='Ikuti kelas dengan mudah'
            description='Sarana kelas yang nyaman untuk diikuti dan dirujuk kembali di kemudian hari'
            image={<BenefitContainerImage src='https://tailwindui.com/img/features/feature-example-1.png' alt='' />}
          >
            <BenefitItem icon={<FileInvoiceIcon />} title='Handout berupa Sketch Note'>
              Sketch Note yang nyaman dibaca untuk dirujuk kembali di kemudian hari.
            </BenefitItem>
            <BenefitItem icon={<FileSignatureIcon />} title='Planner'>
              Sketch Note yang nyaman dibaca untuk dirujuk kembali di kemudian hari.
            </BenefitItem>
          </BenefitTopContainer>
          <BenefitBottomContainer
            title='Interaksi dua arah'
            description='Kelas interaktif dengan umpan balik langsung dari saya'
            image={<BenefitContainerImage src='https://tailwindui.com/img/features/feature-example-2.png' alt='' />}
          >
            <BenefitItem icon={<FileInvoiceIcon />} title='Intensif'>
              Sketch Note yang nyaman dibaca untuk dirujuk kembali di kemudian hari.
            </BenefitItem>
            <BenefitItem icon={<FileInvoiceIcon />} title='Praktik'>
              Sketch Note yang nyaman dibaca untuk dirujuk kembali di kemudian hari.
            </BenefitItem>
          </BenefitBottomContainer>
        </BenefitSection>
        <FaqSection title='FAQ (Tanya Jawab)'>
          <FaqDescription>
            Tidak menemukan jawaban yang Anda cari? Hubungi saya{' '}
            <a
              href='https://www.instagram.com/vika.riandini/'
              className='font-medium text-indigo-600 hover:text-indigo-500'
              target='_blank'
              rel='noopener noreferrer'
            >
              melalui Instagram
            </a>
            .
          </FaqDescription>
          <FaqContent>
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
          </FaqContent>
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
