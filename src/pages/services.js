import Head from 'next/head';


const Services = () => {
  return (
    <>
      <Head>
        <title>Services | Your Organization</title>
        <meta name="description" content="Discover the services we offer to support our community and drive positive change." />
      </Head>
      <main className="p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-700">We offer a range of services to support our mission, including community outreach programs, educational workshops, and environmental initiatives.</p>
          {/* List services as needed */}
        </section>
      </main>

    </>
  );
};

export default Services;
