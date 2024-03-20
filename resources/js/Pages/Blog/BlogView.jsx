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
                    <Link href={route("blog.show", blog.id)} key={blog.id}>
                        <div  className='p-4 bg-white m-4 border-2 border-gray-300 sm:rounded-lg'>
                            <h2 className='font-bold mb-4 '>{blog.title}</h2>
                            <p>{users && users.find(user => user.id === blog.user_id).name}</p>
                            <p>{new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>
                        </div>
                    </Link>
                
                ))}

            </div>
            
        </div>

        </>
    )
}