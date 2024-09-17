import Head from 'next/head';

const Donate = () => {
  return (
    <>
      <Head>
        <title>Donate | Your Organization</title>
        <meta name="description" content="Support our cause by making a donation. Your contribution helps us make a difference." />
      </Head>
      <main className="p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Donate</h1>
          <p className="text-lg text-gray-700">Your generous donation helps us fund our programs and support our community. Every contribution makes a difference.</p>
          {/* Add donation form or payment integration here */}
        </section>
      </main>
    </>
  );
};

export default Donate;
