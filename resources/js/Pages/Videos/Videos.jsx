import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export default function Videos({ auth, videos }) {
    


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
                                    
                                    <br />
                                    <h2>Liste des vidéos :</h2>

                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            
                                        <a href={ route('videos.create') }>Ajouter une vidéo</a>
        
                                    </div>

                                    

                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
