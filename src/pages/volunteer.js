import Head from 'next/head';


const Volunteer = () => {
  return (
    <>
      <Head>
        <title>Become a Volunteer | Your Organization</title>
        <meta name="description" content="Join our team as a volunteer and contribute to our mission. Find out how you can get involved." />
      </Head>
      <main className="p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Become a Volunteer</h1>
          <p className="text-lg text-gray-700">We are always looking for passionate individuals to join our team of volunteers. Your support is crucial in helping us achieve our goals.</p>
          {/* Add volunteer sign-up form or information here */}
        </section>
      </main>
    </>
  );
};

export default Volunteer;
