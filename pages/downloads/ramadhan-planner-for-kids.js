import Link from 'next/link'
import {
  ArticleCategory,
  ArticleContent,
  ArticleCTA,
  ArticleCTASecondary,
  ArticleFigure,
  ArticleSection,
  ArticleSubtitle,
  ArticleTitle,
} from '../../components/article-section'
import { SEO } from '../../components/seo'

export default function Home() {
  return (
    <div>
      <SEO
        title='Ramadhan Planner for Kids (untuk Anak-anak) Tahun 1442H/2021M'
        description='Bingung mau ngapain aja dengan anak selama Ramadhan? Yuk, gunakan planner ini!'
        image='/images/ramadhan-planner-for-kids.jpeg'
      />
      <main>
        <ArticleSection>
          <ArticleCategory>Ramadhan Preparation</ArticleCategory>
          <ArticleTitle>Ramadhan Planner for Kids (untuk Anak-anak) Tahun 1442H/2021M</ArticleTitle>
          <ArticleFigure
            src='/images/ramadhan-planner-for-kids.jpeg'
            alt='Ramadhan Planner for Kids'
            width={1080}
            height={1080}
          >
            Ramadhan Planner for Kids
          </ArticleFigure>
          <ArticleSubtitle>
            Bingung mau ngapain aja dengan anak selama Ramadhan? Yuk, gunakan planner ini!
          </ArticleSubtitle>
          <ArticleContent>
            <p>
              Ramadhan adalah satu bulan suci yang kehadirannya selalu dinanti. Bagaimana tidak, di bulan ini lah Allah
              curahkan berkah dan pahala yang berlipat ganda, pintu surga dibuka, pintu neraka ditutup, dan syaitan pun
              dibelenggu.
            </p>
            <p>
              Tentu sebagai orang tua, kami juga ingin anak-anak kami merasakan keistimewaan bulan Ramadhan. Bahkan
              sejak pertengahan bulan sya'ban kami sudah bersiap-siap diri menyambut Ramadhan dengan membuat{' '}
              <Link href='/downloads/15-days-countdown-to-ramadhan'>
                <a>15 Days Countdown to Ramadhan</a>
              </Link>
              . Salah satu hal yang sudah berhasil dilakukan adalah{' '}
              <Link href='/downloads/rencana-menu-ramadhan'>
                <a>membuat meal planner Ramadhan</a>
              </Link>{' '}
              yang juga kubagikan gratis untuk teman-teman semua.
            </p>
            <p>
              Nah, satu hal lain yang perlu banyak dipikirkan dan disiapkan adalah kegiatan anak-anak selama Ramadhan.
              Kebetulan anak-anak kami masih kecil-kecil (6.5 dan 3.5 tahun). Kami juga tinggal di Singapura, yang
              muslimnya cukup banyak tetapi bukan mayoritas. Jadi kami ingin mereka juga bisa merasakan Ramadhan adalah
              bulan yang berbeda, kami ingin bulan suci ini bisa membekas di hati mereka agar tidak kalah dengan
              perayaan-perayaan agama lain, bahkan kami ingin meninggalkan jejak yang lebih indah dan lebih dalam
              daripada sekedar kemasan luar yang meriah.
            </p>
            <p>
              Sebetulnya, tahun lalu saya sudah membuat planner Ramadhan untuk anak-anak juga, tapi kali ini saya
              upgrade versinya dengan cukup banyak perbaikan.
            </p>
            <p>
              Buat kalian yang juga ingin menggunakan planner ini, silakan download di sini ya. Enjoy your Ramadhan
              journey!
            </p>
          </ArticleContent>
          <ArticleCTA
            href='/files/ramadhan-planner-for-kids-id.pdf'
            download='Ramadhan Planner for Kids (Bahasa Indonesia).pdf'
          >
            Download PDF (Bahasa Indonesia)
          </ArticleCTA>
          <ArticleCTASecondary
            href='/files/ramadhan-planner-for-kids-en.pdf'
            download='Ramadhan Planner for Kids (English).pdf'
          >
            Download PDF (Bahasa Inggris)
          </ArticleCTASecondary>
        </ArticleSection>
      </main>
    </div>
  )
}
