import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export default function Forum({ auth, categories, posts, comments, users }) {
    
    const handleDeletePost = (postId) => {
        Inertia.delete(route('posts.destroy', {id: postId}), {
            onSuccess: () => {
                Inertia.reload({ only: ['posts'] });
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
                                    {categories && categories.map(category => (
                                        <div className='' key={category.id}>
                                            <h2 className='font-bold mb-4 '>{category.title}</h2>
                                            {posts && posts.filter(post => post.category_id === category.id).map(post => (
                                                <div className='flex p-4 gap-4 shadow mb-4 sm:rounded-lg' key={post.id}>
                                                    <h3>{post.title}</h3>
                                                    <p>{users && users.find(user => user.id === post.user_id).name}</p>
                                                    <p>{new Date(post.created_at).toLocaleDateString('fr-FR')}</p>
                                                    <p>{comments && comments.filter(comment => comment.post_id === post.id).length} commentaires</p>
                                                    <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
                                                </div>
                                            ))}
                                            <br/><hr/><br/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    )
}