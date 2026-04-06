import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Steffi’s Soap Stories: Master Batch Calculator</title>
        <meta name="description" content="Luxury Artisan Soap Calculator" />
      </Head>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center">
        <Header />
        <div className="w-full max-w-2xl mt-10 rounded bg-white p-8 shadow-md">
          <h2 className="text-xl font-bold mb-4">Welcome!</h2>
          <p>
            This is the Steffi’s Soap Stories: Master Batch Calculator.
            <br />
            (The soap calculator interface will go here — you’re ready for deployment!)
          </p>
          <p className="mt-4 text-xs text-gray-400">
            Basic version. For full calculator, see instructions from your developer.
          </p>
        </div>
      </main>
    </>
  );
}