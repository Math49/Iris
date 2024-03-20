import React, { useState, useEffect } from 'react';
import { Link } from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Header from '@/Layouts/Header';
import { MessageSquare, Plus, Search, Bookmark } from 'lucide-react';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Forum({ auth, categories, posts, comments, users, users_role }) {

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

    const category_color = (category_id) => {
        if (category_id === 1) {
            return <div className='w-2 h-2 rounded-full bg-rose_category'></div>;
        } else if (category_id === 2) {
            return <div className='w-2 h-2 rounded-full bg-vert_category'></div>;
        } else if (category_id === 3) {
            return <div className='w-2 h-2 rounded-full bg-orange_category'></div>;
        }
    }

    const [showModal, setShowModal] = useState(false);
    const openPostCreation = () => {
        setShowModal(true);
    }

    const closePostCreation = () => {
        setShowModal(false);
    }

    const [triRecent, setTriRecent] = useState(true);

    const handleDateChange = (e) => {
        if (e.target.value === "recent") {
            setTriRecent(true);
        } else {
            setTriRecent(false);
        }
    }

    const [showMyPosts, setShowMyPosts] = useState(false);

    return (
        <>
            <Header auth={auth} />
            <div className='flex mt-16 mb-10'>
                <div className='w-[70vw] pl-16 pr-8'>
                    <div className='mb-7'>
                        <h1 className='text-noir text-[1.6rem] font-semibold mb-10'>Discuter avec ...</h1>
                        <div className='flex items-center justify-between'>
                            <select onChange={handleDateChange} name="filtre_date" id="filtre_date" className='rounded-lg border-bleu text-bleu bg-transparent'>
                                <option value="recent">Du plus récent</option>
                                <option value="ancien">Du plus ancien</option>
                            </select>
                            <div className='px-4 py-1 bg-bleu rounded-md cursor-pointer' onClick={openPostCreation}>
                            <Plus className='text-white' />
                            </div>
                            <Modal show={showModal} onClose={closePostCreation} maxWidth='add'>
                                <div className='p-5'>
                                    <h3 className='text-noir text-[1.6rem] font-semibold mb-5'>Rédiger un post</h3>
                                    <form method="post" onSubmit={(e) => handleRoleChange(e)} className='flex gap-4 flex-col'>
                                        <div className='flex flex-col'>
                                            <label htmlFor="category_id" className='text-noir'>Catégorie</label>
                                            <select name='category_id' className='rounded-md border-bleu focus:border-none'>
                                                <option value="">Sélectionner la catégorie</option>
                                                {categories && categories.map(category => (
                                                <option key={category.id} value={category.id}>{category.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor="title" className='text-noir'>Titre</label>
                                            <input className='rounded-md border-bleu focus:border-none' type="text" name="title" id="title" placeholder="Insérer votre titre ici ..."/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor="content" className='text-noir'>Description</label>
                                            <textarea className='h-[15vw] resize-none rounded-md border-bleu focus:border-none' name="content" id="content" placeholder="Insérer votre description ici ..."></textarea>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div onClick={closePostCreation} className='bg-transparent border-bleu border-2 px-4 py-1 rounded-md cursor-pointer uppercase font-semibold text-xs flex items-center hover:bg-bleu/5 transition ease-in-out duration-150 text-bleu'>
                                                Retour
                                            </div>
                                            <PrimaryButton type="submit">
                                                Publier
                                            </PrimaryButton>
                                        </div>
                                    </form>
                                </div>
                            </Modal>
                        </div>
                    </div>
                        {triRecent ? posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(post => (
                            <Link href={route('forum.showPost', post.id)} key={post.id}>
                                <div className='border-white border-[1px] rounded-md shadow-md h-[25vh] mb-4 flex gap-x-7 py-4 px-6'>
                                    <div>
                                    {(users_role && users_role.find(user => user.id === post.user_id).roles[0].name) === "user" ? 
                                        <div className='rounded-full w-12 h-12 bg-bleu'></div>
                                    : 
                                        <div className='rounded-full w-12 h-12 bg-bleu relative'>
                                            <div className='rounded-full w-6 h-6 bg-yellow-500 absolute right-0 top-0'></div>
                                        </div>
                                    }
                                    </div>
                                    <div className='w-full flex flex-col justify-between'>
                                        <div>
                                            <div className='flex justify-between'>
                                                <p className='text-noir font-semibold'>{users && users.find(user => user.id === post.user_id).name}</p>
                                                <Bookmark className='text-orange_category'/>
                                            </div>
                                            <div className='flex items-center gap-x-1'>
                                                {category_color(post.category_id)}
                                                <p className='text-noir text-sm'>Catégorie : {categories && categories.filter(category => category.id === post.category_id)[0].title}</p>
                                            </div>
                                        </div>
                                        <div className='w-[70%]'>
                                            <p className='text-noir font-semibold line-clamp-1'>{post.title}</p>
                                            <p className='text-noir line-clamp-2 leading-5'>{post.content}</p>
                                        </div>
                                        <div className='flex justify-end items-center gap-x-2'>
                                            <MessageSquare size={16} />
                                            <p className='text-sm'>{comments && comments.filter(comment => comment.post_id === post.id).length} commentaires</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )) : posts.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)).map(post => (
                            <Link href={route('forum.showPost', post.id)} key={post.id}>
                                <div className='border-white border-[1px] rounded-md shadow-md h-[25vh] mb-4 flex gap-x-7 py-4 px-6'>
                                    <div>
                                    {(users_role && users_role.find(user => user.id === post.user_id).roles[0].name) === "user" ? 
                                        <div className='rounded-full w-12 h-12 bg-bleu'></div>
                                    : 
                                        <div className='rounded-full w-12 h-12 bg-bleu relative'>
                                            <div className='rounded-full w-6 h-6 bg-yellow-500 absolute right-0 top-0'></div>
                                        </div>
                                    }
                                    </div>
                                    <div className='w-full flex flex-col justify-between'>
                                        <div>
                                            <div className='flex justify-between'>
                                                <p className='text-noir font-semibold'>{users && users.find(user => user.id === post.user_id).name}</p>
                                                <Bookmark className='text-orange_category'/>
                                            </div>
                                            <div className='flex items-center gap-x-1'>
                                                {category_color(post.category_id)}
                                                <p className='text-noir text-sm'>Catégorie : {categories && categories.filter(category => category.id === post.category_id)[0].title}</p>
                                            </div>
                                        </div>
                                        <div className='w-[70%]'>
                                            <p className='text-noir font-semibold line-clamp-1'>{post.title}</p>
                                            <p className='text-noir line-clamp-2 leading-5'>{post.content}</p>
                                        </div>
                                        <div className='flex justify-end items-center gap-x-2'>
                                            <MessageSquare size={16} />
                                            <p className='text-sm'>{comments && comments.filter(comment => comment.post_id === post.id).length} commentaires</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))} 
                </div>
                <div className='w-[30vw] border-l-2 border-bleu pr-16 pl-8'>
                    <p className='text-noir text-[1.6rem] font-semibold mb-5'>Filtrer</p>
                    <div className='relative'>
                        <input type="text" placeholder='Rechercher par mots clés' className='w-full rounded-md border-bleu bg-transparent text-bleu placeholder-bleu pr-10' />
                        <Search className='absolute right-2 top-2 text-bleu cursor-pointer'/>
                        <div className='w-full rounded-md border-noir bg-transparent text-noir border-[1px] px-3 py-1 mt-3 cursor-pointer'>
                            {showMyPosts ? <p>Voir toutes les publications</p> : <p>Voir mes publications</p>}
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='flex items-center gap-x-4 mb-4 cursor-pointer'>
                            <MessageSquare size={24} />
                            <p className='text-noir'>Toutes les discussions</p>                  
                        </div>
                        <div className='flex items-center gap-x-4 cursor-pointer'>
                            <Bookmark size={24} />
                            <p className='text-noir'>Sauvegardées</p>                  
                        </div>
                    </div>
                    <div className='mt-8'>
                        <p className='text-noir text-[1.1rem] font-semibold mb-2'>Catégories</p>
                        <div className='flex flex-wrap gap-2'>
                            {categories && categories.map(category => (
                                <div key={category.id} className='border-noir border-2 py-1 px-3 cursor-pointer rounded-md'>
                                    <p className='text-noir'>{category.title}</p>
                                </div>
                            ))}                    
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-noir text-[1.1rem] font-semibold mb-2'>Type de compte</p>
                        <div className='flex flex-wrap gap-2'>
                            <div className='border-noir border-2 py-1 px-3 cursor-pointer rounded-md'>
                                <p className='text-noir'>Particulier</p>
                            </div>  
                            <div className='border-noir border-2 py-1 px-3 cursor-pointer rounded-md'>
                                <p className='text-noir'>Professionnel de santé</p>
                            </div>
                            <div className='border-noir border-2 py-1 px-3 cursor-pointer rounded-md'>
                                <p className='text-noir'>Professionnel de l'éducation</p>
                            </div>         
                        </div>                  
                    </div>
                </div>
            </div>






                <div className='p-6 '>
                    
                </div>
        </>
    )
}
