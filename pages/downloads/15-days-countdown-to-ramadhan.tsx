import {
  ArticleCategory,
  ArticleContent,
  ArticleCTA,
  ArticleFigure,
  ArticleSection,
  ArticleSubtitle,
  ArticleTitle,
} from "../../components/article-section";
import { SEO } from "../../components/seo";

export default function Home(): JSX.Element {
  return (
    <div>
      <SEO
        title="15 Days Countdown to Ramadhan"
        description="Demi Ramadhan yang lebih bermakna di tahun ini, kami baru saja membuat rencana 15 hari hitung mundur Ramadhan. Download rencananya di sini."
        image="/images/15-countdown-to-ramadhan.jpeg"
      />

      <main>
        <ArticleSection>
          <ArticleCategory>Ramadhan Preparation</ArticleCategory>
          <ArticleTitle>15 Days Countdown to Ramadhan</ArticleTitle>
          <ArticleFigure
            src="/images/15-countdown-to-ramadhan.jpeg"
            alt="Ramadhan preparation planner"
            width={2160}
            height={1620}
          >
            15 Days Countdown to Ramadhan
          </ArticleFigure>
          <ArticleSubtitle>Sesaat lagi Ramadhan tiba.</ArticleSubtitle>
          <ArticleContent>
            <p>
              Kami ingin Ramadhan tahun ini jadi lebih bermakna, mindful. Bukan
              sekadar mencapai target banyaknya ibadah, tetapi juga menjalin
              hubungan yang lebih dekat dengan Allah SWT dan Rasulullah saw.
            </p>
            <p>
              Untuk mencapai itu, kami baru saja membuat rencana 15 hari hitung
              mundur Ramadhan. Setiap harinya ada waktu khusus yang kami
              dedikasikan untuk mempersiapkan bulan suci ini.
            </p>
            <p>
              Gimana dengan kalian? Apa yang sudah teman-teman persiapkan? Atau
              masih bingung bagaimana menyiapkannya?
            </p>
            <p>
              Nah, jika masih bingung, silakan download rencana menyambut
              ramadhan keluarga kami. Siapa tahu bisa membantu. Kami buat ini
              jadi dua versi Bahasa Inggris dan Bahasa indonesia.
            </p>
          </ArticleContent>
          <ArticleCTA
            href="/files/15-days-countdown-to-ramadhan.pdf"
            download="15 Days Countdown to Ramadhan.pdf"
          >
            Download PDF
          </ArticleCTA>
        </ArticleSection>
      </main>
    </div>
  );
}
