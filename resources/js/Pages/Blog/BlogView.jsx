import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Header from '@/Layouts/Header';

export default function BlogView({auth, blog, users}) {


    return (
        <>
        <Header auth={auth} />

        <div className='flex flex-col items-center justify-center'>

            <Link href={route("blog.add")}>Add Blog</Link>

            
        </div>

        </>
    )
}