import Head from 'next/head';


const Home = () => {
  return (
    <>
      <Head>
        <title>Home | StandUp To Our Perpetrators</title>
        <meta name="description" content="Welcome to our organization. Learn more about our mission and initiatives." />
      </Head>
      <main className="p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Organization</h1>
          <p className="text-lg text-gray-700">We are dedicated to making a positive impact through various initiatives that promote environmental sustainability and community welfare.</p>
        </section>
        {/* Add more sections as needed */}
      </main>
    </>
  );
};

export default Home;
