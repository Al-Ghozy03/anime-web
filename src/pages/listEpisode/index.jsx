import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../../component/header";

export default function ListEpisode() {
  const [detailAnime,setDetailAnime] = React.useState([
    {
      id: 1,
      slug: "tokyo-revengers",
      judul: "tokyo revengers",
      rating: "8.5",
      sinopsis:
        "Saat menonton berita, Takemichi Hanagaki terkejut mengetahui mantan pacarnya, Hinata Tachibana meninggal dunia. Hinata dibunuh oleh kelompok yang dikenal sebagai Geng Manji Tokyo. Takemichi yang saat ini berada di titik terendah hidupnya tiba-tiba ia melompati waktu ke masa dua belas tahun, ketika dirinya masih menjalin hubungan dengan Hinata. Menyadari dia memiliki kesempatan untuk menyelamatkan Hinata, ia memutuskan untuk menyusup ke Geng Manji Tokyo dan mengubah takdir.",
      url: "https://images3.alphacoders.com/115/thumb-1920-1155000.jpg",
    },
    {
      id: 2,
      slug: "jujutsu-kaisen",
      judul: "jujutsu kaisen",
      rating: "8.78",
      sinopsis:
        "Yuuji Itadori, seorang siswa SMA yang berbakat dalam olahraga khususnya lari. Namun, ia tak tertarik dengan olahraga dan justru bergabung dengan Klub Penelitian Ilmu Gaib. Hari-hari biasa yang seharusnya ia jalani berubah ketika roh yang sebenarnya muncul di sekolah.",
      url: "https://images3.alphacoders.com/114/thumb-1920-1140983.jpg",
    },
    {
      id: 3,
      slug: "boruto-the-next-generation",
      judul: "boruto the next generation",
      rating: "6.61",
      sinopsis:
        "Boruto adalah anak dari Uzumaki Naruto, hokage ketujuh yang dihormati sebagai pahlawan yang telah berjasa dalam menyelamatkan dunia. Cerita anime ini berfokus pada Boruto dan teman-temannya sebagai ninja generasi baru yang diharapkan dapat melampaui generasi sebelumnya.",
      url: "https://images.alphacoders.com/810/thumb-1920-810561.png",
    },
    {
      id: 4,
      slug:"shingeki-no-kojin",
      judul: "shingeki no kyojin",
      rating: "8,48",
      sinopsis:
        "Selama beratus-ratus tahun manusia menjadi mangsa para Titan. Untuk berlindung dari serangan para Titan, umat manusia membangun tembok yang sangat besar dan tinggi. Namun tembok ini tak selamanya dapat melindungi manusia. Satu Titan raksasa berhasil menghancurkan tombok dan masuk ke wilayah pemukiman. Umat manusia pun tak punya pilihan lain selain bertempur untuk bertahan hidup.",
      url: "https://images7.alphacoders.com/607/thumb-1920-607711.jpg",
    },
    {
      id: 5,
      slug: "Mushoku-Tensei-Isekai-Ittara-Honki-Dasu",
      judul: "Mushoku Tensei: Isekai Ittara Honki Dasu",
      rating: "8,46",
      sinopsis:
        "Terbunuh saat menyelamatkan orang asing dari kecelakaan di jalan, seorang NEET berumur 34 tahun bereinkarnasi ke dunia sihir sebagai Rudeus Greyrat, bayi yang baru lahir. Dengan pengetahuan, pengalaman, dan penyesalan dari kehidupan sebelumnya, Rudeus berusaha menjalani kehidupan barunya dengan lebih baik dan tak ingin mengulangi kesalahan di masa lalu.",
      url: "https://images.alphacoders.com/110/thumb-1920-1108683.jpg",
    },
  ]);
  let {slug} = useParams()
  console.log({slug})
  return (
    <React.Fragment>
      <div className="">
        <Header></Header>
        {/* Isi */}
        <div className="space-y-8 px-12 h-screen py-10">
          <h1 className="text-5xl capitalize font-semibold mb-16 ">{detailAnime?.judul}</h1>
          <div
            style={{
              backgroundImage: `url(${detailAnime.url})`,
            }}
            className=" bg-cover bg-red-400 h-7/10 rounded-2xl  mx-10"
          ></div>
          <div className="flex justify-between mx-12 font-semibold text-2xl ">
            <div>
              <h1 className="mb-2">Judul : <span className="capitalize font-normal">tokyo revengers</span></h1>
              <h1>Studio : <span className="capitalize font-normal">LIDENFILMS</span></h1>
            </div>
            <div>
              <h1 className="mb-2">Jumlah Episode : <span className="capitalize font-normal">23</span></h1>
              <h1>Status : <span className="capitalize font-normal">complete</span></h1>
            </div>
          </div>

          {/* Sinopsis */}
          <div className='mx-10 space-y-3'>
            <h1 className='text-4xl font-semibold mb-5'>Sinopsis</h1>
            <p className='text-xl mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              magnam obcaecati perferendis voluptatem! Nisi sint delectus odio
              mollitia. Tempora dicta sunt vel ad facilis! Consequatur,
              provident tenetur? Voluptate, impedit dolorem? Ipsa vitae
              blanditiis fugiat similique perferendis aperiam veritatis
              accusamus reiciendis quas magni, nulla deserunt maxime soluta,
              itaque nostrum suscipit. Suscipit totam possimus dignissimos
              tenetur qui beatae dolor quasi labore quas doloribus velit quo
              minima aliquam voluptates sunt maiores, sint dolorem nihil officia
              obcaecati soluta id, accusantium temporibus. Enim magnam debitis
              laudantium libero autem praesentium. Nobis, beatae. Deserunt totam
              labore maxime voluptatibus in maiores libero necessitatibus
              dolores, voluptatum, recusandae tenetur sequi voluptas
              exercitationem, fuga consequatur voluptate quo repellendus
              assumenda. Nam enim possimus quo similique, tempore minima. Culpa
              blanditiis explicabo similique facere.
            </p>
          </div>
          {/* Sinopsis */}
          {/* Episode */}
          <div className="px-10">
            <h1 className="capitalize text-4xl font-semibold mb-5">episode</h1>
            <div className=" px-9 grid grid-cols-4 text-lg">
              <div className="flex flex-col">
                <Link to={`/home/list-episode/${slug}/video`} className="capitalize">episode-x</Link>
                <Link to={`/home/list-episode/${slug}/video`} className="capitalize">episode-x</Link>
                <Link to={`/home/list-episode/${slug}/video`} className="capitalize">episode-x</Link>
                <Link to={`/home/list-episode/${slug}/video`} className="capitalize">episode-x</Link>
                <Link to={`/home/list-episode/${slug}/video`} className="capitalize">episode-x</Link>
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
