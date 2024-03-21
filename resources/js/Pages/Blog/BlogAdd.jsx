import React, { useState, useEffect, useRef } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Header from '@/Layouts/Header';

export default function BlogAdd({auth}) {

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        axios.post(route("blog.create"), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            Inertia.get(route('blog.index'));
        })
        .catch((error) => {
            console.log(error.response.data);
        });
    }

    return (
        <>
        <AuthenticatedLayout user={auth.user}>
        <div className='flex flex-col items-center justify-center'>

        
        <div className="container p-4 bg-white m-4 border-2 border-gray-300 sm:rounded-lg flex justify-between items-center flex-col">
                <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    
                    <label className='flex flex-col'>
                        Title:
                        <input type="text" name="title" required />
                    </label>
                    <label className='flex flex-col'>
                        Content:
                        <textarea name="content" required></textarea>
                    </label>
                    <label className='flex flex-col'>
                        Media Type:
                        <select name="media_type" id="media_type">
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                        </select>
                    </label>
                    <label className='flex flex-col'>
                        Media:
                        <input type="file" name="media" required accept='.jpg, .jpeg, .png, .mp4, .webm, .mov, .avi' />
                    </label>
                    <button type="submit" className='mt-4 rounded-lg p-2 transition ease-in-out delay-5000 bg-blue-500 hover:text-blue-600 hover:bg-white border-blue-500 border-2 text-white duration-300'>Submit</button>
                </form>
            </div>
            </div>
        </AuthenticatedLayout>
        </>
    )
}