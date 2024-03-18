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
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Users
                </h2>
            }
        >
            <Head title="Edit Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>
                                {users && users.map(user => (
                                    <div key={user.id}>
                                    {user.name}
                                    <br />
                                    <select name='role' onChange={(e) => handleRoleChange(user.id, e)} value={user.roles[0]?.name || ''}>
                                        <option value="">Select Role</option>
                                        {roles && roles.map(role => (
                                        <option key={role.id} value={role.name}>{role.name}</option>
                                        ))}
                                    </select>
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
