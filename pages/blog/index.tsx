import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Interfaces for blog post metadata
interface PostMetadata {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags?: string[];
}

interface BlogProps {
  posts: PostMetadata[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog | YourName</title>
        <meta
          name="description"
          content="Articles and thoughts on AI, machine learning, and productivity."
        />
      </Head>

      <main>
        <section className="py-16">
          <div className="container-narrow">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            
            <div className="space-y-10">
              {posts.map((post) => (
                <article key={post.slug} className="card hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {post.date ? format(new Date(post.date), 'MMMM d, yyyy') : ''}
                      {post.tags && post.tags.length > 0 && (
                        <span className="ml-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 mr-2 mb-2"
                            >
                              {tag}
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                        {post.title}
                      </Link>
                    </h2>
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

export function getStaticProps() {
  // In a real app, we would read the files from the filesystem
  // For this starter template, we'll use dummy data
  
  const posts: PostMetadata[] = [
    {
      title: 'Exploring the Frontiers of Large Language Models',
      excerpt: 'An in-depth look at the latest innovations in LLMs and their potential applications.',
      date: '2025-03-01',
      slug: 'exploring-llm-frontiers',
      tags: ['LLM', 'NLP', 'AI Research'],
    },
    {
      title: 'Productivity Techniques for Machine Learning Engineers',
      excerpt: 'How to apply productivity concepts from ML systems to your daily work.',
      date: '2025-02-15',
      slug: 'productivity-for-ml-engineers',
      tags: ['Productivity', 'Career', 'ML Engineering'],
    },
    {
      title: 'The Ethics of AI: Navigating the Challenges',
      excerpt: 'Examining the ethical considerations in developing and deploying AI systems.',
      date: '2025-01-20',
      slug: 'ethics-of-ai',
      tags: ['Ethics', 'AI Policy', 'Responsible AI'],
    },
  ];

  return {
    props: {
      posts,
    },
  };
}
