import {
  BenefitBottomContainer,
  BenefitContainerImage,
  BenefitDescription,
  BenefitItem,
  BenefitSection,
  BenefitTopContainer,
} from "../components/benefit-section";
import {
  CtaButton,
  CtaSection,
  CtaDescription,
  CtaTitle,
} from "../components/cta-section";
import { Faq } from "../components/faq-section";
import { HeroSection } from "../components/hero-section";
import { ChalkboardTeacherIcon } from "../components/icons/chalkboard-teacher";
import { CommentsAltIcon } from "../components/icons/comments-alt";
import { FileInvoiceIcon } from "../components/icons/file-invoice";
import { FileSignatureIcon } from "../components/icons/file-signature";
import { FileVideoIcon } from "../components/icons/file-video";
import {  Pricing,
} from "../components/sections/pricing";
import { SEO } from "../components/seo";

export default function Home(): JSX.Element {
  return (
    <div>
      <SEO />

      <main>
        <HeroSection />
        <BenefitSection title="Didik anak usia prasekolah Anda secara lembut dan terarah">
          <BenefitDescription>
            Setiap orang tua pasti ingin memberikan pendidikan terbaik bagi
            anaknya. Di kelas Tahun Prasekolahku ini Anda akan diarahkan untuk
            mendidik anak Anda di usia prasekolah. Berikut benefit yang akan
            Anda dapatkan sebagai peserta kelas ini.
          </BenefitDescription>
          <BenefitTopContainer
            title="Ikuti kelas dengan mudah"
            description="Sarana kelas yang nyaman untuk diikuti dan dirujuk kembali di kemudian hari"
            image={
              <BenefitContainerImage
                src="/images/planner-preview.jpeg"
                alt="Halaman perencanaan"
                height={1280}
                width={937}
              />
            }
          >
            <BenefitItem
              icon={<FileInvoiceIcon />}
              title="Handout berupa catatan bergambar"
            >
              Catatan bergambar (Sketch Note) yang nyaman dibaca untuk dirujuk
              kembali di kemudian hari.
            </BenefitItem>
            <BenefitItem icon={<FileSignatureIcon />} title="Printable planner">
              Lembar perencanaan yang dapat dicetak dan dikustomisasi sesuai
              dengan kebutuhan anak dan keluarga.
            </BenefitItem>
            <BenefitItem icon={<FileVideoIcon />} title="Video rekaman">
              File video rekaman dari kelas yang berlangsung.
            </BenefitItem>
          </BenefitTopContainer>
          <BenefitBottomContainer
            title="Interaksi dua arah"
            description="Kelas interaktif dengan umpan balik langsung dari saya"
            image={
              <BenefitContainerImage
                src="/images/interaction-preview.jpeg"
                alt="Materi interaksi di kelas"
                height={959}
                width={1280}
              />
            }
          >
            <BenefitItem
              icon={<ChalkboardTeacherIcon />}
              title="Langsung dan intensif"
            >
              Interaksi langsung di dalam kelas melalui Google Meet. Ukuran
              kelas yang kecil memungkinkan proses diskusi yang mendalam di
              dalam kelas.
            </BenefitItem>
            <BenefitItem
              icon={<CommentsAltIcon />}
              title="Demonstrasi dan diskusi"
            >
              Demonstrasi pengisian lembar perencanaan yang telah disediakan
              disertai dengan diskusi dan tanya jawab.
            </BenefitItem>
          </BenefitBottomContainer>
        </BenefitSection>
        <Pricing title="Biaya kelas">
          <Pricing.Description>
            Biaya yang perlu dibayarkan setelah terkonfirmasi sebagai peserta
            kelas
          </Pricing.Description>
          <Pricing.Included title="Biaya termasuk">
            <Pricing.Item>Handout berupa catatan bergambar</Pricing.Item>
            <Pricing.Item>Printable planner</Pricing.Item>
            <Pricing.Item>Akses kelas online melalui Google Meet</Pricing.Item>
            <Pricing.Item>Video rekaman kelas</Pricing.Item>
          </Pricing.Included>
        </Pricing>
        <Faq title="FAQ (Tanya Jawab)">
          <Faq.Description>
            Tidak menemukan jawaban yang Anda cari? Hubungi saya{" "}
            <a
              href="https://www.instagram.com/vika.riandini/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              melalui Instagram
            </a>
            .
          </Faq.Description>
          <Faq.Content>
            <div>
              <Faq.Question>Kelas ini untuk siapa?</Faq.Question>
              <Faq.Answer>
                Kelas ini untuk para orang tua, khususnya untuk anak di bawah
                usia sekolah, tetapi tidak menutup kemungkinan orang tua dengan
                anak di usia sekolah masih membutuhkannya karena bisa jadi ada
                aspek yang terlewat dari fondasi yang harus dipersiapkan di usia
                prasekolah.
              </Faq.Answer>
            </div>
            <div>
              <Faq.Question>Berapa lama kelas ini akan berlangsung?</Faq.Question>
              <Faq.Answer>
                Setidaknya akan ada dua pertemuan yang terdiri dari pembahasan
                materi dan praktik pembuatan rencana pendidikan untuk anak
                prasekolah. Tidak menutup kemungkinan jumlah pertemuan akan
                ditambah sesuai dengan kebutuhan.
              </Faq.Answer>
            </div>
            <div>
              <Faq.Question>
                Berapa biaya kelas ini? Kapan saya harus membayarnya?
              </Faq.Question>
              <Faq.Answer>
                Biaya kelas ini Rp 150.000,- yang dapat dibayarkan setelah Anda
                mendapatkan konfirmasi dari kami bahwa Anda mendapatkan slot
                untuk bergabung di kelas ini.
              </Faq.Answer>
            </div>
            <div>
              <Faq.Question>
                Mengapa jumlah peserta hanya dibatasi sebanyak 20 orang?
              </Faq.Question>
              <Faq.Answer>
                Supaya proses belajar bisa lebih fokus dan aktivitas tanya jawab
                bisa dilakukan secara lebih intensif.
              </Faq.Answer>
            </div>
            <div>
              <Faq.Question>
                Saya gagal mendapatkan slot di kelas ini. Lantas bagaimana saya
                bisa mengikuti kelas ini?
              </Faq.Question>
              <Faq.Answer>
                Pertama-tama, pastikan dulu bahwa Anda telah terdaftar ke dalam
                daftar antrian calon peserta. Apabila kelas untuk angkatan
                berikutnya telah kami buka, kami akan kirimkan email kepada Anda
                berdasarkan urutan antrian Anda.
              </Faq.Answer>
            </div>
          </Faq.Content>
        </Faq>
        <CtaSection>
          <CtaTitle>Tahun Prasekolahku</CtaTitle>
          <CtaDescription>
            Kursus membangun pondasi pendidikan prasekolah PAUD dan TK dengan
            dasar-dasar filosofi Charlotte Mason
          </CtaDescription>
          <CtaButton>Daftar sekarang</CtaButton>
        </CtaSection>
      </main>
    </div>
  );
}
