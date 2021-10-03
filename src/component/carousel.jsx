import React from "react";
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../tinggi.css";
import CarouselData from "./carouselData";
export default function CarouselImage() {

  const [trend, setTrend] = React.useState([
    {
      id: 0,
      slug: "tokyo-revengers",
      judul: "tokyo revengers",
      rating: "8.5",
      sinopsis:
        "Saat menonton berita, Takemichi Hanagaki terkejut mengetahui mantan pacarnya, Hinata Tachibana meninggal dunia. Hinata dibunuh oleh kelompok yang dikenal sebagai Geng Manji Tokyo. Takemichi yang saat ini berada di titik terendah hidupnya tiba-tiba ia melompati waktu ke masa dua belas tahun, ketika dirinya masih menjalin hubungan dengan Hinata. Menyadari dia memiliki kesempatan untuk menyelamatkan Hinata, ia memutuskan untuk menyusup ke Geng Manji Tokyo dan mengubah takdir.",
      url: "https://images3.alphacoders.com/115/thumb-1920-1155000.jpg",
    },
    {
      id: 1,
      slug: "jujutsu-kaisen",
      judul: "jujutsu kaisen",
      rating: "8.78",
      sinopsis:
        "Yuuji Itadori, seorang siswa SMA yang berbakat dalam olahraga khususnya lari. Namun, ia tak tertarik dengan olahraga dan justru bergabung dengan Klub Penelitian Ilmu Gaib. Hari-hari biasa yang seharusnya ia jalani berubah ketika roh yang sebenarnya muncul di sekolah.",
      url: "https://images3.alphacoders.com/114/thumb-1920-1140983.jpg",
    },
    {
      id: 2,
      slug: "tokyo-ghoul",
      judul: "tokyo ghoul",
      rating: "7.96",
      sinopsis:
        "Tokyo dihantui oleh “ghouls” misterius yang melahap manusia. Manusia dicekam oleh ketakutan dari para ghoulyang identitasnya masih menjadi misteri. Seorang mahasiswa biasa bernama Kaneki bertemu Rize, perempuan yang hobi membaca sepertinya, di café yang sering Kaneki kunjungi. Iapun menyadari bahwa takdirnya akan berubah pada malam itu.",
      url: "https://images4.alphacoders.com/596/thumb-1920-596845.jpg",
    },
    {
      id: 3,
      slug: "shingeki-no-kojin",
      judul: "shingeki no kyojin final season",
      rating: "8,48",
      sinopsis:
        "Gabi Braun dan Falco Grice telah melatih seluruh hidup mereka untuk mewarisi salah satu dari tujuh raksasa di bawah kendali Marley dan membantu negara mereka dalam memberantas para Tetua di Paradis. Namun, karena semua tampak baik-baik saja bagi kedua kadet, kedamaian mereka tiba-tiba terguncang oleh kedatangan Eren Yeager dan sisa anggota Survey Corps. Setelah akhirnya mencapai ruang bawah tanah keluarga Yeager dan belajar tentang sejarah kelam seputar para raksasa, Survey Corps akhirnya menemukan jawaban yang mereka perjuangkan dengan susah payah untuk mengungkapnya. ",
      url: "https://images7.alphacoders.com/607/thumb-1920-607711.jpg",
    },
    {
      id: 4,
      slug: "Mushoku-Tensei-Isekai-Ittara-Honki-Dasu",
      judul: "Mushoku Tensei: Isekai Ittara Honki Dasu",
      rating: "8,46",
      sinopsis:
        "Terbunuh saat menyelamatkan orang asing dari kecelakaan di jalan, seorang NEET berumur 34 tahun bereinkarnasi ke dunia sihir sebagai Rudeus Greyrat, bayi yang baru lahir. Dengan pengetahuan, pengalaman, dan penyesalan dari kehidupan sebelumnya, Rudeus berusaha menjalani kehidupan barunya dengan lebih baik dan tak ingin mengulangi kesalahan di masa lalu.",
      url: "https://images.alphacoders.com/110/thumb-1920-1108683.jpg",
    },
  ]);

  return (
    <React.Fragment>
      <div className="px-10 py-10">
        <h1 className="text-5xl capitalize font-semibold mb-16">
          trending anime
        </h1>
        <Carousel
        plugins={[
          "infinite",
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
        ]}
        animationSpeed={1000}
        >
          {trend?.map((i,key)=>
          <CarouselData
          key={key}
          url={i.url}
          rating={i.rating}
          judul={i.judul}rating={i.rating}
          sinopsis={i.sinopsis}
          slug={i.slug}
          id={i.id}
          ></CarouselData>

          )}
        </Carousel>
      </div>
    </React.Fragment>
  );
}
