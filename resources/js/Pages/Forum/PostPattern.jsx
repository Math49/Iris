import React, { useState, useEffect } from 'react';
import { Link} from "@inertiajs/react";
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import { CircleChevronLeft, Plus } from 'lucide-react';
import Header from '@/Layouts/Header';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import Footer from '@/Layouts/Footer';


export default function Forum({ post, comments, users, categories, auth, users_role }) {
    
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
    const category_color = (category_id) => {
        if (category_id === 1) {
            return <div className='flex justify-center gap-x-5 items-center'>
                <span className='w-[12vw] h-[2px] bg-rose_category'></span>
                    <p>{categories && categories.find(category => category.id === post.category_id).title}</p>
                <span className='w-[12vw] h-[2px] bg-rose_category'></span>
            </div>;
        } else if (category_id === 2) {
            return <div className='flex justify-center gap-x-5 items-center'>
                <span className='w-[12vw] h-[2px] bg-vert_category'></span>
                    <p>{categories && categories.find(category => category.id === post.category_id).title}</p>
                <span className='w-[12vw] h-[2px] bg-vert_category'></span>
            </div>;
        } else if (category_id === 3) {
            return <div className='flex justify-center gap-x-5 items-center'>
                <span className='w-[12vw] h-[2px] bg-orange_category'></span>
                    <p>{categories && categories.find(category => category.id === post.category_id).title}</p>
                <span className='w-[12vw] h-[2px] bg-orange_category'></span>
            </div>;
        }
    }

    const daysDiff = (date) => {
        const today = new Date();
        const postDate = new Date(date);
        const time = today - postDate;
        const diff = Math.floor(time / (1000 * 60 * 60 * 24));
        return diff;
    }

    const [showModal, setShowModal] = useState(false);
    const openCommentCreation = () => {
        setShowModal(true);
    }

    const closeCommentCreation = () => {
        setShowModal(false);
    }

    return (
        <>
            <Header auth={auth} />
            <div className='px-32 py-8'>
                <div className="text-gray-900 flex">
                    <Link href={route('forum.index')} className='flex items-center gap-x-1'>
                        <CircleChevronLeft size={16} className='text-bleu' />
                        Retour
                    </Link>
                </div>
                <div>
                    {post && (
                        <div className=''>
                            <div className='flex flex-col items-center'>
                                {category_color(post.category_id)}
                                <h1 className='font-bold mt-6 text-5xl uppercase text-center'>{post.title}</h1>
                            </div>
                            <div className='flex justify-between mt-8'>
                                <p>publié le {new Date(post.created_at).toLocaleDateString('fr-FR')}</p>
                                <div className='flex items-center gap-x-2'>
                                    <p>partager sur :</p>
                                    <span className='w-7 h-7 rounded-full bg-rose_category relative cursor-pointer'>
                                        <Instagram size={16} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                    </span>
                                    <span className='w-7 h-7 rounded-full bg-rose_category relative cursor-pointer'>
                                        <Facebook size={16} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                    </span>
                                    <span className='w-7 h-7 rounded-full bg-rose_category relative cursor-pointer'>
                                        <Linkedin size={16} className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                    </span>
                                </div>
                            </div>
                            <div className='mt-12 p-3 border-[1px] border-bleu rounded-md flex items-center gap-x-4'>
                                {(users_role && users_role.find(user => user.id === post.user_id).roles[0].name) === "user" ? 
                                    <div className='rounded-full w-12 h-12 bg-bleu'></div>
                                : 
                                    <div className='rounded-full w-12 h-12 bg-bleu relative'>
                                        <div className='rounded-full w-6 h-6 bg-yellow-500 absolute right-0 top-0'></div>
                                    </div>
                                 }
                                <p className='font-semibold'>{users && users.find(user => user.id === post.user_id).name}</p>
                                <span className='w-2 h-2 rounded-full bg-noir'></span>
                                {(users_role && users_role.find(user => user.id === post.user_id).roles[0].name) === "user" ?
                                <p className='text-sm font-light'>Utilisateur particulier</p>
                                : <p className='text-sm font-light'>Professionnel de santé ou de l'éducation</p>
                                }
                            </div>
                            <div className='mt-8 mb-4'>
                                <p className=''>{post.content}</p>
                            </div>

                            <div className='mt-8'>
                                <div className='flex justify-between mb-5'>
                                    <h3 className='text-noir text-[1.6rem] font-semibold'>Commentaires</h3>
                                    <div className='px-4 py-1 bg-bleu rounded-md cursor-pointer flex items-center' onClick={openCommentCreation}>
                                        <Plus className='text-white' />
                                    </div>
                                </div>
                                <div>
                                    {comments && comments.filter(comment => comment.post_id === post.id).sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(comment => (
                                        <div key={comment.id} className='border-[1px] border-bleu rounded-md p-3 mb-4'>
                                            <div className='flex items-center gap-x-3 border-b-[1px] border-bleu pb-3'>
                                                {(users_role && users_role.find(user => user.id === post.user_id).roles[0].name) === "user" ? 
                                                    <div className='rounded-full w-12 h-12 bg-bleu'></div>
                                                : 
                                                    <div className='rounded-full w-12 h-12 bg-bleu relative'>
                                                        <div className='rounded-full w-6 h-6 bg-yellow-500 absolute right-0 top-0'></div>
                                                    </div>
                                                }
                                                <div className=''>
                                                    <p className='font-semibold'>{users && users.find(user => user.id === comment.user_id).name}</p>
                                                    <p className='text-bleu text-[.7em]'>Il y a {daysDiff(comment.created_at)} jours</p>
                                                </div>
                                            </div>
                                            <div className='pt-3'>
                                                <p>{comment.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Modal show={showModal} onClose={closeCommentCreation} maxWidth='add'>
                                <div className='p-5'>
                                    <h3 className='text-noir text-[1.6rem] font-semibold mb-5'>Rédiger un commentaire</h3>
                                    <form method='POST' onSubmit={(e) => handleSubmit(e)} className='flex gap-4 flex-col'>
                                        <div className='flex flex-col'>
                                            <label htmlFor="content" className='text-noir'>Commentaire</label>
                                            <textarea className='h-[15vw] resize-none rounded-md border-bleu focus:border-none' name="content" id="content" placeholder="Rédiger votre commentaire ici ..."></textarea>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div onClick={closeCommentCreation} className='bg-transparent border-bleu border-2 px-4 py-1 rounded-md cursor-pointer uppercase font-semibold text-xs flex items-center hover:bg-bleu/5 transition ease-in-out duration-150 text-bleu'>
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
                    )}
                </div>  
            </div>
            <Footer />
        </>
    )
}