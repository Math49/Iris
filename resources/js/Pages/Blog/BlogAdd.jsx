import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Header from '@/Layouts/Header';

export default function BlogAdd({auth}) {



    return (
        <>
        <Header auth={auth} />

        <div className='flex flex-col items-center justify-center'>

            <form method="post" onSubmit={(e)=> HandleSubmit(e)}>

                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content"></textarea>
                </div>
                <div>
                    <label htmlFor="content">Type de média :</label>
                    <select name="Type_media" id="">
                        <option value="1">Image</option>
                        <option value="2">Video</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="content">média :</label>
                    
                </div>
                <button type="submit">Add Blog</button>

            </form>
        </div>

        </>
    )
}