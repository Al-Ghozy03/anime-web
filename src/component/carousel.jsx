import React from "react";
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../tinggi.css";
import Poto from "./potoCarousel";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
export default function CarouselImage() {

  const [trend, setTrend] = React.useState([
    {
      id: 1,
      judul: "tokyo revengers",
      rating: "8.5",
      sinopsis:
        "Saat menonton berita, Takemichi Hanagaki terkejut mengetahui mantan pacarnya, Hinata Tachibana meninggal dunia. Hinata dibunuh oleh kelompok yang dikenal sebagai Geng Manji Tokyo. Takemichi yang saat ini berada di titik terendah hidupnya tiba-tiba ia melompati waktu ke masa dua belas tahun, ketika dirinya masih menjalin hubungan dengan Hinata. Menyadari dia memiliki kesempatan untuk menyelamatkan Hinata, ia memutuskan untuk menyusup ke Geng Manji Tokyo dan mengubah takdir.",
      url: "https://images3.alphacoders.com/115/thumb-1920-1155000.jpg",
    },
    {
      id: 2,
      judul: "jujutsu kaisen",
      rating: "8.78",
      sinopsis:
        "Yuuji Itadori, seorang siswa SMA yang berbakat dalam olahraga khususnya lari. Namun, ia tak tertarik dengan olahraga dan justru bergabung dengan Klub Penelitian Ilmu Gaib. Hari-hari biasa yang seharusnya ia jalani berubah ketika roh yang sebenarnya muncul di sekolah.",
      url: "https://images3.alphacoders.com/114/thumb-1920-1140983.jpg",
    },
    {
      id: 3,
      judul: "boruto the next generation",
      rating: "6.61",
      sinopsis:
        "Boruto adalah anak dari Uzumaki Naruto, hokage ketujuh yang dihormati sebagai pahlawan yang telah berjasa dalam menyelamatkan dunia. Cerita anime ini berfokus pada Boruto dan teman-temannya sebagai ninja generasi baru yang diharapkan dapat melampaui generasi sebelumnya.",
      url: "https://images.alphacoders.com/810/thumb-1920-810561.png",
    },
    {
      id: 4,
      judul: "shingeki no kyojin",
      rating: "8,48",
      sinopsis:
        "Selama beratus-ratus tahun manusia menjadi mangsa para Titan. Untuk berlindung dari serangan para Titan, umat manusia membangun tembok yang sangat besar dan tinggi. Namun tembok ini tak selamanya dapat melindungi manusia. Satu Titan raksasa berhasil menghancurkan tombok dan masuk ke wilayah pemukiman. Umat manusia pun tak punya pilihan lain selain bertempur untuk bertahan hidup.",
      url: "https://images7.alphacoders.com/607/thumb-1920-607711.jpg",
    },
    {
      id: 5,
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
          <div>
            <div
              style={{
                backgroundImage: `url(${trend[0].url})`,
              }}
              className="bg-red-500 tinggi bg-cover rounded-3xl mx-6 shadow-lg"
            >
              <div className="tinggi bg-gradient-to-r from-black py-16 px-11 rounded-3xl">
                <h1 className="text-6xl mb-5 capitalize font-semibold text-white">
                  {trend[0].judul}
                </h1>
                <div className="flex mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10  w-10 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-3xl text-white">{trend[0].rating}</p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="text-white text-xl">
                    {trend[0].sinopsis}
                  </p>
                </div>

                <Link to={`/home/list-episode`}>
                  <div className="bg-white my-20 rounded-full py-2 px-3 bg-opacity-20 w-48 h-14 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 text-white w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="capitalize col-span-2 text-white font-semibold text-xl py-1 ml-2">
                      watch now
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${trend[1].url})`,
              }}
              className="bg-red-500 tinggi bg-cover rounded-3xl mx-6 shadow-lg"
            >
              <div className="tinggi bg-gradient-to-r from-black py-16 px-11 rounded-3xl">
                <h1 className="text-6xl mb-5 capitalize font-semibold text-white">
                  {trend[1].judul}
                </h1>
                <div className="flex mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10  w-10 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-3xl text-white">{trend[1].rating}</p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="text-white text-xl">
                    {trend[1].sinopsis}
                  </p>
                </div>

                <Link to={`/home/list-episode`}>
                  <div className="bg-white my-20 rounded-full py-2 px-3 bg-opacity-20 w-48 h-14 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 text-white w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="capitalize col-span-2 text-white font-semibold text-xl py-1 ml-2">
                      watch now
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${trend[2].url})`,
              }}
              className="bg-red-500 tinggi bg-cover rounded-3xl mx-6 shadow-lg"
            >
              <div className="tinggi bg-gradient-to-r from-black py-16 px-11 rounded-3xl">
                <h1 className="text-6xl mb-5 capitalize font-semibold text-white">
                  {trend[2].judul}
                </h1>
                <div className="flex mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10  w-10 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-3xl text-white">{trend[2].rating}</p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="text-white text-xl">
                    {trend[2].sinopsis}
                  </p>
                </div>

                <Link to={`/home/list-episode`}>
                  <div className="bg-white my-20 rounded-full py-2 px-3 bg-opacity-20 w-48 h-14 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 text-white w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="capitalize col-span-2 text-white font-semibold text-xl py-1 ml-2">
                      watch now
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${trend[3].url})`,
              }}
              className="bg-red-500 tinggi bg-cover rounded-3xl mx-6 shadow-lg"
            >
              <div className="tinggi bg-gradient-to-r from-black py-16 px-11 rounded-3xl">
                <h1 className="text-6xl mb-5 capitalize font-semibold text-white">
                  {trend[3].judul}
                </h1>
                <div className="flex mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10  w-10 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-3xl text-white">{trend[3].rating}</p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="text-white text-xl">
                    {trend[3].sinopsis}
                  </p>
                </div>

                <Link to={`/home/list-episode`}>
                  <div className="bg-white my-20 rounded-full py-2 px-3 bg-opacity-20 w-48 h-14 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 text-white w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="capitalize col-span-2 text-white font-semibold text-xl py-1 ml-2">
                      watch now
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${trend[4].url})`,
              }}
              className="bg-red-500 tinggi bg-cover rounded-3xl mx-6 shadow-lg"
            >
              <div className="tinggi bg-gradient-to-r from-black py-16 px-11 rounded-3xl">
                <h1 className="text-6xl mb-5 capitalize font-semibold text-white">
                  {trend[4].judul}
                </h1>
                <div className="flex mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10  w-10 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-3xl text-white">{trend[4].rating}</p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="text-white text-xl">
                    {trend[4].sinopsis}
                  </p>
                </div>

                <Link to={`/home/list-episode`}>
                  <div className="bg-white my-20 rounded-full py-2 px-3 bg-opacity-20 w-48 h-14 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 text-white w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="capitalize col-span-2 text-white font-semibold text-xl py-1 ml-2">
                      watch now
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </React.Fragment>
  );
}
