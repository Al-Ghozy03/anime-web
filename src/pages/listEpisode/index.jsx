import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../../component/header";

export default function ListEpisode() {
  const [trend, setTrend] = React.useState([
    
  ]);
  let { slug } = useParams();
  console.log({ slug });

  const [detailAnime,setDetailAnime] = React.useState([
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
    {
      id: 5,
      url: "https://images4.alphacoders.com/978/thumb-1920-978847.jpg",
      judul: "Tensei Shitara Slime Datta Ken Season 2 Part 2",
      episode: "8",
    },
    {
      id: 6,
      url: "https://images4.alphacoders.com/978/thumb-1920-978847.jpg",
      judul: "Tensei Shitara Slime Datta Ken Season 2 Part 2",
      episode: "8",
    },
    {
      id: 7,
      url: "https://images4.alphacoders.com/957/thumb-1920-957927.png",
      judul: "gotoubun no hanayome",
      episode: "10",
    },
    {
      id: 8,
      url: "https://images.alphacoders.com/110/thumb-1920-1108683.jpg",
      judul: "mushoku tensei",
      episode: "19",
    },
    {
      id: 9,
      url: "https://nawalakarsa.id/wp-content/uploads/2021/04/aquatopeheader.png",
      judul: "Shiroi Suna no Aquatope",
      episode: "13",
    },
    {
      id: 10,
      url: "https://images7.alphacoders.com/115/thumbbig-1154420.webp",
      judul: "Scarlet Nexus",
      episode: "14",
    },
    {
      id: 11,
      url: "https://www.themoviedb.org/t/p/w780/sAaGHo7ww5QMw6lk1ZWYrSPcgI7.jpg",
      judul: "Shaman King",
      episode: "25",
    },
    {
      id: 12,
      url: "https://wallpapercave.com/wp/wp9585969.jpg",
      judul: "Re-Main",
      episode: "11",
    },
    {
      id: 13,
      url: "https://images4.alphacoders.com/687/thumb-1920-687986.jpg",
      judul: "kimi no nawa",
      slug: "kimi-no-nawa",
    },
    {
      id: 14,
      url: "https://images5.alphacoders.com/100/thumb-1920-1003363.jpg",
      judul: "tenki no ko",
      slug: "tenki-no-ko",
    },
    {
      id: 15,
      url: "https://images4.alphacoders.com/738/thumb-1920-738316.jpg",
      judul: "koe no katachi",
      slug: "koe-no-katachi",
    },
    {
      id: 16,
      url: "https://images.alphacoders.com/115/thumbbig-1150498.webp",
      judul: "kimetsu no yaiba mugen train",
      slug: "kimetsu-no-yaiba-mugen-train",
    },
    {
      id: 17,
      url: "https://images2.alphacoders.com/109/thumbbig-1093000.webp",
      judul: "A Whisker Away",
      slug: "A-Whisker-Away",
    },
    {
      id: 18,
      url: "https://images2.alphacoders.com/856/thumbbig-856712.webp",
      judul: " Made in Abyss: Dawn of the Deep Soul",
      slug: "Made-in-Abyss:-Dawn-of-the-Deep-Soul",
    },
    {
      id: 19,
      url: "https://images4.alphacoders.com/678/thumbbig-678893.webp",
      judul: "Digimon Adventure: Last Evolution Kizuna",
      slug: "Digimon-Adventure:-Last-Evolution-Kizuna",
    },
    {
      id: 20,
      url: "https://images8.alphacoders.com/545/thumbbig-545284.webp",
      judul: "Psycho-Pass 3: First Inspector",
      slug: "Psycho-Pass-3:-First-Inspector",
    },
    {
      id: 21,
      url: "https://images.alphacoders.com/901/thumbbig-901101.webp",
      judul: "Violet Evergarden Movie",
      slug: "Violet-Evergarden-Movie",
    },
    {
      id: 22,
      url: "https://images.alphacoders.com/901/thumbbig-901101.webp",
      judul: "Detective Conan Movie 24: The Scarlet Bullet",
      slug: "Detective-Cona-Movi-24:-The-Scarlet-Bullet",
    },
  ]);
  let {id} = useParams()
  let params = useParams()
  console.log({id})
  console.log(detailAnime[params.id].judul)
  return (
    <React.Fragment>
      <div className="">
        <Header></Header>
        {/* Isi */}
        <div className="space-y-8 px-12 h-screen py-10">
          <h1 className="text-5xl capitalize font-semibold mb-16 ">{detailAnime[params.id].judul}</h1>
          <div
            style={{
              backgroundImage: `url(${detailAnime[params.id].url})`,
            }}
            className=" bg-cover bg-red-400 h-7/10 rounded-2xl  mx-10"
          ></div>
          <div className="flex justify-between mx-12 font-semibold text-2xl ">
            <div>
              <h1 className="mb-2">
                Judul :
                <span className="capitalize font-normal">{detailAnime[params.id].judul}</span>
              </h1>
              <h1>
                Studio :
                <span className="capitalize font-normal">{detailAnime[params.id].studio}</span>
              </h1>
            </div>
            <div>
              <h1 className="mb-2">
                Jumlah Episode :
                <span className="capitalize font-normal">{detailAnime[params.id].jumlahEpisode}</span>
              </h1>
              <h1>
                Status :{" "}
                <span className="capitalize font-normal">{detailAnime[params.id].status}</span>
              </h1>
            </div>
          </div>

          {/* Sinopsis */}
          <div className="mx-10 space-y-3">
            <h1 className="text-4xl font-semibold mb-5">Sinopsis</h1>
            <p className="text-xl mt-4">
              {detailAnime[params.id].sinopsis}
            </p>
          </div>
          {/* Sinopsis */}
          {/* Episode */}
          <div className="px-10">
            <h1 className="capitalize text-4xl font-semibold mb-5">episode</h1>
            <div className=" px-9 grid grid-cols-4 text-lg">
              <div className="flex flex-col">
                <Link
                  to={`/home/list-episode/${id}/video`}
                  className="capitalize"
                >
                  episode-x
                </Link>
                <Link
                  to={`/home/list-episode/${id}/video`}
                  className="capitalize"
                >
                  episode-x
                </Link>
                <Link
                  to={`/home/list-episode/${id}/video`}
                  className="capitalize"
                >
                  episode-x
                </Link>
                <Link
                  to={`/home/list-episode/${slug}/video`}
                  className="capitalize"
                >
                  episode-x
                </Link>
                <Link
                  to={`/home/list-episode/${slug}/video`}
                  className="capitalize"
                >
                  episode-x
                </Link>
              </div>
            </div>
          </div>
          {/* Episode */}
        </div>

        {/* Isi */}
      </div>
    </React.Fragment>
  );
}
