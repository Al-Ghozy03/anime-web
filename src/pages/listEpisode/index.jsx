import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../../component/header";

export default function ListEpisode() {
  const [detailAnime,setDetailAnime] = React.useState([
    {
      id:1,
      slug:"tokyo-revengers",
      judul:"tokyo revengers",
      studio:"LIDENFILMS",
      jumlahEpisode:"23",
      status:"complete",
      sinopsis:"Saat menonton berita, Takemichi Hanagaki terkejut mengetahui mantan pacarnya, Hinata Tachibana meninggal dunia. Hinata dibunuh oleh kelompok yang dikenal sebagai Geng Manji Tokyo. Takemichi yang saat ini berada di titik terendah hidupnya tiba-tiba ia melompati waktu ke masa dua belas tahun, ketika dirinya masih menjalin hubungan dengan Hinata. Menyadari dia memiliki kesempatan untuk menyelamatkan Hinata, ia memutuskan untuk menyusup ke Geng Manji Tokyo dan mengubah takdir.",
    },
    {
      id:5,
      slug:"mushoku-tensei-isekai-ittara-honki-dasu",
      judul:"tokyo ghoul",
      studio:"LIDENFILMS",
      jumlahEpisode:"23",
      https:"//images6.alphacoders.com/115/thumb-1920-1150499.png",
      status:"complete",
      sinopsis:"Saat menonton berita, Takemichi Hanagaki terkejut mengetahui mantan pacarnya, Hinata Tachibana meninggal dunia. Hinata dibunuh oleh kelompok yang dikenal sebagai Geng Manji Tokyo. Takemichi yang saat ini berada di titik terendah hidupnya tiba-tiba ia melompati waktu ke masa dua belas tahun, ketika dirinya masih menjalin hubungan dengan Hinata. Menyadari dia memiliki kesempatan untuk menyelamatkan Hinata, ia memutuskan untuk menyusup ke Geng Manji Tokyo dan mengubah takdir.",
    },
  ])
  let {slug} = useParams()
  console.log({slug})
  return (
    <React.Fragment>
      <div className="">
        <Header></Header>
        {/* Isi */}
        <div className="space-y-8 px-12 h-screen py-10">
          <h1 className="text-5xl capitalize font-semibold mb-16 ">Tokyo Revengers</h1>
          <div
            style={{
              backgroundImage: `url(${detailAnime[1].url})`,
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
                <Link to={`/home/list-episode/video`} className="capitalize">episode-x</Link>
                <Link to={`/home/list-episode/video`} className="capitalize">episode-x</Link>
                <Link to={`/home/list-episode/video`} className="capitalize">episode-x</Link>
                <Link to={`/home/list-episode/video`} className="capitalize">episode-x</Link>
                <Link to={`/home/list-episode/video`} className="capitalize">episode-x</Link>
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
