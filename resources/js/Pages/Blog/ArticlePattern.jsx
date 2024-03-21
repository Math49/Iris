import React, { useState, useEffect } from 'react';
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';
import { CircleChevronLeft } from 'lucide-react';
import { Link} from "@inertiajs/react";

export default function ArticlePattern({auth, blog}) {


    return (
        <>
        <Header auth={auth} />
        <div className='px-52 pt-12'>
            <div className="text-gray-900 flex mb-5">
                <Link href={route('blog.index')} className='flex items-center gap-x-1'>
                    <CircleChevronLeft size={16} className='text-bleu' />
                    Retour
                </Link>
            </div>
            <div key={blog.id}>
                <h1 className='font-semibold uppercase text-4xl text-center mb-3'>{blog.title}</h1>
                <p className='text-sm font-bold text-center'>publié le {new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>
                <div className='mt-10'>
                    {blog.media ? (
                        blog.media_type === 'video' ? (
                            <div className='w-full h-full'>
                                <video className='w-full h-full' controls>
                                    <source src={blog.media} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : (
                            <div className='w-full h-[60vh]'>
                                <img className='w-full h-[60vh] object-cover' src={blog.media} alt={blog.title} />
                            </div>
                        )
                    ) :
                    null}
                </div>
                <p className='mt-10'>{blog.content}</p>
            </div>     
        </div>
        <Footer />
        </>
    )
}