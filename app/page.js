import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col overflow-auto">
      <header className="w-full bg-[url(/library.jpg)] bg-cover">
        <div className="p-6 z-10 w-full gap-5 justify items-center font-arial lg:flex flex-col">
          <Link href="/">
            <Image
              className=""
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <h1 className="text-8xl font-bold">LinkBooks</h1>
          <div className="justify-center box-border h-60 w-96">
            <p className="text-wrap text-center font-arial text-lg">
              Selamat datang di LinkBooks, pusat sumber pengetahuan online Anda.
              Temukan berbagai deskripsi dari buku digital dan cetak dari
              berbagai genre, sertai komunitas pembaca, dan jelajahi dunia
              pengetahuan dengan mudah dan menyenangkan!
            </p>
          </div>
        </div>
      </header>


      <div className="bg-[url(/ceramic.jpg)] bg-cover"> 
        <div className="p-2 z-10 w-full gap-5 justify items-center font-arial lg:flex flex-col">
          <h1 className="text-6xl text-black font-semibold">Buku</h1>
        </div>
        <div className="gap-10 p-6 flex flex-wrap justify-center items-center text-black">
          <div className="box-border border-4 w-auto h-auto backdrop-blur-sm text-center">
            <Link
              className="p-2 font-semibold text-lg hover:text-blue-600"
              href="/buku/laskar"
            >
              Laskar Pelangi
            </Link>
            <hr className="p-1" />
            <Link href="/buku/laskar">
              <Image
                className=""
                src="/laskar_pelangi.jpg"
                alt="laskar pelangi"
                width={300}
                height={400}
                objectFit=""
              />
            </Link>
          </div>
          <div className="box-border border-4 w-auto h-auto backdrop-blur-sm text-center">
            <Link
              className="p-2 font-semibold text-lg hover:text-blue-600"
              href="/buku/ronggeng"
            >
              Ronggeng Dukuh Paruk
            </Link>
            <hr className="p-1" />
            <Link href="/buku/ronggeng">
              <Image
                className=""
                src="/ronggeng_dp.jpg"
                alt="laskar pelangi"
                width={333}
                height={400}
                objectFit=""
              />
            </Link>
          </div>
          <div className="box-border border-4 w-auto h-auto backdrop-blur-sm text-center">
            <Link
              className="p-2 font-semibold text-lg hover:text-blue-600"
              href="/buku/negeri"
            >
              Negeri 5 Menara
            </Link>
            <hr className="p-1" />
            <Link href="/buku/negeri">
              <Image
                className=""
                src="/negeri_5m.jpg"
                alt="laskar pelangi"
                width={313}
                height={400}
                objectFit=""
              />
            </Link>
          </div>
        </div>
      </div>


      <footer className="bg-orange-200 p-6 opacity-75 text-black">
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
    </main>
  );
}
// }
