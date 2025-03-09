import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

// Sample data for featured blog posts
const featuredPosts = [
  {
    id: 1,
    title: 'Exploring the Frontiers of Large Language Models',
    excerpt: 'An in-depth look at the latest innovations in LLMs and their potential applications.',
    date: new Date('2025-03-01'),
    slug: 'exploring-llm-frontiers',
  },
  {
    id: 2,
    title: 'Productivity Techniques for Machine Learning Engineers',
    excerpt: 'How to apply productivity concepts from ML systems to your daily work.',
    date: new Date('2025-02-15'),
    slug: 'productivity-for-ml-engineers',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name | ML Engineer & AI Enthusiast</title>
        <meta
          name="description"
          content="Personal website and blog focused on machine learning, AI, and productivity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Exploring the Frontiers of <span className="text-primary-600 dark:text-primary-400">AI</span> and Machine Learning
                </h1>
                <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                  Staff Machine Learning Engineer with expertise in AI and deep learning, bridging research and real-world applications.
                </p>
                <div className="flex gap-4">
                  <Link href="/blog" className="btn-primary">
                    Read My Blog
                  </Link>
                  <Link href="/about" className="btn-outline">
                    About Me
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  {/* Replace with your own image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-4xl font-bold">
                    YN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-wide">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Featured Posts</h2>
              <Link href="/blog" className="text-primary-600 dark:text-primary-400 hover:underline">
                View All →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="card transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {format(post.date, 'MMMM d, yyyy')}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
