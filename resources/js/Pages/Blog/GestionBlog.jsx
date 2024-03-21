import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function GestionBlog({auth, blogs, users}) {

    const handleDeleteBlog = (blogId) => {
        Inertia.delete(route('blog.destroy', {id: blogId}), {
            onSuccess: () => {
                Inertia.reload({ only: ['blogs'] });
            }
        });
    };


    return (
        <AuthenticatedLayout user={auth.user}>
            <div className='flex flex-col items-center justify-center'>
                <Link href={route("blog.add")} className='mt-4 text-blue-600 rounded-lg p-2 transition ease-in-out delay-5000 hover:bg-blue-500 hover:text-white duration-300'>Add Blog</Link>
                <div className="container">
                    {blogs && blogs.map(blog => (
                        <div key={blog.id} className='p-4 bg-white m-4 border-2 border-gray-300 sm:rounded-lg flex justify-between items-center'>
                            <div>
                                <h2 className='font-bold mb-4 '>{blog.title}</h2>
                                <p>{users && users.find(user => user.id === blog.user_id).name}</p>
                                <p>{new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>
                            </div>
                                <button onClick={() => handleDeleteBlog(blog.id)} className=' text-red-600 rounded-lg p-2 transition ease-in-out delay-5000 hover:bg-red-500 hover:text-white duration-300 h-min'>Delete Blog</button>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}