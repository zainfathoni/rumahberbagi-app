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
        title="Rencana Menu Ramadhan"
        description="Pusing mau masak apa saja buat sahur dan buka puasa? bingung mau belanja apa buat sebulan ke depan? Coba gunakan meal planner ini yuk!"
        image="/images/rencana-menu-ramadhan.jpeg"
      />

      <main>
        <ArticleSection>
          <ArticleCategory>Ramadhan Preparation</ArticleCategory>
          <ArticleTitle>Rencana Menu Ramadhan</ArticleTitle>
          <ArticleFigure
            src="/images/rencana-menu-ramadhan.jpeg"
            alt="Rencana menu ramadhan"
            width={1440}
            height={973}
          >
            Rencana Menu Ramadhan
          </ArticleFigure>
          <ArticleSubtitle>
            Pusing mau masak apa saja buat sahur dan buka puasa? bingung mau
            belanja apa buat sebulan ke depan? Coba gunakan meal planner ini
            yuk!
          </ArticleSubtitle>
          <ArticleContent>
            <p>
              Nah, buat teman-teman yang ingin membuat rencana menu makanan
              ramadhan tapi bingung gimana caranya, silakan gunakan meal planner
              yang sudah saya buat ini ya. Silakan kalian gunakan sesuai dengan
              kebutuhan keluarga kalian. Tidak perlu mengikuti rencana makanan
              kami, kalian tidak perlu memaksa diri menjadi vegetarian (plant
              based). Gunakan saja mana yang sesuai dengan kalian. Mungkin
              kalian hanya perlu merencanakan sahur saja atau buka puasa saja.
              Atau sekedar mencari inspirasi, boleh juga.
            </p>
            <p>
              Bagaimana cara menggunakan meal planner ini? Oke, kujelaskan
              proses yang kulakukan ya.
            </p>
            <ol>
              <li>
                Cari resep-resep makanan yang simpel dan mudah dieksekusi. Ribet
                juga nggak papa asal kalian sudah familiar. Belum familiar juga
                nggak papa sih, yang penting ada panduannya dan kalian yakin itu
                enak dan disukai keluarga. hehe. 😁
              </li>
              <li>
                Buat daftar menu sahur dan iftar, masing-masing 7. Kenapa 7?
                Nggak ada alasan aneh-aneh kok. hehe. Biar variatif saja. Selain
                itu: Anggaplah ramadhan ini genap 30 hari, maka 7 variasi menu
                ini bisa berulang setidaknya 4 kali (7x4= 28 hari). 2 hari
                lainnya saya gunakan untuk beli makanan dari luar.
              </li>
              <li>
                Oh ya, sebetulnya, menu ini akan berulang selama 5 minggu. Lho
                kok jadi 5 minggu? Karena menu ini akan kami mulai dari seminggu
                sebelum ramadhan agar bisa masak dengan jumlah yang banyak
                sehingga sebagian bisa dibekukan. Juga untuk latihan agar masak
                di bulan ramadhan nanti jadi lebih luwes dan cepat.
              </li>
              <li>
                Setelah membuat list menu, buat daftar bahan makanan
                masing-masing resep, lalu masukkan ke dalam lembar kategori
                bahan makanan.
              </li>
              <li>
                Untuk sahur, Selalu sediakan sayur yang bisa dimakan mentah
                seperti selada, paprika, timun, dan tomat, juga buah-buahan.
                Biar cepat dan sehat kan? 😉
              </li>
            </ol>
            <p>Bagaimana dengan makanan anak-anak?</p>
            <ul>
              <li>Menu sarapan anak kami samakan dengan menu sahur.</li>
              <li>
                Menu makan siang bisa disamakan dengan menu buka puasa. Nah,
                bisa juga nih untuk makan siang mereka: bahan-bahan makanan
                untuk buka puasa dimasak dengan cara lain agar jadi variasi.
              </li>
              <li>Sediakan cemilan yang sehat.</li>
            </ul>
            <p>
              Buat teman-teman yang ingin menggunakan printable meal planner
              ini, silakan download di sini ya. Gratis!
            </p>
            <p>It’s my ramadhan gift for you, Moms!</p>
          </ArticleContent>
          <ArticleCTA
            href="/files/rencana-menu-ramadhan.pdf"
            download="Rencana Menu Ramadhan.pdf"
          >
            Download PDF
          </ArticleCTA>
        </ArticleSection>
      </main>
    </div>
  );
}
