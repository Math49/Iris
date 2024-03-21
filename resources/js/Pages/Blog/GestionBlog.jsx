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
                <div className="container">
                    {blogs && blogs.map(blog => (
                        <div key={blog.id} className='p-4 bg-white m-4 border-2 border-gray-300 sm:rounded-lg'>
                            <h2 className='font-bold mb-4 '>{blog.title}</h2>
                            <p>{users && users.find(user => user.id === blog.user_id).name}</p>
                            <p>{new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>
                            <button onClick={() => handleDeleteBlog(blog.id)}>Delete Blog</button>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}