import Head from 'next/head';


const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Your Organization</title>
        <meta name="description" content="Read our latest blog posts and stay updated with our latest news and insights." />
      </Head>
    
      <main className="p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-700">Explore our blog to read the latest updates, insights, and stories from our organization.</p>
          {/* List blog posts or articles here */}
        </section>
      </main>
      
    </>
  );
};

export default Blog;
