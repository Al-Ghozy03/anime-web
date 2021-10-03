import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../../component/header";
import Episode from "./list";

export default function ListEpisode() {
  const [trend, setTrend] = React.useState([]);
  let { slug } = useParams();
  console.log({ slug });

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
    },
    {
      id: 2,
      slug: "boruto-the-next-generation",
      judul: "boruto the next generation",
      rating: "6.61",
      sinopsis:
        "Boruto adalah anak dari Uzumaki Naruto, hokage ketujuh yang dihormati sebagai pahlawan yang telah berjasa dalam menyelamatkan dunia. Cerita anime ini berfokus pada Boruto dan teman-temannya sebagai ninja generasi baru yang diharapkan dapat melampaui generasi sebelumnya.",
      url: "https://images.alphacoders.com/810/thumb-1920-810561.png",
      studio: "Studio Pierrot",
      sinopsis:
        "Setelah berakhirnya Perang Dunia Shinobi Keempat dengan sukses, Konohagakure telah menikmati masa damai, kemakmuran, dan kemajuan teknologi yang luar biasa. Ini semua karena upaya Pasukan Sekutu Shinobi dan Hokage Ketujuh desa, Naruto Uzumaki. Sekarang menyerupai kota metropolitan modern, Konohagakure telah berubah, terutama kehidupan shinobi. Di bawah pengawasan Naruto dan rekan-rekan lamanya, generasi baru shinobi telah melangkah untuk mempelajari cara-cara ninja.Boruto Uzumaki sering menjadi pusat perhatian sebagai anak dari Hokage Ketujuh. Meskipun mewarisi sikap Naruto yang riuh dan keras kepala, Boruto dianggap sebagai anak ajaib dan mampu mengeluarkan potensinya dengan bantuan teman dan keluarga yang mendukung. Sayangnya, ini hanya memperburuk kesombongan dan keinginannya untuk melampaui Naruto yang, bersama dengan gaya hidup ayahnya yang sibuk, telah membuat hubungan mereka tegang. Namun, kekuatan jahat yang muncul di dalam desa dapat mengancam kehidupan Boruto yang riang. Teman-teman baru dan wajah-wajah yang familiar bergabung dengan Boruto saat cerita baru dimulai di Boruto: Naruto Next Generations .",
      status: "Ongoing",
      jumlahEps: "0",
    },
    {
      id: 3,
      slug: "shingeki-no-kyojin",
      judul: "shingeki no kyojin",
      rating: "8,48",
      sinopsis:
        "Selama beratus-ratus tahun manusia menjadi mangsa para Titan. Untuk berlindung dari serangan para Titan, umat manusia membangun tembok yang sangat besar dan tinggi. Namun tembok ini tak selamanya dapat melindungi manusia. Satu Titan raksasa berhasil menghancurkan tombok dan masuk ke wilayah pemukiman. Umat manusia pun tak punya pilihan lain selain bertempur untuk bertahan hidup.",
      url: "https://images7.alphacoders.com/607/thumb-1920-607711.jpg",
      studio: "MAPPA",
      sinopsis:
        "Gabi Braun dan Falco Grice telah melatih seluruh hidup mereka untuk mewarisi salah satu dari tujuh raksasa di bawah kendali Marley dan membantu negara mereka dalam memberantas para Tetua di Paradis. Namun, karena semua tampak baik-baik saja bagi kedua kadet, kedamaian mereka tiba-tiba terguncang oleh kedatangan Eren Yeager dan sisa anggota Survey Corps. Setelah akhirnya mencapai ruang bawah tanah keluarga Yeager dan belajar tentang sejarah kelam seputar para raksasa, Survey Corps akhirnya menemukan jawaban yang mereka perjuangkan dengan susah payah untuk mengungkapnya. Dengan kebenaran sekarang di tangan mereka, kelompok itu berangkat ke dunia di luar tembok. Di Shingeki no Kyojin: Musim Terakhir, dua dunia yang sangat berbeda bertabrakan ketika masing-masing pihak mengejar agendanya sendiri dalam kesimpulan yang telah lama ditunggu-tunggu untuk perjuangan Paradis untuk kebebasan.",
      status: "Complete",
      jumlahEps: "16",
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
    },
    {
      id: 5,
      url: "https://images4.alphacoders.com/978/thumb-1920-978847.jpg",
      studio: "8bit",
      sinopsis: "-",
      status: "Complete",
      jumlahEps: "12",
      judul: "Tensei Shitara Slime Datta Ken Season 2 Part 2",
    },
    {
      id: 6,
      url: "https://images4.alphacoders.com/117/thumb-1920-1172553.jpg",
      judul: "the detective has already dead",
      studio: "8bit",
      sinopsis: "-",
      status: "Complete",
      jumlahEps: "12",
      episode: "8",
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
      episode: "11",
    },
    {
      id: 9,
      url: "https://nawalakarsa.id/wp-content/uploads/2021/04/aquatopeheader.png",
      studio: "P.A WORKS",
      sinopsis:
        "Setelah meninggalkan karir idolanya, Fuuka Miyazawa mendapati dirinya dalam penerbangan spontan ke Okinawa alih-alih pulang ke pesta belas kasihannya di Morioka. Dengan berat hati dan tidak ada tempat untuk pergi, dia berkeliaran tanpa tujuan di sekitar area itu sampai dia menemukan Akuarium Gama Gama—akuarium tua yang hampir tutup. Dengan kurangnya pengunjung dan perbaikan yang mahal tetapi diperlukan untuk menjaga pintunya tetap terbuka, direktur dihadapkan dengan menutup pendirian untuk selamanya pada akhir musim panas. Cucu perempuan sutradara yang menyukai kehidupan akuatik—Kukuru Misakino—tidak tahan memikirkan penutupan akuarium dan bertekad untuk menghasilkan cukup uang pada akhir musim agar pintu tetap terbuka. Melihat keajaiban akuarium yang unik, Fuuka memohon pekerjaan pada Kukuru; Namun, dia segera menemukan bahwa kurangnya pengalaman membuatnya menjadi penghalang lebih dari apa pun. Pada saat yang sama, Kukuru menyadari bahwa tujuan ambisiusnya mungkin lebih dari yang bisa dia tangani. Dengan tekanan yang meningkat dari sekitar mereka, akankah Kukuru dan Fuuka dapat menyelamatkan satu-satunya tempat yang mereka pegang erat di hati mereka?",
      status: "Ongoing",
      jumlahEps: "0",
      judul: "Shiroi Suna no Aquatope",
    },
    {
      id: 10,
      url: "https://images7.alphacoders.com/115/thumbbig-1154420.webp",
      studio: "Sunrise",
      sinopsis:
        "Kalender matahari tahun 2020: organisme aneh yang disebut Lainnya telah mulai memakan manusia. Untuk mengalahkan musuh baru ini, dibentuklah Other Suppression Force. Diselamatkan oleh tim elit ini sebagai seorang anak, psikokinetik Yuito bertahan dari pelatihan untuk mendaftar. Di sisi lain, keajaiban Kasane dibina karena kemampuannya. Tapi mimpi Kasane menceritakan hal-hal aneh padanya, menyeret keduanya ke dalam nasib yang tak terhindarkan.",
      status: "Ongoing",
      jumlahEps: "0",
      judul: "Scarlet Nexus",
    },
    {
      id: 11,
      url: "https://www.themoviedb.org/t/p/w780/sAaGHo7ww5QMw6lk1ZWYrSPcgI7.jpg",
      studio: "Xebec",
      sinopsis:
        "Pertempuran akan segera dimulai di Tokyo: Pertarungan Dukun, sebuah turnamen yang diadakan setiap lima ratus tahun di mana dukun—mereka yang dapat memerintah roh—berhadapan satu sama lain dalam pertempuran. Pemenang kontes ini menjadi Raja Dukun dan satu-satunya yang mampu menghubungi dan mengendalikan Roh Agung, memungkinkan mereka untuk membentuk kembali dunia sesuka mereka melalui kekuatannya yang luar biasa. Selama jalan-jalan larut malam, Manta Oyamada bertemu dengan teman sekelasnya, You Asakura yang riang, yang mengundangnya untuk datang melihat bintang dengan beberapa teman, yang, yang membuat Manta ngeri, ternyata adalah hantu dari kuburan lokal! Namun, pengetahuan yang dimiliki Manta—indra keenam yang langka yang memungkinkan Manta untuk melihat roh-roh ini—membuat anak itu disayang Anda. Jadi ketika Anda mengetahui bahwa rekan barunya telah dipukuli oleh geng lokal, ia memutuskan untuk membalasnya dengan bantuan Amidamaru, hantu samurai yang makamnya dihancurkan oleh pemimpin geng. Segera Manta mengungkap lebih banyak tentang dunia roh, termasuk Pertarungan Dukun, di mana teman barunya You bertujuan untuk mengklaim kemenangan.",
      status: "Complete",
      jumlahEps: "64",
      judul: "Shaman King",
      episode: "64",
    },
    {
      id: 12,
      url: "https://wallpapercave.com/wp/wp9585969.jpg",
      studio:
        "MAPPA",
      sinopsis: "Ketika Minato Kiyomizu terbangun di rumah sakit, dia mengetahui bahwa dia telah koma selama 203 hari. Ternyata, kecelakaan mobil telah menyebabkan dia kehilangan semua ingatan tentang perjalanan sekolah menengahnya. Akhirnya, dia menemukan kejayaannya di polo air dan ingin melanjutkan apa yang dia tinggalkan. Namun, secara memalukan menyadari perbedaan besar antara dirinya yang dulu dan sekarang, Minato memulai rehabilitasi intensif dengan harapan memulai kehidupan baru tanpa polo air. Namun, Minato segera diingatkan akan kehebatan masa lalunya dan sebuah janji pada hari pertamanya di SMA Yamanami. Tak lama kemudian, meskipun benar-benar menyadari ketidakmampuannya, dia bergabung dengan klub polo air sekolah! Sementara perlu mempelajari kembali dasar-dasar olahraga, dia, bersama dengan rekan satu klubnya, harus merekrut anggota baru untuk mencapai daftar tujuh orang yang diperlukan. Dengan itu, Minato mencoba menghidupkan kembali bakatnya yang terpendam dalam polo air—dan menjadi salah satu pemain terkenal Jepang sekali lagi.",
      status: "Ongoing",
      jumlahEps: "12",
      judul: "Re-Main",
    },
    // Movie
    {
      id: 13,
      url: "https://images4.alphacoders.com/687/thumb-1920-687986.jpg",
      judul: "kimi no nawa",
      slug: "kimi-no-nawa",
      studio:
        "CoMix Wave Films",
      sinopsis: "Mitsuha Miyamizu, seorang gadis sekolah menengah, mendambakan untuk menjalani kehidupan seorang anak laki-laki di kota Tokyo yang ramai—sebuah mimpi yang sangat kontras dengan kehidupannya saat ini di pedesaan. Sementara itu di kota, Taki Tachibana menjalani kehidupan yang sibuk sebagai siswa sekolah menengah sambil menyulap pekerjaan paruh waktu dan harapan untuk masa depan dalam arsitektur. Suatu hari, Mitsuha terbangun di sebuah ruangan yang bukan miliknya dan tiba-tiba mendapati dirinya menjalani kehidupan impian di Tokyo—tetapi di dalam tubuh Taki! Di tempat lain, Taki mendapati dirinya menjalani kehidupan Mitsuha di pedesaan yang sederhana. Dalam mengejar jawaban atas fenomena aneh ini, mereka mulai mencari satu sama lain. Kimi no Nawa. berkisah tentang tindakan Mitsuha dan Taki, yang mulai memiliki dampak dramatis pada kehidupan masing-masing, menenun mereka menjadi kain yang disatukan oleh nasib dan keadaan.",
      status: "-",
      jumlahEps: "0",
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
      jumlahEps: "0",
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
      jumlahEps: "0",
    },
    {
      id: 16,
      url: "https://images.alphacoders.com/115/thumbbig-1150498.webp",
      judul: "kimetsu no yaiba mugen train",
      slug: "kimetsu-no-yaiba-mugen-train",
      studio: "ufotable",
      sinopsis:
        "Setelah serangkaian penghilangan misterius mulai mengganggu kereta api, beberapa upaya Korps Pembunuh Setan untuk mengatasi masalah tersebut terbukti sia-sia. Untuk mencegah korban lebih lanjut, pilar api, Kyoujurou Rengoku, mengambilnya sendiri untuk menghilangkan ancaman. Mendampingi dia adalah beberapa darah baru Korps yang paling menjanjikan: Tanjirou Kamado, Zenitsu Agatsuma, dan Inosuke Hashibira, yang semuanya berharap untuk menyaksikan prestasi berapi-api dari model pembunuh iblis ini secara langsung. Tanpa sepengetahuan mereka, kekuatan iblis yang bertanggung jawab atas penghilangan tersebut telah menjalankan rencana jahat mereka. Di bawah kehadiran iblis ini, kelompok itu harus mengerahkan setiap ons tekad mereka dan menghunus pedang mereka untuk menyelamatkan dua ratus penumpang di dalamnya. Kimetsu no Yaiba Movie: Mugen Ressha-hen menggali ke sudut terdalam dari pikiran Tanjirou, menempatkan tekad dan komitmennya pada tugas untuk diuji.",
      status: "-",
      jumlahEps: "0",
    },
    {
      id: 17,
      url: "https://images2.alphacoders.com/109/thumbbig-1093000.webp",
      judul: "A Whisker Away",
      slug: "A-Whisker-Away",
      studio: "Studio Colorido",
      sinopsis:
        "Miyo Sasaki adalah seorang gadis SMA energik yang berasal dari keluarga berantakan yang terdiri dari ayahnya yang tidak percaya diri dan ibu tiri yang terlalu banyak berinvestasi, yang upayanya untuk berhubungan dengan Miyo dianggap menyusahkan. Melihat Kento Hinode sebagai tempat perlindungan dari semua masalah pribadinya, dia tidak dapat menahan diri untuk tidak memaksakan demonstrasi cinta yang tidak lazim kepada orang yang dia sukai. Sementara Miyo tidak bisa mendapatkan perhatian Kento sebagai dirinya sendiri, dia berhasil berinteraksi dengannya dalam bentuk kucing putih, yang dijuluki 'Tarou' oleh Kento. Tapi Miyo segera menyadari bahwa dia tidak dapat membantu Kento dengan berbagai masalah yang dia dengar dalam bentuk kucingnya dan sekarang terjebak di antara dua pilihan sulit. Akankah dia melanjutkan hubungannya dengan dia sebagai kucing, atau akankah dia mengungkapkan identitasnya dan mempertaruhkan apa yang mereka miliki, untuk membantunya sebagai diri manusianya?",
      status: "-",
      jumlahEps: "0",
    },
    {
      id: 18,
      url: "https://images2.alphacoders.com/856/thumbbig-856712.webp",
      judul: " Made in Abyss: Dawn of the Deep Soul",
      slug: "Made-in-Abyss:-Dawn-of-the-Deep-Soul",
      studio: "Kinema Citrus",
      sinopsis:
        "Melanjutkan keturunan berbahaya mereka menyusuri Abyss, Riko, Regu, dan teman baru Nanachi mencapai lapisan kelima Abyss, The Sea of ​​Corpses. Setelah tiba di stasiun penelitian yang dikenal sebagai Idofront, trio utama bertemu dengan Prushka yang misterius, dugaan putri Bondrewd, yang membawa mereka ke Peluit Putih yang bertanggung jawab atas masa lalu kelam Nanachi. Terlepas dari penampilan yang ramah dari penduduk Idofront, Nanachi memperingatkan para petualang muda bahwa segala sesuatu tidak selalu seperti yang terlihat. Dengan satu-satunya rute ke lapisan keenam yang diselimuti misteri dan skema Bonedrewd menunggu mereka, pengorbanan apa yang harus dilakukan untuk melanjutkan perjalanan ke dasar Abyss?",
      status: "-",
      jumlahEps: "0",
    },
    {
      id: 19,
      url: "https://images4.alphacoders.com/678/thumbbig-678893.webp",
      judul: "Digimon Adventure: Last Evolution Kizuna",
      slug: "Digimon-Adventure:-Last-Evolution-Kizuna",
      studio: "Toei Animation",
      sinopsis:
        "Digimon yang terinfeksi—monster digital yang mulai bertindak dengan cara mengamuk dan mengalami peningkatan kekuatan yang aneh—sedang menyerang dunia nyata. Sementara Maki Himekawa dan Daigo Nishijima, agen Incorporated Administrative Agency yang misterius, berusaha mempelajari lebih lanjut tentang penampilan yang mengganggu ini, sebagian besar Anak Terpilih sibuk mempersiapkan festival musim panas Sekolah Menengah Umum Tsukishima. Mimi Tachikawa, yang baru saja kembali ke Jepang setelah tinggal di Amerika Serikat selama bertahun-tahun, berjuang untuk menemukan pijakannya di antara teman-teman sekelasnya dan sesama Anak Terpilih. Sementara itu, dengan menceburkan diri ke dalam studinya, Jou Kido sengaja menghindari semua masalah yang berkaitan dengan Digimon, menyebabkan rekannya Gomamon melarikan diri. Tindakan individu Mimi dan Jou menyebabkan gesekan dalam kelompok bahkan ketika ancaman Digimon yang terinfeksi masih membayangi mereka. Akankah keduanya menyelesaikan konflik pribadi mereka tepat waktu untuk membantu teman-teman mereka melawan ancaman terbaru?",
      status: "-",
      jumlahEps: "0",
    },
    {
      id: 20,
      url: "https://images8.alphacoders.com/545/thumbbig-545284.webp",
      judul: "Psycho-Pass 3: First Inspector",
      slug: "Psycho-Pass-3:-First-Inspector",
      studio: "Production I.G",
      sinopsis:
        "Karena kesuksesan Sistem Sibyl yang luar biasa, Jepang telah mulai mengekspor teknologinya ke negara lain dengan harapan suatu hari nanti akan digunakan di seluruh dunia. Untuk menguji keefektifannya di lokasi asing, negara bagian South East Asian Union (SEAUn) yang dilanda perang memutuskan untuk menerapkan sistem tersebut, dengan harapan dapat membawa perdamaian dan stabilitas ke kota Shambala Float dan menjaga populasi tetap terkendali. Namun, sekelompok teroris anti-Sibyl tiba di Jepang, dan Biro Keamanan Publik Kementerian Kesejahteraan menemukan bukti signifikan bahwa para penyerbu dibantu oleh Shinya Kougami, mantan Enforcer yang menjadi nakal. Karena hubungan masa lalu mereka, Akane Tsunemori dikirim ke SEAUn untuk membawanya kembali, tetapi dengan pertemuan terakhir mereka di masa lalu, reuni mereka mungkin tidak berjalan sesuai rencana.",
      status: "-",
      jumlahEps: "0",
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
      jumlahEps: "0",
    },
  ]);

  let params = useParams();
  let jumlahEpisode = detailAnime[params.id].jumlahEps
  console.log(jumlahEpisode)
  let { id } = useParams();
  console.log({ id });
  console.log(detailAnime[params.id].judul);

  function getEpisode() {
    let list = document.getElementById("list")
    console.log(list)
    for (let i = 0; i < jumlahEpisode; i++) {
      console.log(list = `episode ${i+1}`)
    }
  }
  getEpisode()
  return (
    <React.Fragment>
      <div className="">
        <p>{getEpisode}</p>
        <Header></Header>
        {/* Isi */}
        <div className="space-y-8 px-12 h-screen py-10">
          <h1 className="text-5xl capitalize font-semibold mb-16 ">
            {detailAnime[params.id].judul}
          </h1>
          <div
            style={{
              backgroundImage: `url(${detailAnime[params.id].url})`,
            }}
            className=" bg-cover bg-red-400 h-7/10 rounded-2xl  mx-10"
          ></div>
          <div className="flex justify-between mx-12 font-semibold text-2xl ">
            <div>
              <h1 className="mb-2">
                Judul :  {" "}
                <span className="capitalize font-normal"> 
                  {detailAnime[params.id].judul}
                </span>
              </h1>
              <h1>
                Studio :{" "}
                <span className="capitalize font-normal">
                  {detailAnime[params.id].studio}
                </span>
              </h1>
            </div>
            <div>
              <h1 className="mb-2">
                Jumlah Episode :{" "}
                <span className="capitalize font-normal">
                  {detailAnime[params.id].jumlahEps}
                </span>
              </h1>
              <h1>
                Status :{" "}
                <span className="capitalize font-normal">
                  {detailAnime[params.id].status}
                </span>
              </h1>
            </div>
          </div>

          {/* Sinopsis */}
          <div className="mx-10 space-y-3">
            <h1 className="text-4xl font-semibold mb-5">Sinopsis</h1>
            <p className="text-xl mt-4">{detailAnime[params.id].sinopsis}</p>
          </div>
          {/* Sinopsis */}
          <div className="px-10">
            <h1 className="capitalize text-4xl font-semibold mb-5">episode</h1>
            <div className="grid grid-cols-4">
              <p id="list">episode</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
