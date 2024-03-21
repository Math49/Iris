import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export default function UserRoles({ auth, users, roles }) {
    
    const handleRoleChange = (userId, e) => {
        axios.post(route('users.updateRole', userId), {
            role: e.target.value
        })
        .then(() => {
            Inertia.reload(); // Recharge la page pour afficher les changements
        });
    };

    const handleDeleteUser = (userId) => {
        Inertia.delete(route('user.destroy', {id: userId}), {
            onSuccess: () => {
                Inertia.reload({ only: ['users'] });
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}

            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Gestion des utilisateurs
                </h2>
            }
        >
            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>
                                {users && users.map(user => (
                                    
                                    <div className='flex p-4 gap-4 shadow mb-4 sm:rounded-lg justify-between' key={user.id}>
                                        <div className='flex gap-6 items-center'>
                                            <p className=' mr-4'>Nom : {user.name}</p>
                                        
                                            <label htmlFor="role">Rôle de l'utilisateur :</label>
                                            <select name='role' onChange={(e) => handleRoleChange(user.id, e)} value={user.roles[0]?.name || ''} className=' rounded-lg'>
                                                <option value="">Select Role</option>
                                                {roles && roles.map(role => (
                                                <option key={role.id} value={role.name}>{role.name}</option>
                                                ))}
                                            </select>   
                                        </div>
                                         

                                        <div className='mr-6 '>
                                            <button onClick={() => handleDeleteUser(user.id)} className=' text-red-600 rounded-lg p-2 transition ease-in-out delay-5000 hover:bg-red-500 hover:text-white duration-300'>Delete User</button>
                                        </div>              
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


                                                