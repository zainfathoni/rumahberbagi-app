import { ArticleSection } from '../../components/article-section'
import { SEO } from '../../components/seo'

export default function Home() {
  return (
    <div>
      <SEO
        title='15 Days Countdown to Ramadhan'
        description='Demi Ramadhan yang lebih bermakna di tahun ini, kami baru saja membuat rencana 15 hari hitung mundur Ramadhan. Download rencananya di sini.'
        image='/images/15-countdown-to-ramadhan.jpeg'
      />

      <main>
        <ArticleSection />
      </main>
    </div>
  )
}
