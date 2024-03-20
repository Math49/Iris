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
        <Header auth={auth} />

        <div className="container">
                <form ref={formRef} onSubmit={handleSubmit}>
                    
                    <label>
                        Title:
                        <input type="text" name="title" required />
                    </label>
                    <label>
                        Content:
                        <textarea name="content" required></textarea>
                    </label>
                    <label>
                        Media Type:
                        <select name="media_type" id="media_type">
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                        </select>
                    </label>
                    <label>
                        Media:
                        <input type="file" name="media" required accept='.jpg, .jpeg, .png, .mp4, .webm, .mov, .avi' />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    )
}