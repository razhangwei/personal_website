import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | YourName</title>
        <meta
          name="description"
          content="Learn more about YourName - Machine Learning Engineer and AI enthusiast."
        />
      </Head>

      <main>
        <section className="py-16">
          <div className="container-narrow">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>
            
            <div className="prose dark:prose-dark prose-lg max-w-none">
              <p>
                I'm a Staff Machine Learning Engineer with expertise in AI and deep learning. My work focuses on 
                bridging the gap between academic research and practical applications of machine learning technologies.
              </p>
              
              <h2>Background</h2>
              <p>
                With a PhD in Machine Learning, I've spent years researching and implementing cutting-edge techniques
                in natural language processing, computer vision, and reinforcement learning. My experience spans
                both academic research and industry applications, giving me a unique perspective on the field.
              </p>
              
              <h2>Current Focus</h2>
              <p>
                Currently, I'm focused on large language models (LLMs) and their applications across various domains.
                I'm particularly interested in making these powerful AI systems more accessible, efficient, and aligned
                with human values.
              </p>
              
              <h2>Beyond Technology</h2>
              <p>
                Outside of my technical work, I'm passionate about productivity and personal optimization. I believe
                that many of the principles we use in machine learning—iterative improvement, systematic experimentation,
                and data-driven decision making—can be applied to personal and professional growth as well.
              </p>
              
              <h2>This Blog</h2>
              <p>
                On this blog, I share my thoughts and insights on AI technology, machine learning research, and
                productivity techniques. My goal is to make complex concepts accessible while exploring the cutting
                edge of what's possible with today's technology.
              </p>
              
              <h2>Get in Touch</h2>
              <p>
                I'm always interested in connecting with like-minded individuals and exploring new opportunities.
                Feel free to reach out via the social media links below or by email.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
