import React from "react";
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../tinggi.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
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
      slug: "boruto-the-next-generation",
      judul: "boruto the next generation",
      rating: "6.61",
      sinopsis:
        "Boruto adalah anak dari Uzumaki Naruto, hokage ketujuh yang dihormati sebagai pahlawan yang telah berjasa dalam menyelamatkan dunia. Cerita anime ini berfokus pada Boruto dan teman-temannya sebagai ninja generasi baru yang diharapkan dapat melampaui generasi sebelumnya.",
      url: "https://images.alphacoders.com/810/thumb-1920-810561.png",
    },
    {
      id: 3,
      slug: "shingeki-no-kojin",
      judul: "shingeki no kyojin",
      rating: "8,48",
      sinopsis:
        "Selama beratus-ratus tahun manusia menjadi mangsa para Titan. Untuk berlindung dari serangan para Titan, umat manusia membangun tembok yang sangat besar dan tinggi. Namun tembok ini tak selamanya dapat melindungi manusia. Satu Titan raksasa berhasil menghancurkan tombok dan masuk ke wilayah pemukiman. Umat manusia pun tak punya pilihan lain selain bertempur untuk bertahan hidup.",
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
