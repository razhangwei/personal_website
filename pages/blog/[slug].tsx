import Head from 'next/head';
import { format } from 'date-fns';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Define the components that can be used in MDX
const components = {
  // Add any custom components here
};

// Interfaces for blog post data
interface PostData {
  title: string;
  date: string;
  content: MDXRemoteSerializeResult;
  excerpt: string;
  slug: string;
  tags?: string[];
}

interface PostPageProps {
  post: PostData;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <>
      <Head>
        <title>{post.title} | YourName</title>
        <meta name="description" content={post.excerpt} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossOrigin="anonymous"
        />
      </Head>

      <main>
        <article className="py-16">
          <div className="container-narrow">
            <header className="mb-10">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                {post.date && format(new Date(post.date), 'MMMM d, yyyy')}
              </div>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="prose dark:prose-dark prose-lg max-w-none">
              <MDXRemote {...post.content} components={components} />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // In a real app, we would read the file content from the filesystem
  // For this starter template, we'll use dummy data
  
  const dummyPosts = {
    'exploring-llm-frontiers': {
      title: 'Exploring the Frontiers of Large Language Models',
      date: '2025-03-01',
      tags: ['LLM', 'NLP', 'AI Research'],
      excerpt: 'An in-depth look at the latest innovations in LLMs and their potential applications.',
      content: `
# Exploring the Frontiers of Large Language Models

Large Language Models (LLMs) have revolutionized natural language processing and AI capabilities. In this post, we'll explore the cutting-edge developments and future directions.

## Recent Innovations

The latest generation of LLMs has shown remarkable abilities in reasoning, coding, and multimodal understanding. Key improvements include:

- Enhanced reasoning capabilities through specialized training
- Better alignment with human values and preferences
- Reduced hallucinations and improved factuality
- Increased context windows allowing for processing of longer documents

## Mathematical Foundations

The core of transformer-based LLMs relies on attention mechanisms. The self-attention operation can be expressed as:

$$
Attention(Q, K, V) = softmax\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

Where $Q$, $K$, and $V$ represent the query, key, and value matrices, and $d_k$ is the dimension of the key vectors.

## Code Example

\`\`\`python
# Example of using a modern LLM with a library like transformers
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

# Load model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("model-name")
model = AutoModelForCausalLM.from_pretrained("model-name")

# Generate text
inputs = tokenizer("The future of AI is", return_tensors="pt")
outputs = model.generate(**inputs, max_length=100)
print(tokenizer.decode(outputs[0]))
\`\`\`

## Future Directions

The field is rapidly evolving with several promising research directions:

1. Multi-agent systems that combine multiple specialized LLMs
2. Improved grounding in external knowledge bases
3. Enhanced tool use capabilities
4. More efficient architectures requiring less computational resources
5. Better techniques for safety and alignment

This is just the beginning of a fascinating journey into the capabilities and applications of large language models.
      `,
    },
    'productivity-for-ml-engineers': {
      title: 'Productivity Techniques for Machine Learning Engineers',
      date: '2025-02-15',
      tags: ['Productivity', 'Career', 'ML Engineering'],
      excerpt: 'How to apply productivity concepts from ML systems to your daily work.',
      content: `
# Productivity Techniques for Machine Learning Engineers

As machine learning engineers, we spend our days optimizing algorithms and improving model efficiency. But how often do we apply similar optimization principles to our own work processes?

## Learning from ML Systems

Many principles we use in ML can be applied to personal productivity:

### 1. Batching Similar Tasks

Just as we batch data to efficiently process it through our models, we can batch similar work tasks. Group your code reviews, meetings, or deep work sessions to minimize context switching.

### 2. Regularization

In ML, we use regularization to prevent overfitting. In productivity, this means avoiding overcommitment and maintaining work-life balance to prevent burnout.

### 3. Iterative Improvement

ML models improve through iteration. Similarly, use quick feedback loops for your work:

\`\`\`python
# The ML way of thinking about productivity
def improve_productivity():
    current_process = initial_process()
    
    while not optimal(current_process):
        feedback = evaluate(current_process)
        current_process = refine(current_process, feedback)
        
    return current_process
\`\`\`

## Practical Techniques

### Time Blocking for Deep Work

Reserve uninterrupted blocks of time for complex tasks that require deep concentration, like algorithm development or model architecture design.

### Documentation as a Productivity Tool

Well-documented experiments and code don't just help your team—they help your future self. Think of documentation as creating a knowledge base for quick retrieval later.

### Automation is Key

Identify repetitive tasks in your workflow that can be automated:

\`\`\`bash
# Example: A simple script to automate environment setup
#!/bin/bash

# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Set up pre-commit hooks
pre-commit install
\`\`\`

## Finding Your Productivity System

Every engineer works differently. Experiment with various productivity systems:

- Pomodoro Technique: 25 minutes of focus followed by 5-minute breaks
- GTD (Getting Things Done): Capturing and processing all tasks and commitments
- Kanban boards: Visualizing work progress similar to tracking ML experiments

Remember, the goal is not to be busy but to be effective. Measure your productivity by meaningful output rather than hours worked.
      `,
    },
    'ethics-of-ai': {
      title: 'The Ethics of AI: Navigating the Challenges',
      date: '2025-01-20',
      tags: ['Ethics', 'AI Policy', 'Responsible AI'],
      excerpt: 'Examining the ethical considerations in developing and deploying AI systems.',
      content: `
# The Ethics of AI: Navigating the Challenges

As AI systems become increasingly powerful and integrated into our daily lives, the ethical considerations surrounding their development and deployment become more critical than ever.

## Key Ethical Challenges

### Fairness and Bias

AI systems can perpetuate and amplify existing biases in society. Consider a simplified example of how bias can emerge:

\`\`\`python
# Simplified example showing how bias can be introduced
import numpy as np
from sklearn.linear_model import LogisticRegression

# Generate biased training data
np.random.seed(42)

# Feature: income level (normalized)
income_group_a = np.random.normal(0.5, 0.15, 1000)
income_group_b = np.random.normal(0.3, 0.15, 1000)

# Historical bias: approval rates
approval_group_a = (income_group_a > 0.4).astype(int)
approval_group_b = (income_group_b > 0.4).astype(int)

# Combined dataset
X = np.concatenate([income_group_a, income_group_b]).reshape(-1, 1)
y = np.concatenate([approval_group_a, approval_group_b])
group = np.array([0] * 1000 + [1] * 1000)

# Train a simple model
model = LogisticRegression()
model.fit(X, y)

# The model will likely learn the bias present in the data
\`\`\`

### Transparency and Explainability

Complex models like deep neural networks often function as "black boxes," making it difficult for users to understand how decisions are made.

### Privacy Concerns

AI systems often require vast amounts of data, raising questions about data collection, consent, and potential misuse.

## Frameworks for Ethical AI

Several frameworks have emerged to guide responsible AI development:

1. **Fairness**: Ensuring AI systems don't discriminate against particular groups
2. **Accountability**: Clear lines of responsibility for AI decisions
3. **Transparency**: Making AI decision-making understandable
4. **Explainability**: Being able to explain how and why an AI made a particular decision
5. **Privacy**: Protecting individual data rights
6. **Security**: Ensuring AI systems are robust against attacks
7. **Human oversight**: Maintaining human control over AI systems

## Practical Steps for Responsible AI

### Impact Assessments

Before deploying AI systems, conduct thorough assessments of potential impacts on different stakeholders.

### Diverse Development Teams

Ensure development teams include diverse perspectives to identify potential biases and blind spots.

### Continuous Monitoring

Implement systems to continuously monitor AI performance and outcomes to catch unforeseen issues:

\`\`\`python
# Simplified monitoring for fairness across groups
def monitor_fairness(model, X_test, y_test, sensitive_attribute):
    predictions = model.predict(X_test)
    
    # Check performance across different groups
    group_performance = {}
    for group_value in np.unique(sensitive_attribute):
        mask = sensitive_attribute == group_value
        group_accuracy = np.mean(predictions[mask] == y_test[mask])
        group_performance[f'Group_{group_value}'] = group_accuracy
    
    # Calculate disparate impact
    min_acc = min(group_performance.values())
    max_acc = max(group_performance.values())
    disparity_ratio = min_acc / max_acc
    
    return {
        'group_performance': group_performance,
        'disparity_ratio': disparity_ratio
    }
\`\`\`

## The Path Forward

As machine learning practitioners, we have a responsibility to consider the ethical implications of our work. By integrating ethical considerations throughout the development lifecycle, we can build AI systems that benefit humanity while minimizing potential harms.

This is an ongoing conversation, and I'd love to hear your thoughts on navigating these complex ethical challenges in AI development.
      `,
    },
  };

  const post = dummyPosts[params.slug];
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  // Process the MDX content
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeHighlight, rehypeKatex],
    },
  });

  return {
    props: {
      post: {
        ...post,
        slug: params.slug,
        content: mdxSource,
      },
    },
  };
}

export async function getStaticPaths() {
  // In a real app, we would read the directory to get all post slugs
  // For this starter template, we'll use dummy data
  
  const paths = [
    { params: { slug: 'exploring-llm-frontiers' } },
    { params: { slug: 'productivity-for-ml-engineers' } },
    { params: { slug: 'ethics-of-ai' } },
  ];

  return {
    paths,
    fallback: false,
  };
}
