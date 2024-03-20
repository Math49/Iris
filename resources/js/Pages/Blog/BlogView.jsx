import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Header from '@/Layouts/Header';

export default function BlogView({auth, blogs, users}) {


    return (
        <>
        <Header auth={auth} />

        <div className='flex flex-col items-center justify-center'>

            <Link href={route("blog.add")}>Add Blog</Link>
            
            <div className="container">
                
                {blogs && blogs.map(blog => (
                    
                    <div key={blog.id} className='p-4 m-4 border-2 border-gray-300 sm:rounded-lg'>
                        <h2 className='font-bold mb-4 '>{blog.title}</h2>
                        <p>{users && users.find(user => user.id === blog.user_id).name}</p>
                        <p>{new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>
                        <p>{blog.content}</p>
                        {blog.media_type === 'image' && (
                            <img src={blog.media} alt={blog.title} className='w-1/2'/>
                        )}
                        {blog.media_type === 'video' && (
                            <video src={blog.media} controls className='w-1/2'></video>
                        )}
                        <br/><hr/><br/>
                    </div>
                
                ))}

            </div>
            
        </div>

        </>
    )
}