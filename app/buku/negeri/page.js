import Image from "next/image";
import Link from "next/link";

export default function Negeri() {
  return (
    <div className="font-arial overflow-auto">
      <header className="p-2 flex flex-wrap box-border bg-orange-300">
        <ul>
          <Image
            className=""
            src="/logo.png"
            alt="logo"
            width={75}
            height={75}
          />
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
          <h1 className="text-8xl font-semibold text-black">Negeri 5 Menara</h1>
          <Link href="/buku/negeri">
            <Image
              className=""
              src="/negeri_5m.jpg"
              alt="negeri 5 menara"
              width={250}
              height={125}
            />
          </Link>
        </div>
        <div className="flex flex-wrap p-4 text-black">
          <h2 className="font-semibold">DESKRIPSI :</h2>
          <p className="mb-4">
            Man Jadda Wajada, siapa yang sungguh-sungguh akan berhasil. Kalimat
            itu bukan hanya “mantra” dalam cerita novel Negeri 5 Menara.
            Kata-kata juga dimaknai seutuhnya selama pembuatan filmnya oleh
            mereka yang terlibat. Buku ini menyajikan rangkaian kisah di balik
            sorot kamera; keringat, air mata, juga tawa milik mereka yang telah
            bahu-membahu menciptakan sebuah karya layar lebar.Simak perjalanan
            yang meliputi serunya perburuan pemeran Sahibul Menara, upaya
            menembus Pondok Modern Gontor, hingga gerilya syuting di London.
            Kisah kisah di balik layar ini akan melengkapi dan menjadi kesaksian
            terwujudnya sebuah keyakinan: Man Jadda Wajada.
          </p>
        </div>
      </article>

      <footer className="bg-stone-700 p-6">
        <Image className="" src="/logo.png" alt="logo" width={35} height={35} />
        <p className="font-bold">LinkBooks</p>
        <div className="flex flex-wrap gap-96 px-32">
          <ul>
            <li className="hover:text-blue-600 py-2">
              <a
                href="https://www.instagram.com/afnf_11"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <li className="hover:text-blue-600 py-2">
              <a
                href="https://gramedia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sumber
              </a>
            </li>
            <li className="hover:text-blue-600 py-2">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help
              </a>
            </li>
          </ul>
          <ul className="rounded-md bg-stone-800 p-1">
            <h2 className="py-1 font-semibold">Tentang Saya</h2>
            <li>Nama : Akhsanul Fikri Nur Fauzan</li>
            <li>NIM : 2303040085</li>
            <li>Kelas : B1</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
