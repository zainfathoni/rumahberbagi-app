import Head from 'next/head'
import { ArticleSection } from '../components/article-section'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ramadhan Planner | Rumah Berbagi</title>
        <link rel='icon' href='/rumah-berbagi.jpeg' />
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap' rel='stylesheet' />
      </Head>

      <main>
        <ArticleSection />
      </main>
    </div>
  )
}
