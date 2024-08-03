import Image from "next/image";
import Link from "next/link";

export default function Ronggeng() {
  return (
    <div className="font-arial overflow-auto">
      <header className="p-2 flex flex-wrap box-border bg-orange-300">
        <ul>
          <Link href="/">
            <Image
              className=""
              src="/logo.png"
              alt="logo"
              width={75}
              height={75}
            />
          </Link>
        </ul>
        <h2 className="p-4 font-bold text-4xl">LinkBooks</h2>
        <ul className="">
          <Link
            href="/"
            className="p-6 gap-2 rounded-md bg-orange-400 hover:bg-orange-500 flex flex-row"
          >
            <Image
              src="/left-arrow.png"
              className=""
              alt="Arrow"
              width={30}
              height={30}
            />
            <span className="p-1">Kembali</span>
          </Link>
        </ul>
      </header>

      <article className="w-full bg-[url(/paper.jpg)] bg-cover p-4 gap-6">
        <div className="p-2 z-10 w-full gap-5 justify items-center font-arial flex flex-col">
          <h1 className="text-8xl font-semibold text-black">
            Ronggeng Dukuh Paruk
          </h1>
          <Link href="/buku/ronggeng">
            <Image
              className=""
              src="/ronggeng_dp.jpg"
              alt="ronggeng dukuh paruk"
              width={250}
              height={125}
            />
          </Link>
        </div>
        <div className="flex flex-wrap p-4 text-black">
          <h2 className="font-semibold">DESKRIPSI :</h2>
          <p className="mb-4">
            Ronggeng Dukuh Paruk adalah sebuah judul novel dari trilogi novel
            karya Ahmad Tohari yang merupakan novel pertama dari trilogi
            tersebut. Dua judul lainnya adalah Lintang Kemukus Dini Hari dan
            Jantera Bianglala. Novel ini–Ronggeng Dukuh Paruk, membuka ceritanya
            dengan mendeskripsikan suatu keadaan sebuah perkampungan di daerah
            Jawa. Memuat cerita kehidupan dan adat kebiasaan masyarakat di Dukuh
            Paruk, dukuh ini terletak pada sebuah wilayah di Jawa dengan kondisi
            memprihatinkan: terbelakang dan melarat, serta memiliki penduduk
            yang memelihara kebodohan dan rasa malas. Namun, pedukuhan ini
            memiliki suatu kebiasaan yang menjadi ciri khasnya, yaitu ronggeng.
          </p>
          <br />
          <h2 className="font-semibold">SINOPSIS :</h2>
          <p className="mb-4">
            Laskar Pelangi telah menjadi international best seller,
            diterjemahkan ke dalam 40 bahasa asing. Telah terbit dalam 22
            bahasa, diedarkan di lebih dari 130 negara. Melalui program
            beasiswa, Hirata meraih Master of Science (M.Sc.) bidang teori
            ekonomi dari Sheffield Hallam University, UK. Hirata juga mendapat
            beasiswa pendidikan sastra di IWP (International Writing Program),
            University of Iowa, USA.
          </p>
          <br />
          <h2 className="font-semibold">DETAIL :</h2>
          <ul>
            <li>Jumlah Halaman : 529</li>
            <li>Penerbit : Bentang Pustaka</li>
            <li>Tanggal Terbit : 11 Mei 2011</li>
            <li>Berat : 0.4 kg</li>
            <li>ISBN : 9789793062792</li>
            <li>Panjang : 21.0 cm</li>
            <li>Lebar : 13.0 cm</li>
            <li>Bahasa : Indonesia</li>
          </ul>
        </div>
      </article>

      <footer className="bg-stone-700 p-6">
        <div className="flex flex-wrap gap-10">
          <Link href="/">
            <Image
              className=""
              src="/logo.png"
              alt="logo"
              width={35}
              height={35}
            />
          </Link>
          <div className="hover:text-blue-600 py-2">
            <a
              href="https://www.instagram.com/afnf_11"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
          <div className="hover:text-blue-600 py-2">
            <a
              href="https://gramedia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sumber
            </a>
          </div>
          <div className="hover:text-blue-600 py-2">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
