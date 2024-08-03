import Image from "next/image";
import Link from "next/link";

export default function Laskar() {
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
          <h1 className="text-8xl font-semibold text-black">Laskar Pelangi</h1>
          <Link href="/buku/laskar">
            <Image
              className=""
              src="/laskar_pelangi.jpg"
              alt="laskar pelangi"
              width={250}
              height={125}
            />
          </Link>
        </div>
        <div className="flex flex-wrap p-4 text-black">
          <h2 className="font-semibold">DESKRIPSI :</h2>
          <p className="mb-4">
            Buku Laskar Pelangi adalah novel yang pertama kali diterbitkan oleh
            penulis kenamaan, Andrea Hirata. Tepatnya, novel ini berhasil
            dirilis pada tahun 2015 oleh Penerbit Bentang Pustaka. Dalam
            peradabannya, Andrea Hirata pun mengeluarkan tiga novel sekuel
            lanjutan dari Laskar Pelangi, di antaranya Sang Pemimpi, Edensor,
            dan Maryamah Karpov. Laskar Pelangi merupakan novel yang
            terinspirasi dari kisah nyata kehidupan Andrea Hirata selaku penulis
            yang mana saat itu dirinya bertempat tinggal di Desa Gantung,
            Kabupaten Gantung, Belitung Timur. Berkenaan dengan hal tersebut,
            mudah bagi si penulis merepresentasikan berbagai unsur sosial dan
            budaya masyarakat Belitung ke dalam bentuk cerita di novel Laskar
            Pelangi ini secara apik. "Bangunan itu nyaris rubuh. Dindingnya
            miring bersangga sebalok kayu. Atapnya bocor dimana-mana. Tetapi,
            berpasang-pasang mata mungil menatap penuh harap. Hendak kemana
            lagikah mereka harus bersekolah selain tempat itu? Tak peduli
            seberat apapun kondisi sekolah itu, sepuluh anak dari keluarga
            miskin itu tetap bergeming. Didada mereka, telah menggumpal tekad
            untuk maju." Laskar Pelangi, kisah perjuangan anak-anak untuk
            mendapatkan ilmu. Diceritakan dengan lucu dan menggelitik, novel ini
            menjadi novel terlaris di Indonesia. Inspiratif dan layak dimiliki
            siapa saja yang mencintai pendidikan dan keajaiban masa kanak-kanak.
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
