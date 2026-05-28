import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRedoAlt } from "react-icons/fa";
import { blogPosts } from '../../data/blogPosts'
import Img from '../../assets/img/thumbnail.png';

const BlogBanner = () => {
    return (
        <section id='blogbanner' className='w-full'>
            {/* Banner */}
            <div className='relative rounded-xl overflow-hidden mx-5 md:mx-14 lg:mx-14 mt-5'>
                <img
                    src={Img}
                    alt="Blog Banner"
                    className="w-full lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-md text-[#E8FF03] font-semibold mb-2 drop-shadow">
                        Technology
                    </span>
                    <div className='flex justify-between items-end gap-3'>
                        <div>
                            <h1 className="text-xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                                Breaking Into Product Design
                            </h1>
                            <p className="text-white text-xs lg:text-base w-full drop-shadow">
                                Advice from Untitled Founder, Frankie. Learn how anyone can get into this growing industry.
                            </p>
                        </div>
                        <FaArrowRightLong className='text-white text-5xl lg:mr-10' />
                    </div>
                </div>
            </div>

            {/* Recent Blog Posts */}
            <div className='my-10 mx-5 md:mx-14 lg:mx-14'>
                <h1 className='text-2xl font-bold mb-5'>Recent Blog Posts</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {blogPosts.map(post => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="card bg-base-100 w-full shadow-sm border border-[#E4E4E7] dark:bg-white rounded-xl hover:shadow-lg transition"
                        >
                            <figure>
                                <img src={post.img} className='w-full p-3 rounded-xl' alt={post.title} />
                            </figure>
                            <div className="card-body text-[#333333] font-sans px-4 py-2  w-full overflow-hidden">
                                <h2 className="card-title font-bold">{post.title}</h2>
                                <p className='text-sm truncate'>{post.desc}</p>
                                <p className='text-gray-400 text-xs mt-2'>{post.author} - {post.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <button className="mx-auto mt-8 flex items-center gap-3 bg-[#00AEEF] hover:bg-sky-600 px-10 py-2 text-[#FEF7E7] text-base font-semibold rounded-lg">
                    Load More <FaRedoAlt className="w-4 h-4" />
                </button>

            </div>
        </section>
    );
};

export default BlogBanner;
