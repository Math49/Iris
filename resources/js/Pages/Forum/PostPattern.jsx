import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Header from '@/Layouts/Header';


export default function Forum({ auth, post, comments, users }) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios.post(route('forum.comment', post.id), {
            content: formData.get('content')
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
            <Header auth={auth} />
                <Head title="Forum" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <Link href={route('forum.index')} className='p-2 sm:rounded-lg hover:bg-slate-200'>Retour</Link>
                            <div className="p-6 text-gray-900">
                                <div>
                                    {post && (
                                        <div className=''>
                                            <h2 className='font-bold mb-4 '>{post.title}</h2>
                                            <p>{users && users.find(user => user.id === post.user_id).name}</p>
                                            <p>{new Date(post.created_at).toLocaleDateString('fr-FR')}</p>
                                            <p>{comments && comments.filter(comment => comment.post_id === post.id).length} commentaires</p>
                                            <p>{post.content}</p>
                                            <br/><hr/><br/>
                                            <h3>Commentaires</h3>

                                            <form method='POST' onSubmit={(e) => handleSubmit(e)}>

                                                <input type="text" name="content" id="content" placeholder="Ajouter un commentaire"/>
                                                <input type="submit" value="Envoyer" className='m-2 shadow mb-4 sm:rounded-lg hover:bg-slate-200 p-2'/>
                                            </form>
                                            <br/><hr/><br/>
                                            {comments && comments.filter(comment => comment.post_id === post.id).map(comment => (
                                                <div key={comment.id}>
                                                    <div className='flex gap-4'>
                                                        <p>{users && users.find(user => user.id === comment.user_id).name}</p>
                                                        <p>{new Date(comment.created_at).toLocaleDateString('fr-FR')}</p>
                                                    </div>
                                                    <p>{comment.content}</p>
                                                    <br/><hr/><br/>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}