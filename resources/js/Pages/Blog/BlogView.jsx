import React, { useState, useEffect } from 'react';
import { Link } from "@inertiajs/react";
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';

export default function BlogView({auth, blogs}) {

    return (
        <>
        <Header auth={auth} />

        <div className='px-24 mt-20'>
            <div className='mb-20'>
                <h1 className='text-noir uppercase text-6xl leading-[70px]'>Les médias pour <br /> s'informer sur le cyberharcèlement</h1>                
                <div className='mt-6'>
                    <p>Trouvez les outils nécessaires pour faire face au cyberharcèlement et créer un internet plus bienveillant</p>
                </div>
            </div>

            <div>
                <h2 className='uppercase text-4xl mb-10'>Nos dernières actions</h2>
                <div className='flex justify-between'>
                    {blogs && blogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 2).map(blog => (
                    <Link href={route("blog.show", blog.id)} key={blog.id} className='border-[.5px] border-bleu shadow-[0px_4px_16px_0px_#00000010] p-5 rounded-md w-[28vw] h-[60vh] flex flex-col justify-between'>
                        {blog.media_type === 'image' ?
                            <img className='rounded-md w-[100%] h-[55%]' src={blog.media} alt="" />
                        :
                            <video className='rounded-md w-[100%] h-[55%]' src={blog.media}></video>
                        }
                        <div>
                            <h3 className='text-2xl line-clamp-2 leading-6 font-semibold'>{blog.title}</h3>
                            <p className='mt-2 text-sm line-clamp-4'>{blog.content}</p>
                        </div>
                        <p className='text-sm mt-4 font-semibold'>publié le {new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>
                    </Link>
                    ))}
                    <div className='flex flex-col justify-between'>
                        {blogs && blogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(2, 4).map(blog => (
                        <Link href={route("blog.show", blog.id)} key={blog.id} className='border-[.5px] border-bleu shadow-[0px_4px_16px_0px_#00000010] p-5 rounded-md w-[28vw] flex gap-x-4 h-[28.5vh]'>
                                {blog.media_type === 'image' ?
                                    <img className='rounded-md h-[100%] w-[30%]' src={blog.media} alt="" />
                                :
                                    <video className='rounded-md h-[100%] w-[30%]' src={blog.media}></video>
                                }
                                <div className='w-full flex flex-col justify-between'>
                                    <div>
                                        <h3 className='text-2xl line-clamp-2 leading-6 font-semibold'>{blog.title}</h3>
                                        <p className='mt-2 text-sm line-clamp-4'>{blog.content}</p>
                                    </div>
                                    <p className='text-sm mt-4 font-semibold'>publié le {new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>
                                </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-20'>
                <div className='w-[64%]'>
                    <h2 className='uppercase text-4xl mb-10'>Dernier posts</h2>
                    {blogs && blogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(blog => (
                        <Link href={route("blog.show", blog.id)} key={blog.id} className='border-[.5px] border-bleu shadow-[0px_4px_16px_0px_#00000010] p-5 rounded-md w-[100%] h-[50vh] flex flex-col justify-between mb-6'>
                            {blog.media_type === 'image' ?
                                <img className='rounded-md w-[100%] h-[60%]' src={blog.media} alt="" />
                            :
                                <video className='rounded-md w-[100%] h-[60%]' src={blog.media}></video>
                            }
                            <div>
                                <h3 className='text-2xl line-clamp-2 leading-6 font-semibold'>{blog.title}</h3>
                                <p className='mt-2 text-sm line-clamp-2'>{blog.content}</p>
                            </div>
                            <p className='text-sm mt-4 font-semibold'>publié le {new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>
                        </Link>
                    ))}
                </div>
                <div className='w-[33%]'>
                    <h2 className='uppercase text-4xl mb-10'>Posts populaire</h2>
                    {blogs && blogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(blog => (
                        <Link href={route("blog.show", blog.id)} key={blog.id} className='border-[.5px] border-bleu shadow-[0px_4px_16px_0px_#00000010] p-5 rounded-md w-[100%] h-[50vh] flex flex-col justify-between mb-6'>
                            {blog.media_type === 'image' ?
                                <img className='rounded-md w-[100%] h-[60%]' src={blog.media} alt="" />
                            :
                                <video className='rounded-md w-[100%] h-[60%]' src={blog.media}></video>
                            }
                            <div>
                                <h3 className='text-2xl line-clamp-2 leading-6 font-semibold'>{blog.title}</h3>
                                <p className='mt-2 text-sm line-clamp-2'>{blog.content}</p>
                            </div>
                            <p className='text-sm mt-4 font-semibold'>publié le {new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>
                        </Link>
                    ))}
                </div>
            </div>        
        </div>
        <Footer />
        </>
    )
}