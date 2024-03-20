import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export default function AddVideos({ auth, videos }) {

    const [file, setFile] = useState(null);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!file) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('video', file);

        Inertia.post(route('videos.store'), formData, {
            onSuccess: () => {
                // Gérer la redirection ou afficher un message de succès si nécessaire
            },
            onError: (errors) => {
                // Gérer les erreurs de validation si nécessaire
            },
        });
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Videos
                </h2>
            }
        >
            <Head title="Videos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>
                                
                                <div >

                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            
                                    <a href={ route('videos.index') }>Retour à page</a>

                                </div>
                                
                                    
                                    <br />
                                    <h3>Ajouter une nouvelle vidéo : </h3>

                                    <form onSubmit={handleSubmit} className='flex flex-col w-48'>
                                        
                                        <label htmlFor="name">Nom de la vidéo : </label>
                                        <input type="text" name='name' id='name'/>

                                        <label htmlFor="description">Description :</label>
                                        <input type="text" name='description' id='description'/>

                                        <label htmlFor="video">Uploader la vidéo :</label>
                                        <input type="file" name='video' id='video' onChange={handleFileChange} required/>

                                        <button type="submit" className="className={
                `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 m-4">
                                            Envoyer
                                        </button>

                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
