import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
let categoriesFiltred = []

export default function Forum({ auth, categories, posts, comments, users }) {
    
    console.log(categories, posts, comments, users)

    useEffect(() => {
        if (auth.user && auth.user.permissions && auth.user.permissions.includes('forum access')) {
            
            categoriesFiltred = categories.filter(category => !category.restricted)
        }else{
            
            categoriesFiltred = categories

        }
    }, []);

    const handleRoleChange = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios.post(route('forum.createPost'), {
            title: formData.get('title'),
            content: formData.get('content'),
            category_id: formData.get('category_id')
        })
        .then(() => {
            Inertia.reload();
        })
        .catch((error) => {
            if (error.response && error.response.status === 422) {
                console.log(error.response.data);
            }
        });
    };

    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Forum
                    </h2>
                }
            >
                <Head title="Forum" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <div>
                                    {categoriesFiltred && categoriesFiltred.map(category => (
                                        <div className='' key={category.id}>
                                            <h2 className='font-bold mb-4 '>{category.title}</h2>
                                            {posts && posts.filter(post => post.category_id === category.id).map(post => (
                                                <Link href={route('forum.showPost', post.id)} className='flex p-4 gap-4 shadow mb-4 sm:rounded-lg hover:bg-slate-200' key={post.id}>
                                                    <h3>{post.title}</h3>
                                                    <p>{users && users.find(user => user.id === post.user_id).name}</p>
                                                    <p>{new Date(post.created_at).toLocaleDateString('fr-FR')}</p>
                                                    <p>{comments && comments.filter(comment => comment.post_id === post.id).length} commentaires</p>
                                                </Link>
                                            ))}
                                            <br/><hr/><br/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-6 '>
                    <form method="post" onSubmit={(e) => handleRoleChange(e)} className='flex gap-4 flex-col'>
                        <h2 className='font-bold mb-4 '>Créer un post</h2>
                        <input type="text" name="title" id="title" placeholder="Titre"/>
                        <textarea name="content" id="content" placeholder="Contenu"></textarea>
                        <select name='category_id'>
                            <option value="">Select Category</option>
                            {categories && categories.map(category => (
                            <option key={category.id} value={category.id}>{category.title}</option>
                            ))}
                        </select>
                        <input type="submit" value="Envoyer" className='bg-white m-2 shadow mb-4 sm:rounded-lg hover:bg-slate-200 p-2'/>
                    </form>
                </div>
            </AuthenticatedLayout>
        </div>
    )
}