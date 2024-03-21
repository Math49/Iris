import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Header from '@/Layouts/Header';

export default function ArticlePattern({auth, blog, users}) {


    return (
        <>
        <Header auth={auth} />

        <div className='flex flex-col items-center justify-center'>
            
            <div className="container">
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                        <p>{users && users.find(user => user.id === blog.user_id).name}</p>
                        <p>{new Date(blog.created_at).toLocaleDateString('fr-FR')}</p>

                        {blog.media_type === 'image' ? (
                            <img src={blog.media} alt={blog.title} />
                        ) : (
                            <video controls>
                                <source src={blog.media} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                        
            </div>
            
        </div>

        </>
    )
}