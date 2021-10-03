import React from "react";
import Header from "../component/header";
import snk from "../assets/tensura.mp4";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import "../index.css";

export default function VideoPlayer() {
  const [detailAnime, setDetailAnime] = React.useState([
    {
      id: 0,
      slug: "tokyo-revengers",
      judul: "tokyo revengers",
      rating: "8.5",
      sinopsis:
        "Saat menonton berita, Takemichi Hanagaki terkejut mengetahui mantan pacarnya, Hinata Tachibana meninggal dunia. Hinata dibunuh oleh kelompok yang dikenal sebagai Geng Manji Tokyo. Takemichi yang saat ini berada di titik terendah hidupnya tiba-tiba ia melompati waktu ke masa dua belas tahun, ketika dirinya masih menjalin hubungan dengan Hinata. Menyadari dia memiliki kesempatan untuk menyelamatkan Hinata, ia memutuskan untuk menyusup ke Geng Manji Tokyo dan mengubah takdir.",
      url: "https://images3.alphacoders.com/115/thumb-1920-1155000.jpg",
      studio: "LIDENFILMS",
      sinopsis:
        "Tahun kedua sekolah menengah Takemichi Hanagaki adalah titik tertinggi dalam hidupnya. Dia memiliki rasa hormat, sekelompok teman yang bisa dia andalkan, dan bahkan pacar. Tapi itu dua belas tahun yang lalu. Hari ini, dia bukan siapa-siapa: ketidakberdayaan yang diolok-olok oleh anak-anak dan selalu dipaksa untuk meminta maaf kepada atasannya yang lebih muda. Sebuah laporan berita mendadak tentang pembunuhan kejam Geng Tokyo Manji terhadap satu-satunya pacar yang pernah dia miliki bersama saudara laki-lakinya hanya menambah penghinaan pada cedera. Setengah detik sebelum kereta mengakhiri hidupnya yang menyedihkan untuk selamanya, Takemichi kembali ke hari yang sama dua belas tahun yang lalu, ketika dia masih berkencan dengan Hinata Tachibana. Setelah dipaksa untuk menghidupkan kembali hari yang sama yang memulai spiral ke bawah, Takemichi bertemu dengan adik Hinata. Tanpa berpikir, dia mengakui kematiannya sebelum kembali ke masa lalu. Takemichi mendesaknya untuk melindungi saudara perempuannya sebelum kembali ke masa depan secara misterius. Ajaibnya, dia tidak mati. Lebih aneh lagi, masa depan telah berubah. Sepertinya Takemichi dapat mengubah aliran waktu. Diberi kesempatan untuk mencegah kematian tragis mantan pacarnya di tangan Geng Tokyo Manji, Takemichi memutuskan untuk terbang melintasi waktu untuk mengubah arah masa depan.",
      status: "Complete",
      jumlahEps: "24",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
        { eps: 13 },
        { eps: 14 },
        { eps: 15 },
        { eps: 16 },
        { eps: 17 },
        { eps: 18 },
        { eps: 19 },
        { eps: 20 },
        { eps: 21 },
        { eps: 22 },
        { eps: 23 },
        { eps: 24 },
      ],
    },
    {
      id: 1,
      slug: "jujutsu-kaisen",
      judul: "jujutsu kaisen",
      rating: "8.78",
      sinopsis:
        "Yuuji Itadori, seorang siswa SMA yang berbakat dalam olahraga khususnya lari. Namun, ia tak tertarik dengan olahraga dan justru bergabung dengan Klub Penelitian Ilmu Gaib. Hari-hari biasa yang seharusnya ia jalani berubah ketika roh yang sebenarnya muncul di sekolah.",
      url: "https://images3.alphacoders.com/114/thumb-1920-1140983.jpg",
      studio: "MAPPA",
      sinopsis:
        "Iseng-iseng terlibat dalam kegiatan paranormal tak berdasar dengan Klub Ilmu Gaib, siswa sekolah menengah Yuuji Itadori menghabiskan hari-harinya di ruang klub atau rumah sakit, di mana ia mengunjungi kakeknya yang terbaring di tempat tidur. Namun, gaya hidup santai ini segera berubah menjadi aneh ketika dia tanpa sadar menemukan benda terkutuk. Memicu rantai kejadian supernatural, Yuuji menemukan dirinya tiba-tiba didorong ke dunia Kutukan—makhluk mengerikan yang terbentuk dari kebencian dan kenegatifan manusia—setelah menelan benda tersebut, terungkap sebagai jari milik iblis Sukuna Ryoumen, Raja Kutukan Yuuji mengalami secara langsung ancaman Kutukan ini terhadap masyarakat saat ia menemukan kekuatan barunya sendiri. Diperkenalkan ke Sekolah Tinggi Teknik Jujutsu Metropolitan Tokyo, ia mulai berjalan di jalan yang tidak dapat ia kembalikan—jalan seorang penyihir Jujutsu.",
      status: "Complete",
      jumlahEps: "24",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
        { eps: 13 },
        { eps: 14 },
        { eps: 15 },
        { eps: 16 },
        { eps: 17 },
        { eps: 18 },
        { eps: 19 },
        { eps: 20 },
        { eps: 21 },
        { eps: 22 },
        { eps: 23 },
        { eps: 24 },
      ],
    },
    {
      id: 2,
      slug: "tokyo-ghoul",
      judul: "tokyo ghoul",
      rating: "7.96",
      sinopsis:
        "Tokyo dihantui oleh “ghouls” misterius yang melahap manusia. Manusia dicekam oleh ketakutan dari para ghoulyang identitasnya masih menjadi misteri. Seorang mahasiswa biasa bernama Kaneki bertemu Rize, perempuan yang hobi membaca sepertinya, di café yang sering Kaneki kunjungi. Iapun menyadari bahwa takdirnya akan berubah pada malam itu.",
      url: "https://images4.alphacoders.com/596/thumb-1920-596845.jpg",
      studio: "Studio Pierrot",
      status: "complete",
      jumlahEps: "12",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
      ],
    },
    {
      id: 3,
      slug: "shingeki-no-kyojin",
      judul: "shingeki no kyojin final season",
      rating: "8,48",
      sinopsis:
        "Selama beratus-ratus tahun manusia menjadi mangsa para Titan. Untuk berlindung dari serangan para Titan, umat manusia membangun tembok yang sangat besar dan tinggi. Namun tembok ini tak selamanya dapat melindungi manusia. Satu Titan raksasa berhasil menghancurkan tombok dan masuk ke wilayah pemukiman. Umat manusia pun tak punya pilihan lain selain bertempur untuk bertahan hidup.",
      url: "https://images7.alphacoders.com/607/thumb-1920-607711.jpg",
      studio: "MAPPA",
      sinopsis:
        "Gabi Braun dan Falco Grice telah melatih seluruh hidup mereka untuk mewarisi salah satu dari tujuh raksasa di bawah kendali Marley dan membantu negara mereka dalam memberantas para Tetua di Paradis. Namun, karena semua tampak baik-baik saja bagi kedua kadet, kedamaian mereka tiba-tiba terguncang oleh kedatangan Eren Yeager dan sisa anggota Survey Corps. Setelah akhirnya mencapai ruang bawah tanah keluarga Yeager dan belajar tentang sejarah kelam seputar para raksasa, Survey Corps akhirnya menemukan jawaban yang mereka perjuangkan dengan susah payah untuk mengungkapnya. Dengan kebenaran sekarang di tangan mereka, kelompok itu berangkat ke dunia di luar tembok. Di Shingeki no Kyojin: Musim Terakhir, dua dunia yang sangat berbeda bertabrakan ketika masing-masing pihak mengejar agendanya sendiri dalam kesimpulan yang telah lama ditunggu-tunggu untuk perjuangan Paradis untuk kebebasan.",
      status: "Complete",
      jumlahEps: "16",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
        { eps: 13 },
        { eps: 14 },
        { eps: 15 },
        { eps: 16 },
      ],
    },
    {
      id: 4,
      slug: "Mushoku-Tensei-Isekai-Ittara-Honki-Dasu",
      judul: "Mushoku Tensei: Isekai Ittara Honki Dasu",
      rating: "8,46",
      sinopsis:
        "Terbunuh saat menyelamatkan orang asing dari kecelakaan di jalan, seorang NEET berumur 34 tahun bereinkarnasi ke dunia sihir sebagai Rudeus Greyrat, bayi yang baru lahir. Dengan pengetahuan, pengalaman, dan penyesalan dari kehidupan sebelumnya, Rudeus berusaha menjalani kehidupan barunya dengan lebih baik dan tak ingin mengulangi kesalahan di masa lalu.",
      url: "https://images.alphacoders.com/110/thumb-1920-1108683.jpg",
      studio: "Studio Bind",
      sinopsis:
        "Meskipun diintimidasi, dicemooh, dan ditindas sepanjang hidupnya, seorang pria berusia tiga puluh empat tahun yang tertutup masih menemukan tekad untuk mencoba sesuatu yang heroik—hanya untuk itu berakhir dengan kecelakaan tragis. Namun dalam putaran nasib, ia terbangun di dunia lain sebagai Rudeus Greyrat, memulai hidup lagi sebagai bayi yang lahir dari dua orang tua yang penuh kasih. Mempertahankan ingatan dan pengetahuannya dari kehidupan sebelumnya, Rudeus dengan cepat beradaptasi dengan lingkungan barunya. Dengan pikiran dewasa, ia mulai menampilkan bakat magis yang melebihi semua harapan, mengasah keterampilannya dengan bantuan seorang penyihir bernama Roxy Migurdia. Rudeus belajar permainan pedang dari ayahnya, Paul, dan bertemu Sylphiette, seorang gadis seusianya yang dengan cepat menjadi teman terdekatnya. Saat kesempatan kedua Rudeus dalam hidup dimulai, dia mencoba memanfaatkan kesempatan barunya sebaik mungkin sambil menaklukkan masa lalunya yang traumatis. Dan mungkin, suatu hari, dia mungkin menemukan satu hal yang tidak dapat dia temukan di dunia lamanya—cinta.",
      status: "Complete",
      jumlahEps: "11",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
      ],
    },
    {
      id: 5,
      url: "https://images4.alphacoders.com/978/thumb-1920-978847.jpg",
      studio: "8bit",
      sinopsis:
        "Mikami Satoru, lelaki berusia tiga puluh tujuh tahun yang terjebak dalam pekerjaan membosankan dan tak senang dengan kehidupan biasanya. Tapi, setelah ditikam oleh seorang perampok, ia terbangun di dunia fantasi …, sebagai slime. Saat ia menyesuaikan diri dengan keadaannya, hubungannya dengan monster lain memicu serangkaian peristiwa yang akan mengubah dunianya!",
      status: "Complete",
      jumlahEps: "12",
      judul: "Tensei Shitara Slime Datta Ken Season 2 Part 2",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
      ],
    },
    {
      id: 6,
      url: "https://images4.alphacoders.com/117/thumb-1920-1172553.jpg",
      judul: "the detective has already dead",
      studio: "ENGI",
      sinopsis:
        "Kimizuka Kimihiko, anak SMA kelas 3 mantan asisten dari detektif Siesta. Tiga tahun lalu, di ketinggian 10.000 meter di atas permukaan tanah, Kimihiko bertemu Siesta di dalam pesawat yang dibajak. Insiden itu menjadi awal petualangan keduanya ke seluruh dunia untuk menyelesaikan berbagai kasus. Namun, perjalanan mereka harus berakhir tiga tahun kemudian setelah kematian Siesta Ditinggal sendiri, Kimihiko memutuskan untuk menjalani kehidupan sekolahnya dengan normal. Namun, hari-hari damainya jadi berantakan ketika gadis berambit perak mirip Siesta kembali datang di kehidupannya.",
      status: "Complete",
      jumlahEps: "12",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
      ],
    },
    {
      id: 7,
      url: "https://images4.alphacoders.com/957/thumb-1920-957927.png",
      studio: "Tezuka Productions",
      sinopsis:
        "Fuutarou Uesugi adalah siswa sekolah menengah atas, tetapi menjalani kehidupan yang sulit. Kepribadiannya yang angkuh dan sifatnya yang menyendiri telah membuatnya tidak memiliki teman, dan ayahnya terlilit hutang, memaksa keluarganya untuk bertahan hidup. Suatu hari saat istirahat makan siang, Uesugi berdebat dengan seorang siswa pindahan yang telah mengklaim 'tempat duduknya', membuat keduanya tidak menyukai satu sama lain. Pada hari yang sama, ia diberi kesempatan emas untuk melunasi hutang keluarganya: sebuah pertunjukan les privat untuk putri keluarga kaya, dengan upah lima kali harga pasar. Dia menerima lamaran itu, tetapi ngeri mengetahui bahwa kliennya, Itsuki Nakano, adalah gadis yang dia hadapi sebelumnya! Setelah gagal mencoba untuk mendapatkan kembali sisi baiknya Itsuki, Uesugi mengetahui bahwa masalahnya tidak berakhir di situ: Itsuki sebenarnya adalah kembar lima, jadi selain dia, dia juga harus mengajari saudara perempuannya—Miku, Yotsuba, Nino, dan Ichika —yang, meskipun terancam gagal, tidak mau berurusan dengan tutor. Namun, mata pencaharian keluarganya dipertaruhkan sehingga Uesugi terus maju, bersikeras dalam tekadnya untuk menyingkirkan saudara perempuan dari kebencian mereka untuk belajar dan berhasil membawa mereka ke kelulusan.",
      status: "Complete",
      jumlahEps: "12",
      judul: "gotoubun no hanayome",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
      ],
    },
    {
      id: 8,
      url: "https://images.alphacoders.com/110/thumb-1920-1108683.jpg",
      studio: "Studio Bind",
      sinopsis:
        "Meskipun diintimidasi, dicemooh, dan ditindas sepanjang hidupnya, seorang pria berusia tiga puluh empat tahun yang tertutup masih menemukan tekad untuk mencoba sesuatu yang heroik—hanya untuk itu berakhir dengan kecelakaan tragis. Namun dalam putaran nasib, ia terbangun di dunia lain sebagai Rudeus Greyrat, memulai hidup lagi sebagai bayi yang lahir dari dua orang tua yang penuh kasih. Mempertahankan ingatan dan pengetahuannya dari kehidupan sebelumnya, Rudeus dengan cepat beradaptasi dengan lingkungan barunya. Dengan pikiran dewasa, ia mulai menampilkan bakat magis yang melebihi semua harapan, mengasah keterampilannya dengan bantuan seorang penyihir bernama Roxy Migurdia. Rudeus belajar permainan pedang dari ayahnya, Paul, dan bertemu Sylphiette, seorang gadis seusianya yang dengan cepat menjadi teman terdekatnya. Saat kesempatan kedua Rudeus dalam hidup dimulai, dia mencoba memanfaatkan kesempatan barunya sebaik mungkin sambil menaklukkan masa lalunya yang traumatis. Dan mungkin, suatu hari, dia mungkin menemukan satu hal yang tidak dapat dia temukan di dunia lamanya—cinta.",
      status: "Complete",
      jumlahEps: "11",
      judul: "mushoku tensei",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
      ],
    },
    {
      id: 9,
      url: "https://nawalakarsa.id/wp-content/uploads/2021/04/aquatopeheader.png",
      studio: "P.A WORKS",
      sinopsis:
        "Setelah meninggalkan karir idolanya, Fuuka Miyazawa mendapati dirinya dalam penerbangan spontan ke Okinawa alih-alih pulang ke pesta belas kasihannya di Morioka. Dengan berat hati dan tidak ada tempat untuk pergi, dia berkeliaran tanpa tujuan di sekitar area itu sampai dia menemukan Akuarium Gama Gama—akuarium tua yang hampir tutup. Dengan kurangnya pengunjung dan perbaikan yang mahal tetapi diperlukan untuk menjaga pintunya tetap terbuka, direktur dihadapkan dengan menutup pendirian untuk selamanya pada akhir musim panas. Cucu perempuan sutradara yang menyukai kehidupan akuatik—Kukuru Misakino—tidak tahan memikirkan penutupan akuarium dan bertekad untuk menghasilkan cukup uang pada akhir musim agar pintu tetap terbuka. Melihat keajaiban akuarium yang unik, Fuuka memohon pekerjaan pada Kukuru; Namun, dia segera menemukan bahwa kurangnya pengalaman membuatnya menjadi penghalang lebih dari apa pun. Pada saat yang sama, Kukuru menyadari bahwa tujuan ambisiusnya mungkin lebih dari yang bisa dia tangani. Dengan tekanan yang meningkat dari sekitar mereka, akankah Kukuru dan Fuuka dapat menyelamatkan satu-satunya tempat yang mereka pegang erat di hati mereka?",
      status: "Ongoing",
      jumlahEps: "24",
      judul: "Shiroi Suna no Aquatope",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
        { eps: 13 },
        { eps: 14 },
        { eps: 15 },
        { eps: 16 },
        { eps: 17 },
        { eps: 18 },
        { eps: 19 },
        { eps: 20 },
        { eps: 21 },
        { eps: 22 },
        { eps: 23 },
        { eps: 24 },
      ],
    },
    {
      id: 10,
      url: "https://images7.alphacoders.com/115/thumbbig-1154420.webp",
      studio: "Sunrise",
      sinopsis:
        "Kalender matahari tahun 2020: organisme aneh yang disebut Lainnya telah mulai memakan manusia. Untuk mengalahkan musuh baru ini, dibentuklah Other Suppression Force. Diselamatkan oleh tim elit ini sebagai seorang anak, psikokinetik Yuito bertahan dari pelatihan untuk mendaftar. Di sisi lain, keajaiban Kasane dibina karena kemampuannya. Tapi mimpi Kasane menceritakan hal-hal aneh padanya, menyeret keduanya ke dalam nasib yang tak terhindarkan.",
      status: "Ongoing",
      jumlahEps: "14",
      judul: "Scarlet Nexus",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
        { eps: 13 },
        { eps: 14 },
      ],
    },
    {
      id: 11,
      url: "https://images2.alphacoders.com/698/thumb-1920-698449.png",
      studio: "bones",
      sinopsis:
        "Nakajima Atsushi diusir dari panti asuhan. Sekarang ia tidak memiliki tempat tinggal. Saat sedang di tepi sungai, ia melihat seorang pria yang mencoba bunuh diri. Nakajima pun menyelamatkan pria itu, yang ternyata adalah agen detektif khusus. Pria itu bernama Dazai Osamu, seorang yang memiliki kekuatan supernatural dan bertugas menyelesaikan kasus-kasus yang terlalu berbahaya untuk ditangani polisi atau militer. Pertemuan Nakajima dengan Dazai membuatnya terlibat dengan berbagai kasus berbahaya.",
      status: "Complete",
      jumlahEps: "12",
      judul: "bungou stray dogs",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
      ],
    },
    {
      id: 12,
      url: "https://wallpapercave.com/wp/wp9585969.jpg",
      studio: "MAPPA",
      sinopsis:
        "Ketika Minato Kiyomizu terbangun di rumah sakit, dia mengetahui bahwa dia telah koma selama 203 hari. Ternyata, kecelakaan mobil telah menyebabkan dia kehilangan semua ingatan tentang perjalanan sekolah menengahnya. Akhirnya, dia menemukan kejayaannya di polo air dan ingin melanjutkan apa yang dia tinggalkan. Namun, secara memalukan menyadari perbedaan besar antara dirinya yang dulu dan sekarang, Minato memulai rehabilitasi intensif dengan harapan memulai kehidupan baru tanpa polo air. Namun, Minato segera diingatkan akan kehebatan masa lalunya dan sebuah janji pada hari pertamanya di SMA Yamanami. Tak lama kemudian, meskipun benar-benar menyadari ketidakmampuannya, dia bergabung dengan klub polo air sekolah! Sementara perlu mempelajari kembali dasar-dasar olahraga, dia, bersama dengan rekan satu klubnya, harus merekrut anggota baru untuk mencapai daftar tujuh orang yang diperlukan. Dengan itu, Minato mencoba menghidupkan kembali bakatnya yang terpendam dalam polo air—dan menjadi salah satu pemain terkenal Jepang sekali lagi.",
      status: "Ongoing",
      jumlahEps: "12",
      judul: "Re-Main",
      episode: [
        { eps: 1 },
        { eps: 2 },
        { eps: 3 },
        { eps: 4 },
        { eps: 5 },
        { eps: 6 },
        { eps: 7 },
        { eps: 8 },
        { eps: 9 },
        { eps: 10 },
        { eps: 11 },
        { eps: 12 },
      ],
    },
    // Movie
    {
      id: 13,
      url: "https://images4.alphacoders.com/687/thumb-1920-687986.jpg",
      judul: "kimi no nawa",
      slug: "kimi-no-nawa",
      studio: "CoMix Wave Films",
      sinopsis:
        "Mitsuha Miyamizu, seorang gadis sekolah menengah, mendambakan untuk menjalani kehidupan seorang anak laki-laki di kota Tokyo yang ramai—sebuah mimpi yang sangat kontras dengan kehidupannya saat ini di pedesaan. Sementara itu di kota, Taki Tachibana menjalani kehidupan yang sibuk sebagai siswa sekolah menengah sambil menyulap pekerjaan paruh waktu dan harapan untuk masa depan dalam arsitektur. Suatu hari, Mitsuha terbangun di sebuah ruangan yang bukan miliknya dan tiba-tiba mendapati dirinya menjalani kehidupan impian di Tokyo—tetapi di dalam tubuh Taki! Di tempat lain, Taki mendapati dirinya menjalani kehidupan Mitsuha di pedesaan yang sederhana. Dalam mengejar jawaban atas fenomena aneh ini, mereka mulai mencari satu sama lain. Kimi no Nawa. berkisah tentang tindakan Mitsuha dan Taki, yang mulai memiliki dampak dramatis pada kehidupan masing-masing, menenun mereka menjadi kain yang disatukan oleh nasib dan keadaan.",
      status: "-",
      jumlahEps: "1",
      episode: [{ eps: 1 }],
    },
    {
      id: 14,
      url: "https://images5.alphacoders.com/100/thumb-1920-1003363.jpg",
      judul: "tenki no ko",
      slug: "tenki-no-ko",
      studio: "CoMix Wave Films",
      sinopsis:
        "Tokyo saat ini mengalami hujan deras yang tampaknya mengganggu kecepatan semua orang yang tinggal di sana tanpa henti. Di tengah hujan yang tampaknya abadi ini tibalah siswa sekolah menengah yang melarikan diri, Hodaka Morishima, yang berjuang untuk menghidupi dirinya sendiri secara finansial — berakhir dengan pekerjaan di penerbit kecil-kecilan. Pada saat yang sama, anak yatim piatu Hina Amano juga berusaha mencari pekerjaan untuk menghidupi dirinya dan adiknya. Kedua nasib terjalin ketika Hodaka mencoba untuk menyelamatkan Hina dari pria teduh, memutuskan untuk melarikan diri bersama. Selanjutnya, Hodaka menemukan bahwa Hina memiliki kekuatan yang aneh namun menakjubkan: kemampuan untuk memanggil matahari setiap kali dia berdoa untuk itu. Dengan mempertimbangkan cuaca Tokyo yang tidak biasa, Hodaka melihat potensi dari kemampuan ini. Dia menyarankan agar Hina menjadi 'gadis sinar matahari'—seseorang yang akan membersihkan langit bagi orang-orang saat mereka sangat membutuhkannya. Hal-hal mulai mencari mereka pada awalnya. Namun, sudah menjadi rahasia umum bahwa kekuasaan selalu datang dengan harga yang mahal...",
      status: "-",
      jumlahEps: "1",
      episode: [{ eps: 1 }],
    },
    {
      id: 15,
      url: "https://images4.alphacoders.com/738/thumb-1920-738316.jpg",
      judul: "koe no katachi",
      slug: "koe-no-katachi",
      studio: "Kyoto Animation",
      sinopsis:
        "Sebagai seorang pemuda liar, siswa sekolah dasar Shouya Ishida berusaha untuk mengalahkan kebosanan dengan cara yang paling kejam. Ketika Shouko Nishimiya yang tuli pindah ke kelasnya, Shouya dan seluruh kelasnya tanpa berpikir menggertaknya untuk bersenang-senang. Namun, ketika ibunya memberi tahu sekolah, dia dipilih dan disalahkan atas semua yang dilakukan padanya. Dengan Shouko pindah dari sekolah, Shouya ditinggalkan oleh belas kasihan teman-teman sekelasnya. Dia tanpa perasaan dikucilkan di seluruh sekolah dasar dan menengah, sementara para guru menutup mata. Sekarang di tahun ketiga sekolah menengahnya, Shouya masih diganggu oleh kesalahannya sebagai anak muda. Dengan tulus menyesali tindakan masa lalunya, dia memulai perjalanan penebusan: untuk bertemu Shouko sekali lagi dan menebus kesalahan. Koe no Katachi menceritakan kisah yang mengharukan tentang reuni Shouya dengan Shouko dan upaya jujurnya untuk menebus dirinya sendiri, sambil terus dihantui oleh bayang-bayang masa lalunya.",
      status: "-",
      jumlahEps: "1",
      episode: [{ eps: 1 }],
    },
    {
      id: 16,
      url: "https://images6.alphacoders.com/115/thumb-1920-1150499.png",
      judul: "kimetsu no yaiba mugen train",
      slug: "kimetsu-no-yaiba-mugen-train",
      studio: "ufotable",
      sinopsis:
        "Setelah serangkaian penghilangan misterius mulai mengganggu kereta api, beberapa upaya Korps Pembunuh Setan untuk mengatasi masalah tersebut terbukti sia-sia. Untuk mencegah korban lebih lanjut, pilar api, Kyoujurou Rengoku, mengambilnya sendiri untuk menghilangkan ancaman. Mendampingi dia adalah beberapa darah baru Korps yang paling menjanjikan: Tanjirou Kamado, Zenitsu Agatsuma, dan Inosuke Hashibira, yang semuanya berharap untuk menyaksikan prestasi berapi-api dari model pembunuh iblis ini secara langsung. Tanpa sepengetahuan mereka, kekuatan iblis yang bertanggung jawab atas penghilangan tersebut telah menjalankan rencana jahat mereka. Di bawah kehadiran iblis ini, kelompok itu harus mengerahkan setiap ons tekad mereka dan menghunus pedang mereka untuk menyelamatkan dua ratus penumpang di dalamnya. Kimetsu no Yaiba Movie: Mugen Ressha-hen menggali ke sudut terdalam dari pikiran Tanjirou, menempatkan tekad dan komitmennya pada tugas untuk diuji.",
      status: "-",
      jumlahEps: "1",
      episode: [{ eps: 1 }],
    },
    {
      id: 17,
      url: "https://images2.alphacoders.com/109/thumb-1920-1093000.png",
      judul: "A Whisker Away",
      slug: "A-Whisker-Away",
      studio: "Studio Colorido",
      sinopsis:
        "Miyo Sasaki adalah seorang gadis SMA energik yang berasal dari keluarga berantakan yang terdiri dari ayahnya yang tidak percaya diri dan ibu tiri yang terlalu banyak berinvestasi, yang upayanya untuk berhubungan dengan Miyo dianggap menyusahkan. Melihat Kento Hinode sebagai tempat perlindungan dari semua masalah pribadinya, dia tidak dapat menahan diri untuk tidak memaksakan demonstrasi cinta yang tidak lazim kepada orang yang dia sukai. Sementara Miyo tidak bisa mendapatkan perhatian Kento sebagai dirinya sendiri, dia berhasil berinteraksi dengannya dalam bentuk kucing putih, yang dijuluki 'Tarou' oleh Kento. Tapi Miyo segera menyadari bahwa dia tidak dapat membantu Kento dengan berbagai masalah yang dia dengar dalam bentuk kucingnya dan sekarang terjebak di antara dua pilihan sulit. Akankah dia melanjutkan hubungannya dengan dia sebagai kucing, atau akankah dia mengungkapkan identitasnya dan mempertaruhkan apa yang mereka miliki, untuk membantunya sebagai diri manusianya?",
      status: "-",
      jumlahEps: "1",
      episode: [{ eps: 1 }],
    },
    {
      id: 18,
      url: "https://i0.wp.com/animenewsplus.net/wp-content/uploads/2020/06/Anime-Josee-to-Tora-to-Sakana-tachi-Visual.jpg?fit=2400%2C1900&ssl=1",
      judul: " josee to tora to sakana-tachi",
      slug: "josee-to-tora-to-sakana-tachi",
      studio: "bones ",
      sinopsis:
        "Tsuneo, seorang mahasiswa biasa dan pegiat menyelam, secara tak terduga bekerja menjadi pengurus seorang gadis muda berkursi roda, demi mengumpulkan uang agar bisa pergi menyelam di Meksiko. Sang gadis, yang menamai dirinya sebagai Josee seperti seorang tokoh dalam buku favoritnya, bersifat pemarah dan banyak menuntut. Namun, seiring Tsuneo mendampingi Josee berinteraksi dengan dunia luar dan belajar memahami perspektif unik Josee, rasa yang ada di antara mereka bertumbuh jadi cinta. Keduanya pun mulai saling mendukung lewat cara-cara yang lebih dari sekadar romansa.",
      status: "-",
      jumlahEps: "1",
      episode: [{ eps: 1 }],
    },
    {
      id: 19,
      url: "https://images4.alphacoders.com/678/thumb-1920-678893.jpg",
      judul: "Digimon Adventure: Last Evolution Kizuna",
      slug: "Digimon-Adventure:-Last-Evolution-Kizuna",
      studio: "Toei Animation",
      sinopsis:
        "Digimon yang terinfeksi monster digital yang mulai bertindak dengan cara mengamuk dan mengalami peningkatan kekuatan yang aneh—sedang menyerang dunia nyata. Sementara Maki Himekawa dan Daigo Nishijima, agen Incorporated Administrative Agency yang misterius, berusaha mempelajari lebih lanjut tentang penampilan yang mengganggu ini, sebagian besar Anak Terpilih sibuk mempersiapkan festival musim panas Sekolah Menengah Umum Tsukishima. Mimi Tachikawa, yang baru saja kembali ke Jepang setelah tinggal di Amerika Serikat selama bertahun-tahun, berjuang untuk menemukan pijakannya di antara teman-teman sekelasnya dan sesama Anak Terpilih. Sementara itu, dengan menceburkan diri ke dalam studinya, Jou Kido sengaja menghindari semua masalah yang berkaitan dengan Digimon, menyebabkan rekannya Gomamon melarikan diri. Tindakan individu Mimi dan Jou menyebabkan gesekan dalam kelompok bahkan ketika ancaman Digimon yang terinfeksi masih membayangi mereka. Akankah keduanya menyelesaikan konflik pribadi mereka tepat waktu untuk membantu teman-teman mereka melawan ancaman terbaru?",
      status: "-",
      jumlahEps: "1",
      episode: [{ eps: 1 }],
    },
    {
      id: 20,
      url: "https://images.alphacoders.com/872/thumb-1920-872607.jpg",
      judul: "Psycho-Pass 3: First Inspector",
      slug: "Psycho-Pass-3:-First-Inspector",
      studio: "Production I.G",
      sinopsis:
        "Karena kesuksesan Sistem Sibyl yang luar biasa, Jepang telah mulai mengekspor teknologinya ke negara lain dengan harapan suatu hari nanti akan digunakan di seluruh dunia. Untuk menguji keefektifannya di lokasi asing, negara bagian South East Asian Union (SEAUn) yang dilanda perang memutuskan untuk menerapkan sistem tersebut, dengan harapan dapat membawa perdamaian dan stabilitas ke kota Shambala Float dan menjaga populasi tetap terkendali. Namun, sekelompok teroris anti-Sibyl tiba di Jepang, dan Biro Keamanan Publik Kementerian Kesejahteraan menemukan bukti signifikan bahwa para penyerbu dibantu oleh Shinya Kougami, mantan Enforcer yang menjadi nakal. Karena hubungan masa lalu mereka, Akane Tsunemori dikirim ke SEAUn untuk membawanya kembali, tetapi dengan pertemuan terakhir mereka di masa lalu, reuni mereka mungkin tidak berjalan sesuai rencana.",
      status: "-",
      jumlahEps: "1",
      episode: [{ eps: 1 }],
    },
    {
      id: 21,
      url: "https://images.alphacoders.com/901/thumbbig-901101.webp",
      judul: "Violet Evergarden Movie",
      slug: "Violet-Evergarden-Movie",
      studio: "Kyoto Animation",
      sinopsis:
        "Beberapa tahun telah berlalu sejak akhir Perang Besar. Ketika menara radio di Leidenschaftlich terus dibangun, telepon akan segera menjadi lebih relevan, yang menyebabkan penurunan permintaan untuk 'Boneka Memori Otomatis'. Meski begitu, Violet Evergarden terus meningkat ketenarannya setelah kesuksesannya yang konstan dengan menulis surat. Namun, terkadang satu hal yang Anda dambakan adalah satu hal yang tidak muncul. Violet Evergarden Movie mengikuti Violet saat ia terus memahami konsep emosi dan makna cinta. Pada saat yang sama, dia mengejar secercah harapan bahwa pria yang pernah mengatakan kepadanya, 'Aku mencintaimu,' mungkin masih hidup bahkan setelah bertahun-tahun berlalu.",
      status: "-",
      jumlahEps: "1",
      episode: [{ eps: 1 }],
    },
    {
      id: 22,
      url: "https://images4.alphacoders.com/911/thumb-1920-911581.jpg",
      judul: "Detective Conan Movie 24: The Scarlet Bullet",
      slug: "Detective-Cona-Movi-24:-The-Scarlet-Bullet",
      studio: "TMS Entertainment",
      sinopsis:
        "Ajang olahraga internasional bergengsi, World Sports Games (WSG), yang diadakan setiap empat tahun, akan diselenggarakan di Tokyo. Media juga memusatkan perhatian pada kereta HyperLinear yang mampu mencapai 1.000 km / jam dan peluncuran layanannya pada hari pembukaan WSG.Namun banyak insiden terjadi dimana petinggi eksekutif perusahaan sponsor WSG diculik tetapi kemudian segera dibebaskan Ketika Conan mengetahui tentang Alan McKenzie, mantan kepala FBI dan sekarang ketua",
      status: "-",
      jumlahEps: "1",
      episode: [{ eps: 1 }],
    },
  ]);
  const [disable, setDisable] = React.useState(false);

  let params = useParams();
  let { id } = useParams();
  let { eps } = useParams();
  let next = parseInt(params.eps) + 1;
  let prev = parseInt(params.eps) - 1;
  let history = useHistory();
  let panjang = detailAnime[params.id].episode;

  return (
    <React.Fragment>
      <Header></Header>
      <h1 className="font-semibold poppins px-14 text-6xl pt-10 capitalize text-center mb-20">
        {detailAnime[params.id].judul} episode {eps}
      </h1>
      <div className="px-72 poppins">
        <div style={{ height: "400px" }} className="">
          <video
            className="rounded-3xl outline-none shadow-lg"
            width="2000"
            height="200"
            controls
          >
            <source src={snk} type="" />
          </video>
        </div>
        <div className="flex justify-between mt-40 mb-20">
          <button
            onClick={() => {
              if (parseInt(params.eps) === 1) {
                return;
              } else {
                history.push(`/home/list-episode/${id}/video/${prev}`);
              }
            }}
            className={`bg-gradient-to-r from-blue-700 to-blue-500 ${
              parseInt(params.eps) === 1 ? "opacity-25" : "opacity-100"
            } h-16 w-16 rounded-full`}
          >
            {/* previous */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 my-3 mx-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <Link to={`/home/list-episode/${id}`}>
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 h-16 rounded-full px-3 flex w-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-4 my-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              <p className="text-xl capitalize text-white font-semibold my-4 ml-3">
                daftar episode
              </p>
            </div>
          </Link>
          <button
            onClick={() => {
              if (parseInt(params.eps) >= panjang.length) {
                return;
              } else {
                history.push(`/home/list-episode/${id}/video/${next}`);
              }
            }}
            className={`bg-gradient-to-r from-blue-700 to-blue-500 h-16 w-16 ${
              parseInt(params.eps) >= panjang.length
                ? "bg-opacity-10"
                : "bg-opacity-100"
            } rounded-full`}
          >
            {/* next */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 my-3 mx-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
