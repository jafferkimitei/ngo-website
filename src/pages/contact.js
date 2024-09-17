import Head from 'next/head';


const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Your Organization</title>
        <meta name="description" content="Get in touch with us for more information or support. We'd love to hear from you!" />
      </Head>
     
      <main className="p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700">If you have any questions or need assistance, please feel free to reach out to us through the contact form below or via our social media channels.</p>
          {/* Add contact form or contact details here */}
        </section>
      </main>
    
    </>
  );
};

export default Contact;
