import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0); // scroll ke atas saat component mount
    }, []);

    if (!post) return <p>Blog post not found</p>;

    return (
        <div className="w-full mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
            <p className="text-gray-400 text-sm mb-4 text-center">{post.author} - {post.date}</p>
            <img src={post.img} alt={post.title} className="w-full rounded-xl mb-6" />
            <p className="text-lg text-justify font-sans">{post.desc}</p>
            <Link to="/blog" className="mt-6 inline-block text-blue-500 hover:underline">
                ← Back to Blog
            </Link>
        </div>
    );
};

export default BlogDetail;
